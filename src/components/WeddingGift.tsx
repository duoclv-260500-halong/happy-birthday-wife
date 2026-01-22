import React, { useState } from "react";
import { Modal, Button, Image } from "antd";
import "./WeddingGift.css";
const WeddingGift: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="wedding-gift-section">
      <Button
        type="primary"
        onClick={openModal}
        className="wedding-gift-toggle"
      >
        Xem Thông Tin Mừng Cưới
      </Button>

      <Modal
        title="Thông Tin Mừng Cưới"
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        className="wedding-gift-modal"
      >
        <div className="wedding-gift-info">
          <div className="wedding-gift-method">
            <h3>Chuyển khoản ngân hàng:</h3>
            <p>Chủ tài khoản: LE VAN DUOC</p>
            <p>Số tài khoản: 0931 0042 19170</p>
            <p>Ngân hàng: Vietcombank</p>
            <p>Để lại nội dung chúc phúc cho đôi trẻ nhé</p>
          </div>
          <div className="wedding-gift-qr wedding-gift-method">
            <h3>Quét mã QR để chuyển khoản:</h3>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Image
                width={300}
                //@ts-ignore
                src={require("../assets/QR.png")}
                alt="QR Code"
                className="qr-code"
              />
            </div>
          </div>
          <div className="wedding-gift-method">
            <h3>Chuyển khoản ngân hàng:</h3>
            <p>Chủ tài khoản: DO THI QUYEN</p>
            <p>Số tài khoản: 1903 8207 343 011</p>
            <p>Ngân hàng: Techcombank</p>
            <p>Để lại nội dung chúc phúc cho đôi trẻ nhé</p>
          </div>
        </div>
        <div style={{ width: "100%", textAlign: "right" }}>
          <Button onClick={closeModal} className="close-modal">
            Đóng
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default WeddingGift;
