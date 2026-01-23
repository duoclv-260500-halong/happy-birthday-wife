// src/components/CountdownTimer.tsx
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DATE_BIRTHDAY, MONTH_BIRTHDAY } from "./BalloonFloating";

const CountdownTimer: React.FC = () => {
  const targetDate = dayjs(`2026-${MONTH_BIRTHDAY + 1}-${DATE_BIRTHDAY}T00:00:00`);

  const [remaining, setRemaining] = useState(
    targetDate.diff(dayjs(), "second")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(targetDate.diff(dayjs(), "second"));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (seconds: number) => {
    if (seconds <= 0) {
      return "🎉 Happy Birthday My Love 💖";
    }

    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return `${d} ngày ${h} giờ ${m} phút ${s} giây`;
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "1rem",
        fontWeight: "bold",
        color: "#e91e63",
        fontSize: "18px",
      }}
    >
      {remaining > 0 ? "⏳ Còn lại: " + formatTime(remaining) : "🎉 Happy Birthday My Love 💖"}
    </div>
  );
};

export default CountdownTimer;
