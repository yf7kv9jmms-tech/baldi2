const express = require('express');
const path = require('path');

const app = express();

// Configure port - can be set via environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve CSS
app.use('/css', express.static(path.join(__dirname, 'css')));

// Serve JavaScript
app.use('/js', express.static(path.join(__dirname, 'js')));

// Default route - serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback - serve index.html for any unmatched routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Baldis Basics web server running at http://localhost:${PORT}`);
  console.log(`Environment PORT: ${process.env.PORT || 'not set (using default 3000)'}`);
});
