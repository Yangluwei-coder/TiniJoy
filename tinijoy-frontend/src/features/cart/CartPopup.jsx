import './cart.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CartPopup({onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const [serverCart, setServerCart] = useState(cartItems);

  // 同步本地 Redux 购物车到 serverCart (可选)
  useEffect(() => {
    setServerCart(Array.isArray(cartItems) ? cartItems : []);
  }, [cartItems]);

  // 移除商品
  const handleRemove = async (id) => {
    dispatch(removeFromCart(id)); // 更新 Redux
    try {
      await axios.delete(`${API_URL}/cart/${id}`); // 调用后端 API（可选）
    } catch (err) {
      console.error('Failed to remove item from server cart:', err);
    }
  };

  // 更新数量
  const handleQuantityChange = async (id, value) => {
    const quantity = parseInt(value, 10);
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity })); // 更新 Redux
      try {
        await axios.put(`${API_URL}/cart/${id}`, { quantity }); // 调用后端 API（可选）
      } catch (err) {
        console.error('Failed to update item quantity on server:', err);
      }
    }
  };

  const subtotal = Array.isArray(serverCart)
    ? serverCart.reduce(
        (total, item) => total + (item?.price ?? 0) * (item?.quantity ?? 0),
        0
      )
    : 0;

  const handleCheckout = () => {
    onClose();          // 关闭弹窗
    navigate('/checkout'); // 跳转到结账页
  };

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>

      <div className="cart-popup">
        <div className="cart-close" onClick={onClose}>×</div>
        <div className="cart-header">Your Cart</div>

        {serverCart.length === 0 ? (
          <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <div className="empty-cart">No item found</div>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {serverCart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} className="cart-thumb" alt={item.name} />
                  <div className="cart-info">
                    <div>{item.name}</div>
                    <div className="cart-remove" onClick={() => handleRemove(item.id)}>
                      Remove
                    </div>
                  </div>
                  <div className="cart-qty">
                    <input
                      className="number-qty"
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span style={{ fontWeight: '600' }}>${subtotal.toFixed(2)} USD</span>
            </div>

            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <button className="checkout-button" onClick={handleCheckout}>Continue to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
