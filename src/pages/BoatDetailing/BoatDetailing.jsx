import React from 'react';
import './BoatDetailing.scss';
import { boatImages } from '../../mocks/boat-gallery';
import ImageGallery from 'react-image-gallery';

function renderImage(item) {
  return (
    <div className="image-gallery-image">
      <img src={item.original} alt={item.originalAlt} style={{ objectFit: 'cover' }} />
    </div>
  );
}

const BoatDetailing = () => {
  return (
    <div className='boatdetailing__block'>

      <ImageGallery
        width="100%"
        showNav={false}
        items={boatImages}
        showThumbnails={false}
        slideDuration={600}
        renderItem={renderImage} />

    </div>
  )
}

export default BoatDetailing