import React, { useState } from "react";
import "./AboutUs.scss";
import { PageBlock } from "../../components";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <h3 className="aboutus__subtitle">our team</h3>
      <div className="aboutus__block">
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
          travelling to our clients’ homes wherever and whenever we are needed.
          <br />
          <br />
          We have a mobile workshop, which makes it possible to get impeccable
          same-day service right in your own garage, backyard, or boat dock.
          <br />
          <br />
          Our team of friendly professionals takes pride in the convenience and
          perfectionism of our services.
          <br />
          <br />
          We strive to provide our customers with the best possible care for
          their cars, boats, and RVs.
          <br />
          <br />
          We can make your old car or boat look like it did the day you drove it
          home from the showroom!
          <br />
          <br />
          <b> Maintain and protect the beauty of your cars and boats!</b>
        </p>
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
        bckColor="#c7c7c7"
        description={
          "We are fervently committed to enlighter our clients on the intricacies of vehicle (car and boats) maintenance, enabling astute decisions align perfectly with their needs and financial plans."
        }
        image2Url={
          "https://firebasestorage.googleapis.com/v0/b/vip-hamptons-detailing.appspot.com/o/cars%2Fmision%20y%20vision%2Fvision1.jpg?alt=media&token=25913d74-e49d-49f7-8e0f-5f3c9cd21ee4"
        }
      />
       <PageBlock
        description={
          "We champion the principles of knowledge, dissemination, transparency, and exceptionalservice to nurture enduring relationships with our clients. Opt for HAMPTONS VIP CAR AND BOAT DETAILING, where the care of your vehicle (car and boat) is our paramount concern."
        }
        image2Url={
          "https://firebasestorage.googleapis.com/v0/b/vip-hamptons-detailing.appspot.com/o/cars%2Fmision%20y%20vision%2Fvision2.jpg?alt=media&token=02bbe375-070f-4551-a45a-88a8a257bcf3"
        }
      />
        <PageBlock
        bckColor="#c7c7c7"
        description={
          "Our pledge is to serve as your trusted ally enhancing and preserving the beauty and longevity of your Car and Boat, employing our profound expertise to deliver outcomes that not only fulfill but surpass your expectations."
        }
        image2Url={
          "https://firebasestorage.googleapis.com/v0/b/vip-hamptons-detailing.appspot.com/o/cars%2Fmision%20y%20vision%2Fvision3.jpg?alt=media&token=77fc37b1-47e9-48c6-9db8-f8af1c719677"
        }
      />
    </div>
  );
};

export default AboutUs;
