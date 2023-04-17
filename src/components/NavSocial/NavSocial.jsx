import React from "react";
import './NavSocial.scss';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const NavSocial = () => {
  return (
    <div className="nav__social">
      <a
        href="https://m.facebook.com/people/Hamptons-Vip-Car-Boat-Detailing/100063706893887/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook className="nav__icons" />
      </a>

      <a
        href="https://twitter.com/viphamptons"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className="nav__icons" />
      </a>
    </div>
  );
};

export default NavSocial;