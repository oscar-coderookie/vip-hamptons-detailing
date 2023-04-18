import React from "react";
import { NetflixGallery } from "../../components";
import { servicesGallery } from "./../../mocks/home-gallery";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio__block">
      <NetflixGallery images={servicesGallery} />
    </div>
  );
};

export default Portfolio;
