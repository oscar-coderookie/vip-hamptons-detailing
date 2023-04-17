import React from "react";
import "./HomePage.scss";
import { homeImages } from "./../../mocks/home-gallery";
import { FadeGallery, SwiperGallery } from "../../components";

const HomePage = () => {
  return (
    <div className="home__block">
      <FadeGallery images={homeImages} />
    </div>
  );
};

export default HomePage;
