import React, { useCallback } from "react";

const FOOTER_LINKS = [
  { id: 'case-studies', label: 'product design' },
  { id: 'other-work', label: 'from my studio' },
  { id: 'about', label: 'about' },
  { id: 'resume', label: 'resume' }
];

export const Footer = () => {
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
  }, []);

  return (
    <footer className="flex flex-wrap items-center gap-[35px] relative">
      {FOOTER_LINKS.map(({ id, label }) => (
        <a 
          key={id}
          href={`#${id}`}
          onClick={(e) => handleNavClick(e, `#${id}`)}
          className="font-['Courier_Prime'] font-bold text-black text-base hover:opacity-70 transition-opacity"
        >
          {label}
        </a>
      ))}
      <span className="font-['Courier_Prime'] text-black text-base">
        713.247.9532
      </span>
      <span className="font-['Courier_Prime'] text-[#8a8a8a] text-base ml-auto">
        © 2025 steven trimble
      </span>
    </footer>
  );
};
