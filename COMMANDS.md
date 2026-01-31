# Railway Deployment Commands

## One-Time Setup

### 1. Install Railway CLI (Optional)
```powershell
npm install -g @railway/cli
```

### 2. Login to Railway
```powershell
railway login
```

### 3. Initialize Project
```powershell
# In your project directory
cd c:\Users\maung\OneDrive\Documents\AVM

# Link to Railway project (after creating it in dashboard)
railway link
```

## Deployment Commands

### Deploy from Local Machine
```powershell
# Deploy current code to Railway
railway up
```

### Run Database Migrations
```powershell
# After first deployment, run migrations
railway run npx prisma migrate deploy
```

### View Logs
```powershell
# Watch deployment logs
railway logs
```

### Open in Browser
```powershell
# Open deployed site
railway open
```

### Check Environment Variables
```powershell
# List all variables
railway variables

# Set a variable
railway variables set KEY=VALUE
```

## Development Commands

### Local Development
```powershell
# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Run migrations locally
npx prisma migrate dev --name init

# Start dev server
npm run dev
```

### Database Management
```powershell
# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Check migration status
npx prisma migrate status
```

### Build & Test
```powershell
# Build for production
npm run build

# Start production server locally
npm start

# Lint code
npm run lint
```

## Useful Railway CLI Commands

### Project Management
```powershell
# List all projects
railway list

# Switch project
railway link <project-id>

# Get project info
railway status
```

### Environment Management
```powershell
# Connect to database shell
railway connect postgres

# Run commands in Railway environment
railway run <command>

# Example: Run Prisma Studio on Railway database
railway run npx prisma studio
```

### Domain Management
```powershell
# Add custom domain
railway domain

# Generate Railway subdomain
railway domain
```

## Git Commands (if using GitHub)

### Initial Setup
```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - AVM Packaging website"

# Add remote repository
git remote add origin https://github.com/your-username/avm-packaging.git

# Push to GitHub
git push -u origin main
```

### Regular Updates
```powershell
# Add changes
git add .

# Commit with message
git commit -m "Update: description of changes"

# Push to GitHub (triggers auto-deploy on Railway)
git push
```

## Troubleshooting Commands

### Clear Build Cache
```powershell
# Delete .next folder
Remove-Item -Recurse -Force .next

# Rebuild
npm run build
```

### Reset Prisma
```powershell
# Regenerate Prisma Client
npx prisma generate

# Push schema to database without migrations
npx prisma db push
```

### Check Node/NPM Versions
```powershell
node --version    # Should be 18+
npm --version     # Should be 9+
```

## Environment Variable Setup (PowerShell)

### For Local Development
Create a `.env` file:
```powershell
# Create .env from example
Copy-Item .env.example .env

# Edit in VS Code
code .env
```

Required variables:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/avm_crating"
RESEND_API_KEY="re_xxxxxxxxxxxxx"
ADMIN_EMAIL="your@email.com"
ADMIN_PASSWORD="secure_password"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_COMPANY_PHONE="(XXX) XXX-XXXX"
NEXT_PUBLIC_COMPANY_EMAIL="info@avmpackaging.com"
```

### For Railway (via Dashboard)
1. Go to Railway project → Variables
2. Click "New Variable"
3. Add each variable one by one

Or via CLI:
```powershell
railway variables set RESEND_API_KEY="re_xxxxx"
railway variables set ADMIN_EMAIL="your@email.com"
railway variables set ADMIN_PASSWORD="secure_password"
railway variables set NEXT_PUBLIC_SITE_URL="https://your-app.railway.app"
railway variables set NEXT_PUBLIC_COMPANY_PHONE="(XXX) XXX-XXXX"
railway variables set NEXT_PUBLIC_COMPANY_EMAIL="info@avmpackaging.com"
```

## Quick Reference

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Deploy to Railway | `railway up` |
| View Railway logs | `railway logs` |
| Run migrations | `railway run npx prisma migrate deploy` |
| Open Prisma Studio | `npx prisma studio` |
| Open deployed site | `railway open` |
| Check environment | `railway variables` |

## Complete First-Time Deployment Flow

```powershell
# 1. Navigate to project
cd c:\Users\maung\OneDrive\Documents\AVM

# 2. Install dependencies
npm install

# 3. Set up local environment
Copy-Item .env.example .env
# Edit .env with your values

# 4. Generate Prisma Client
npx prisma generate

# 5. Test locally
npm run dev
# Visit http://localhost:3000

# 6. Build to verify
npm run build

# 7. Initialize git
git init
git add .
git commit -m "Initial commit"

# 8. Create GitHub repo and push
git remote add origin <your-repo-url>
git push -u origin main

# 9. Deploy to Railway (via dashboard or CLI)
# Via Dashboard: Connect GitHub repo
# Via CLI:
railway login
railway init
railway up

# 10. Add PostgreSQL to Railway project
# Via Dashboard: + New → Database → PostgreSQL

# 11. Set environment variables in Railway
# Via Dashboard or:
railway variables set RESEND_API_KEY="..."
# ... (add all variables)

# 12. Run migrations on Railway
railway run npx prisma migrate deploy

# 13. Open your deployed site!
railway open
```

## Monitoring & Maintenance

### Check Deployment Status
```powershell
railway status
```

### View Recent Logs
```powershell
railway logs --tail
```

### Connect to Production Database
```powershell
railway run npx prisma studio
```

### Export Production Data
```powershell
railway run npx prisma db pull
```

---

**Need Help?**
- Railway Docs: https://docs.railway.app
- Prisma Docs: https://www.prisma.io/docs
- Next.js Docs: https://nextjs.org/docs

**Common Ports:**
- Dev server: http://localhost:3000
- Prisma Studio: http://localhost:5555

**Important Files:**
- Environment: `.env` (local) or Railway Variables (production)
- Database schema: `prisma/schema.prisma`
- Main config: `next.config.js`
