"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-pink-200 shadow-md z-50 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      } flex justify-center items-center h-16`} // Adjusted header height
    >
      <div className="flex items-center justify-center h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center h-full">
          <svg width="50" height="50" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="250" fill="black"/>
            <text x="50%" y="48%" text-anchor="middle" font-family="Georgia" font-size="100" fill="gold">KH</text>
            <path d="M 100 380 C 150 320, 350 320, 400 380" stroke="gold" stroke-width="5" fill="none"/>
            <text x="50%" y="80%" text-anchor="middle" font-family="Georgia" font-size="30" fill="gold">KYLE HOWERTON</text>
            <text x="50%" y="90%" text-anchor="middle" font-family="Arial" font-size="20" fill="gold">KyWayyy</text>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
