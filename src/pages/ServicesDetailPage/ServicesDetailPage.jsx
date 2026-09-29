import React from 'react';
import './ServicesDetailPage.scss';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

import { boatServices } from '../../mocks/boat-services';
import { carServices } from '../../mocks/car-services';


function renderImage(item) {
    return (
        <div className="image-gallery-image">
            <img
                src={item.original}
                alt={item.originalAlt}
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
}


const ServicesDetailPage = () => {

    const { category, id } = useParams();


    const servicesByCategory = {
        boats: boatServices,
        cars: carServices,
    };


    const services = servicesByCategory[category];


    const service = services?.find(
        (item) => item.id === id
    );


    if (!service) {
        return (
            <div className="services-detail__not-found">
                <h1>Service not found</h1>
            </div>
        );
    }


    const galleryImages = service.images.map((image, index) => ({
        original: image,
        originalAlt: `${service.name} ${index + 1}`,
    }));


    return (
        <div className="services-detail__block">

            <div className="services-detail__gallery">

                {galleryImages.length > 0 ? (

                    <ImageGallery
                        width="100%"
                        showNav={false}
                        items={galleryImages}
                        showThumbnails={false}
                        slideDuration={600}
                        autoPlay={true}
                        renderItem={renderImage}
                    />

                ) : (

                    <div className="services-detail__empty">
                        <h1>{service.name}</h1>
                    </div>

                )}

            </div>


            <div className="services-detail__content">

                <h1 className="services-detail__title">
                    {service.name}
                </h1>

            </div>

        </div>
    );
};


export default ServicesDetailPage;