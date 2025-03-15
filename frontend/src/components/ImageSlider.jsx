import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  // Array of image paths (adjust paths as needed)
  const images = [
    "/image1.svg",
    "/image2.svg",
    "/image3.svg",
    "/image4.svg",
    "/image5.svg",
    "/image6.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: 'translateX(-${currentIndex * 100}%) '}}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={'Slide ${index + 1}'}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-colors"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default ImageSlider;