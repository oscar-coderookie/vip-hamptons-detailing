import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from './../../assets/img/logo.png';
import { Slant as Hamburger } from "hamburger-react";
import NavSocial from "../NavSocial/NavSocial";

const Header = () => {

  const [open, setOpen] = useState(false);
  const ubication = window.location.pathname;

  const menuLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Contact", url: "/contact" },

  ];

  return (
    <div className="header">
      <div className="header__phone">
        <p>Booking: +1(862)397-9206</p>
      </div>
      <div className="header-block">
        <div className="header-menu">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            easing="ease-in"
            rounded
            hideOutline={false}
            onClick={() => setOpen(!open)}
            color="#ffffff"
          ></Hamburger>
        </div>
        <div className="header-logo">
          <img className="header-img" src={logo} alt="logo-fabs" />
        </div>


      </div>

      <nav className={`header-nav ${open ? 'slide-in' : 'slide-out'}`}>
        <div className="header-nav__sections">

          {menuLinks.map((links, index) => {
            return (
              <NavLink
                key={index}
                to={links.url}
                className="header-nav__links"
                onClick={() => setOpen(!open)}
              >
                {links.name}
              </NavLink>
            );
          })}
        </div>
        <NavSocial />
      </nav>

    </div>
  );
};

export default Header;