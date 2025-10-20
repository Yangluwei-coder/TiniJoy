import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }

      // 更新 totalPrice
      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );

      // totalPrice
      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }

      // totalPrice
      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
