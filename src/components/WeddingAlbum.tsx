import React from "react";
import "./WeddingAlbum.css";
import { Modal } from "antd";

const images = [
  //@ts-ignore
  require("../assets/anhcuoi1.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi2.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi3.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi4.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi5.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi6.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi7.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi8.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi9.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi10.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi11.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi12.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi13.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi18.jpg"),
  //@ts-ignore
  require("../assets/anhcuoi21.jpg"),
];
const WeddingAlbum: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);
  return (
    <div className="wedding-album">
      <h3>Album ảnh cưới</h3>
      <div className="album-grid">
        {images.map((image, index) => (
          <div key={index} className="album-item">
            <img
              src={image}
              alt={`Wedding ${index + 1}`}
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
        width={"80%"}
        closable={false}
        style={{
          maxWidth: "600px",
        }}
      >
        <img
          src={images[currentImage]}
          alt={`Wedding ${currentImage + 1}`}
          style={{
            height: "80vh",
            display: "flex",
            margin: "auto",
            maxWidth: "100%",
            objectFit: "cover",
            maxHeight: "550px",
          }}
        />
      </Modal>
    </div>
  );
};

export default WeddingAlbum;
