# Study Abroad Consultancy Website

## Project Overview
A comprehensive Next.js (App Router) application for a Study Abroad Consultancy that helps students enroll in UK and Canada programs.

## Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19, TailwindCSS
- **Forms**: React Hook Form + Zod validation
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage (for document uploads)
- **Payment**: Paystack integration
- **Email**: Nodemailer with country-specific routing
- **Deployment**: Vercel-ready

## Features Implemented
1. ✅ Home page with hero section and trust elements
2. ✅ About page with mission and testimonials
3. ✅ Programs page for UK and Canada
4. ✅ Enrollment form with document upload
5. ✅ Paystack payment integration
6. ✅ Country-specific email routing (UK/Canada)
7. ✅ Email confirmations to students and admins
8. ✅ Contact page with form

## Project Structure
```
├── app/
│   ├── about/page.tsx
│   ├── programs/page.tsx
│   ├── enroll/page.tsx
│   ├── contact/page.tsx
│   ├── api/
│   │   ├── pay/route.ts
│   │   └── webhook/route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   ├── supabase.ts
│   ├── email.ts
│   └── db-setup.sql
└── Configuration files
```

## Environment Variables Required

### Supabase
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

### Paystack
- `PAYSTACK_SECRET_KEY`: Paystack secret key
- `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`: Paystack public key

### Email (SMTP)
- `SMTP_HOST`: SMTP server host (e.g., smtp.gmail.com)
- `SMTP_PORT`: SMTP port (usually 587)
- `SMTP_USER_UK`: Email for UK admissions (admissions.uk@domain.com)
- `SMTP_PASS_UK`: Password for UK email
- `SMTP_USER_CA`: Email for Canada admissions (admissions.ca@domain.com)
- `SMTP_PASS_CA`: Password for Canada email
- `ADMIN_EMAIL`: Admin email for notifications

### General
- `NEXT_PUBLIC_APP_URL`: Your app URL (for Paystack callbacks)

## Database Setup
1. Create a Supabase project at https://supabase.com
2. Run the SQL commands in `lib/db-setup.sql` in your Supabase SQL editor
3. Create a storage bucket named "documents" in Supabase Storage
4. Set the bucket to public for uploads and downloads

## Paystack Setup
1. Create account at https://paystack.com
2. Get API keys from dashboard
3. Configure webhook URL: `https://yourdomain.com/api/webhook`
4. Test with test keys before going live

## Email Setup
Country-specific email routing:
- UK enrollments → emails sent from `admissions.uk@domain.com`
- Canada enrollments → emails sent from `admissions.ca@domain.com`

## Deployment to Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Add all environment variables
4. Deploy
5. Configure custom domain if needed

## Recent Changes
- [2025-10-04] Initial project setup with Next.js App Router
- [2025-10-04] Implemented all pages and features
- [2025-10-04] Added Paystack payment integration
- [2025-10-04] Configured country-specific email routing
