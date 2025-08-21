import React, { useEffect, useState } from 'react';

export default function ScrollHint() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        right: '0px',
        top: '0px',
        width: '6px',
        height: '100vh',
        backgroundColor:'transparent',
        zIndex: 9999
      }}>
    </div>
  );
}
