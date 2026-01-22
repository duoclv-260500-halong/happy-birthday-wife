import React from "react";
import "./WeddingLocation.css";
const WeddingLocation: React.FC = () => {
  return (
    <div className="wedding-location">
      <h2>Địa điểm cưới</h2>
      <div className="location-container">
        {/* Lễ cưới - cô dâu */}
        <div className="location">
          <h3>Lễ cưới - Cô dâu</h3>
          <img
            //@ts-ignore
            src={require("../assets/lecuoicodau.webp")}
            alt="Lễ cưới - Cô dâu"
            className="location-image"
          />
          <p>
            Địa chỉ: Tổ 3 - Xóm 3, thôn Long Phú, xã Hòa Thạch, huyện Quốc Oai,
            thành phố Hà Nội
          </p>
          <p>Thời gian: 16:00, ngày 31 tháng 05 năm 2025</p>
          <p>(Âm lịch: ngày 05 tháng 05 năm 2025)</p>
          <a
            href="https://maps.app.goo.gl/LBosTmucYmZnhnkB9"
            target="_blank"
            rel="noopener noreferrer"
            className="google-map-link"
          >
            Xem địa điểm trên bản đồ
          </a>
        </div>

        {/* Lễ cưới - chú rể */}
        <div className="location">
          <h3>Lễ cưới - Chú rể</h3>
          <img
            //@ts-ignore
            src={require("../assets/lecuoichure.webp")}
            alt="Lễ cưới - Chú rể"
            className="location-image"
          />
          <p>
            Địa chỉ: Trung Tâm Hội Nghị Tiệc Cưới Hồ Cô Tiên Palace, phường Bạch
            Đằng, thành phố Hạ Long, tỉnh Quảng Ninh
          </p>
          <p>Thời gian: 11:30 PM, ngày 1 tháng 6 năm 2025</p>
          <p>(Âm lịch: ngày 06 tháng 05 năm 2025)</p>
          <a
            href="https://maps.app.goo.gl/7WSr1CuEKf1Yg5md6"
            target="_blank"
            rel="noopener noreferrer"
            className="google-map-link"
          >
            Xem địa điểm trên bản đồ
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeddingLocation;
