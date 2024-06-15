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
    <main className="flex flex-col items-center justify-center p-4 lg:p-24 bg-black min-h-screen">
      {/* Video Section */}
      <div className="relative w-full h-[50vh] lg:h-[80vh] max-w-full">
        <div className="absolute inset-0">
          {/* Keep the iframe in the background */}
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Embedded video"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      {/* Text Content Section */}
      <div className="flex flex-col items-center justify-center text-center text-gray-200 bg-gradient-to-r from-black/60 to-black/40 p-4 lg:p-8 rounded-lg max-w-lg mx-auto mt-8 lg:mt-0">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-yellow-500">
          Make Your First $10,000
        </h1>
        <p className="text-base lg:text-lg mb-4">
          Hi, I&apos;m Kyle Howerton. I grew up broke and now earn a consistent
          $50,000+ monthly income. I can teach you how to achieve this too.
        </p>
        <p className="text-base lg:text-lg">
          My #1 goal is to build a community of young entrepreneurs and dream
          chasers. I share methods that I&apos;ve used to make money online as a teen
          using social media, e-commerce, and real estate.
        </p>
      </div>
    </main>
  );
};

export default MainPage;
