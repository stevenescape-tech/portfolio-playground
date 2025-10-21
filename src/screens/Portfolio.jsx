import React, { useState } from "react";

export const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const caseStudies = [
    {
      id: "jpmc",
      title: "JPMC - wealth management",
      description: "Evolved design from tactical delivery to strategic impact, streamlining workflows and improving efficiency across Wealth Management.",
      defaultImage: "https://c.animaapp.com/0dOW9rb9/img/jpmorgan-black.png",
      hoverImage: "https://c.animaapp.com/0dOW9rb9/img/jpmc-sq.png"
    },
    {
      id: "resio",
      title: "RESIO - resident experience",
      description: "Redesigned the tenant experience end to end, launched a guarantor portal and boosting retention while bringing payments in-house.",
      defaultImage: "https://c.animaapp.com/0dOW9rb9/img/resio-black.png",
      hoverImage: "https://c.animaapp.com/0dOW9rb9/img/resio-sq.png"
    },
    {
      id: "bhc",
      title: "BHC - member portal & design system",
      description: "Brought design in-house to drive retention & adoption, scaling systems and boosting engagement while cutting $1M in costs annually.",
      defaultImage: "https://c.animaapp.com/0dOW9rb9/img/bhc-black-1@2x.png",
      hoverImage: "https://c.animaapp.com/0dOW9rb9/img/bhc-sq.png"
    }
  ];

  return (
    <div className="flex flex-col items-center bg-white w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full bg-[url(https://c.animaapp.com/0dOW9rb9/img/hero-image.png)] bg-cover bg-center">
        <div className="max-w-[1198px] mx-auto px-[35px]">
          {/* Navigation */}
          <nav className="flex items-center pt-[42px] pb-8">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-[35px] flex-1">
              <a href="#case-studies" className="font-['Courier_Prime'] font-bold text-white text-base hover:opacity-80 transition-opacity">
                case studies
              </a>
              <a href="#other-work" className="font-['Courier_Prime'] font-bold text-white text-base hover:opacity-80 transition-opacity">
                other work
              </a>
              <a href="#about" className="font-['Courier_Prime'] font-bold text-white text-base hover:opacity-80 transition-opacity">
                about
              </a>
              <a href="#resume" className="font-['Courier_Prime'] font-bold text-white text-base hover:opacity-80 transition-opacity">
                resume
              </a>
              <span className="font-['Courier_Prime'] text-white text-base">
                713.247.9532
              </span>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 z-50 ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-black/95 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              <div className="flex flex-col items-center justify-center h-full gap-8">
                <a 
                  href="#case-studies" 
                  className="font-['Courier_Prime'] font-bold text-white text-2xl hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  case studies
                </a>
                <a 
                  href="#other-work" 
                  className="font-['Courier_Prime'] font-bold text-white text-2xl hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  other work
                </a>
                <a 
                  href="#about" 
                  className="font-['Courier_Prime'] font-bold text-white text-2xl hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  about
                </a>
                <a 
                  href="#resume" 
                  className="font-['Courier_Prime'] font-bold text-white text-2xl hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  resume
                </a>
                <span className="font-['Courier_Prime'] text-white text-xl">
                  713.247.9532
                </span>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex flex-col items-start gap-[35px] pt-[320px] pb-[362px] max-w-[663px]">
            <div className="inline-flex items-center gap-2.5 px-[21px] py-[13px] bg-[#da0000]">
              <h1 className="font-['Helvetica-Bold'] font-bold text-white text-[32px] tracking-[-2.56px]">
                hi, i'm steven
              </h1>
            </div>

            <p className="font-['Courier_Prime'] text-white text-2xl leading-normal">
              <span className="font-bold">
                Raised in punk rock. Forged in Fortune 500.
              </span>
              <span className="font-bold text-[22px]">{"  "}</span>
              <span className="text-[22px]">
                I build strategy, systems, and teams that deliver,&nbsp;&nbsp;turning complexity into clarity and impact.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1198px] px-[35px] py-[35px]">
        {/* Case Studies Section */}
        <section id="case-studies" className="mb-[35px]">
          <div className="inline-flex items-center gap-2.5 px-[21px] py-[13px] bg-neutral-950 mb-[35px]">
            <h2 className="font-['Courier_Prime'] font-bold text-white text-base">
              latest case studies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]">
            {caseStudies.map((study) => (
              <div key={study.id} className="flex flex-col gap-7">
                <div 
                  className="w-full aspect-square overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredCard(study.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-all duration-300"
                    style={{
                      backgroundImage: `url(${hoveredCard === study.id ? study.hoverImage : study.defaultImage})`
                    }}
                  />
                </div>
                <p className="font-['Courier_Prime'] text-black text-base leading-normal">
                  <span className="font-bold">{study.title}</span>
                  {"  "}{study.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* USAA Section */}
        <section className="mb-[35px]">
          <img
            className="w-full h-auto mb-[27px]"
            alt="Usaa room"
            src="https://c.animaapp.com/0dOW9rb9/img/usaa-room-1.png"
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

          <img
            className="w-full h-[70px]"
            alt="Line break"
            src="https://c.animaapp.com/0dOW9rb9/img/line-break.svg"
          />
        </section>

        {/* Studio Work Section */}
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
            <div className="flex flex-col gap-8">
              <img
                className="w-full h-auto"
                alt="Tink making"
                src="https://c.animaapp.com/0dOW9rb9/img/tink-making-1.png"
              />
              <p className="font-['Courier_Prime'] text-black text-base leading-normal">
                <span className="font-bold">the bombshell</span>
                {"  "}Created a 30" 3d print from digital concept to full scale:
                meticulously crafted, painted, and exhibited internationally in
                galleries and street art shows.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <img
                className="w-full h-auto"
                alt="Oswald reveal CN"
                src="https://c.animaapp.com/0dOW9rb9/img/oswald-reveal-cn-1-1.png"
              />
              <p className="font-['Courier_Prime'] text-black text-base leading-normal">
                <span className="font-bold">oswald unboxing</span>
                {"  "}3D art-toy of a mischievous oswald: overseeing international
                prototyping, production, and finishing to bring the character to
                life.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="w-full aspect-[0.56] bg-gray-200" />
              <p className="font-['Courier_Prime'] text-black text-base leading-normal">
                <span className="font-bold">oswald social reveal</span>
                {"  "}oswald was my first 3D model taken to production, the launch
                video revealed what drives engagement and how storytelling shapes
                audience connection
              </p>
            </div>
          </div>

          <img
            className="w-full h-[70px]"
            alt="Line break"
            src="https://c.animaapp.com/0dOW9rb9/img/line-break-1.svg"
          />
        </section>

        {/* Photography Section */}
        <section className="mb-[35px]">
          <p className="font-['Courier_Prime'] text-black text-base leading-normal mb-[35px]">
            Photography has always been a personal outlet, a way to slow down and
            observe. I've photographed national bands on stage, but I'm most at
            home wandering city streets in the rain or capturing fog-drenched
            skylines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px] mb-[35px]">
            <img
              className="w-full h-auto object-cover"
              alt="Manhattan up"
              src="https://c.animaapp.com/0dOW9rb9/img/manhattan-up.png"
            />
            <img
              className="w-full h-auto"
              alt="Album cover"
              src="https://c.animaapp.com/0dOW9rb9/img/album-cover-1-1.png"
            />
            <img
              className="w-full h-auto object-cover"
              alt="Downtown"
              src="https://c.animaapp.com/0dOW9rb9/img/dt-1-2.png"
            />
          </div>

          <img
            className="w-full h-[70px]"
            alt="Line break"
            src="https://c.animaapp.com/0dOW9rb9/img/line-break-2.svg"
          />
        </section>

        {/* Video Section */}
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

          <div className="w-full aspect-video bg-[#d9d9d9] mb-[35px]" />

          <img
            className="w-full h-[70px]"
            alt="Line break"
            src="https://c.animaapp.com/0dOW9rb9/img/line-break-3.svg"
          />
        </section>

        {/* About Section */}
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

          <img
            className="w-full h-[70px]"
            alt="Line break"
            src="https://c.animaapp.com/0dOW9rb9/img/line-break.svg"
          />
        </section>

        {/* Footer */}
        <footer className="flex flex-wrap items-center gap-[35px] relative">
          <a href="#case-studies" className="font-['Courier_Prime'] font-bold text-black text-base hover:opacity-70 transition-opacity">
            product design
          </a>
          <a href="#other-work" className="font-['Courier_Prime'] font-bold text-black text-base hover:opacity-70 transition-opacity">
            other work
          </a>
          <a href="#about" className="font-['Courier_Prime'] font-bold text-black text-base hover:opacity-70 transition-opacity">
            about
          </a>
          <a href="#resume" className="font-['Courier_Prime'] font-bold text-black text-base hover:opacity-70 transition-opacity">
            resume
          </a>
          <span className="font-['Courier_Prime'] text-black text-base">
            713.247.9532
          </span>
          <span className="font-['Courier_Prime'] text-[#8a8a8a] text-base ml-auto">
            © 2025 steven trimble
          </span>
        </footer>
      </div>
    </div>
  );
};
