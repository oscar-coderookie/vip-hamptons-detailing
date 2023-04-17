import React from "react";
import "./WhatsappBtn.scss";
import WppLogo from './../../assets/img/wpp.png';

const WhatsappBtn = () => {
  return (
    <a
      href="https://wa.link/l6j1hm"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      
      <img className="whatsapp__icon" src={WppLogo} alt={WppLogo} />
    </a>
  );
};

export default WhatsappBtn;
