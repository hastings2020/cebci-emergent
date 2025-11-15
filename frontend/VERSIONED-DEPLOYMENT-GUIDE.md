# Versioned S3 Deployment Guide

This guide explains how to deploy the Cranbourne Eagles Basketball Club website with version management, allowing you to maintain multiple versions and easily rollback if needed.

## 🎯 Overview

The versioned deployment system provides:

- **Multiple Versions**: Each deployment creates a new version (v1, v2, v3, etc.)
- **Latest Pointer**: `/latest/` always points to the most recent deployment
- **Version History**: All previous versions are retained
- **Easy Rollback**: Quickly revert to any previous version
- **Version Tracking**: JSON file tracks deployment metadata

## 📁 URL Structure

After deployment, your site will be accessible at:

```
http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com/latest/
http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com/v1/
http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com/v2/
http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com/v3/
```

### Example URLs

If your bucket is `cranbourne-eagles-basketball` in `us-east-1`:

- Latest: `http://cranbourne-eagles-basketball.s3-website-us-east-1.amazonaws.com/latest/`
- Version 3: `http://cranbourne-eagles-basketball.s3-website-us-east-1.amazonaws.com/v3/`
- Version 2: `http://cranbourne-eagles-basketball.s3-website-us-east-1.amazonaws.com/v2/`

## 🚀 Quick Start

### 1. Configure AWS CLI (One-time)

```bash
aws configure
```

### 2. Edit Configuration

Update these values in `deploy-to-s3-versioned.sh`:

```bash
BUCKET_NAME="cranbourne-eagles-basketball"  # Your bucket name
REGION="us-east-1"                          # Your AWS region
PROFILE="default"                           # Your AWS profile
```

### 3. Deploy New Version

```bash
chmod +x deploy-to-s3-versioned.sh
./deploy-to-s3-versioned.sh
```

This will:
- Build the React app
- Create version folder (e.g., `/v1/`, `/v2/`, `/v3/`)
- Update `/latest/` to point to new version
- Track version metadata
- Keep all previous versions

## 📊 Version Management

### List All Versions

```bash
chmod +x list-s3-versions.sh
./list-s3-versions.sh
```

Output example:
```
=== Deployed Versions ===

All deployed versions:

  ✓ latest (current) - http://bucket.s3-website-us-east-1.amazonaws.com/latest/
  v1 - http://bucket.s3-website-us-east-1.amazonaws.com/v1/
  v2 - http://bucket.s3-website-us-east-1.amazonaws.com/v2/
  v3 - http://bucket.s3-website-us-east-1.amazonaws.com/v3/
```

### Rollback to Previous Version

```bash
chmod +x rollback-s3-version.sh
./rollback-s3-version.sh <version_number>
```

Example - Rollback to version 2:
```bash
./rollback-s3-version.sh 2
```

This updates `/latest/` to match `/v2/` without deleting any versions.

## 📝 Version Tracking

The system maintains a `versions.json` file in your S3 bucket with deployment metadata:

```json
{
  "current_version": 3,
  "latest_deployment": {
    "version": 3,
    "timestamp": "2025-11-15T10:30:45Z",
    "git_commit": "89c76e1"
  },
  "versions": [
    {
      "version": 1,
      "timestamp": "2025-11-15T08:00:00Z",
      "git_commit": "23ce302",
      "path": "/v1/"
    },
    {
      "version": 2,
      "timestamp": "2025-11-15T09:15:30Z",
      "git_commit": "93ec892",
      "path": "/v2/"
    },
    {
      "version": 3,
      "timestamp": "2025-11-15T10:30:45Z",
      "git_commit": "89c76e1",
      "path": "/v3/"
    }
  ]
}
```

## 🔄 Deployment Workflow

### Typical Workflow

1. **Make changes** to your code
2. **Commit** to git
3. **Deploy new version**:
   ```bash
   ./deploy-to-s3-versioned.sh
   ```
4. **Test** the new version at `/latest/`
5. If issues found, **rollback**:
   ```bash
   ./rollback-s3-version.sh 2
   ```

### What Happens on Deployment

```
Step 1: Build React app → Creates optimized build/
Step 2: Check S3 bucket → Creates if doesn't exist
Step 3: Configure hosting → Sets up static website
Step 4: Apply policies → Enables public read access
Step 5: Configure access → Allows public access
Step 6: Determine version → Reads current version, increments
Step 7: Upload to /vX/ → Deploys to new version folder
Step 8: Update /latest/ → Syncs to latest folder
Step 9: Set content types → Ensures proper MIME types
Step 10: Update tracking → Saves version metadata
```

## 📂 S3 Bucket Structure

After multiple deployments:

