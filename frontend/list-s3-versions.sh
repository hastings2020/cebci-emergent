#!/bin/bash

# Cranbourne Eagles Basketball Club - List S3 Versions
# This script lists all deployed versions

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration - UPDATE THESE VALUES
BUCKET_NAME="cranbourne-eagles-basketball"  # Change this to your bucket name
REGION="us-east-1"  # Change to your AWS region
PROFILE="default"  # Change if using a specific AWS profile

echo -e "${GREEN}=== Deployed Versions ===${NC}\n"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity --profile $PROFILE &> /dev/null; then
    echo -e "${RED}Error: AWS credentials not configured${NC}"
    exit 1
fi

WEBSITE_BASE="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"

# List all versions
echo -e "${BLUE}All deployed versions:${NC}\n"
aws s3 ls "s3://$BUCKET_NAME/" --profile $PROFILE | grep PRE | grep -E "v[0-9]+|latest" | while read -r line; do
    FOLDER=$(echo $line | awk '{print $2}' | sed 's/\///')
    if [ "$FOLDER" = "latest" ]; then
        echo -e "  ${GREEN}✓ $FOLDER${NC} (current) - ${YELLOW}$WEBSITE_BASE/$FOLDER/${NC}"
    else
        echo -e "  $FOLDER - ${YELLOW}$WEBSITE_BASE/$FOLDER/${NC}"
    fi
done

echo ""

# Show version tracking info if available
if aws s3 ls "s3://$BUCKET_NAME/versions.json" --profile $PROFILE &> /dev/null; then
    echo -e "${BLUE}Version History:${NC}\n"
    aws s3 cp "s3://$BUCKET_NAME/versions.json" - --profile $PROFILE 2>/dev/null | python3 -m json.tool 2>/dev/null || echo "Version tracking file found but could not parse"
    echo ""
fi
