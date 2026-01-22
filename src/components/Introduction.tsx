import React from "react";
import "./Introduction.css";

const Introduction: React.FC = () => {
  return (
    <section className="introduction">
      <div className="profile-container">
        <div className="profile">
          <img
            //@ts-ignore
            src={require("../assets/codau.jpg")}
            alt="Cô Dâu"
            className="profile-image"
          />
          <div className="profile-info">
            <h2>Cô Dâu: Đỗ Thị Quyên</h2>
            <p>Bố: Đỗ Sỹ Tuân</p>
            <p>Mẹ: Phùng Thị Yến</p>
          </div>
        </div>

        <div className="profile">
          <img
            //@ts-ignore
            src={require("../assets/chure.jpg")}
            alt="Chú Rể"
            className="profile-image"
          />
          <div className="profile-info">
            <h2>Chú Rể: Lê Văn Được</h2>
            <p>Mẹ: Đinh Thị Hợp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
