import React from 'react';
import './PageBlock.scss';

const PageBlock = ({image2Url,bckColor,description  }) => {
  return (
    <div className='page-block'style={{backgroundColor: bckColor}} >
        <div className="page-block__side1">
          <p className='page-block__description'>{description}</p>
        </div>
        <div className="page-block__side2">
          <img src={image2Url} alt={image2Url} />
        </div>
    </div>
  )
}

export default PageBlock