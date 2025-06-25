import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve React build files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Wake backend API immediately when server starts
const BACKEND_URL = 'https://billing-software-ln5r.onrender.com/ping';
console.log('Waking up backend...');

fetch(BACKEND_URL)
  .then((res) => res.text())
  .then((text) => {
    console.log('Backend responded:', text);
  })
  .catch((err) => {
    console.error('Failed to ping backend:', err);
  });

// Fallback: always serve index.html (SPA routing support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
