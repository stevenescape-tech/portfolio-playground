import React from "react";
import { OptimizedImage } from "../../../../../components/OptimizedImage";
import { VimeoVideo } from "../../../../../components/VimeoVideo";

const studioProjects = [
  {
    id: 1,
    videoId: "1127931501",
    title: "the bombshell",
    description: 'Created a 30" 3d print from digital concept to full scale: meticulously crafted, painted, and exhibited internationally in galleries and street art shows.',
    alt: "The Bombshell"
  },
  {
    id: 2,
    videoId: "1127936566",
    title: "oswald unboxing",
    description: "3D art-toy of a mischievous oswald: overseeing international prototyping, production, and finishing to bring the character to life.",
    alt: "Oswald Unboxing"
  },
  {
    id: 3,
    videoId: "1127936546",
    title: "oswald social reveal",
    description: "oswald was my first 3D model taken to production, the launch video revealed what drives engagement and how storytelling shapes audience connection",
    alt: "Oswald Social Reveal"
  }
];

export const StudioWork = () => {
  return (
    <section id="other-work" className="mb-[35px]">
      <div className="inline-flex items-center gap-2.5 px-[21px] py-[13px] bg-neutral-950 mb-[35px]">
        <h2 className="font-['Courier_Prime'] font-bold text-white text-base">
          from my studio
        </h2>
      </div>

      <p className="font-['Courier_Prime'] text-black text-base leading-normal mb-[35px]">
        Sculpture, painting, film, and photography exploring material,
        message, and meaning - my studio work examines the same systems I
        design for at scale. From consumer culture to identity and control,
        these projects deconstruct how objects and images shape perception.
        Each piece is an experiment in form and intent, translating abstract
        forces into something tangible,a reflection of how I approach design
        itself: studying systems, revealing patterns, and finding clarity
        through creation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mb-[35px]">
        {studioProjects.map((project) => (
          <div key={project.id} className="flex flex-col gap-8">
            <VimeoVideo videoId={project.videoId} title={project.title} aspectRatio="vertical" />
            <p className="font-['Courier_Prime'] text-black text-base leading-normal">
              <span className="font-bold">{project.title}</span>
              {"  "}{project.description}
            </p>
          </div>
        ))}
      </div>

      <OptimizedImage
        src="https://c.animaapp.com/0dOW9rb9/img/line-break-1.svg"
        alt="Line break"
        className="w-full"
      />
    </section>
  );
};
