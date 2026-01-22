import React from "react";
import Banner from "./components/Banner";
import FloatSocialButtons from "./components/FloatSocialButtons";
import HeartFloating from "./components/HeartFloating";
import Introduction from "./components/Introduction";
import LoveStory from "./components/LoveStory";
import MusicPlayer from "./components/MusicPlayer";
import PrivateQuestions from "./components/PrivateQuestions";
import WeddingAlbum from "./components/WeddingAlbum";
import WeddingDate from "./components/WeddingDate";
import WeddingLocation from "./components/WeddingLocation";
import WishForm from "./components/WishForm";
import WeddingGift from "./components/WeddingGift";
import Invitation from "./components/Invitation";

function App() {
  return (
    <div className="App" style={{ maxWidth: '900px', textAlign: 'center', margin: '0 auto' }}>
      <Invitation />
      <Banner />
      <Introduction />
      <WeddingDate />
      <LoveStory />
      <WeddingLocation />
      <WeddingAlbum />
      {/* <WishForm /> */}
      {/* <PrivateQuestions /> */}
      <WeddingGift />
      <MusicPlayer />
      <FloatSocialButtons />
      <HeartFloating />
    </div>
  );
}

export default App;
