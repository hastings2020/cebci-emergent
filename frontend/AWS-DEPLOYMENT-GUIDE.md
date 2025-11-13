# AWS S3 Static Website Deployment Guide

This guide will help you deploy the Cranbourne Eagles Basketball Club website to AWS S3 as a static website.

## Prerequisites

1. **AWS Account**: You need an active AWS account
2. **AWS CLI**: Install AWS CLI on your local machine
   - Download from: https://aws.amazon.com/cli/
   - Verify installation: `aws --version`

3. **AWS Credentials**: Configure your AWS credentials
   ```bash
   aws configure
   ```
   You'll need:
   - AWS Access Key ID
   - AWS Secret Access Key
   - Default region (e.g., us-east-1, us-west-2, ap-southeast-2)
   - Output format: json

## Quick Deployment (Automated)

### Option 1: Using the Deployment Script (Recommended)

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Edit the deployment script** and update these variables at the top:
   ```bash
   nano deploy-to-s3.sh
   ```
   Update:
   - `BUCKET_NAME`: Your desired bucket name (must be globally unique)
   - `REGION`: Your AWS region (e.g., us-east-1, ap-southeast-2)
   - `PROFILE`: Your AWS CLI profile (default is "default")

3. **Make the script executable**:
   ```bash
   chmod +x deploy-to-s3.sh
   ```

4. **Run the deployment**:
   ```bash
   ./deploy-to-s3.sh
   ```

5. **Access your website**:
   The script will output your website URL:
   ```
   http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com
   ```

## Manual Deployment (Step-by-Step)

If you prefer to run commands manually:

### Step 1: Build the React App

```bash
cd frontend
npm run build
```

### Step 2: Create S3 Bucket

```bash
# Replace with your bucket name and region
BUCKET_NAME="cranbourne-eagles-basketball"
REGION="us-east-1"

aws s3 mb s3://$BUCKET_NAME --region $REGION
```

### Step 3: Enable Static Website Hosting

```bash
aws s3 website s3://$BUCKET_NAME \
  --index-document index.html \
  --error-document index.html
```

### Step 4: Configure Public Access

```bash
# Disable Block Public Access
aws s3api put-public-access-block \
  --bucket $BUCKET_NAME \
  --public-access-block-configuration \
  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

### Step 5: Apply Bucket Policy

```bash
# Create bucket policy file
cat > bucket-policy.json <<EOF
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

# Apply the policy
aws s3api put-bucket-policy \
  --bucket $BUCKET_NAME \
  --policy file://bucket-policy.json
```

### Step 6: Upload Files

```bash
# Upload all files except index.html with long cache
aws s3 sync build/ s3://$BUCKET_NAME \
  --delete \
  --cache-control "public, max-age=31536000" \
  --exclude "index.html"

# Upload index.html separately with no-cache
aws s3 cp build/index.html s3://$BUCKET_NAME/index.html \
  --cache-control "no-cache"
```

### Step 7: Get Website URL

```bash
echo "Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
```

## Update Existing Deployment

To update your website after making changes:

```bash
cd frontend
npm run build

# Sync new files
aws s3 sync build/ s3://$BUCKET_NAME --delete
```

Or simply re-run the deployment script:
```bash
./deploy-to-s3.sh
```

## Cost Estimation

S3 static website hosting is very affordable:
- **Storage**: ~$0.023 per GB/month (first 50 TB)
- **Data Transfer**: First 1 GB/month is free, then ~$0.09/GB
- **Requests**: GET requests ~$0.0004 per 1,000 requests

For a small website with moderate traffic, expect **$1-5/month**.

## Optional: Add HTTPS with CloudFront

For HTTPS and better performance, set up CloudFront:

### Step 1: Create CloudFront Distribution

```bash
aws cloudfront create-distribution \
  --origin-domain-name $BUCKET_NAME.s3-website-$REGION.amazonaws.com \
  --default-root-object index.html
```

### Step 2: Request SSL Certificate (ACM)

1. Go to AWS Certificate Manager (ACM) in **us-east-1** region
2. Request a public certificate for your domain
3. Validate via DNS or Email
4. Attach to CloudFront distribution

### Step 3: Configure Custom Domain (Route53)

1. Create hosted zone in Route53
2. Add A record (Alias) pointing to CloudFront distribution
3. Update nameservers at your domain registrar

## Optional: Custom Domain Setup

If you have a custom domain (e.g., www.cranbourneeagles.com):

1. **Purchase domain** (via Route53 or external registrar)
2. **Create Route53 hosted zone**
3. **Update bucket name** to match domain
4. **Set up CloudFront** with SSL certificate
5. **Add DNS records** pointing to CloudFront

## Troubleshooting

### Issue: 403 Forbidden Error

**Solution**: Check bucket policy and public access settings
```bash
aws s3api get-bucket-policy --bucket $BUCKET_NAME
aws s3api get-public-access-block --bucket $BUCKET_NAME
```

### Issue: 404 Not Found on Refresh

**Solution**: Ensure error document is set to `index.html` for React Router
```bash
aws s3 website s3://$BUCKET_NAME \
  --index-document index.html \
  --error-document index.html
```

### Issue: Changes Not Appearing

**Solution**:
1. Clear browser cache
2. Check CloudFront invalidation (if using CloudFront)
3. Wait a few minutes for propagation

```bash
# If using CloudFront, create invalidation
aws cloudfront create-invalidation \
  --distribution-id YOUR-DISTRIBUTION-ID \
  --paths "/*"
```

## Security Best Practices

1. **Use CloudFront** for HTTPS and DDoS protection
2. **Enable S3 versioning** for backup
3. **Set up CloudWatch alarms** for monitoring
4. **Use IAM roles** instead of access keys where possible
5. **Enable S3 access logging**

## Monitoring and Analytics

### Enable S3 Access Logging

```bash
aws s3api put-bucket-logging \
  --bucket $BUCKET_NAME \
  --bucket-logging-status file://logging.json
```

### Set up CloudWatch Metrics

Monitor:
- Request count
- Data transfer
- 4xx/5xx errors

## Useful AWS CLI Commands

```bash
# List all files in bucket
aws s3 ls s3://$BUCKET_NAME --recursive

# Check bucket size
aws s3 ls s3://$BUCKET_NAME --recursive --summarize

# Delete bucket (careful!)
aws s3 rb s3://$BUCKET_NAME --force

# View bucket website configuration
aws s3api get-bucket-website --bucket $BUCKET_NAME

# Sync only changed files
aws s3 sync build/ s3://$BUCKET_NAME --size-only
```

## Support

For issues or questions:
- AWS Documentation: https://docs.aws.amazon.com/s3/
- AWS Support: https://aws.amazon.com/support/
- React Deployment: https://create-react-app.dev/docs/deployment/

## Files Included

- `deploy-to-s3.sh` - Automated deployment script
- `s3-bucket-policy.json` - Bucket policy template
- `AWS-DEPLOYMENT-GUIDE.md` - This guide

---

**Note**: Remember to update the bucket name in all commands to match your chosen globally unique name!
