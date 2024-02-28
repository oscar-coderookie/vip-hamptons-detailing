import React from "react";
import "./ServicesPage.scss";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h2 className="services-page__title">Services:</h2>
      <div className="services-page__block1">
        <div className="services-page__description">
          <h3 className="services-page__subtitle">BOAT DETAILING:</h3>
        </div>
        <ul className="services-page__list">
          <li className="services-page__element">Ceramic coating </li>
          <li className="services-page__element">Gelcoat correction</li>
          <li className="services-page__element">Boat interior detailing</li>
          <li className="services-page__element">Teak cleak </li>
          <li className="services-page__element">
            Windows water spot remover{" "}
          </li>
          <li className="services-page__element">Weekly wash</li>
        </ul>
      </div>
      <div className="services-page__block2">
        <div className="services-page__description">
          <h3 className="services-page__subtitle">CAR DETAILING:</h3>
        </div>
        <ul className="services-page__list">
          <li className="services-page__element">Paint correction  </li>
          <li className="services-page__element">Ceramic coating </li>
          <li className="services-page__element">Interior detailing</li>
          <li className="services-page__element">Weekly wash</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
