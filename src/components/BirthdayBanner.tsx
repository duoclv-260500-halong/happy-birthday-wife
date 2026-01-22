import React from "react";
import { Carousel } from "antd";
import "./BirthdayBanner.css";

const BirthdayBanner: React.FC = () => {
  return (
    <div className="banner-wrapper">
      <Carousel autoplay effect="fade" dots={false}>
        {["banner1.jpg"].map((img, index) => (
          <div className="banner-slide" key={index}>
            <img
              //@ts-ignore
              src={require(`../assets/${img}`)}
              alt="Birthday"
            />
            <div className="banner-overlay">
              <div className="banner-text">
                <h1>Happy Birthday 🎂</h1>
                <h2>My Love</h2>
                <p>
                  Em đã làm mỗi ngày đều trở nên đặc biệt 💖
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BirthdayBanner;
