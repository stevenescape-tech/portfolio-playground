import React, { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = ['case-studies', 'other-work', 'about'];
const NAV_LABELS = {
  'case-studies': 'case studies',
  'other-work': 'from my studio',
  'about': 'about'
};

export const HeroImage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 800);
    
    checkMobile();
    handleScroll();
    
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (!element) return;

    const headerOffset = window.innerWidth < 768 ? 100 : 120;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      window.scrollTo({
        top: startPosition + distance * ease,
        behavior: 'auto'
      });
      
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
    setIsMenuOpen(false);
  }, []);

  const bgPosition = isMobile ? "calc(50% - 200px) center" : "center";

  return (
    <div 
      className="relative w-full bg-cover"
      style={{
        backgroundImage: "url(https://c.animaapp.com/0dOW9rb9/img/hero-image.png)",
        backgroundPosition: bgPosition
      }}
    >
      {isMobile && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-[1198px] mx-auto px-[35px]">
          <div className="flex items-center justify-between pt-[21px] md:pt-[28px] pb-[21px] md:pb-[28px]">
            {isScrolled && (
              <div className="inline-flex items-center gap-2.5 px-[14px] md:px-[21px] py-[8px] md:py-[13px] bg-[#da0000]">
                <h2 className="font-['Helvetica-Bold'] font-bold text-white text-[18px] md:text-[32px] tracking-[-1.44px] md:tracking-[-2.56px]">
                  hi, i'm steven
                </h2>
              </div>
            )}

            <div className="hidden md:flex items-center gap-[35px] ml-auto">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, `#${item}`)}
                  className={`font-['Courier_Prime'] font-bold text-base hover:opacity-80 transition-all ${
                    isScrolled ? 'text-black' : 'text-white'
                  }`}
                >
                  {NAV_LABELS[item]}
                </a>
              ))}
              <span className={`font-['Courier_Prime'] text-base transition-all ${
                isScrolled ? 'text-black' : 'text-white'
              }`}>
                713.247.9532
              </span>
            </div>

            <button
              className="md:hidden flex flex-col justify-center items-center ml-auto relative z-[100] w-10 h-10 bg-transparent border-0 cursor-pointer p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-center">
                {[0, 1, 2].map((i) => (
                  <span 
                    key={i}
                    style={{
                      position: 'absolute',
                      display: 'block',
                      width: '24px',
                      height: '2px',
                      backgroundColor: isMenuOpen ? '#ffffff' : (isScrolled ? '#000000' : '#ffffff'),
                      transform: isMenuOpen 
                        ? (i === 0 ? 'rotate(45deg)' : i === 2 ? 'rotate(-45deg)' : 'none')
                        : `translateY(${(i - 1) * 6}px)`,
                      opacity: isMenuOpen && i === 1 ? 0 : 1,
                      transformOrigin: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </button>

            <div 
              className="md:hidden fixed inset-0 z-[90] transition-all duration-300"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                opacity: isMenuOpen ? 1 : 0,
                pointerEvents: isMenuOpen ? 'auto' : 'none',
                visibility: isMenuOpen ? 'visible' : 'hidden'
              }}
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {NAV_ITEMS.map((item) => (
                  <a 
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => handleNavClick(e, `#${item}`)}
                    className="font-['Courier_Prime'] font-bold text-white text-2xl hover:opacity-80 transition-opacity"
                  >
                    {NAV_LABELS[item]}
                  </a>
                ))}
                <span className="font-['Courier_Prime'] text-white text-xl">
                  713.247.9532
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1198px] mx-auto px-[35px] relative z-10">
        <div className="flex flex-col items-start gap-[35px] pt-[225px] md:pt-[450px] pb-[181px] md:pb-[362px] max-w-[663px]">
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
							<br></br>
              I build strategy, systems, and teams that deliver, turning complexity into clarity and impact.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
