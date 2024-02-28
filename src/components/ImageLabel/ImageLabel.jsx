import React from 'react';
import './ImageLabel.scss';

const ImageLabel = ({imgUrl, insideText }) => {
  return (
    <div className='image-label'>
        <img className='image-label__image' src={imgUrl} alt={imgUrl}/>
        <h3 className='image-label__title'>{insideText}</h3>
    </div>
  )
}

export default ImageLabel