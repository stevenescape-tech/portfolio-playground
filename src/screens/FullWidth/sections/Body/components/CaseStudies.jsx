import React from "react";
import { HoverCard } from "../../../../../components/HoverCard";

const caseStudiesData = [
  {
    id: "jpmc",
    title: "JPMC - wealth management",
    description: "Evolved design from tactical delivery to strategic impact, streamlining workflows and improving efficiency across Wealth Management.",
    defaultImage: "https://c.animaapp.com/0dOW9rb9/img/jpmorgan-black.png",
    hoverImage: "https://c.animaapp.com/0dOW9rb9/img/jpmc-sq.png",
    link: "https://www.figma.com/deck/vyumYDfRynsxfEEZwbaTAK/JPMC-wealth-management?node-id=1-45&viewport=-82%2C-107%2C0.6&t=kWXVt1MhW6tfMTnd-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
  },
  {
    id: "resio",
    title: "RESIO - resident experience",
    description: "Redesigned the tenant experience end to end, launched a guarantor portal and boosting retention while bringing payments in-house.",
    defaultImage: "https://c.animaapp.com/0dOW9rb9/img/resio-black.png",
    hoverImage: "https://c.animaapp.com/0dOW9rb9/img/resio-sq.png",
    link: "https://www.figma.com/proto/76zVpxI151x62sZyIAkEWS/resio-case-study?page-id=0%3A1&team_id=1068618004980704807&node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width&content-scaling=fixed&t=tcjkN60LqHSOummp-1"
  },
  {
    id: "bhc",
    title: "BHC - member portal & design system",
    description: "Brought design in-house to drive retention & adoption, scaling systems and boosting engagement while cutting $1M in costs annually.",
    defaultImage: "https://c.animaapp.com/0dOW9rb9/img/bhc-black-1@2x.png",
    hoverImage: "https://c.animaapp.com/0dOW9rb9/img/image.png",
    link: "https://www.figma.com/proto/fgNIjT4ENW99hv3tNH6qZe/BHC-revised-study?page-id=0%3A1&node-id=1-7&viewport=573%2C181%2C0.11&t=XH6cXeUVDBUMClho-1&scaling=scale-down-width&content-scaling=fixed"
  }
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="mb-[35px]">
      <div className="inline-flex items-center gap-2.5 px-[21px] py-[13px] bg-neutral-950 mb-[35px]">
        <h2 className="font-['Courier_Prime'] font-bold text-white text-base">
          latest case studies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]">
        {caseStudiesData.map((study) => (
          <div key={study.id} className="flex flex-col gap-7">
            {study.link ? (
              <a 
                href={study.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full aspect-square overflow-hidden block"
              >
                <HoverCard
                  defaultImage={study.defaultImage}
                  hoverImage={study.hoverImage}
                  className="!w-full !h-full"
                />
              </a>
            ) : (
              <div className="w-full aspect-square overflow-hidden">
                <HoverCard
                  defaultImage={study.defaultImage}
                  hoverImage={study.hoverImage}
                  className="!w-full !h-full"
                />
              </div>
            )}
            <p className="font-['Courier_Prime'] text-black text-base leading-normal">
              <span className="font-bold">{study.title}</span>
              {"  "}{study.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
