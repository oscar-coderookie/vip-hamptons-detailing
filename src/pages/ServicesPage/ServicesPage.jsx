import { Link } from "react-router-dom";
import "./ServicesPage.scss";
import { boatServices } from "../../mocks/boat-services";
import { carServices } from "../../mocks/car-services";


const ServicesPage = () => {
  return (
    <div className="services-page">

      <h2 className="services-page__title">
        Services:
      </h2>


      {/* BOAT DETAILING */}
      <div className="services-page__block1">

        <div className="services-page__description">
          <h3 className="services-page__subtitle">
            BOAT DETAILING:
          </h3>
        </div>

        <ul className="services-page__list">
          {boatServices.map((service) => (
            <li
              className="services-page__element"
              key={service.id}
            >
              <Link to={`/services/boats/${service.id}`}>
                {service.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>


      {/* CAR DETAILING */}
      <div className="services-page__block2">

        <div className="services-page__description">
          <h3 className="services-page__subtitle">
            CAR DETAILING:
          </h3>
        </div>

        <ul className="services-page__list">
          {carServices.map((service) => (
            <li
              className="services-page__element"
              key={service.id}
            >
              <Link to={`/services/cars/${service.id}`}>
                {service.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
};


export default ServicesPage;