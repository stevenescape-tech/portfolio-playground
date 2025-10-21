import React from "react";
import { OptimizedImage } from "../../../../../components/OptimizedImage";

export const AboutSection = () => {
  return (
    <section id="about" className="mb-[35px]">
      <div className="w-full bg-[url(https://c.animaapp.com/0dOW9rb9/img/about-me-section.png)] bg-cover bg-center px-[47px] py-[49px] mb-[34px]">
        <div className="inline-flex items-center gap-2.5 px-[21px] py-[13px] bg-neutral-950 mb-[22px]">
          <h2 className="font-['Courier_Prime'] font-bold text-white text-base">
            About me
          </h2>
        </div>

        <p className="font-['Courier_Prime'] text-white text-base leading-normal max-w-[492px]">
          I'm a product designer, artist, mentor, and restless maker drawn to
          the tension between systems and emotion. For over 15 years I've led
          design across finance, healthcare, and proptech, turning complexity
          into clarity and strategy into measurable outcomes. I build teams,
          scale design systems, and use design as a lever for transformation,
          not decoration.
          <br />
          <br />
          <br />
          Outside of work I create paintings, sculptures, films, and photographs
          that explore the same themes I navigate in design: control, identity,
          and the systems we build around ourselves. Raised in punk rock and
          forged in Fortune 500, my work lives between precision and chaos,
          always chasing connection even in the noise.
          <br />
          <br />
          <br />
          Above all else, I'm a storyteller. Whatever the medium.
        </p>
      </div>

      <p className="font-['Courier_Prime'] text-black text-base leading-normal mb-[35px]">
        Thanks so much for taking a look at my work
      </p>

      <OptimizedImage
        src="https://c.animaapp.com/0dOW9rb9/img/line-break.svg"
        alt="Line break"
        className="w-full"
      />
    </section>
  );
};
