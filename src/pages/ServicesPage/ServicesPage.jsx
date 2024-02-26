import React from 'react';
import './ServicesPage.scss';

const ServicesPage = () => {
  return (
    <div className='services-page'>
        <h2 className="services-page__title">Services:</h2>
        <div className="services-page__block">
            <div className="services-page__description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit corporis rem odio debitis! Velit dolores dignissimos consectetur, earum placeat repellat animi autem sunt neque tempore, maiores voluptas explicabo. Quod!</p>
            </div>
            <ul className="services-page__list">
                <li className="services-page__element">
                    Painting
                    </li>
                <li className="services-page__element">Painting</li>
                <li className="services-page__element">Painting</li>
                <li className="services-page__element">Painting</li>
                <li className="services-page__element">Painting</li>
                <li className="services-page__element">Painting</li>
                <li className="services-page__element">Painting</li>
            </ul>
        </div>
        
    </div>
  )
}

export default ServicesPage