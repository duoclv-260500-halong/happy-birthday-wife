import React from 'react';
import './WeddingDate.css';
import CountdownTimer from './CountdownTimer';

const WeddingDate: React.FC = () => {
  const daysOfWeek = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

  return (
    <div className="wedding-date-container">
      <h2 className="wedding-invite">Chúng mình sắp về một nhà rồi!</h2>
      <p className="wedding-message">
        Sự hiện diện của quý khách là niềm vinh hạnh và niềm vui lớn với gia đình chúng tôi 💖
      </p>

      <div className="calendar">
        <h3>Tháng 6 - 2025 (Dương lịch)</h3>
        <CountdownTimer />
        <div className="calendar-grid">
          {daysOfWeek.map((day, idx) => (
            <div key={idx} className="calendar-header">
              {day}
            </div>
          ))}

          {/* 6 ô trống trước ngày 1/6 (Chủ Nhật) */}
          {[26, 27, 28, 29, 30, 31].map((day) => (
            <div key={`may-${day}`} className="calendar-day prev-month">
              {day}
            </div>
          ))}

          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1;
            return (
              <div
                key={day}
                className={`calendar-day ${day === 1 ? 'highlight' : ''}`}
              >
                {day}
              </div>
            );
          })}
        </div>
        <h3>Ngày 06 tháng 05 - Ất Tỵ (Âm lịch)</h3>
      </div>
    </div>
  );
};

export default WeddingDate;
