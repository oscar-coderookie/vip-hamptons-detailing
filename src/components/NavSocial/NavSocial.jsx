import React from "react";
import "./NavSocial.scss";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaTiktok } from "react-icons/fa";
import {FaXTwitter
 } from "react-icons/fa6"

const NavSocial = () => {
  return (
    <div className="nav__social">
      <p>Social Networks:</p>
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
        <FaXTwitter className="nav__icons" />
      </a>
      <a
        href="https://wa.link/l6j1hm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="nav__icons" />
      </a>
      <a
        href="https://www.instagram.com/hamptonsvipdetailing/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="nav__icons" />
      </a>
         <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTiktok className="nav__icons" />
      </a>

    </div>
  );
};

export default NavSocial;
