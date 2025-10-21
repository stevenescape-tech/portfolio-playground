import React, { useState, useCallback } from "react";
import { OptimizedImage } from "../../../../../components/OptimizedImage";

const photos = [
  {
    id: 1,
    thumbnail: "https://c.animaapp.com/0dOW9rb9/img/manhattan-up.png",
    fullsize: "https://c.animaapp.com/0dOW9rb9/img/purgatory-vertical.png",
    alt: "Manhattan up"
  },
  {
    id: 2,
    thumbnail: "https://c.animaapp.com/0dOW9rb9/img/album-cover-1-1.png",
    fullsize: "https://c.animaapp.com/0dOW9rb9/img/a_nightmare_1-2.png",
    alt: "Album cover"
  },
  {
    id: 3,
    thumbnail: "https://c.animaapp.com/0dOW9rb9/img/dt-1-2.png",
    fullsize: "https://c.animaapp.com/0dOW9rb9/img/manhattan.jpg",
    alt: "Downtown"
  }
];

export const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = useCallback(() => setSelectedImage(null), []);

  return (
    <section className="mb-[35px]">
      <p className="font-['Courier_Prime'] text-black text-base leading-normal mb-[35px]">
        Photography has always been a personal outlet, a way to slow down and
        observe. I've photographed national bands on stage, but I'm most at
        home wandering city streets in the rain or capturing fog-drenched
        skylines.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mb-[35px]">
        {photos.map((photo) => (
          <OptimizedImage
            key={photo.id}
            src={photo.thumbnail}
            alt={photo.alt}
            className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(photo)}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ))}
      </div>

      <OptimizedImage
        src="https://c.animaapp.com/0dOW9rb9/img/line-break-2.svg"
        alt="Line break"
        className="w-full"
      />

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
          onClick={closeModal}
        >
          <button
            className="absolute top-8 right-8 text-white hover:opacity-70 transition-opacity z-50 bg-transparent border-0 p-0 cursor-pointer"
            onClick={closeModal}
            aria-label="Close"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <img
            src={selectedImage.fullsize}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            loading="eager"
          />
        </div>
      )}
    </section>
  );
};
