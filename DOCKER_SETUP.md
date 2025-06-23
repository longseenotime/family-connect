# Docker Setup Guide

## Install Docker on macOS

### Option 1: Docker Desktop (Recommended)
1. Download Docker Desktop from: https://www.docker.com/products/docker-desktop/
2. Install the .dmg file
3. Start Docker Desktop application
4. Verify installation: `docker --version`

### Option 2: Homebrew
```bash
brew install --cask docker
```

### Option 3: Command Line (Advanced)
```bash
# Install Docker via Homebrew
brew install docker docker-compose

# Install Docker Desktop separately or use Docker CLI with remote daemon
```

## Quick Start After Docker Installation

1. **Verify Docker is running**:
   ```bash
   docker --version
   docker-compose --version
   ```

2. **Build and run the application**:
   ```bash
   # Build production image
   docker build -t family-connect .
   
   # Run with Docker Compose (recommended)
   docker-compose up -d
   
   # Or run manually
   docker run -p 3000:3000 family-connect
   ```

3. **Access the application**:
   - Open http://localhost:3000 in your browser

## Development Mode

For development with hot reloading:
```bash
docker-compose -f docker-compose.dev.yml up
```

## Troubleshooting

### Docker Build Issues
- Ensure Docker Desktop is running
- Check available disk space (Docker images can be large)
- Try pruning unused images: `docker system prune -a`

### Port Conflicts
If port 3000 is in use, modify docker-compose.yml:
```yaml
ports:
  - "3001:3000"  # Use port 3001 instead
```

### Container Logs
View application logs:
```bash
docker-compose logs -f family-connect
```

## Benefits of Docker Deployment

1. **Environment Consistency**: Eliminates "works on my machine" issues
2. **Easy Deployment**: Single command deployment
3. **Isolation**: Application runs in contained environment
4. **Scalability**: Easy to scale and manage multiple instances
5. **Next.js 15 Compatibility**: Bypasses macOS-specific server binding issues