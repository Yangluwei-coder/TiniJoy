import './cart.css';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';

export default function CartPopup({ cartItems, onClose }) {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value, 10);
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>

      <div className="cart-popup">
        <div className="cart-close" onClick={onClose}>×</div>
        <div className="cart-header">Your Cart</div>
        {cartItems.length === 0 ? (
          <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <div className="empty-cart">No item found</div>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
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
              <button className="checkout-button">Continue to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
