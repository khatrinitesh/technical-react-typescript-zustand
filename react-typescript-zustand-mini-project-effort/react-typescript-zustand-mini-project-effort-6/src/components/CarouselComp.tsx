import React, { useEffect } from "react";
import { useCarouselStore } from "../store/useCarouselStore";

const CarouselComp: React.FC = () => {
  const {
    currentIndex,
    images,
    isAutoplay,
    nextSlide,
    prevSlide,
    toggleAutoplay,
    setCurrentIndex,
  } = useCarouselStore();

  // Autoplay logic (changes every 3 seconds)
  useEffect(() => {
    if (isAutoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Clean up the interval on unmount
    }
  }, [isAutoplay, nextSlide]);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <div className="relative w-full max-w-lg mx-auto">
        <div className="relative">
          {/* Display current image */}
          {images.length > 0 && (
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-[400px] object-cover"
            />
          )}

          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
            onClick={nextSlide}
          >
            &gt;
          </button>

          {/* Autoplay toggle button */}
          <button
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
            onClick={toggleAutoplay}
          >
            {isAutoplay ? "Stop Autoplay" : "Start Autoplay"}
          </button>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`w-16 h-16 p-1 rounded-lg border-2 ${
                index === currentIndex ? "border-red-500" : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselComp;
