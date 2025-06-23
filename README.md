# Family Connect

A modern family communication web application built with Next.js 15, React 19, and TypeScript. Features a dark, sleek UI with comprehensive family management tools.

## Features

- 🏠 **Family Dashboard** - Centralized activity hub
- 📅 **Calendar** - Family event scheduling and management
- 📸 **Photo Albums** - Share and organize family memories
- 📰 **News Feed** - Family updates and announcements
- ✈️ **Trip Planning** - Collaborative vacation planning with voting
- 💬 **Chat** - Real-time family messaging
- 🔐 **Authentication** - Secure Google OAuth integration
- 🎨 **Dark Theme** - Modern, minimalist design

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, NextAuth.js
- **Database**: Prisma ORM with SQLite
- **Icons**: Lucide React
- **Deployment**: Docker containerization

## Quick Start

### Using Docker (Recommended)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/longseenotime/family-connect.git
   cd family-connect
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Google OAuth credentials
   ```

3. **Run with Docker Compose**:
   ```bash
   # Production
   docker-compose up -d

   # Development (with hot reloading)
   docker-compose -f docker-compose.dev.yml up
   ```

4. **Open your browser**: http://localhost:3000

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up the database**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database
DATABASE_URL="file:./dev.db"
```

## Docker Commands

### Production Deployment
```bash
# Build and run production container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

### Development with Hot Reloading
```bash
# Run development container with volume mounting
docker-compose -f docker-compose.dev.yml up

# Rebuild development container
docker-compose -f docker-compose.dev.yml up --build
```

### Manual Docker Build
```bash
# Build production image
docker build -t family-connect .

# Run production container
docker run -p 3000:3000 family-connect

# Build development image
docker build -f Dockerfile.dev -t family-connect:dev .

# Run development container
docker run -p 3000:3000 -v $(pwd):/app family-connect:dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Database Management

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes to database
npx prisma db push

# View database in Prisma Studio
npx prisma studio

# Reset database
npx prisma db push --force-reset
```

## Troubleshooting

### Next.js 15 Server Issues on macOS
If you encounter server binding issues on macOS, refer to `TROUBLESHOOTING_LOG.md` for detailed solutions, or use the Docker deployment method which bypasses local environment issues.

### Alternative Inspection Methods
- Open `app-preview.html` for an interactive preview
- Use Docker deployment for reliable server access
- Check the GitHub repository for latest updates

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and support, please check:
1. `TROUBLESHOOTING_LOG.md` for common problems
2. GitHub Issues for bug reports
3. Docker deployment for environment-independent setup
