/**
 * Production JavaScript - Minimal, optimized, accessible
 */

(function() {
  'use strict';
  
  // Smooth scroll with easing
  function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const headerOffset = window.innerWidth < 768 ? 100 : 120;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let start = null;
    
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // easeInOutQuad
      const ease = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      window.scrollTo({
        top: startPosition + distance * ease,
        behavior: 'auto'
      });
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    requestAnimationFrame(animation);
  }
  
  // Header scroll behavior
  const header = document.getElementById('header');
  const redBox = document.getElementById('redBox');
  let lastScroll = 0;
  
  function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 800) {
      header.classList.add('scrolled');
      redBox.style.display = 'inline-flex';
    } else {
      header.classList.remove('scrolled');
      redBox.style.display = 'none';
    }
    
    lastScroll = currentScroll;
  }
  
  // Throttled scroll handler
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function() {
        handleScroll();
        scrollTimeout = null;
      }, 10);
    }
  }, { passive: true });
  
  // Navigation click handlers
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target, 1000);
      
      // Close mobile menu if open
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger = document.getElementById('hamburger');
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });
  
  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  
  hamburger.addEventListener('click', function() {
    const isOpen = this.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    this.setAttribute('aria-expanded', isOpen);
  });
  
  // Close mobile menu on escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });
  
  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  
  document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', function() {
      const fullsizeUrl = this.getAttribute('data-fullsize');
      const img = this.querySelector('img');
      lightboxImage.src = fullsizeUrl;
      lightboxImage.alt = img.alt;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    });
  });
  
  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }
  
  lightboxClose.addEventListener('click', closeLightbox);
  
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      closeLightbox();
    }
  });
  
  // Preload hover images
  const hoverImages = document.querySelectorAll('.hover-image img');
  hoverImages.forEach(img => {
    const preloadImg = new Image();
    preloadImg.src = img.src;
  });
  
  // Initial scroll check
  handleScroll();
  
})();
