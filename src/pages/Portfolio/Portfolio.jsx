import React from "react";
import { ImageLabel, NetflixGallery } from "../../components";
import { servicesGallery } from "./../../mocks/home-gallery";
import "./Portfolio.scss";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio__block">
      <div className="portfolio__boat">
        <NavLink to="/portfolio/boats" className="portfolio__link">
          <h2 className="portfolio__subtitle">Boat Detailing:</h2>
        </NavLink>
      </div>
      <div className="portfolio__car">
        <NavLink to="/portfolio/cars" className="portfolio__link">
          <h2 className="portfolio__subtitle">Car Detailing:</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Portfolio;
