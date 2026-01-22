import React from "react";
import { BsFacebook } from "react-icons/bs";
import "./FloatSocialButtons.css";

const FloatSocialButtons = () => {
  return (
    <div className="float-social-buttons">
      <a
        href="https://zalo.me/0333020842"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn zalo"
        title="Zalo"
      >
        <svg
          viewBox="0 0 64 64"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="64" height="64" rx="12" fill="#008fe5" />
          <text
            x="50%"
            y="56%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fontSize="20"
            fill="white"
          >
            Zalo
          </text>
        </svg>
      </a>
      <a
        href="https://www.facebook.com/duoclv2605"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn facebook"
        title="Facebook"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default FloatSocialButtons;
