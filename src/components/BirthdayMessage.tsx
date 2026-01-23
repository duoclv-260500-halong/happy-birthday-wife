import React from "react";
import "./BirthdayMessage.css";

const BirthdayMessage: React.FC = () => {
  return (
    <div className="love-story-container">
      <h2 className="love-story-title">Câu chuyện nàng thơ</h2>
      <p className="love-story-text">
        Thêm một tuổi mới 🌱  
        <br />  
        Không cần hoàn hảo
        <br />  
        Chỉ cần mỗi ngày đều vui hơn hôm qua một chút là đủ 💛
      </p>
    </div>
  );
};

export default BirthdayMessage;
