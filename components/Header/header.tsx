"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-black shadow-md z-50 px-6 lg:px-36 border-b border-gold-500 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      } flex justify-between items-center h-20`}
    >
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center">
          <div className="overflow-hidden h-full rounded-full border-2 border-yellow-500 p-1">
            <Image
              src="/H[1].png"
              alt="logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className="ml-4 text-lg font-bold text-white">Kywavyyy</div>
        </Link>
      </div>
      <nav className={`lg:flex lg:space-x-8 mx-auto text-center ${isMobile ? 'hidden' : 'flex space-x-8'}`}>
        <Link href="#intro" className="block py-2 text-lg font-medium text-white hover:text-yellow-500 transition-colors duration-300">
          Intro
        </Link>
        <Link href="/" className="block py-2 text-lg font-medium text-white hover:text-yellow-500 transition-colors duration-300">
          Exclusive Content
        </Link>
        <Link href="/" className="block py-2 text-lg font-medium text-white hover:text-yellow-500 transition-colors duration-300">
          Newsletter
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        {/* Full name */}
        <div className="text-lg font-semibold text-white lg:block hidden">
          Kyle Howerton
        </div>
        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-white hover:text-yellow-500 transition-colors duration-300"
          onClick={toggleMenu}
        >
       {
            !isMenuOpen ? <FiMenu size={24} /> : <AiFillCloseCircle size={24} />
          }
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobile && (
        <div className={`fixed top-20 left-0 w-full bg-black text-center py-4 border-b-2 border-b-yellow-400 shadow-lg z-40 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="block py-2 text-lg font-medium text-white hover:text-yellow-500 transition-colors duration-300">
            Intro
          </Link>
          <Link href="/" className="block py-2 text-lg font-medium text-white hover:text-yellow-500 transition-colors duration-300">
            Exclusive Content
          </Link>
          <Link href="/" className="block py-2 text-lg font-medium text-white hover:text-yellow-500 transition-colors duration-300">
            Newsletter
          </Link>
          <h1 className="text-lg font-semibold text-white block lg:hidden">Kyle Howerton</h1>
        </div>
      )}
    </header>
  );
};

export default Header;
