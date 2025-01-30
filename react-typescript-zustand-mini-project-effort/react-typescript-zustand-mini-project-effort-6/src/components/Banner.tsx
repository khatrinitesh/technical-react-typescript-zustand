import React from "react";
import { BannerType } from "../interface";

const Banner: React.FC<BannerType> = ({ title, description, bannerStyle }) => {
  return (
    <div className={`${bannerStyle} bannerContent p-[2vh] bg-orange-300`}>
      <div className="container mx-auto">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
