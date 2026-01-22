import React from "react";
import BirthdayBanner from "./components/BirthdayBanner";
import BalloonFloating from "./components/BalloonFloating";
import AboutBirthdayPerson from "./components/AboutBirthdayPerson";
import BirthdayMessage from "./components/BirthdayMessage";
import MusicPlayer from "./components/MusicPlayer";
import BirthdayAlbum from "./components/BirthdayAlbum";
import BirthdayCountdown from "./components/BirthdayCountdown";
import BirthdayInvitation from "./components/BirthdayInvitation";

function App() {
  return (
    <div
      className="App"
      style={{ maxWidth: "900px", textAlign: "center", margin: "0 auto" }}
    >
      <BirthdayInvitation />
      <BirthdayBanner />
      <AboutBirthdayPerson />
      <BirthdayCountdown />
      <BirthdayMessage />
      <BirthdayAlbum />
      <MusicPlayer />
      <BalloonFloating />
    </div>
  );
}

export default App;
