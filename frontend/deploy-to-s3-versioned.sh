#!/bin/bash

# Cranbourne Eagles Basketball Club - S3 Versioned Deployment Script
# This script deploys the React app to AWS S3 with version management
# Deployments go to both /vX/ and /latest/ folders

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration - UPDATE THESE VALUES
BUCKET_NAME="cranbourne-eagles-basketball"  # Change this to your desired bucket name
REGION="us-east-1"  # Change to your preferred AWS region
PROFILE="default"  # Change if using a specific AWS profile

# Version tracking file
VERSION_FILE="versions.json"
DEPLOY_TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
GIT_COMMIT=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")

echo -e "${GREEN}=== Cranbourne Eagles Basketball - Versioned S3 Deployment ===${NC}\n"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    echo "Please install AWS CLI: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity --profile $PROFILE &> /dev/null; then
    echo -e "${RED}Error: AWS credentials not configured${NC}"
    echo "Run: aws configure --profile $PROFILE"
    exit 1
fi

echo -e "${GREEN}✓ AWS CLI configured${NC}\n"

# Function to get current version from S3
get_current_version() {
    if aws s3 ls "s3://$BUCKET_NAME/$VERSION_FILE" --profile $PROFILE &> /dev/null; then
        aws s3 cp "s3://$BUCKET_NAME/$VERSION_FILE" /tmp/$VERSION_FILE --profile $PROFILE --quiet
        VERSION=$(cat /tmp/$VERSION_FILE | grep -o '"current_version":[^,]*' | grep -o '[0-9]*' || echo "0")
        echo $VERSION
    else
        echo "0"
    fi
}

# Function to update version tracking file
update_version_file() {
    local VERSION=$1
    cat > /tmp/$VERSION_FILE <<EOF
{
  "current_version": $VERSION,
  "latest_deployment": {
    "version": $VERSION,
    "timestamp": "$DEPLOY_TIMESTAMP",
    "git_commit": "$GIT_COMMIT"
  },
  "versions": [
EOF

    # Get existing versions if file exists
    if aws s3 ls "s3://$BUCKET_NAME/$VERSION_FILE" --profile $PROFILE &> /dev/null; then
        aws s3 cp "s3://$BUCKET_NAME/$VERSION_FILE" /tmp/${VERSION_FILE}.old --profile $PROFILE --quiet
        # Extract and append existing versions
        if [ -f /tmp/${VERSION_FILE}.old ]; then
            EXISTING_VERSIONS=$(cat /tmp/${VERSION_FILE}.old | sed -n '/"versions":/,/]/p' | grep -A 3 '"version":' | sed '/"versions":/d' || echo "")
            if [ ! -z "$EXISTING_VERSIONS" ]; then
                echo "$EXISTING_VERSIONS" >> /tmp/$VERSION_FILE
                echo "," >> /tmp/$VERSION_FILE
            fi
        fi
    fi

    # Add new version entry
    cat >> /tmp/$VERSION_FILE <<EOF
    {
      "version": $VERSION,
      "timestamp": "$DEPLOY_TIMESTAMP",
      "git_commit": "$GIT_COMMIT",
      "path": "/v$VERSION/"
    }
  ]
}
EOF
}

# Step 1: Build the React app
echo -e "${YELLOW}Step 1: Building React app...${NC}"
npm run build
echo -e "${GREEN}✓ Build completed${NC}\n"

# Step 2: Create S3 bucket (if needed)
echo -e "${YELLOW}Step 2: Checking S3 bucket...${NC}"
if aws s3 ls "s3://$BUCKET_NAME" --profile $PROFILE 2>&1 | grep -q 'NoSuchBucket'; then
    aws s3 mb "s3://$BUCKET_NAME" --region $REGION --profile $PROFILE
    echo -e "${GREEN}✓ Bucket created: $BUCKET_NAME${NC}\n"
else
    echo -e "${GREEN}✓ Bucket already exists: $BUCKET_NAME${NC}\n"
fi

# Step 3: Enable static website hosting
echo -e "${YELLOW}Step 3: Configuring static website hosting...${NC}"
aws s3 website "s3://$BUCKET_NAME" \
    --index-document index.html \
    --error-document index.html \
    --profile $PROFILE
echo -e "${GREEN}✓ Static website hosting enabled${NC}\n"

# Step 4: Apply bucket policy for public read access
echo -e "${YELLOW}Step 4: Applying bucket policy...${NC}"
cat > /tmp/bucket-policy.json <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
    }
  ]
}
EOF

aws s3api put-bucket-policy \
    --bucket $BUCKET_NAME \
    --policy file:///tmp/bucket-policy.json \
    --profile $PROFILE
echo -e "${GREEN}✓ Bucket policy applied${NC}\n"

# Step 5: Configure public access
echo -e "${YELLOW}Step 5: Configuring public access settings...${NC}"
aws s3api put-public-access-block \
    --bucket $BUCKET_NAME \
    --public-access-block-configuration \
    "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false" \
    --profile $PROFILE
