# S3 Deployment Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: 404 Error on JavaScript/CSS Files (ERR_ABORTED 404)

**Symptom:**
```
GET http://bucket.../static/js/main.xxxxx.js net::ERR_ABORTED 404 (Not Found)
```

**Cause:**
The React app is built with absolute paths (assuming root `/`), but it's being served from a subdirectory like `/v1/` or `/latest/`.

**Solution:**
The versioned deployment script has been updated to build with relative paths automatically. Simply redeploy:

```bash
cd frontend
./deploy-to-s3-versioned.sh
```

**How it works:**
- The script now uses `PUBLIC_URL=. npm run build`
- This makes all asset paths relative (e.g., `./static/js/main.js` instead of `/static/js/main.js`)
- Works in any subdirectory: `/v1/`, `/latest/`, `/v2/`, etc.

**Manual Fix (if needed):**
```bash
cd frontend
PUBLIC_URL=. npm run build

# Then upload to S3
aws s3 sync build/ s3://your-bucket/v1/ --delete
```

---

### Issue 2: Blank Page After Deployment

**Symptom:**
Website loads but shows blank white page, no errors or empty pages.

**Cause:**
React Router (BrowserRouter) not configured for subdirectory deployment (/v1/, /latest/).

**Solution:**

**✅ THIS HAS BEEN FIXED!**

The app now uses `HashRouter` instead of `BrowserRouter`, which works perfectly for S3 subdirectory deployments.

**What this means:**
- URLs now use hash routing: `http://bucket.../v1/#/`
- Team pages: `http://bucket.../v1/#/team/Kareem`
- News pages: `http://bucket.../v1/#/news`
- Works in ANY subdirectory (v1, v2, latest) without configuration
- No server-side routing needed

**To fix existing deployment:**
```bash
cd frontend
./deploy-to-s3-versioned.sh
# This will create a new version with HashRouter
```

**If still seeing blank page after redeployment:**

**Step 1:** Clear browser cache
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or clear browser cache completely

**Step 2:** Check browser console for errors
- Open DevTools (F12)
- Look for errors in Console tab
- Check Network tab for failed requests

**Step 3:** Verify files deployed
```bash
aws s3 ls s3://your-bucket/latest/ --recursive
# Should see index.html and static/ folder
```

**Step 4:** Test direct URL
```bash
# Should load the page
curl http://your-bucket.s3-website-REGION.amazonaws.com/latest/
```

---

### Issue 3: React Router URLs Return 404

**Symptom:**
- Homepage works fine
- Direct navigation to `/team/Kareem` returns 404
- Clicking links works, but refreshing page gives 404

**Cause:**
S3 static website hosting doesn't support client-side routing by default.

**Solution:**

**✅ THIS HAS BEEN FIXED!**

The app now uses `HashRouter` which eliminates this issue entirely:
- Homepage: `http://bucket.../latest/#/`
- Team page: `http://bucket.../latest/#/team/Kareem`
- News page: `http://bucket.../latest/#/news/article-slug`

With hash routing:
- Everything after `#` is handled client-side
- No 404 errors on page refresh
- Works perfectly with S3 static hosting
- No server configuration needed

**Note:** URLs will have a `#` in them (e.g., `/#/team/Kareem`). This is normal for hash routing and ensures reliability across all hosting platforms.

---

### Issue 4: Changes Not Appearing After Deployment

**Symptom:**
Deployed new version, but old content still shows.

**Causes & Solutions:**

**Cause 1: Browser Cache**
```bash
# Solution: Hard refresh
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

**Cause 2: CloudFront Cache (if using CloudFront)**
```bash
# Create invalidation
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

**Cause 3: Didn't upload all files**
```bash
# Redeploy with --delete flag
./deploy-to-s3-versioned.sh
```

---

### Issue 5: Access Denied (403 Error)

**Symptom:**
```
<Error>
<Code>AccessDenied</Code>
<Message>Access Denied</Message>
</Error>
```

**Cause:**
Bucket policy not allowing public read access.

**Solution:**

**Step 1:** Check public access settings
```bash
aws s3api get-public-access-block --bucket your-bucket
```

Should show all `false` for website hosting:
```json
{
  "BlockPublicAcls": false,
  "IgnorePublicAcls": false,
  "BlockPublicPolicy": false,
  "RestrictPublicBuckets": false
}
```

**Step 2:** Apply bucket policy
```bash
cat > /tmp/policy.json <<EOF
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::your-bucket/*"
  }]
}
EOF

aws s3api put-bucket-policy --bucket your-bucket --policy file:///tmp/policy.json
```

**Step 3:** Disable block public access
```bash
aws s3api put-public-access-block \
  --bucket your-bucket \
  --public-access-block-configuration \
  "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

---

### Issue 6: Version Numbers Not Incrementing

**Symptom:**
Running deployment script multiple times creates same version number.

**Cause:**
`versions.json` file corrupted or deleted.

**Solution:**
```bash
# Check current version
aws s3 cp s3://your-bucket/versions.json - | python3 -m json.tool

# If corrupted, delete and redeploy
aws s3 rm s3://your-bucket/versions.json
./deploy-to-s3-versioned.sh
```

---

### Issue 7: Slow Loading Times

**Symptom:**
Website takes long time to load.

**Solutions:**

**Short-term:**
1. Already implemented: Deployment script sets long cache times on static assets
2. Images are already optimized with query parameters

**Long-term (recommended for production):**
1. Set up CloudFront CDN
2. Enable gzip compression
3. Use image CDN for photos

**Setup CloudFront:**
```bash
# Create CloudFront distribution pointing to S3 bucket
aws cloudfront create-distribution \
  --origin-domain-name your-bucket.s3-website-ap-southeast-2.amazonaws.com \
  --default-root-object index.html
```

---

## Quick Diagnostics

### Test if S3 website is working:
```bash
curl -I http://your-bucket.s3-website-REGION.amazonaws.com/latest/
```

Should return `HTTP/1.1 200 OK`

### Check if assets are accessible:
```bash
# List all files in latest
aws s3 ls s3://your-bucket/latest/ --recursive

# Check specific file
curl -I http://your-bucket.s3-website-REGION.amazonaws.com/latest/static/js/main.xxxxx.js
```

### Verify React Router works:
```bash
# Should return index.html content (not 404)
curl http://your-bucket.s3-website-REGION.amazonaws.com/latest/team/Kareem
```

---

## Complete Redeployment (Nuclear Option)

If all else fails, completely redeploy:

```bash
cd frontend

# Step 1: Clean build
rm -rf build node_modules
npm install
PUBLIC_URL=. npm run build

# Step 2: Delete and recreate version
aws s3 rm s3://your-bucket/latest/ --recursive
aws s3 rm s3://your-bucket/versions.json

# Step 3: Redeploy
./deploy-to-s3-versioned.sh

# Step 4: Clear browser cache
# Hard refresh in browser: Ctrl+Shift+R
```

---

## Getting Help

If issues persist:
1. Check AWS CloudWatch logs
2. Use browser DevTools Network tab to see which requests are failing
3. Verify AWS credentials and permissions
4. Check bucket exists: `aws s3 ls | grep your-bucket`

## Prevention

**Always test locally first:**
```bash
cd frontend
PUBLIC_URL=. npm run build
npx serve -s build -p 3000
# Test at http://localhost:3000
```

**Use version deployment:**
- Deploy to new version first (e.g., `/v2/`)
- Test at `http://bucket.../v2/`
- If working, it's automatically in `/latest/` too
- If not working, rollback: `./rollback-s3-version.sh 1`
