import React from "react";
import { Carousel } from "antd";
import "./Banner.css";
const Banner: React.FC = () => {
  return (
    <div className="banner-wrapper">
      <Carousel autoplay effect="fade" dots={false}>
        <div className="banner-slide">
          <img
            //@ts-ignore
            src={require("../assets/banner1.jpg")}
            alt="Bride"
            className=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="banner-slide">
          <img
            //@ts-ignore
            src={require("../assets/banner2.jpg")}
            alt="Groom"
            className=""
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
