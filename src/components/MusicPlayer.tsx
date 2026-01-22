import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import "./MusicPlayer.css";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source
          //@ts-ignore
          src={require("../assets/I DO.mp3")}
          type="audio/mp3"
        />
      </audio>
      <button
        className={`music-button ${isPlaying ? "playing" : ""}`}
        onClick={toggleMusic}
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </>
  );
};

export default MusicPlayer;
