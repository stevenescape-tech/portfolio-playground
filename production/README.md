# Steven Trimble Portfolio - Production Build

## Overview
Production-optimized portfolio site with clean HTML/CSS/JS, no frameworks.

## Performance Optimizations

### Images & Media
- ✅ All images use `<picture>` elements with WebP support
- ✅ Explicit width/height attributes to prevent layout shift
- ✅ `loading="lazy"` on below-the-fold images
- ✅ Hover images preloaded via JavaScript
- ✅ Responsive images with proper aspect ratios

### Layout & CSS
- ✅ Semantic HTML5: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`
- ✅ Single `<h1>` in hero, logical heading hierarchy
- ✅ Flexbox and CSS Grid for responsive layouts
- ✅ Critical CSS inlined in `<head>`
- ✅ Non-critical CSS deferred with media="print" trick
- ✅ Fluid typography and spacing
- ✅ Minimal CSS specificity

### Accessibility
- ✅ All interactive elements are `<button>` or `<a>`
- ✅ Visible `:focus-visible` styles
- ✅ Full keyboard navigation support
- ✅ `aria-label` on icon-only controls
- ✅ `aria-expanded` on hamburger menu
- ✅ Descriptive alt text on images
- ✅ `prefers-reduced-motion` support
- ✅ High contrast mode support
- ✅ Screen reader friendly

### Performance
- ✅ Minimal JavaScript (~5KB minified)
- ✅ Scripts deferred with `defer` attribute
- ✅ Fonts use `font-display: swap`
- ✅ Preconnect to external domains
- ✅ Throttled scroll handlers
- ✅ Passive event listeners
- ✅ No blocking resources

### SEO & Social
- ✅ Unique `<title>` and meta description
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card meta tags
- ✅ Favicon and apple-touch-icon
- ✅ robots.txt included
- ✅ sitemap.xml included
- ✅ Semantic HTML structure

## File Structure

```
production/
├── index.html          # Main HTML file with critical CSS inlined
├── styles.css          # Deferred non-critical CSS
├── scripts.js          # Minimal JavaScript (deferred)
├── robots.txt          # Search engine directives
├── sitemap.xml         # Site structure for search engines
├── favicon.ico         # (Add your favicon)
└── assets/             # (Create this folder for optimized images)
    ├── social-preview.jpg
    └── apple-touch-icon.png
```

## Lighthouse Targets

Expected scores:
- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 90

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Samsung Internet (last 2 versions)

## Deployment Checklist

1. ✅ **URLs Updated**: Domain set to `https://steventrimble.design/`
2. **Add Favicon**: Create and add `favicon.ico` to root
3. **Add Social Preview**: Create `assets/social-preview.jpg` (1200x630px)
4. **Add Apple Touch Icon**: Create `assets/apple-touch-icon.png` (180x180px)
5. **Optimize Images**: Convert images to WebP/AVIF format
6. **Minify Assets**: Minify CSS and JS for production
7. **Test**: Run Lighthouse audits
8. **Deploy**: Upload to your hosting provider

## Image Optimization

To convert images to WebP:
```bash
# Using cwebp (install via: brew install webp)
cwebp -q 80 input.jpg -o output.webp
```

To convert to AVIF:
```bash
# Using avifenc (install via: brew install libavif)
avifenc -s 0 input.jpg output.avif
```

## Minification

To minify CSS:
```bash
# Using cssnano
npx cssnano styles.css styles.min.css
```

To minify JavaScript:
```bash
# Using terser
npx terser scripts.js -o scripts.min.js -c -m
```

## Testing

1. **Lighthouse**: Run in Chrome DevTools
2. **WAVE**: Test accessibility at wave.webaim.org
3. **PageSpeed Insights**: Test at pagespeed.web.dev
4. **Mobile Testing**: Test on real devices
5. **Cross-browser**: Test in all major browsers

## Notes

- All external links use `target="_blank"` and `rel="noopener noreferrer"`
- Smooth scroll uses custom JavaScript for cross-browser consistency
- Vimeo videos are lazy-loaded
- Lightbox is keyboard accessible (Escape to close)
- Mobile menu is keyboard accessible
- All animations respect `prefers-reduced-motion`

## License

© 2025 Steven Trimble. All rights reserved.
