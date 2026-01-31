# Railway Deployment Checklist

## Pre-Deployment

- [ ] Code pushed to GitHub repository
- [ ] `.env.example` file is up to date
- [ ] Database schema is finalized (`prisma/schema.prisma`)

## Railway Setup

### 1. Create Project
- [ ] Login to [railway.app](https://railway.app)
- [ ] Create new project from GitHub repo
- [ ] Connect to AVM repository

### 2. Add Database
- [ ] Click "+ New" in project
- [ ] Select "Database" → "PostgreSQL"
- [ ] Wait for provisioning (automatic)
- [ ] Note: `DATABASE_URL` is auto-added to environment

### 3. Environment Variables

Add these in Railway → Project → Variables:

```env
# Email Service (get from resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxx
ADMIN_EMAIL=youremail@example.com

# Admin Panel Security
ADMIN_PASSWORD=ChooseASecurePasswordHere123!

# Public Site Info
NEXT_PUBLIC_SITE_URL=https://your-app.up.railway.app
NEXT_PUBLIC_COMPANY_NAME=AVM Packaging and Crating LLC
NEXT_PUBLIC_COMPANY_PHONE=(XXX) XXX-XXXX
NEXT_PUBLIC_COMPANY_EMAIL=info@avmpackaging.com
NEXT_PUBLIC_COMPANY_ADDRESS=429 Grove Park Dr, Locust Grove, GA 30248
```

### 4. Initial Deployment
- [ ] Wait for automatic deployment to complete
- [ ] Check deployment logs for errors

### 5. Run Database Migration

Option A - Using Railway CLI:
```bash
railway login
railway link
railway run npx prisma migrate deploy
```

Option B - Using Railway Dashboard:
- [ ] Go to Service → Settings
- [ ] Under "Deploy", edit start command:
  ```
  npx prisma migrate deploy && npm start
  ```
- [ ] Redeploy

### 6. Verification

- [ ] Visit site URL (https://your-app.up.railway.app)
- [ ] Test homepage loads
- [ ] Test quote form (`/quote`)
  - [ ] Submit test request
  - [ ] Check email received
  - [ ] Verify in admin panel (`/admin/leads`)
- [ ] Test contact form (`/contact`)
- [ ] Test all navigation links

## Custom Domain Setup

### 1. Add Domain in Railway
- [ ] Go to Service → Settings → Domains
- [ ] Click "Custom Domain"
- [ ] Enter domain (e.g., `www.avmpackaging.com`)
- [ ] Copy CNAME record details

### 2. Configure DNS
Add CNAME record at your DNS provider:
```
Type: CNAME
Name: www (or @)
Value: <your-app>.up.railway.app
TTL: 3600 (or auto)
```

Popular DNS Providers:
- **Cloudflare**: DNS → Add record
- **Namecheap**: Advanced DNS → Add record
- **GoDaddy**: DNS Management → Add record

### 3. Update Environment Variable
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your custom domain
- [ ] Redeploy if necessary

### 4. Wait for Propagation
- [ ] Wait 5-30 minutes for DNS propagation
- [ ] Test custom domain

## Email Configuration

### Setup Resend (Free Tier)
- [ ] Sign up at [resend.com](https://resend.com)
- [ ] Verify email address
- [ ] Get API key from dashboard
- [ ] Add to Railway as `RESEND_API_KEY`

### Domain Verification (Optional but Recommended)
- [ ] Add domain in Resend dashboard
- [ ] Add DNS records (TXT, DKIM)
- [ ] Update `from` email in API routes:
  - `app/api/quote/route.ts`
  - `app/api/contact/route.ts`

## Post-Deployment Testing

- [ ] Submit test quote request
- [ ] Verify email notification received
- [ ] Check lead appears in admin panel
- [ ] Test status updates in admin panel
- [ ] Submit test contact form
- [ ] Test on mobile device
- [ ] Test on different browsers

## Monitoring

- [ ] Set up Railway notifications
- [ ] Monitor email delivery in Resend dashboard
- [ ] Check Railway metrics periodically
- [ ] Review database usage

## Maintenance

### Regular Tasks
- Check leads daily: `/admin/leads`
- Monitor email quota (Resend free: 100/day, 3000/month)
- Review Railway usage (free tier has limits)

### Database Backups
Railway Pro includes automatic backups. For free tier:
```bash
# Export data periodically
railway run npx prisma db pull
```

## Troubleshooting

### Build Fails
```bash
# Check logs in Railway dashboard
# Common fix: Clear build cache
railway run npm run build
```

### Database Connection Error
```bash
# Verify DATABASE_URL is set
railway variables

# Run migrations manually
railway run npx prisma migrate deploy
```

### Emails Not Sending
- Check RESEND_API_KEY is correct
- Verify sender domain is verified
- Check email quota not exceeded
- Review Railway logs for errors

## Need Help?

- Railway Discord: [discord.gg/railway](https://discord.gg/railway)
- Railway Docs: [docs.railway.app](https://docs.railway.app)
- Resend Support: [resend.com/support](https://resend.com/support)

---

**Deployment Date**: ___________  
**Deployed By**: ___________  
**Domain**: ___________  
**Notes**: ___________
