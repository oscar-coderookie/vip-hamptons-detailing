import React from 'react'
import './AboutUs.scss';

const AboutUs = () => {
    return (
        <div className="aboutus">
            <h2 className='aboutus__title'>Our Team:</h2>
            <div className='aboutus__block'>
                <img src='https://previews.dropbox.com/p/thumb/ACOrq-igzMymbxkwRFKpWHyaB1f_e9Qfepo-kjhh7KqRECZJR5d1XQHI4Y6XuRNco3FHiHa5De9noo8iIOSJJ7WPOwn1zqzLJrNiPcyFiUufLtlBXzCbJ2Wt9B_zflTT90IXhxrH3OiQBrPZBDn4tbLMogq2Mqa7KSCesBLM0Bn3i3ZVUSIvL7utPl9qgWxVnFsIehNzgA6MJlEOA8TaT7rjxlR06USie0f55u1j06guIoXHwnlCp7vilVWSozGdWYklefAxhF_WRdoS5NFNp8kRv6suJHLx26Uk3iJ457Rejso5_gMAMwzfUtrDn26OLlB7fRaPgwJKs3Vuuufbm1Xd/p.jpeg' alt="aboutus" className="aboutus__image" />
                <div className="aboutus__info">

                    <p className="aboutus__text">
                        <b> Hamptons VIP Car and Boat Detailing</b> has been providing superior detail service to Hamptons residents for the last 11 years.

                        <br /><br />
                        We are located in <b>East Hampton</b> , but cover a wide area, travelling to our clients’ homes wherever and whenever we are needed.
                        <br /><br />
                        We have a mobile workshop, which makes it possible to get impeccable same-day service right in your own garage, backyard, or boat dock.
                        <br /><br />
                        Our team of friendly professionals takes pride in the convenience and perfectionism of our services.

                        <br /><br />
                        We strive to provide our customers with the best possible care for their cars, boats, and RVs.

                        <br /><br />
                        We can make your old car or boat look like it did the day you drove it home from the showroom!
                        <br /><br />

                        <b> Maintain and protect the beauty of your cars and boats!</b>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default AboutUs