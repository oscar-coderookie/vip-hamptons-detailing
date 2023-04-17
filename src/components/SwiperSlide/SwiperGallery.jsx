import React, { useState } from "react";

const SwiperGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="fade-gallery">
      <div className="fade-gallery__slide-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`fade-gallery__slide ${
              index === currentIndex ? "fade-gallery__slide--active" : ""
            }`}
            src={image.img}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="fade-gallery__controls">
        <button className="fade-gallery__prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="fade-gallery__next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SwiperGallery;
