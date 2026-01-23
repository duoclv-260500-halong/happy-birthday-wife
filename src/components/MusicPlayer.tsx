import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import { FaBirthdayCake } from "react-icons/fa";
import "./MusicPlayer.css";
import { DATE_BIRTHDAY } from "./BalloonFloating";
const COLORS = [
  "linear-gradient(135deg, #ff9a9e, #fad0c4)", // hồng
  "linear-gradient(135deg, #a1c4fd, #c2e9fb)", // xanh
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)", // tím
  "linear-gradient(135deg, #ffecd2, #fcb69f)", // cam
];

const musics = [
  require("../assets/Chúc Em Thêm Một Tuổi.mp3"),
  require("../assets/Chúc Em Thêm Một Tuổi (1).mp3"),
  require("../assets/Mừng Sinh Nhật Em.mp3"),
  require("../assets/MừngSinhNhậtEm1.mp3"),
];

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [bg, setBg] = useState(COLORS[0]);
  const [finalMoment, setFinalMoment] = useState(false);
  const [candleOn, setCandleOn] = useState(false);
  const [blowing, setBlowing] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setBg(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }, 600);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const getTooltipText = () => {
    const hour = new Date().getHours();

    if (!isPlaying) return "Bật nhạc sinh nhật 🎂";

    if (hour >= 5 && hour < 12) {
      return "🎶 Một ngày mới bắt đầu cùng em";
    }
    if (hour >= 12 && hour < 18) {
      return "🎶 Bài hát này dành riêng cho em";
    }
    if (hour >= 18 && hour < 22) {
      return "🎶 Buổi tối thật ngọt ngào bên em";
    }
    return "🌙 Chúc em ngủ ngon cùng giai điệu này";
  };

  const isBirthdayToday = () => {
    const today = new Date();
    return today.getDate() === DATE_BIRTHDAY && today.getMonth() === 0; // Jan = 0
  };
  const handleCakeClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // CHƯA phát nhạc → bật nhạc
    if (!isPlaying) {
      audio.volume = 1;
      audio.play();
      setIsPlaying(true);
      setCandleOn(true);
      return;
    }

    // ĐANG phát nhạc
    if (!isBirthdayToday()) {
      // ngày thường → tắt nhạc
      audio.pause();
      setIsPlaying(false);
      setCandleOn(false);
      return;
    }

    // 🎂 NGÀY SINH NHẬT → THỔI NẾN
    if (blowing || finalMoment) return;

    setBlowing(true);
    setCandleOn(false);

    // fade out nhạc
    const fade = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        audio.pause();
        audio.volume = 1;
        clearInterval(fade);
      }
    }, 80);

    setTimeout(() => {
      setFinalMoment(true);
      setBlowing(false);
      setIsPlaying(false);
    }, 1200);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source
          //@ts-ignore
          src={musics[Math.floor(Math.random() * musics.length)]}
          type="audio/mp3"
        />
      </audio>

      {isBirthdayToday() && isPlaying && (
        <div className="confetti-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="confetti"
              style={{
                // random lệch trái phải
                ["--x" as any]: `${Math.random() * 120 - 60}px`,
                // random màu
                ["--hue" as any]: Math.random() * 360,
                animationDelay: `${Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}

      <Tooltip title={getTooltipText()} placement="top">
        <button
          className={`music-button ${isPlaying ? "playing" : ""}`}
          onClick={handleCakeClick}
          style={{ background: bg }}
        >
          <FaBirthdayCake />

          {candleOn && !blowing && <span className="candle" />}
          {blowing && <span className="smoke" />}
        </button>
      </Tooltip>
      {finalMoment && (
        <div className="final-overlay">
          <img
            src={require("../assets/final.jpg")}
            alt="memory"
            className="final-image"
          />
          <p className="final-text">
            Mừng ngày đặc biệt của vợ 💙 Cảm ơn vì đã đến bên gia đình
          </p>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
