import React from "react";
import { BannerState } from "../interface";

const Banner: React.FC<BannerState> = ({ children, bannerStyle }) => {
  return (
    <>
      <div className={`${bannerStyle} bannerContent py-[50px] bg-orange-200`}>
        <div className="container mx-auto px-[1rem]">{children}</div>
      </div>
    </>
  );
};

export default Banner;
