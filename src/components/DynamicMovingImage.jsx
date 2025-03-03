import React from "react";

const DynamicMovingImage = () => {
  return (
    <div className="overflow-hidden relative w-full h-164 bg-gray-800">
      <img
        src="/slider-img.png" // update this path to your actual image
        alt="Dynamic Moving"
        className="absolute animate-slide"
        style={{ top: 0, left: 0, height: "100%", width: "auto" }}
      />
    </div>
  );
};

export default DynamicMovingImage;
