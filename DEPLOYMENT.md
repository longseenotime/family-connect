# Family Connect - Cloud Deployment Guide

## Live Application

🌐 **Live URL**: https://family-connect-app.vercel.app

The Family Connect application is automatically deployed to Vercel on every commit to the main branch.

## Deployment Status

[![Deploy to Vercel](https://github.com/longseenotime/family-connect/actions/workflows/deploy-vercel.yml/badge.svg)](https://github.com/longseenotime/family-connect/actions/workflows/deploy-vercel.yml)

## Features Available in Live Demo

✅ **All Core Features**:
- 🏠 Family Dashboard with activity overview
- 📅 Interactive calendar with family events
- 📸 Photo albums and memory sharing
- 📰 Family news feed with posts and interactions
- ✈️ Trip planning with destination voting system
- 💬 Real-time family chat interface
- 🎨 Dark theme with sleek, modern design

✅ **Technical Features**:
- 🔐 NextAuth.js authentication (Google OAuth)
- 🗄️ Prisma database with SQLite
- 📱 Responsive design for all devices
- ⚡ Next.js 15 with React 19 performance
- 🛡️ TypeScript for type safety

## Demo Credentials

For testing purposes, you can use the Google OAuth login or explore the interface directly.

## Architecture

- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with custom dark theme
- **Database**: Prisma ORM with SQLite (production-ready)
- **Authentication**: NextAuth.js with Google provider
- **Hosting**: Vercel with automatic deployments
- **CI/CD**: GitHub Actions for build and deploy

## Development vs Production

| Environment | URL | Purpose |
|-------------|-----|---------|
| **Production** | https://family-connect-app.vercel.app | Live demo for users |
| **Development** | http://localhost:3000 | Local development (Docker) |
| **Preview** | app-preview.html | Static preview |

## Monitoring and Logs

- **Deployment Status**: Check GitHub Actions tab
- **Application Logs**: Available in Vercel dashboard
- **Performance**: Monitored via Vercel Analytics
- **Uptime**: 99.9% availability on Vercel platform

## Manual Deployment

To deploy manually or to a different platform:

1. **Clone the repository**
2. **Set environment variables**:
   ```bash
   NEXTAUTH_URL=https://your-domain.com
   NEXTAUTH_SECRET=your-secret-key
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   DATABASE_URL=file:./prod.db
   ```
3. **Deploy to your platform** (Vercel, Netlify, Railway, etc.)

## Support

If the live application is down or has issues:
1. Check the GitHub Actions for deployment status
2. Try the static preview: `app-preview.html`
3. Use the Docker deployment method
4. Report issues in the GitHub repository

---

**Last Updated**: June 23, 2025  
**Deployment Platform**: Vercel  
**Build Status**: Automated via GitHub Actions