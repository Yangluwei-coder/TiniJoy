import React from 'react';
import './herobanner.css';
import heroImage from '../../assets/images/child.jpeg'; 

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-heading">
        <p className="hero-label">Made for Children</p>
        <h1 className="hero-title">Simple & Colorful Ecommerce</h1>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-subtitle">Available for Free!</h1>
          <div className="hero-line"></div>
          <p className="hero-description">
            A successful marketing plan relies heavily on the pulling-power of advertising copy.
            Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince
            consumers to take action. There is no magic formula to write perfect ad copy.
          </p>
          <button className="button-open-catalog">GET IT NOW!</button>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
}
