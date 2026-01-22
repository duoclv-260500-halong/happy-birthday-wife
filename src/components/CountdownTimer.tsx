// src/components/CountdownTimer.tsx
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const CountdownTimer: React.FC = () => {
  const targetDate = dayjs('2025-06-01T00:00:00');
  const [remaining, setRemaining] = useState(targetDate.diff(dayjs(), 'second'));

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(targetDate.diff(dayjs(), 'second'));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (seconds: number) => {
    if (seconds <= 0) return 'Đã đến ngày cưới! 🎉';

    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return `${d} ngày ${h} giờ ${m} phút ${s} giây`;
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: '#e91e63' }}>
      ⏳ Còn lại: {formatTime(remaining)}
    </div>
  );
};

export default CountdownTimer;
