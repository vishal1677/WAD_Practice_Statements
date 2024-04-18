const express = require('express');
const path = require('path');

const app = express();

// Set the static directory for serving HTML, CSS, JavaScript, and other assets
app.use(express.static(path.join(__dirname, 'public')));

// Set the Content-Type header for CSS files
app.use('*.css', (req, res, next) => {
  res.header('Content-Type', 'text/css');
  next();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
