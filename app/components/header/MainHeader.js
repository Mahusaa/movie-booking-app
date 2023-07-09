"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import GetAuth from "./GetAuth";
import {BiCameraMovie} from 'react-icons/bi'
export default function MainHeader() {
  const isAuth = useSelector((state) => state.authReducer.value.isAuth);
  const [showHeader, setShowHeader] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      clearTimeout(timeout);

      const scrollTop = window.scrollY;
      setShowHeader(scrollTop === 0 || isHovered);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeout);
    };
  }, [isHovered]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 flex justify-between items-center px-8 z-40 transition-opacity duration-300 ${
        showHeader || isHovered ? "opacity-80" : "opacity-0"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="/" className="flex items-center">
        <span className="flex items-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          <BiCameraMovie className="text-lime-500 text-3xl mr-1" />
          <span className="mt-1">
            US
          </span>
          <span className="mt-1">Lify</span>
        </span>
      </Link>
      {isAuth ? <GetAuth /> : <Navigation />}
    </header>
  );
}

