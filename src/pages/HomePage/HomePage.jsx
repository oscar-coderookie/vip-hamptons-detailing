import React from "react";
import "./HomePage.scss";
import { homeImages, servicesGallery } from "./../../mocks/home-gallery";

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function renderImage(item) {
  return (
    <div className="image-gallery-image">
      <img src={item.original} alt={item.originalAlt} style={{objectFit: 'cover'}} />
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="home__block">
      <ImageGallery 
        width="100%"
        items={homeImages}
        renderItem={renderImage}
        showNav={false}
        
        autoPlay={true} 
        showPlayButton={false}
        showFullscreenButton={false}/>

    </div>
  );
};

export default HomePage;
