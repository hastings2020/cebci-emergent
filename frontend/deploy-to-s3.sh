#!/bin/bash

# Cranbourne Eagles Basketball Club - S3 Deployment Script
# This script deploys the React app to AWS S3 as a static website

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration - UPDATE THESE VALUES
BUCKET_NAME="cranbourne-eagles-basketball"  # Change this to your desired bucket name
REGION="us-east-1"  # Change to your preferred AWS region
PROFILE="default"  # Change if using a specific AWS profile

echo -e "${GREEN}=== Cranbourne Eagles Basketball - S3 Deployment ===${NC}\n"

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

# Step 1: Build the React app
echo -e "${YELLOW}Step 1: Building React app...${NC}"
# Build with absolute paths for root deployment
npm run build
echo -e "${GREEN}✓ Build completed${NC}\n"

# Step 2: Create S3 bucket
echo -e "${YELLOW}Step 2: Creating S3 bucket...${NC}"
if aws s3 ls "s3://$BUCKET_NAME" --profile $PROFILE 2>&1 | grep -q 'NoSuchBucket'; then
    aws s3 mb "s3://$BUCKET_NAME" --region $REGION --profile $PROFILE
    echo -e "${GREEN}✓ Bucket created: $BUCKET_NAME${NC}\n"
else
    echo -e "${GREEN}✓ Bucket already exists: $BUCKET_NAME${NC}\n"
fi

# Step 3: Enable static website hosting
echo -e "${YELLOW}Step 3: Enabling static website hosting...${NC}"
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

# Step 5: Disable Block Public Access (required for public website)
echo -e "${YELLOW}Step 5: Configuring public access settings...${NC}"
aws s3api put-public-access-block \
    --bucket $BUCKET_NAME \
    --public-access-block-configuration \
    "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false" \
    --profile $PROFILE
echo -e "${GREEN}✓ Public access configured${NC}\n"

# Step 6: Upload files to S3
echo -e "${YELLOW}Step 6: Uploading files to S3...${NC}"
aws s3 sync build/ "s3://$BUCKET_NAME" \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "index.html" \
    --profile $PROFILE

# Upload index.html separately with no-cache (for SPA routing)
aws s3 cp build/index.html "s3://$BUCKET_NAME/index.html" \
    --cache-control "no-cache" \
    --profile $PROFILE
echo -e "${GREEN}✓ Files uploaded${NC}\n"

# Step 7: Set correct content types for key files
echo -e "${YELLOW}Step 7: Setting content types...${NC}"
aws s3 cp "s3://$BUCKET_NAME/" "s3://$BUCKET_NAME/" \
    --exclude "*" \
    --include "*.html" \
    --content-type "text/html" \
    --metadata-directive REPLACE \
    --recursive \
    --profile $PROFILE

aws s3 cp "s3://$BUCKET_NAME/" "s3://$BUCKET_NAME/" \
    --exclude "*" \
    --include "*.css" \
    --content-type "text/css" \
    --metadata-directive REPLACE \
    --recursive \
    --profile $PROFILE

aws s3 cp "s3://$BUCKET_NAME/" "s3://$BUCKET_NAME/" \
    --exclude "*" \
    --include "*.js" \
    --content-type "application/javascript" \
    --metadata-directive REPLACE \
    --recursive \
    --profile $PROFILE
echo -e "${GREEN}✓ Content types set${NC}\n"

# Get website URL
WEBSITE_URL="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✓ Deployment completed successfully!${NC}"
echo -e "${GREEN}========================================${NC}\n"
echo -e "Website URL: ${YELLOW}$WEBSITE_URL${NC}\n"
echo -e "${YELLOW}Note: It may take a few minutes for changes to propagate.${NC}\n"

# Optional: Output CloudFront instructions
echo -e "${YELLOW}Optional Next Steps:${NC}"
echo "1. Set up CloudFront CDN for HTTPS and better performance"
echo "2. Configure custom domain with Route53"
echo "3. Enable CloudFront with ACM SSL certificate"
echo ""
