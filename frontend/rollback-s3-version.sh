#!/bin/bash

# Cranbourne Eagles Basketball Club - S3 Rollback Script
# This script rolls back the /latest/ folder to a previous version

set -e  # Exit on error

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

echo -e "${GREEN}=== Cranbourne Eagles Basketball - S3 Rollback ===${NC}\n"

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

# List available versions
echo -e "${BLUE}Available versions:${NC}"
aws s3 ls "s3://$BUCKET_NAME/" --profile $PROFILE | grep PRE | grep -E "v[0-9]+" | awk '{print $2}' | sed 's/\///' | sort -V

echo ""

# Get version to rollback to
if [ -z "$1" ]; then
    echo -e "${YELLOW}Usage: $0 <version_number>${NC}"
    echo -e "${YELLOW}Example: $0 2${NC}"
    echo -e "${YELLOW}This will rollback /latest/ to v2${NC}"
    exit 1
fi

TARGET_VERSION=$1
VERSION_PATH="v$TARGET_VERSION"

# Check if version exists
if ! aws s3 ls "s3://$BUCKET_NAME/$VERSION_PATH/" --profile $PROFILE &> /dev/null; then
    echo -e "${RED}Error: Version $VERSION_PATH does not exist${NC}"
    exit 1
fi

echo -e "${YELLOW}Rolling back to version: $VERSION_PATH${NC}"
echo -e "${YELLOW}This will update /latest/ to match /$VERSION_PATH/${NC}"
read -p "Continue? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}Rollback cancelled${NC}"
    exit 1
fi

# Sync version to /latest/
echo -e "${BLUE}Syncing $VERSION_PATH to /latest/...${NC}"
aws s3 sync "s3://$BUCKET_NAME/$VERSION_PATH/" "s3://$BUCKET_NAME/latest/" \
    --delete \
    --profile $PROFILE

echo -e "${GREEN}✓ Rollback completed successfully!${NC}\n"

WEBSITE_URL="http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com/latest/"
echo -e "${BLUE}Latest URL now points to version $TARGET_VERSION:${NC}"
echo -e "${YELLOW}$WEBSITE_URL${NC}\n"
