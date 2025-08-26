import './nav.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import CartPopup from '../../features/cart/CartPopup'
import { Link } from "react-router-dom"

export default function Nav() {
  const [showCart, setShowCart] = useState(false)

  const cartItems = useSelector((state) => state.cart.items)
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div style={{ boxShadow: '0 2px rgba(0, 0, 0, .2)' }}>
      <div className="Nav-grid">
        <div className="Nav-left">
          <Link to="/" className="navleft-style">TiniJoy</Link>
          <Link to="/catalog" className="navleft-style">Catalog</Link>
          <Link to="/delivery" className="navleft-style">Delivery</Link>
          <Link to="/about" className="navleft-style">About</Link>
          <Link to="/contact" className="navleft-style">Contacts</Link>
        </div>

        <div className="cart-container">
          <p>Cart</p>
          <div className="cart-link" onClick={() => setShowCart(true)} style={{ cursor: 'pointer' }}>
            <div className="cart-icon-wrapper">
              <svg
                className="cart-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                width="25"
                height="25"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="cart-badge">{itemCount}</span>
            </div>
          </div>
        </div>
      </div>

      {showCart && <CartPopup cartItems={cartItems} onClose={() => setShowCart(false)} />}
    </div>
  )
}
