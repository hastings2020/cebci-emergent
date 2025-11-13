# Quick Deployment Guide

## 🚀 Deploy in 3 Steps

### 1. Configure AWS CLI (One-time setup)
```bash
aws configure
```
Enter:
- AWS Access Key ID
- AWS Secret Access Key
- Region (e.g., us-east-1)
- Output format: json

### 2. Edit Deployment Script
```bash
nano deploy-to-s3.sh
```
Update these lines:
```bash
BUCKET_NAME="cranbourne-eagles-basketball"  # Choose unique name
REGION="us-east-1"                          # Your AWS region
PROFILE="default"                           # Your AWS profile
```

### 3. Run Deployment
```bash
chmod +x deploy-to-s3.sh
./deploy-to-s3.sh
```

## ✅ Done!

Your website will be live at:
```
http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com
```

## 📝 Common Bucket Names

Choose a globally unique name:
- `cranbourne-eagles-bball`
- `cranbourne-eagles-basketball-club`
- `cebci-website`
- `cranbourne-basketball`

## 🌍 Common Regions

- `us-east-1` - US East (N. Virginia) - Cheapest
- `us-west-2` - US West (Oregon)
- `ap-southeast-2` - Asia Pacific (Sydney) - Closest to Australia
- `ap-southeast-1` - Asia Pacific (Singapore)
- `eu-west-1` - Europe (Ireland)

## 🔄 Update Website

After making changes:
```bash
./deploy-to-s3.sh
```

## 💰 Estimated Cost

~$1-3 per month for low traffic

## 🔒 Add HTTPS Later

For custom domain with HTTPS:
1. Set up CloudFront
2. Get free SSL certificate (ACM)
3. Configure Route53

See `AWS-DEPLOYMENT-GUIDE.md` for details.
