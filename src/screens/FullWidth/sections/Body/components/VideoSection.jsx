import React from "react";
import { OptimizedImage } from "../../../../../components/OptimizedImage";
import { VimeoVideo } from "../../../../../components/VimeoVideo";

export const VideoSection = () => {
  return (
    <section className="mb-[35px]">
      <p className="font-['Courier_Prime'] text-black text-base leading-normal mb-[35px]">
        A few years ago, a friend's band asked if I could shoot a music video.
        I said yes, even though I'd never filmed one before. I knew
        photography and loved light, so I figured I'd learn by doing. Since
        then, we've made five videos together — one shot entirely on iPhone
        and animated with AI. I'm always up for projects that push boundaries
        and force me to create in ways I haven't before.
        <br />
        <br />
        Here is a short reel exploring some of that work
      </p>

      <VimeoVideo videoId="1128217579" title="Video Reel" aspectRatio="horizontal" />

      <div className="mt-[35px]">
        <OptimizedImage
          src="https://c.animaapp.com/0dOW9rb9/img/line-break-3.svg"
          alt="Line break"
          className="w-full"
        />
      </div>
    </section>
  );
};
