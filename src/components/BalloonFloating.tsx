import React, { useEffect, useRef } from "react";
import "./BalloonFloating.css";

export const DATE_BIRTHDAY = 22;
export const MONTH_BIRTHDAY = 0; // 0 = January, 11 = December

const BalloonFloating: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getMaxHearts = () => {
    const hour = new Date().getHours();
    if (hour >= 22 || hour < 5) return 3; // ban đêm
    return 8; // ban ngày
  };

  const getHeartInterval = () => {
    const now = new Date();
    const isBirthday =
      now.getDate() === DATE_BIRTHDAY && now.getMonth() === MONTH_BIRTHDAY;

    const minutes = now.getHours() * 60 + now.getMinutes();
    const nearMidnight = minutes >= 23 * 60 + 30 || minutes <= 30;

    if (isBirthday && nearMidnight) return 1200;
    return 2000;
  };

  useEffect(() => {
    const intervalTime = getHeartInterval();

    const interval = setInterval(() => {
      const container = containerRef.current;
      if (!container) return;

      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = Math.random() < 0.5 ? "❤️" : "💙"; // Thêm trái tim xanh
      const isMobile = window.innerWidth < 768;
      const size = isMobile ? 18 + Math.random() * 6 : 24 + Math.random() * 12;

      const side = Math.random() < 0.5 ? "left" : "right";
      const randomLeft =
        side === "left"
          ? Math.random() * 6 // từ 0% đến 30%
          : 84 + Math.random() * 6; // từ 70% đến 100%

      heart.style.left = `${randomLeft}%`;

      heart.style.fontSize = `${size}px`;
      heart.style.animationDuration = `${4 + Math.random() * 3}s`;

      container.appendChild(heart);
      const maxHearts = getMaxHearts();

      if (container.children.length > maxHearts) {
        container.removeChild(container.firstChild!);
      }
      heart.addEventListener("animationend", () => {
        heart.remove();
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const isSpecialDay = () => {
    const today = new Date();
    return (
      today.getDate() === DATE_BIRTHDAY && today.getMonth() === MONTH_BIRTHDAY
    );
  };

  return (
    <>
      <div className="heart-container" ref={containerRef}></div>
      {isSpecialDay() && (
        <div className="special-text">Hôm nay là ngày đặc biệt 💙</div>
      )}
    </>
  );
};

export default BalloonFloating;
