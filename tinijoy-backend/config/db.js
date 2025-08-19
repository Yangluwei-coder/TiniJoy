//数据库连接逻辑
const mongoose = require('mongoose');
require('dotenv').config();  // 确保加载 .env 配置

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
