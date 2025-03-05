import React from 'react';
import { BannerProps } from '../interface';

const Banner:React.FC<BannerProps> = ({title,description,bannerStyle}) => {
  return (
    <>
      <div className={`${bannerStyle} bannerContent py-[50px] bg-blue-200`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Banner;
