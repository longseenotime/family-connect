const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log(`Request for: ${req.url}`);
  
  // Serve test.html for root
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'test.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>Family Connect Server is Working!</h1>
      <p>✅ Simple Node.js server successfully running</p>
      <p><a href="/">View Family Connect Preview</a></p>
      <p>The networking issue appears to be specific to Next.js 15, not Node.js in general.</p>
    `);
  }
});

const ports = [8080, 8081, 8000, 9000, 5000, 4000];

function tryPort(portIndex = 0) {
  if (portIndex >= ports.length) {
    console.log('❌ All ports failed to bind');
    return;
  }
  
  const port = ports[portIndex];
  const server2 = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h1>✅ Family Connect Working on Port ${port}!</h1>
      <p>Server successfully bound to port ${port}</p>
      <p><strong>This proves the networking stack works - the issue is specific to Next.js 15</strong></p>
      <style>body { font-family: system-ui; padding: 40px; background: #1a1a1a; color: #fff; }</style>
    `);
  });
  
  server2.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying next...`);
      tryPort(portIndex + 1);
    } else {
      console.log(`Error on port ${port}:`, err.message);
      tryPort(portIndex + 1);
    }
  });
  
  server2.listen(port, '127.0.0.1', () => {
    console.log(`✅ SUCCESS! Server running at http://127.0.0.1:${port}`);
    console.log(`✅ Open this URL in your browser: http://127.0.0.1:${port}`);
  });
}

tryPort();