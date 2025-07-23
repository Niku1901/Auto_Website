const express = require('express');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/auto_website', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected locally'))
.catch((err) => console.error('❌ MongoDB error:', err));

// Default Route (Test)
app.get('/', (req, res) => {
  res.send('🧠 Backend ka dimaag chal raha hai — MongoDB bhi jud gaya!');
});

// TODO: Connect routes here (when auth.js or article.js ready)
// Example:
// const authRoutes = require('./routes/auth');
// app.use('/auth', authRoutes);

// Server Start
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);
const articleRoutes = require('./routes/article');
app.use('/article', articleRoutes);
app.listen(PORT, () => {
  console.log(`⚙️ Backend running at http://localhost:${PORT}`);
});
