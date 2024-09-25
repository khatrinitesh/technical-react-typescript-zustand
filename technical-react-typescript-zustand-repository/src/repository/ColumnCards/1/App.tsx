import React, { useEffect, useState } from "react";
import { DestinationCardProps } from './../../../types';
import { useDestinationStore } from "../../../store/useColumnCardStore";
import './custom.css';

const RepositoryApp: React.FC = () => {


  return (
    <>
    <DestinationList/>
    </>
  );
};

export default RepositoryApp;

const DestinationList: React.FC = () => {
    const { destinations, addDestination } = useDestinationStore();
  
    useEffect(() => {
      const sampleDestinations = [
        {
          id: 1,
          title: 'Britain & Iceland',
          description: 'Explore the stunning landscapes and rich history of Britain and Iceland.',
          imageUrl: 'https://avehtml.liquid-themes.com/assets/demo/misc/fb-41.jpg',
          numberOfTours: 15,
        },
        {
          id: 2,
          title: 'Asia',
          description: 'Discover the diverse cultures and traditions across Asia.',
          imageUrl: 'https://avehtml.liquid-themes.com/assets/demo/misc/fb-42.jpg',
          numberOfTours: 7,
        },
        {
          id: 3,
          title: 'Italy & Sicily',
          description: 'Experience the art, culture, and cuisine of Italy and Sicily.',
          imageUrl: 'https://avehtml.liquid-themes.com/assets/demo/misc/fb-43.jpg',
          numberOfTours: 12,
        },
        {
          id: 4,
          title: 'South America',
          description: 'Experience the vibrant cultures and breathtaking landscapes of South America.',
          imageUrl: 'https://avehtml.liquid-themes.com/assets/demo/misc/fb-44.jpg',
          numberOfTours: 12,
        },
        {
          id: 5,
          title: 'Spain & Portugal',
          description: 'Discover the rich history and stunning landscapes of Spain and Portugal.',
          imageUrl: 'https://avehtml.liquid-themes.com/assets/demo/misc/fb-45.jpg',
          numberOfTours: 12,
        },
      ];
  
      sampleDestinations.forEach(addDestination);
    }, [addDestination]);
  
    const handleLearnMore = (title: string) => {
      alert(`Learn more about: ${title}`);
    };
  
    return (
      <div className="row">
        <div className="lqd-column col-md-8 col-md-offset-2 px-md-5">
          <header className="lqd-fancy-title text-center mb-60">
            <h2 className="text-uppercase">Top Destinations</h2>
            <p>
              For over 40 years, we’ve been helping travelers plan and enjoy effortless, fun vacations and authentic experiences around the world.
            </p>
          </header>
        </div>
        {destinations.map((destination) => (
          <div className="lqd-column col-md-4" key={destination.id}>
            <DestinationCard
              title={destination.title}
              description={destination.description}
              imageUrl={destination.imageUrl}
              numberOfTours={destination.numberOfTours}
              onLearnMore={() => handleLearnMore(destination.title)}
            />
          </div>
        ))}
      </div>
    );
  };
  



const DestinationCard: React.FC<DestinationCardProps> = ({
    title,
    description,
    imageUrl,
    numberOfTours,
    onLearnMore,
  }) => {
    return (
      <div className="fancy-box fancy-box-small fancy-box-travel hide-target" data-slideelement-onhover="true">
        <figure className="fancy-box-image loaded" style={{ backgroundImage: `url(${imageUrl})` }}>
          <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto', opacity: 0 }} />
        </figure>
        <div className="fancy-box-contents">
          <div className="ld-slideelement-visible">
            <div className="fancy-box-header">
              <span className="fancy-box-time bg-secondary">{numberOfTours} tours</span>
              <h3>{title}</h3>
            </div>
          </div>
          <div className="ld-slideelement-hidden">
            <div className="fancy-box-info">
              <p>{description}</p>
              <div className="fancy-box-footer">
                <a href="#" className="btn btn-naked text-uppercase" onClick={onLearnMore}>
                  <span>
                    <span className="btn-txt">Learn More</span>
                    <span className="btn-icon">
                      <i className="fa fa-long-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  