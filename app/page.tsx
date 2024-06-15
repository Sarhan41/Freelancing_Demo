"use client";

import React, { useEffect, useRef } from "react";

const MainPage: React.FC = () => {
  const videoId = "ftsYVPikBWc"; // Replace with your actual YouTube video ID
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe) {
      // Set the iframe attributes
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1`;
    }
  }, [videoId]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24 bg-black">
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {/* Keep the iframe in the background */}
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Embedded video"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="relative z-10 text-center text-white bg-gradient-to-r from-black/60 to-black/40 p-4 lg:p-8 rounded-lg max-w-lg mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gold-500">
            Make Your First $10,000
          </h1>
          <p className="text-base lg:text-lg mb-2 text-white">
            I am Kyle Howerton. I grew up broke and now I have a consistent
            $50,000 monthly income. I can teach you how to achieve this too.
          </p>
          <p className="text-sm lg:text-md text-white">
            My #1 goal is to build a community of young entrepreneurs and dream
            chasers. I share methods that I've used to make money online as a
            teen using social media, e-commerce, and real estate.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
