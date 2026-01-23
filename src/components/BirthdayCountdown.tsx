import React from "react";
import "./BirthdayCountdown.css";
import CountdownTimer from "./CountdownTimer";
import { DATE_BIRTHDAY } from "./BalloonFloating";

const BirthdayCountdown: React.FC = () => {
  const daysOfWeek = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  return (
    <div className="wedding-date-container">
      <h2 className="wedding-invite">🎂 Chỉ còn một chút nữa thôi 💖</h2>

      <p className="wedding-message">
        Anh đang đếm từng ngày để chúc mừng sinh nhật em –  
        một ngày thật đặc biệt của người anh yêu nhất ✨
      </p>

      <div className="calendar">
        <h3>Tháng 01 - 2026 (Dương lịch)</h3>

        {/* Countdown */}
        <CountdownTimer />

        <div className="calendar-grid">
          {daysOfWeek.map((day, idx) => (
            <div key={idx} className="calendar-header">
              {day}
            </div>
          ))}

          {/* 4 ô trống trước ngày 1/1/2026 (Thứ Năm) */}
          {[29, 30, 31].map((day) => (
            <div key={`dec-${day}`} className="calendar-day prev-month">
              {day}
            </div>
          ))}

          {Array.from({ length: 31 }, (_, i) => {
            const day = i + 1;
            return (
              <div
                key={day}
                className={`calendar-day ${day === DATE_BIRTHDAY ? "highlight" : ""}`}
              >
                {day}
              </div>
            );
          })}
        </div>

        <h3>Ngày {DATE_BIRTHDAY} tháng 01 năm 2026 💖</h3>
      </div>
    </div>
  );
};

export default BirthdayCountdown;
