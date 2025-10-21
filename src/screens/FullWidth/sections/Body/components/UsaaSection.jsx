import React from "react";
import { OptimizedImage } from "../../../../../components/OptimizedImage";

export const UsaaSection = () => {
  return (
    <section className="mb-[35px]">
      <OptimizedImage
        src="https://c.animaapp.com/0dOW9rb9/img/usaa-room-1.png"
        alt="Usaa room"
        className="w-full h-auto mb-[27px]"
        sizes="(max-width: 768px) 100vw, (max-width: 1198px) 90vw, 1198px"
      />

      <p className="font-['Courier_Prime'] text-black text-base leading-normal mb-[35px]">
        At USAA, I led design for deposits and servicing, modernizing legacy
        banking experiences across web and mobile. I quietly introduced design
        thinking and outcome-based methods as a framework for reducing risk
        and improving compliance, proving that better design meant safer
        systems. From simplifying checking and savings flows to co-authoring
        patents on smarter interactions,
        <br />
        <br />
        I helped the organization see design not just as UI, but as a
        strategic, measurable way to protect members and move faster.
      </p>

      <OptimizedImage
        src="https://c.animaapp.com/0dOW9rb9/img/line-break.svg"
        alt="Line break"
        className="w-full"
      />
    </section>
  );
};
