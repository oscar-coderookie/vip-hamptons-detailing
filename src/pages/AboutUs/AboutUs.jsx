import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus__block">
        <div className="aboutus__title">
          <h2>Our Team:</h2>
        </div>
       
        <div className="aboutus__info">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/vip-hamptons-detailing.appspot.com/o/boats%2Faboutus-desktop.jpg?alt=media&token=977a517a-e014-4c45-98ca-85ae6b9c8a7c"
          alt="aboutus"
          className="aboutus__image"
        />
          <p className="aboutus__text">
            <b> Hamptons VIP Car and Boat Detailing</b> has been providing
            superior detail service to Hamptons residents for the last 11 years.
            <br />
            <br />
            We are located in <b>East Hampton</b> , but cover a wide area,
            travelling to our clients’ homes wherever and whenever we are
            needed.
            <br />
            <br />
            We have a mobile workshop, which makes it possible to get impeccable
            same-day service right in your own garage, backyard, or boat dock.
            <br />
            <br />
            Our team of friendly professionals takes pride in the convenience
            and perfectionism of our services.
            <br />
            <br />
            We strive to provide our customers with the best possible care for
            their cars, boats, and RVs.
            <br />
            <br />
            We can make your old car or boat look like it did the day you drove
            it home from the showroom!
            <br />
            <br />
            <b> Maintain and protect the beauty of your cars and boats!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
