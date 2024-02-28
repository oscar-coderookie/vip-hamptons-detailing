import React, { useState } from "react";
import "./AboutUs.scss";
import { PageBlock } from "../../components";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <h3 className="aboutus__subtitle">our team</h3>
      <div className="aboutus__block1">
        <div className="aboutus__block">
          <div className="aboutus__info">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/vip-hamptons-detailing.appspot.com/o/boats%2Faboutus-desktop.jpg?alt=media&token=977a517a-e014-4c45-98ca-85ae6b9c8a7c"
              alt="aboutus"
              className="aboutus__image"
            />
            <p className="aboutus__text">
              <b> Hamptons VIP Car and Boat Detailing</b> has been providing
              superior detail service to Hamptons residents for the last 11
              years.
              <br />
              <br />
              We are located in <b>East Hampton</b> , but cover a wide area,
              travelling to our clients’ homes wherever and whenever we are
              needed.
              <br />
              <br />
              We have a mobile workshop, which makes it possible to get
              impeccable same-day service right in your own garage, backyard, or
              boat dock.
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
              We can make your old car or boat look like it did the day you
              drove it home from the showroom!
              <br />
              <br />
              <b> Maintain and protect the beauty of your cars and boats!</b>
            </p>
          </div>
        </div>
      </div>
      <h3 className="aboutus__subtitle">our mission:</h3>
      <PageBlock
        bckColor="#ebeded"
        description={
          "we are dedicated to providing the highest quality car detailing and boat detailing services to our customers. Our mission is to exceed your expectations and leave your car and boat  looking brand new."
        }
        image2Url={
          "https://firebasestorage.googleapis.com/v0/b/vip-hamptons-detailing.appspot.com/o/cars%2Fmision%20y%20vision%2FMesa%20de%20trabajo%201%20copia%202.jpg?alt=media&token=a15f6616-787b-44a5-8a7e-213bdcc39055"
        }
      />
      <PageBlock
        description={
          "With our lives becoming more and more busy, with work, travel, I saw a opportunity for a white glove car detailing and boat detailing company that caters to all busy families out there. The expense of new and used cars"
        }
        image2Url={
          "https://firebasestorage.googleapis.com/v0/b/vip-hamptons-detailing.appspot.com/o/cars%2Fmision%20y%20vision%2FMesa%20de%20trabajo%201%20copia%203.jpg?alt=media&token=d007a0c6-1e4a-4398-a922-9216a97bb48e"
        }
      />
      <PageBlock
      bckColor="#ebeded"
        description={
          "today is through the roof. Its so important to keep up with the maintenance of your vehicles. Here in EAST HAMPTON NY. it is amazing and beautiful but comes with a price. The suns heat and UV rays, salt Air and water, storms snow and everyday driving. We strive to help you keep up the value of your car and boat by providing the absolute best car detailing and boat detailing experience and protection."
        }
        image2Url={
          "https://firebasestorage.googleapis.com/v0/b/vip-hamptons-detailing.appspot.com/o/cars%2Fmision%20y%20vision%2FMesa%20de%20trabajo%201%20copia.jpg?alt=media&token=45f2392b-4429-4228-b619-a9bae0722b0d"
        }
      />
      <h3 className="aboutus__subtitle">our vision:</h3>
      <PageBlock
      bckColor="#ebeded"
        description={
          "today is through the roof. Its so important to keep up with the maintenance of your vehicles. Here in EAST HAMPTON NY. it is amazing and beautiful but comes with a price. The suns heat and UV rays, salt Air and water, storms snow and everyday driving. We strive to help you keep up the value of your car and boat by providing the absolute best car detailing and boat detailing experience and protection."
        }
        image2Url={
          "https://firebasestorage.googleapis.com/v0/b/vip-hamptons-detailing.appspot.com/o/cars%2Fmision%20y%20vision%2FMesa%20de%20trabajo%201%20copia.jpg?alt=media&token=45f2392b-4429-4228-b619-a9bae0722b0d"
        }
      />
    </div>
  );
};

export default AboutUs;
