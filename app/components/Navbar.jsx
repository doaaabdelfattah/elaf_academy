"use client";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <nav
        className={`w-full sm:px-10 px-3 py-2 lg:px-8 xl:px-[8%] flex items-center bg-opacity-90 justify-between z-50 bg-white  ${
          isScroll
            ? " bg-white  backdrop-blur-lg shadow-sm fixed"
            : "one-edge-shadow"
        } `}
      >
        <a href="#top" className="flex justify-center items-center">
          <img
            src={isScroll ? "/subtitle.png" : "/main-logo.png"}
            alt="logo"
            className={`h-auto p-2 transition-all duration-300 ${
              isScroll
                ? "w-[200px] sm:w-[200px] md:w-[220px]" // Smaller size when scrolling
                : "w-[300px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[420px]" // Larger size normally
            }`}
          />
        </a>

        <ul
          className={`hidden lg:flex items-center gap-6 lg:gap-8 
          text-lg py-4 ${
            isScroll
              ? ""
              : "  text-darkGreen dark:border dark:border-white/50 dark:bg-transparent "
          } `}
        >
          <li className="slide-up-hover">
            <a className="menu-style" href="#top">
              Home
            </a>
          </li>
          <li className="slide-up-hover">
            <a className="menu-style" href="#about-us">
              About us
            </a>
          </li>
          <li className="slide-up-hover">
            <a className="menu-style" href="#services">
              Services
            </a>
          </li>
          <li className="slide-up-hover">
            <a className="menu-style" href="#pricing">
              Pricing
            </a>
          </li>
          <li className="slide-up-hover">
            <a className="menu-style" href="#contact">
              Contact us
            </a>
          </li>
          <li className="slide-up-hover">
            <a className="menu-style" href="#faq">
              FAQ
            </a>
          </li>
        </ul>

        <button
          className="lg:hidden"
          aria-label="open side menu"
          title="open menu"
        >
          <GiHamburgerMenu onClick={openMenu} size={25} className="" />
        </button>

        {/*================ Mobile Menu ====================== */}
        <div
          ref={sideMenuRef}
          className="flex lg:hidden flex-col gap-4 py-10 px-10 fixed -right-64 h-screen w-64 z-50 bg-gray-50 transition duration-700 bottom-0 top-0 dark:bg-darkHover "
        >
          <span
            className="absolute right-6 top-6 hover:opacity-60 duration-75 transition-opacity"
            onClick={closeMenu}
          >
            <IoMdCloseCircleOutline size={20} className="cursor-pointer" />
          </span>
          <ul>
            <li className="slide-up-hover">
              <a className="menu-style" href="#top" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="slide-up-hover">
              <a className="menu-style" href="#about-us" onClick={closeMenu}>
                About us
              </a>
            </li>
            <li className="slide-up-hover">
              <a className="menu-style" href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li className="slide-up-hover">
              <a className="menu-style" href="#pricing" onClick={closeMenu}>
                Our Packages
              </a>
            </li>
            <li className="slide-up-hover">
              <a className="menu-style" href="#contact" onClick={closeMenu}>
                Contact us
              </a>
            </li>
            <li className="slide-up-hover">
              <a className="menu-style" href="#faq" onClick={closeMenu}>
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
