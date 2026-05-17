require('dotenv').config();

const express = require('express');
const path = require('path');
const pageRoutes = require('./src/routes/pageRoutes');

const app = express();

const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;

// Static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Routes
app.use('/', pageRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on http://localhost:${PORT}`);
});