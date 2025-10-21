import React from "react";
import { CaseStudies } from "./components/CaseStudies";
import { UsaaSection } from "./components/UsaaSection";
import { StudioWork } from "./components/StudioWork";
import { Photography } from "./components/Photography";
import { VideoSection } from "./components/VideoSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";

export const Body = () => {
  return (
    <div className="w-full max-w-[1198px] px-[35px] py-[35px]">
      <CaseStudies />
      <UsaaSection />
      <StudioWork />
      <Photography />
      <VideoSection />
      <AboutSection />
      <Footer />
    </div>
  );
};
