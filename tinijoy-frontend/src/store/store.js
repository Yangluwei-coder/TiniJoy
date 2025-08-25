import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import authReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer
  }
});
