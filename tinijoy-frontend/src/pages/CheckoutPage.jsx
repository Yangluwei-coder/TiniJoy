import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import './checkout.css';

export default function CheckoutPage() {
  const { cartItems = [], totalPrice = 0 } = useSelector((state) => state.cart || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 数量调整
  const handleQuantityChange = (id, type) => {
    const currentItem = cartItems.find((item) => item.id === id);
    if (!currentItem) return;
    const newQuantity = type === 'increase'
      ? currentItem.quantity + 1
      : Math.max(1, currentItem.quantity - 1);
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  // 移除商品
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // 空购物车显示
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Shop
        </button>
      </div>
    );
  }

  // 页面主内容
  return (
    <div className="checkout-container">
      <div className="breadcrumb">
        <span className="breadcrumb-link" onClick={() => navigate('/')}>Home</span>
        <span> &gt; </span>
        <span className="breadcrumb-link active">Shopping Cart</span>
      </div>

      <div className="page-width">
        <div className="checkout-layout">
          {/* 左侧表格 */}
          <div className="cart-section">
            <table className="items-table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="product-info">
                        <img src={item.image} alt={item.name} className="product-image" />
                        <div>
                          <div className="product-name">{item.name}</div>
                          {item.color && <div>Color: {item.color}</div>}
                          {item.size && <div>Size: {item.size}</div>}
                          <button
                            className="remove-btn"
                            onClick={() => handleRemove(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>${parseFloat(item.price).toFixed(2)}</td>
                    <td>
                      <div className="qty-controls">
                        <button onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                        <input type="text" value={item.quantity} readOnly />
                        <button onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 优惠码 */}
            <div className="promo-section">
              <p>Promotion code?</p>
              <div className="promo-input">
                <input type="text" placeholder="Enter coupon code" />
                <button className="apply-btn">Apply</button>
              </div>
            </div>
          </div>

          {/* 右侧订单汇总 */}
          <div className="summary-section">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <div>
                <strong>Total</strong>
                <div className="tax-note">(Inclusive of tax $0.00)</div>
              </div>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
            <button className="checkout-btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
