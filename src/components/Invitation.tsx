import React from "react";
import "./Invitation.css";

const getInviteeName = () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("to");
  return name ? decodeURIComponent(name) : "Chú/Bác/Anh/Chị/Bạn";
};

const getObjectName = () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("for");
  const nameDecoded = decodeURIComponent(name ?? "");
  if (nameDecoded === "1") return "con chúng tôi";
  if (nameDecoded === "2") return "vợ chồng chúng tôi";
  return "Cháu/Em/Mình";
};

const Invitation: React.FC = () => {
  const invitee = getInviteeName();
  const objectName = getObjectName();
  return (
    <div className="invitation-section">
      <p>
        <strong>Trân trọng kính mời {invitee}</strong> <br />
        Tới dự bữa cơm thân mật mừng hạnh phúc của hai {objectName}.
      </p>
    </div>
  );
};

export default Invitation;
