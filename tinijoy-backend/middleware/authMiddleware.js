// middleware/authMiddleware.js 在请求到达路由处理函数前执行，通常用于处理认证、授权等
const jwt = require('jsonwebtoken');

// 验证 JWT 中间件
const protect = (req, res, next) => {
  let token;

  // 检查请求头中的 Authorization
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 获取 token (去掉 Bearer)
      token = req.headers.authorization.split(' ')[1];

      // 验证 token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 将用户信息挂载到请求对象上
      req.user = decoded;

      next(); // 继续执行后续的路由处理
    } catch (err) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = protect;
