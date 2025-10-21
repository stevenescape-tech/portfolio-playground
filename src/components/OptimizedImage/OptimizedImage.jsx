import React from "react";

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  sizes = "100vw",
  onClick
}) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading={loading}
    decoding="async"
    sizes={sizes}
    onClick={onClick}
  />
);
