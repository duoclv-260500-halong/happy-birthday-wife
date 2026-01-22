import React, { useEffect, useRef } from 'react';
import './HeartFloating.css';

const HeartFloating: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;

      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = Math.random() < 0.5 ? '❤️' : '💙'; // Thêm trái tim xanh

      const size = 24 + Math.random() * 12;
      const side = Math.random() < 0.5 ? 'left' : 'right';
      const randomLeft = side === 'left'
        ? Math.random() * 6             // từ 0% đến 30%
        : 84 + Math.random() * 6;       // từ 70% đến 100%

      heart.style.left = `${randomLeft}%`;

      heart.style.fontSize = `${size}px`;
      heart.style.animationDuration = `${4 + Math.random() * 3}s`;

      container.appendChild(heart);
      if (container.children.length > 8) {
        container.removeChild(container.firstChild!);
      }
      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    }, 2001);

    return () => clearInterval(interval);
  }, []);

  return <div className="heart-container" ref={containerRef}></div>;
};

export default HeartFloating;
