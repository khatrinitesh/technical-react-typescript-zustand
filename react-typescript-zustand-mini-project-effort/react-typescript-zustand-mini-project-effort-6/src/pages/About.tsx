import React, { useEffect } from "react";
import Banner from "../components/Banner";
import AccordionComp from "../components/AccordionComp";
import Profile from './../components/Profile';
import CarouselComp from "../components/CarouselComp";
import { useCarouselStore } from "../store/useCarouselStore";
import AnimatedIcon from "../components/AnimatedIcon";
import Card from "../components/Card";
import RainAnimation from "../components/RainAnimation";
import ToggleSwitchComp from "../components/ToggleSwitchComp";

const About: React.FC = () => {
  const { setImages } = useCarouselStore();

  // Initialize images in the store
  useEffect(() => {
    const images = [
      "https://placehold.co/600x400/EEE/31343C",
      "https://placehold.co/600x400/EEE/ff0000",
      "https://placehold.co/600x400/EEE/ff8855",
    ];
    setImages(images);
  }, [setImages]);
  return (
    <>
      <div className="content">
        <Banner
          title="About"
          description="Qui duis ut proident dolor amet occaecat non eiusmod labore adipisicing."
        />
        <div className="container mx-auto h-full">
          <AccordionComp />
          <h1>HeadTitle</h1>
          <div class="bg-primarycolor text-white text-[30px]">
            This has a custom primary color background.
          </div>
          <Profile/>
          <CarouselComp/>
          <AnimatedIcon/>
          <Card/>
          <ToggleSwitchComp/>
        </div>
      </div>
    </>
  );
};

export default About;
