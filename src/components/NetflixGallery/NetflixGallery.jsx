import React from "react";
import './NetflixGallery.scss';

const NetflixGallery = ({ images }) => {
  return (
    <div className="container">
      <div className="row">
        {images.map((image, index) => {
          return (
            <div className="col" key={index}>
              <p className="captions">{image.name}</p>
              <img src={image.img} className="box"/>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NetflixGallery;