```
s3://your-bucket/
├── latest/                    ← Always points to newest version
│   ├── index.html
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── media/
│   └── ...
├── v1/                        ← First deployment
│   ├── index.html
│   └── ...
├── v2/                        ← Second deployment
│   ├── index.html
│   └── ...
├── v3/                        ← Third deployment
│   ├── index.html
│   └── ...
└── versions.json              ← Version tracking metadata
```

## 💡 Use Cases

### Production Setup

```bash
# Deploy to production
BUCKET_NAME="cranbourne-eagles-prod"
REGION="ap-southeast-2"
./deploy-to-s3-versioned.sh
```

Use `/latest/` for your main domain/CloudFront distribution.

### Testing & Staging

```bash
# Keep version URLs for testing
# Share v4 with testers: http://bucket.../v4/
# Production still on v3: http://bucket.../latest/
```

### A/B Testing

```bash
# Production uses /latest/ (v3)
# Test new features on /v4/ with subset of users
# If successful, deploy v5 (copies v4 features)
```

### Gradual Rollout

```bash
# Day 1: Deploy v4, test internally at /v4/
# Day 2: Update /latest/ to v4 for all users
# Day 3: If issues, rollback to v3
```

## ⚠️ Important Notes

### Cache Control

- Version folders (`/v1/`, `/v2/`): Long cache (1 year)
- Latest folder: Short cache (configurable)
- `index.html`: No cache (ensures routing works)

### Cleanup Old Versions

Versions are kept indefinitely. To delete old versions:

```bash
# Delete a specific version
aws s3 rm s3://your-bucket/v1/ --recursive --profile default

# Keep only last 5 versions (manual cleanup)
# List versions, identify old ones, delete manually
```

### Storage Costs

Each version consumes storage. Typical costs:

- Build size: ~2 MB
- 10 versions: ~20 MB
- Cost: ~$0.50/month for 10 versions

## 🔧 Advanced Configuration

### Custom Cache Control

Edit `deploy-to-s3-versioned.sh` to adjust cache times:

```bash
# For shorter cache on versioned folders
--cache-control "public, max-age=3600"  # 1 hour instead of 1 year

# For latest folder
--cache-control "public, max-age=300"   # 5 minutes
```

### CloudFront Integration

Point CloudFront to `/latest/` folder:

```bash
# Origin Path in CloudFront: /latest
# This ensures CloudFront always serves the latest version
```

### Automated Deployments

Integrate with CI/CD:

```bash
# GitHub Actions example
- name: Deploy to S3
  run: |
    cd frontend
    ./deploy-to-s3-versioned.sh
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

## 📋 Scripts Overview

### deploy-to-s3-versioned.sh
- Main deployment script
- Creates new version
- Updates /latest/
- Tracks metadata

### rollback-s3-version.sh
- Rollback to previous version
- Updates /latest/ only
- Keeps all versions intact

### list-s3-versions.sh
- Lists all deployed versions
- Shows URLs for each version
- Displays version tracking info

### deploy-to-s3.sh (original)
- Simple deployment without versioning
- Deploys to root of bucket
- No version management

## 🎓 Best Practices

1. **Always test new versions** at `/vX/` URL before making live
2. **Keep version tracking** - don't delete `versions.json`
3. **Use meaningful git commits** - they appear in version metadata
4. **Set up monitoring** for `/latest/` URL
5. **Document major changes** in git commits
6. **Test rollback procedure** regularly
7. **Monitor storage costs** if keeping many versions
8. **Clean up old versions** after 6-12 months

## 🆘 Troubleshooting

### Issue: Version not incrementing

**Cause**: `versions.json` may be corrupted or missing

**Solution**:
```bash
# Check versions.json
aws s3 cp s3://your-bucket/versions.json - | python3 -m json.tool

# If corrupted, delete and redeploy
aws s3 rm s3://your-bucket/versions.json
./deploy-to-s3-versioned.sh
```

### Issue: Rollback didn't work

**Cause**: Version folder may not exist

**Solution**:
```bash
# List available versions
./list-s3-versions.sh

# Rollback to existing version only
./rollback-s3-version.sh 2
```

### Issue: Changes not appearing

**Cause**: Browser cache or CloudFront cache

**Solution**:
```bash
# Hard refresh browser (Ctrl+Shift+R)
# Clear browser cache
# If using CloudFront, create invalidation
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## 🔗 Related Documentation

- `AWS-DEPLOYMENT-GUIDE.md` - Detailed S3 deployment guide
- `QUICK-DEPLOY.md` - Quick reference for deployment
- `deploy-to-s3.sh` - Simple deployment without versioning

---

**Need Help?**

For issues:
1. Check AWS CloudWatch logs
2. Verify bucket permissions
3. Ensure AWS CLI is configured correctly
4. Check `versions.json` for corruption

