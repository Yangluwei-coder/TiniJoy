import React from 'react';
import bgImage from '../../assets/images/home-bg2.jpg';

export default function StoryVideoSection() {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      
      <div //overlay
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', 
          zIndex: 1,     
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2, // overlay
          padding: '40px',
          borderRadius: '12px',
          maxWidth: '600px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p style={{ marginBottom: '10px', fontSize: '10px', fontWeight: '600', color: 'white' }}>About The Shop</p>
        <p style={{ marginBottom: '10px', fontSize: '20px', fontWeight: '600', color: 'white' }}>Watch Our Story</p>
        <p style={{ fontSize: '12px', fontWeight: '500', marginBottom: '10px', color: 'white' }}>
          There is no magic formula to write perfect ad copy. It is based on a number of factors,
          including ad placement, demographic, even the consumer's mood.
        </p>

        <button
          onClick={() => alert('Play video')}
          style={{
            backgroundColor: 'rgba(162, 200, 36)',
            border: '2px solid white',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'white',
            fontSize: '24px',
            backdropFilter: 'blur(4px)',
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
