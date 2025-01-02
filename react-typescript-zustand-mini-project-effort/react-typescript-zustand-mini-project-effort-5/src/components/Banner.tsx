import React from "react";
import { BannerProps } from "../interface";

const Banner: React.FC<BannerProps> = ({ bannerStyle, title, description }) => {
  return (
    <div className={`${bannerStyle} bannerContent bg-blue-400 py-[50px]`}>
      <div className="container mx-auto">
        <h2 className="text-white text-[32px] font-bold">{title}</h2>
        <p className="text-white font-semibold text-[18px]">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
