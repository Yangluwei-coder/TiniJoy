// routes/adminRoutes.js 定义前端请求的URL路径和HTTP方法（GET,POST,PUT,DELETE）对应的处理函数，针对请求调用哪个方法
const express = require('express');
const { loginAdmin, createAdmin, getAdmins, updateAdmin, deleteAdmin} = require('../controllers/adminController');

const router = express.Router();
console.log('adminRoutes is loading:', require.resolve('../controllers/adminController'));

router.post('/login', loginAdmin);
// router.post('/', createAdmin);
router.get('/', getAdmins);
router.put('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);
router.post('/', (req, res, next) => {
  console.log('POST /api/admin triggered');  
  next();
}, createAdmin);

module.exports = router;
