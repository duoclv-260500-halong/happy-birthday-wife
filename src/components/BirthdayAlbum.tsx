import React from "react";
import "./BirthdayAlbum.css";
import { Image, Modal } from "antd";

const images = [
  require("../assets/anhcuoi1.jpg"),
  require("../assets/anhcuoi2.jpg"),
  require("../assets/anhcuoi3.jpg"),
  require("../assets/anhcuoi4.jpg"),
  require("../assets/anhcuoi5.jpg"),
  require("../assets/anhcuoi6.jpg"),
  require("../assets/anhcuoi7.jpg"),
  require("../assets/anhcuoi8.jpg"),
  require("../assets/anhcuoi9.jpg"),
  require("../assets/anhcuoi10.jpg"),
  require("../assets/anhcuoi11.jpg"),
  require("../assets/anhcuoi12.jpg"),
  require("../assets/anhcuoi13.jpg"),
  require("../assets/anhcuoi18.jpg"),
  require("../assets/anhcuoi21.jpg"),
  require("../assets/banner1.jpg"),
  require("../assets/banner2.jpg"),
  require("../assets/anh1.jpg"),
];

const BirthdayAlbum: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="wedding-album">
      <h3>📸 Khoảnh khắc đáng nhớ</h3>

      <div className="album-grid">
        {images.map((image, index) => (
          <div key={index} className="album-item">
            <img
              src={image}
              alt={`Memory ${index + 1}`}
              onClick={() => {
                setCurrentImage(index);
                setVisible(true);
              }}
            />
          </div>
        ))}
      </div>

      <Modal
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        centered
        maskClosable
        closable={false}
        width="80%"
        style={{ maxWidth: "80%" }}
      >
        <div className="album-modal">
          <button className="nav-btn left" onClick={prevImage}>
            ‹
          </button>

          <Image
            src={images[currentImage]}
            alt=""
            className="modal-image"
          />

          <button className="nav-btn right" onClick={nextImage}>
            ›
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BirthdayAlbum;
