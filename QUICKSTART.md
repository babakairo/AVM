# Quick Start Guide - AVM Packaging Website

## 🚀 Getting Started Locally (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
```bash
# Copy example env file
cp .env.example .env

# Edit .env and add at minimum:
# - DATABASE_URL (PostgreSQL connection string)
# - ADMIN_PASSWORD (for admin panel access)
```

### 3. Setup Database
```bash
# Generate Prisma client
npx prisma generate

# Create database tables
npx prisma migrate dev --name init
```

### 4. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## 🌐 Deploy to Railway (10 minutes)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Railway Setup
1. Go to [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Select your repo
4. Add PostgreSQL: "+ New" → "Database" → "PostgreSQL"

### 3. Set Environment Variables
In Railway project settings, add:
```
RESEND_API_KEY=<your-key>
ADMIN_EMAIL=<your-email>
ADMIN_PASSWORD=<secure-password>
NEXT_PUBLIC_ADMIN_PASSWORD=<same-password>
NEXT_PUBLIC_SITE_URL=https://<your-app>.railway.app
NEXT_PUBLIC_COMPANY_PHONE=(XXX) XXX-XXXX
NEXT_PUBLIC_COMPANY_EMAIL=info@avmpackaging.com
```

### 4. Deploy Database
After first deploy, run migrations:
```bash
railway run npx prisma migrate deploy
```

### 5. Done! 🎉
Your site is live at: `https://<your-app>.railway.app`

## 📱 Test Your Site

1. **Quote Form**: Visit `/quote` and submit a test request
2. **Admin Panel**: Visit `/admin/leads` (password from .env)
3. **Check Email**: Verify notification email arrived

## 🔧 Common Issues

**Database connection failed?**
```bash
# Verify DATABASE_URL is set
railway variables

# Run migrations
railway run npx prisma migrate deploy
```

**Emails not sending?**
- Get free API key at [resend.com](https://resend.com)
- Add to Railway environment variables
- Verify sender domain in Resend dashboard

**Admin login not working?**
- Ensure both `ADMIN_PASSWORD` and `NEXT_PUBLIC_ADMIN_PASSWORD` are set
- They must have the same value

## 📞 Need Help?

Check the full README.md for detailed instructions.
