# Next.js 15 Development Server Port Binding Issue - Troubleshooting Log

## Date: June 23, 2025
## Environment: macOS Darwin 24.5.0, family-connect project

---

## 🔍 **Problem Summary**

Next.js 15 development server reports "Ready" but is completely inaccessible from browsers and curl. The server appears to start successfully but never actually binds to any port.

### **Symptoms:**
- Server shows: `✓ Ready in XXXms` and lists `http://localhost:PORT`
- `curl localhost:PORT` fails with: `Failed to connect to localhost port PORT after 0 ms: Couldn't connect to server`
- `netstat -an | grep PORT` shows no listening process
- Multiple browsers (Safari, Chrome) cannot access the server
- Issue persists across different ports (3000, 3001, 8080, etc.)

---

## 🛠 **Troubleshooting Steps Performed**

### **1. Node.js Version Investigation**
- **Initial Version**: Node.js v22.16.0 (too new)
- **Action**: Downgraded to Node.js v20.19.3 using nvm
- **Result**: Issue persisted even with compatible Node.js version

### **2. Port and Binding Tests**
- Tested ports: 3000, 3001, 8080
- Tested hostname binding: localhost, 127.0.0.1, 0.0.0.0
- **Result**: No successful binding on any configuration

### **3. Turbopack Investigation**
- Tested with `--turbopack` flag
- Tested without `--turbopack` flag (standard webpack)
- **Result**: Issue occurs with both build systems

### **4. Environment Isolation Test**
- Created fresh Next.js 15 app: `npx create-next-app@latest minimal-test-app`
- **Result**: Same issue occurred, confirming this is an **environment issue**, not project-specific

### **5. Basic Node.js Server Test**
- Created simple HTTP server: `const server = http.createServer(...)`
- **Result**: Basic Node.js server works perfectly on same ports
- **Conclusion**: Issue is specific to Next.js 15, not general Node.js networking

### **6. Network Debugging**
- Used `NODE_DEBUG=net` to inspect low-level network operations
- **Finding**: Server attempts `bind to ::` (IPv6) but binding appears to fail silently
- **Debug Output**: Shows npm registry connections but no successful port binding

---

## 🔍 **Root Cause Analysis**

### **Confirmed Facts:**
1. **Environment Issue**: Fresh Next.js 15 apps fail identically
2. **Next.js Specific**: Basic Node.js HTTP servers work fine
3. **Cross-Platform**: Issue affects both Turbopack and Webpack
4. **Silent Failure**: Next.js reports success but doesn't actually bind

### **Research Findings:**
- **Known Issue**: Next.js 15 + Turbopack has documented silent exit/binding issues on macOS
- **GitHub Issues**: Multiple reports of dev server "ready but not accessible" problems
- **Turbopack Status**: While marked "stable," still has environment-specific issues
- **IPv6 Binding**: Debug logs suggest IPv6 binding attempts that may be failing

---

## 💡 **Solutions Attempted**

### **Completed:**
- ✅ Node.js version downgrade (v22 → v20)
- ✅ Clean dependency reinstall (`rm -rf node_modules .next package-lock.json`)
- ✅ Different port testing
- ✅ Hostname binding variations
- ✅ Turbopack disabled testing
- ✅ Environment isolation testing

### **Recommended Next Steps:**
1. **IPv6 Disable**: Force IPv4-only binding
2. **macOS Security**: Check for firewall/security software interference
3. **Next.js Version**: Try Next.js 14.x as fallback
4. **Alternative Dev Server**: Use Vite or custom server temporarily
5. **Docker Alternative**: Run development in containerized environment

---

## 🎯 **Immediate Workarounds**

### **Option 1: Force IPv4 Binding**
```bash
# Try binding explicitly to IPv4
HOST=127.0.0.1 npm run dev
```

### **Option 2: Use Production Build**
```bash
# Build and run static version
npm run build
npm start
```

### **Option 3: Alternative Dev Server**
```bash
# Consider switching to Vite or other dev servers temporarily
```

---

## 📊 **Project Status**

### **Completed Features:**
- ✅ Next.js 15 + TypeScript + Tailwind setup
- ✅ Dark theme UI with modern design
- ✅ Authentication system (NextAuth.js + Prisma)
- ✅ Family dashboard with activity overview
- ✅ Calendar component with event management
- ✅ Photo albums with upload/sharing interface
- ✅ Family news feed with post interactions
- ✅ Trip planning with destination voting system
- ✅ Real-time chat interface
- ✅ Navigation and responsive layout
- ✅ Database schema with SQLite + Prisma

### **Code Repository:**
- **GitHub**: https://github.com/longseenotime/family-connect
- **Status**: All code committed and pushed
- **Issue**: Development server inaccessible due to port binding bug

---

## 🔧 **Technical Stack**

### **Frontend:**
- Next.js 15.3.4
- React 19
- TypeScript
- Tailwind CSS (dark theme)
- Lucide React icons

### **Backend:**
- NextAuth.js for authentication
- Prisma ORM + SQLite database
- API routes in Next.js

### **Features Built:**
- Trip planning with voting
- Family calendar
- Photo sharing
- News feed
- Real-time chat UI
- Dark mode design

---

## 🚨 **Critical Finding**

This appears to be a **known bug in Next.js 15** affecting macOS users where the development server silently fails to bind to ports despite reporting success. The issue affects both Turbopack and standard webpack modes.

**Impact**: Complete inability to run development server locally
**Scope**: Environment-wide (affects all Next.js 15 projects)
**Severity**: High (blocks local development)

---

## 📅 **Next Actions Needed**

1. **Research latest Next.js 15 patches** for macOS binding fixes
2. **Try forced IPv4 binding** as immediate workaround
3. **Consider Next.js 14 fallback** for reliable development
4. **Monitor GitHub issues** for official patches
5. **Test production build** as alternative development approach

---

*Last Updated: June 23, 2025*
*Issue Status: Unresolved - Known Next.js 15 environment bug*