echo -e "${GREEN}✓ Public access configured${NC}\n"

# Step 6: Determine version number
echo -e "${YELLOW}Step 6: Determining version number...${NC}"
CURRENT_VERSION=$(get_current_version)
NEW_VERSION=$((CURRENT_VERSION + 1))
echo -e "${BLUE}Current version: v$CURRENT_VERSION${NC}"
echo -e "${BLUE}New version: v$NEW_VERSION${NC}\n"

# Step 7: Upload to versioned folder (e.g., /v1/, /v2/, /v3/)
echo -e "${YELLOW}Step 7: Uploading to version folder (v$NEW_VERSION)...${NC}"
aws s3 sync build/ "s3://$BUCKET_NAME/v$NEW_VERSION/" \
    --cache-control "public, max-age=31536000" \
    --exclude "index.html" \
    --profile $PROFILE

# Upload index.html with no-cache
aws s3 cp build/index.html "s3://$BUCKET_NAME/v$NEW_VERSION/index.html" \
    --cache-control "no-cache" \
    --content-type "text/html" \
    --profile $PROFILE
echo -e "${GREEN}✓ Version v$NEW_VERSION deployed${NC}\n"

# Step 8: Upload to /latest/ folder
echo -e "${YELLOW}Step 8: Updating /latest/ folder...${NC}"
aws s3 sync build/ "s3://$BUCKET_NAME/latest/" \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "index.html" \
    --profile $PROFILE

# Upload index.html with no-cache
aws s3 cp build/index.html "s3://$BUCKET_NAME/latest/index.html" \
    --cache-control "no-cache" \
    --content-type "text/html" \
    --profile $PROFILE
echo -e "${GREEN}✓ Latest version updated${NC}\n"

# Step 9: Set correct content types
echo -e "${YELLOW}Step 9: Setting content types...${NC}"

# Set content types for versioned folder
for CONTENT_TYPE_PATH in "v$NEW_VERSION" "latest"; do
    aws s3 cp "s3://$BUCKET_NAME/$CONTENT_TYPE_PATH/" "s3://$BUCKET_NAME/$CONTENT_TYPE_PATH/" \
        --exclude "*" \
        --include "*.html" \
        --content-type "text/html" \
        --metadata-directive REPLACE \
        --recursive \
        --profile $PROFILE \
        --quiet

    aws s3 cp "s3://$BUCKET_NAME/$CONTENT_TYPE_PATH/" "s3://$BUCKET_NAME/$CONTENT_TYPE_PATH/" \
        --exclude "*" \
        --include "*.css" \
        --content-type "text/css" \
        --metadata-directive REPLACE \
        --recursive \
        --profile $PROFILE \
        --quiet

    aws s3 cp "s3://$BUCKET_NAME/$CONTENT_TYPE_PATH/" "s3://$BUCKET_NAME/$CONTENT_TYPE_PATH/" \
        --exclude "*" \
        --include "*.js" \
        --content-type "application/javascript" \
        --metadata-directive REPLACE \
        --recursive \
        --profile $PROFILE \
        --quiet
done
echo -e "${GREEN}✓ Content types set${NC}\n"

# Step 10: Update version tracking file
echo -e "${YELLOW}Step 10: Updating version tracking...${NC}"
update_version_file $NEW_VERSION
aws s3 cp /tmp/$VERSION_FILE "s3://$BUCKET_NAME/$VERSION_FILE" \
    --content-type "application/json" \
    --cache-control "no-cache" \
    --profile $PROFILE
echo -e "${GREEN}✓ Version tracking updated${NC}\n"

# Get website URLs
WEBSITE_BASE="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
LATEST_URL="$WEBSITE_BASE/latest/"
VERSION_URL="$WEBSITE_BASE/v$NEW_VERSION/"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✓ Deployment completed successfully!${NC}"
echo -e "${GREEN}========================================${NC}\n"
echo -e "${BLUE}Version Information:${NC}"
echo -e "  Version: ${YELLOW}v$NEW_VERSION${NC}"
echo -e "  Git Commit: ${YELLOW}$GIT_COMMIT${NC}"
echo -e "  Timestamp: ${YELLOW}$DEPLOY_TIMESTAMP${NC}\n"
echo -e "${BLUE}Access URLs:${NC}"
echo -e "  Latest:  ${YELLOW}$LATEST_URL${NC}"
echo -e "  Version: ${YELLOW}$VERSION_URL${NC}\n"
echo -e "${BLUE}Previous versions are still available:${NC}"
for i in $(seq 1 $CURRENT_VERSION); do
    echo -e "  v$i: ${YELLOW}$WEBSITE_BASE/v$i/${NC}"
done
echo ""
echo -e "${YELLOW}Note: It may take a few minutes for changes to propagate.${NC}\n"

# List all deployed versions
echo -e "${BLUE}All deployed versions:${NC}"
aws s3 ls "s3://$BUCKET_NAME/" --profile $PROFILE | grep PRE | grep -E "v[0-9]+|latest" | awk '{print "  - " $2}' | sed 's/\///'

echo ""
