// app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

// 测试路由（挂载路由前）
// app.get('/test', (req, res) => {
//   res.send('backend is reachable');
// });

// 路由
app.use('/api/products', productRoutes);
app.use('/api/admin', adminRoutes);

module.exports = app;
