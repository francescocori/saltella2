"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > heroBottom - 100); // 100px buffer
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar z-9999 fixed top-0 left-0 right-0  transition-all duration-300 ${
        isScrolled ? "bg-brand-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-brand-dark/90 rounded-box z-1 mt-3 w-52 p-2 shadow font-founders"
          >
            <li>
              <a href="#menu" className="text-white hover:text-brand-goldDark">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-brand-goldDark">
                About
              </a>
            </li>
            <li>
              <a href="#faq" className="text-white hover:text-brand-goldDark">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#hero"
          className="text-xl font-founders font-medium text-white hover:text-brand-goldDark cursor-pointer"
        >
          Chef Gabbo
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-founders">
          <li>
            <a href="#menu" className="text-white hover:text-brand-goldDark">
              Menu
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-brand-goldDark">
              About
            </a>
          </li>
          <li>
            <a href="#faq" className="text-white hover:text-brand-goldDark">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="#contact"
          className="font-founders mt-4 btn bg-brand-goldDark border-brand-goldDark font-medium shadow-none"
        >
          Book me
        </a>
      </div>
    </div>
  );
}
