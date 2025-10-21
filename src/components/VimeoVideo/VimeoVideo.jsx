import React from "react";

export const VimeoVideo = ({ videoId, title, aspectRatio = "vertical" }) => {
  const paddingBottom = aspectRatio === "horizontal" ? "41.67%" : "177.6%";

  return (
    <div 
      className="w-full relative overflow-hidden" 
      style={{ paddingBottom, height: 0 }}
    >
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&title=0&byline=0&portrait=0`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        allowFullScreen
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '100%'
        }}
        title={title}
      />
    </div>
  );
};
