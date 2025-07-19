// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Routes
const groceryRoutes = require('./routes/groceryRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Middleware
app.use(express.json());

// Route usage
app.use('/api/groceries', groceryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
