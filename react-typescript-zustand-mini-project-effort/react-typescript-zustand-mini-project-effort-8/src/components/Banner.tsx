import React from "react";
import { BannerProps } from "../interface";

const Banner: React.FC<BannerProps> = ({ title, desc, bannerStyle }) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px] bg-blue-500`}>
      <div className="container mx-auto">
        <h2 className="text-2xl">{title}</h2>
        <p className="desc text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
