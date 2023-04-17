import React, { useState } from "react";
import "./FadeGallery.scss"; // Importa los estilos en SCSS
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const FadeGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para el índice de la imagen actual

  const handlePrevious = () => {
    // Actualiza el estado de currentImageIndex para retroceder a la imagen anterior
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    // Actualiza el estado de currentImageIndex para avanzar a la siguiente imagen
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-gallery">
      <div className="image-gallery__container">
        {/* Renderiza la imagen actual */}
        <img
          className="image-gallery__image"
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />

          {/* Renderiza los botones de flecha */}
          <button className="image-gallery__button image-gallery__button--previous" onClick={handlePrevious}>
        <FaChevronCircleLeft/>
      </button>
      <button className="image-gallery__button image-gallery__button--next" onClick={handleNext}>
        <FaChevronCircleRight/>
      </button>

      </div>
    </div>
  );
};

export default FadeGallery;
