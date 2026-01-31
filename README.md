# AVM Packaging and Crating LLC - Website

A modern, mobile-first website for AVM Packaging and Crating LLC, a wooden crating and packaging company serving Metro-Atlanta.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Lead Generation**: Quote request and contact forms with database storage
- **Admin Dashboard**: Protected admin panel to view and manage leads
- **Email Notifications**: Automatic email notifications via Resend
- **SEO Optimized**: Meta tags, OpenGraph, sitemap, robots.txt
- **Mobile-First Design**: Fully responsive with industrial/wood theme
- **Database**: PostgreSQL with Prisma ORM
- **Form Validation**: Zod schema validation

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Email**: Resend
- **Validation**: Zod
- **Deployment**: Railway (recommended)

## 🏗️ Project Structure

```
AVM/
├── app/
│   ├── (pages)/
│   │   ├── page.tsx              # Home page
│   │   ├── services/page.tsx     # Services page
│   │   ├── industries/page.tsx   # Industries page
│   │   ├── quote/page.tsx        # Quote request form
│   │   ├── about/page.tsx        # About page
│   │   └── contact/page.tsx      # Contact page
│   ├── admin/
│   │   └── leads/page.tsx        # Admin dashboard
│   ├── api/
│   │   ├── quote/route.ts        # Quote API endpoint
│   │   ├── contact/route.ts      # Contact API endpoint
│   │   └── admin/leads/route.ts  # Admin API endpoint
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── sitemap.ts                # Dynamic sitemap
│   ├── robots.ts                 # Robots.txt
│   └── manifest.ts               # PWA manifest
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── header.tsx                # Site header
│   └── footer.tsx                # Site footer
├── lib/
│   ├── prisma.ts                 # Prisma client
│   ├── utils.ts                  # Utility functions
│   └── validations.ts            # Zod schemas
├── prisma/
│   └── schema.prisma             # Database schema
├── .env.example                  # Environment variables template
└── package.json
```

## 🛠️ Local Development Setup

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Resend API key (for emails)

### Step 1: Clone and Install

```bash
cd c:\Users\maung\OneDrive\Documents\AVM
npm install
```

### Step 2: Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

```env
# Database (use Railway PostgreSQL or local)
DATABASE_URL="postgresql://user:password@localhost:5432/avm_crating?schema=public"

# Email (get free API key from resend.com)
RESEND_API_KEY="re_xxxxxxxxxxxxx"
ADMIN_EMAIL="your-email@example.com"

# Admin Panel
ADMIN_PASSWORD="your-secure-password-here"

# App Config
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_COMPANY_NAME="AVM Packaging and Crating LLC"
NEXT_PUBLIC_COMPANY_PHONE="(XXX) XXX-XXXX"
NEXT_PUBLIC_COMPANY_EMAIL="info@avmpackaging.com"
NEXT_PUBLIC_COMPANY_ADDRESS="429 Grove Park Dr, Locust Grove, GA 30248"
```

### Step 3: Database Setup

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view database
npx prisma studio
```

### Step 4: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

## 📧 Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Get your API key from the dashboard
3. Add to `.env` as `RESEND_API_KEY`
4. Verify your sending domain (or use Resend's test domain)
5. Update the `from` email in API routes to match your verified domain

**Note**: For testing, you can leave `RESEND_API_KEY` empty — forms will still save to database.

## 🚀 Deployment to Railway

Railway is recommended for easy deployment with PostgreSQL included.

### Step 1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub

### Step 2: Create New Project

```bash
# Install Railway CLI (optional)
npm install -g @railway/cli

# Login
railway login

