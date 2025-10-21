import React, { useState, useEffect } from "react";

export const HoverCard = ({ defaultImage, hoverImage, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === 2) setImagesLoaded(true);
      };
    };

    preloadImage(defaultImage);
    preloadImage(hoverImage);
  }, [defaultImage, hoverImage]);

  return (
    <div
      className={`w-full h-full bg-cover bg-center transition-all duration-300 ${className}`}
      style={{
        backgroundImage: `url(${isHovered ? hoverImage : defaultImage})`,
        opacity: imagesLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};
