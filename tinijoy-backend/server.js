// server.js 初始化服务器、连接数据库、加载路由
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const app = require('./app');

const PORT = process.env.PORT || 5000;

// 连接数据库
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