# Create new project
railway init
```

Or use the Railway dashboard:
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Connect your GitHub account and select the AVM repo

### Step 3: Add PostgreSQL Database

1. In Railway project dashboard, click "+ New"
2. Select "Database" → "PostgreSQL"
3. Railway will automatically provision a database
4. Copy the `DATABASE_URL` from the database service variables

### Step 4: Configure Environment Variables

In Railway project → Variables tab, add:

```env
DATABASE_URL=<automatically provided by Railway PostgreSQL>
RESEND_API_KEY=re_xxxxxxxxxxxxx
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD=your-secure-password
NEXT_PUBLIC_SITE_URL=https://your-app.railway.app
NEXT_PUBLIC_COMPANY_PHONE=(XXX) XXX-XXXX
NEXT_PUBLIC_COMPANY_EMAIL=info@avmpackaging.com
```

**Important**: The `ADMIN_PASSWORD` must also be added as `NEXT_PUBLIC_ADMIN_PASSWORD` since it's accessed client-side:

```env
NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password
```

### Step 5: Deploy

Railway will automatically deploy on push to main branch.

Or manually trigger:
```bash
railway up
```

### Step 6: Run Database Migrations

After first deployment:

```bash
# Using Railway CLI
railway run npx prisma migrate deploy
```

Or in Railway dashboard:
1. Go to your service
2. Settings → Deploy
3. Add custom start command: `npm run build && npx prisma migrate deploy && npm start`

## 🌐 Custom Domain Setup

### On Railway:

1. Go to your service in Railway
2. Settings → Domains
3. Click "Generate Domain" (free .railway.app subdomain)
4. Or add custom domain:
   - Click "Custom Domain"
   - Enter your domain (e.g., `www.avmpackaging.com`)
   - Add the CNAME record to your DNS provider:
     - **Type**: CNAME
     - **Name**: www (or @)
     - **Value**: `<your-app>.railway.app`
5. Wait for DNS propagation (5-30 minutes)

### Update Environment Variables:

After adding custom domain, update:
```env
NEXT_PUBLIC_SITE_URL=https://www.avmpackaging.com
```

## 📱 Testing the Site

### Test Quote Form:
1. Visit `/quote`
2. Fill out the form
3. Check database: `npx prisma studio`
4. Check email inbox (ADMIN_EMAIL)

### Test Contact Form:
1. Visit `/contact`
2. Submit message
3. Verify in database and email

### Test Admin Panel:
1. Visit `/admin/leads`
2. Enter ADMIN_PASSWORD
3. View submitted quotes and contacts
4. Change lead status

## 🔒 Security Notes

1. **Never commit `.env` file** — it's in `.gitignore`
2. Use a strong ADMIN_PASSWORD
3. Resend API key should be kept secret
4. For production, consider more robust authentication for admin panel

## 📊 Database Schema

### QuoteLead Table
- Contact info (name, email, phone)
- Location and service requirements
- Item details and dimensions
- Service needs (heat-treated, vacuum, etc.)
- Status tracking

### ContactLead Table
- Contact info
- Subject and message
- Status tracking

## 🎨 Customization

### Update Company Info:
Edit `.env` variables:
- `NEXT_PUBLIC_COMPANY_PHONE`
- `NEXT_PUBLIC_COMPANY_EMAIL`
- `NEXT_PUBLIC_COMPANY_ADDRESS`

### Update Colors:
Edit `app/globals.css` CSS variables for theme colors.

### Add Images:
Place images in `public/` folder and reference in components.

## 📝 Content Management

All page content is in the respective page files:
- `app/page.tsx` - Home page copy
- `app/services/page.tsx` - Services descriptions
- `app/industries/page.tsx` - Industries and FAQ
- `app/about/page.tsx` - About content

## 🐛 Troubleshooting

### Database Connection Issues:
```bash
# Check DATABASE_URL is correct
echo $DATABASE_URL

# Test connection
npx prisma db push
```

### Build Errors:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Prisma Client Issues:
```bash
# Regenerate Prisma Client
npx prisma generate
```

### Email Not Sending:
1. Verify RESEND_API_KEY is correct
2. Check "from" email domain is verified in Resend
3. Check Railway logs for errors

## 📞 Support

For questions or issues:
- Check Railway logs: Railway Dashboard → Deployments → Logs
- Check Prisma migrations: `npx prisma migrate status`
- Review API responses in browser DevTools → Network tab

## 📄 License

Proprietary - AVM Packaging and Crating LLC

---

**Built with ❤️ for AVM Packaging and Crating LLC**
