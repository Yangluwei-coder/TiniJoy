const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // bcrypt
const Admin = require('../models/Admin');

// bcrypt.compare("123456", "$2b$10$LxTrjJsA3bW4NU2V/QoGmO8/Sk.BSriRLHSpTPajvbNCUafaTIr0i")
//   .then(console.log);

//生成 JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

//登录
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  const testHash = await bcrypt.hash("123456", 10);
  // console.log('loginAdmin loaded from:', __filename);
  // console.log('Login request body:', req.body);
  // console.log('[Login] Received:', username, password);
  // console.log("[Debug] New hash for 123456:", testHash);

  try {
    // 1. 从数据库查找用户
    const admin = await Admin.findOne({ username });
    // console.log('[Login] Found admin in DB:', admin);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: 'User does not exist'
      });
    }

    // 2. 比对加密密码
    const isMatch = await bcrypt.compare(password, admin.password);
    // console.log('[Login] Password match result:', isMatch);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect password'
      });
    }

    // 3. 登录成功返回 token
    res.json({
      success: true,
      message: 'Login successful',
      token: generateToken(admin._id)
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// 创建管理员
const createAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const exists = await Admin.findOne({ username });
    if (exists) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // 对密码进行加密
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt);  // 加密密码

    const admin = new Admin({
      username,
      password: hashedPassword // 存储加密后的密码
    });

    // 保存到数据库
    await admin.save();
    res.status(201).json({ message: 'Admin created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// 获取管理员列表
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({}, '-password');
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// 更新管理员
const updateAdmin = async (req, res) => {
  try {
    const updated = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updated) {
      res.json({ message: 'Admin updated' });
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// 删除管理员
const deleteAdmin = async (req, res) => {
  try {
    const deleted = await Admin.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.json({ message: 'Admin deleted' });
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  loginAdmin,
  createAdmin,
  getAdmins,
  updateAdmin,
  deleteAdmin,
};
