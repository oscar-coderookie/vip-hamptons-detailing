import React from 'react';
import './CarDetailing.scss';
import ImageGallery from 'react-image-gallery';
import {carsImages} from './../../mocks/cars-gallery';

function renderImage(item) {
    return (
      <div className="image-gallery-image">
        <img src={item.original} alt={item.originalAlt} style={{ objectFit: 'cover' }} />
      </div>
    );
  }

const CarDetailing = () => {
  return (
    <div className='cardetailing__block'>
        <h1 className='cardetailing__title'>car detailing</h1>
       <ImageGallery
        width="100%"
        showNav={false}
        autoPlay={true}
        items={carsImages}
        showThumbnails={false}
        renderItem={renderImage} />   
    </div>
  )
}

export default CarDetailing