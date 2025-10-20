import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import authReducer from './authSlice';  // ✅ 改这里，指向 authSlice.js

export const store = configureStore({
  reducer: {
    cart: cartReducer,   // 管购物车
    auth: authReducer,   // 管登录状态
  },
});