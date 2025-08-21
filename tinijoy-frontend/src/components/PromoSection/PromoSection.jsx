import React from 'react';
import './PromoSection.css'; 
import PaperMail from '../../assets/images/paper-plane-solid.svg';

export default function PromoSection() {
  return (
    <div className='promo-box'>
    <div className="promo-section">
      <div className="promo-left">
        <div className="promo-icon">
          <img src={PaperMail} alt="Paper plane" className="promo-icon-img" />
        </div>
        <span className="promo-text">
          Subscribe to our newsletter & get <span className="highlight">10% discount!</span>
        </span>
      </div>  

      <div className="promo-right">
        <input
          type="email"
          placeholder="Enter your email address"
          className="promo-input"
        />
        <button className="promo-button">Subscribe</button>
      </div>
    </div>
    </div>
  );
}
