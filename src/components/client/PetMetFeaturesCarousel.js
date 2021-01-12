import React from 'react';
import '../dashboardclient/dashboard.css'
import Carousel from "react-elastic-carousel";
import Vet from '../pictures/vetnew.png';
import Walker from '../pictures/walkernew.png';
import Trainer from '../pictures/trainer.png';
import Groomer from '../pictures/groomernew.png';
import DogHostel from '../pictures/dog hostel.png';
import Adopt from '../pictures/adopt.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 240, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

const PetMetFeaturesCarousel = () => {
    return (
        <div>
            <Carousel enableAutoPlay autoPlaySpeed={2500} breakPoints={breakPoints}>
                <item>
                    <img className="bannerimg" src={Vet} />
                </item>
                <item>
                    <a href="https://play.google.com/store/apps/details?id=com.petmet.petmet_app">
                        <img className="bannerimg" src={Walker} />
                    </a>
                </item>
                <item>
                    <a href="https://play.google.com/store/apps/details?id=com.petmet.petmet_app">
                        <img className="bannerimg" src={Trainer} />
                    </a>
                </item>
                <item>
                    <a href="https://play.google.com/store/apps/details?id=com.petmet.petmet_app">
                        <img className="bannerimg" src={Groomer} />
                    </a>
                </item>
                <item>
                    <a href="https://play.google.com/store/apps/details?id=com.petmet.petmet_app">
                        <img className="bannerimg" src={DogHostel} />
                    </a>
                </item>
                <item>
                    <a href="https://play.google.com/store/apps/details?id=com.petmet.petmet_app">
                        <img className="bannerimg" src={Adopt} />
                    </a>
                </item>
            </Carousel>
        </div>
    );
}
 
export default PetMetFeaturesCarousel;