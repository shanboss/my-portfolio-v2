import React from "react";

const ImageBG = ({ image, children }) => {
  return (
    <div className="relative flex overflow-x-auto">
      {/* Repeat the image in a row without restricting height */}
      <div className="flex">
        {[...Array(10)].map((_, index) => (
          <img
            key={index}
            src={image}
            alt={`Background ${index}`}
            className="object-cover opacity-80"
          />
        ))}
      </div>
      {/* Render children on top without restricting their height */}
      <div className="absolute inset-0 z-10 ">{children}</div>
    </div>
  );
};

export default ImageBG;
