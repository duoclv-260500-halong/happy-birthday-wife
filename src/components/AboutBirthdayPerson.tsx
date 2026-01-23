import React from "react";
import "./AboutBirthdayPerson.css";
import { Image } from "antd";

const AboutBirthdayPerson: React.FC = () => {
  return (
    <section className="introduction">
      <div className="profile-container single">
        <div className="profile">
          <Image
            preview={false}
            //@ts-ignore
            src={require("../assets/anhcuoi1.jpg")}
            alt="My Love"
            className="profile-image"
          />

          <div className="profile-info">
            <h2>Đỗ Thị Quyên 💖</h2>

            <p>Người con gái anh yêu thương nhất</p>
            <p>Là nụ cười mỗi sáng anh thức dậy</p>
            <p>Là bình yên trong những ngày mệt mỏi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBirthdayPerson;
