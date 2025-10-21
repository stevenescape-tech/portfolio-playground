import React from "react";
import { Body } from "./sections/Body";
import { HeroImage } from "./sections/HeroImage";

export const FullWidth = () => {
  return (
    <div className="flex flex-col items-center bg-white w-full min-h-screen">
      <HeroImage />
      <Body />
    </div>
  );
};
