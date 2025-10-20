import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CheckoutPage() {
  const { cartItems = [], totalPrice = 0 } = useSelector((state) => state.cart || {});
  console.log("🛒 Redux state.cart:", useSelector((state) => state.cart));
  console.log("🧾 cartItems from Redux:", cartItems);
  console.log("💰 totalPrice from Redux:", totalPrice);   
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverCart, setServerCart] = useState(cartItems || []);
  const API_URL = import.meta.env.VITE_API_URL;

  // 同步 Redux → state
  useEffect(() => {
    setServerCart(cartItems || []);
    console.log("🔄 Updating serverCart with:", cartItems);
  }, [cartItems]);

  const handleRemove = async (id) => {
    dispatch(removeFromCart(id));
    try {
      await axios.delete(`${API_URL}/cart/${id}`);
    } catch (err) {
      console.error('Failed to remove item from server:', err);
    }
  };

  const handleQuantityChange = async (id, value) => {
    const quantity = parseInt(value, 10);
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
      try {
        await axios.put(`${API_URL}/cart/${id}`, { quantity });
      } catch (err) {
        console.error('Failed to update quantity:', err);
      }
    }
  };

  // 防止 undefined.reduce
  const subtotal = Array.isArray(serverCart)
    ? serverCart.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    navigate('/');
  };

  if (!Array.isArray(serverCart) || serverCart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate('/')}>Back to Shop</button>
      </div>
    );
  }
  

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>

      <table className="checkout-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {serverCart.map((item) => (
            <tr key={item.id}>
              <td className="checkout-product">
                <img src={item.image} alt={item.name} className="checkout-thumb" />
                <span>{item.name}</span>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  className="checkout-input"
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="checkout-remove"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="checkout-summary">
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item total">
          <span>Total (USD):</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <button className="place-order-button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}
