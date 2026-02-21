// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  if (req.url === '/api/data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from server!', data: 'Your business card info' }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
  }
});

// starts a simple http server locally on port 3001
server.listen(3001, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3001');
});

// run with `node server.mjs`