import React, { useState } from "react";
import './PrivateQuestions.css';
const PrivateQuestions = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    // Gửi question tới backend hoặc lưu tạm thời
    console.log("Câu hỏi đã gửi:", question);
    setSubmitted(true);
    setQuestion("");
  };

  return (
    <div className="private-question-form">
      <h3>💌 Gửi câu hỏi riêng cho cô dâu & chú rể</h3>
      <p className="hint">Những câu hỏi đặc biệt làm thách thức hai bạn trẻ!<br />(Để lại số điện thoại để nhận câu trả lời!)</p>
      {submitted ? (
        <p className="thankyou">Cảm ơn bạn đã gửi lời nhắn 💖</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Nhập câu hỏi hoặc lời nhắn của bạn..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
          />
          <button type="submit">Gửi ngay</button>
        </form>
      )}
    </div>
  );
};

export default PrivateQuestions;
