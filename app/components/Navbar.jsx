"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useRef, useEffect, useState } from "react";
import Socials from "./Socials";

const NavBar = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  // I use this useEffect hook to change the visibility of the Navbar when scrolling and to listen for a click outside the nav modal so that I can remove focus from it.
  useEffect(() => {
    // For navbar to hide and appear while scrolling
    const handleScroll = () => {
      //To close the menu when its open(sm: screens and maybe md:)
      setIsOpen(false);
      const currentScrollPos = window.scrollY;
      setIsScrollingDown(prevScrollPos < currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    //For outside click
    const handleOutsideClick = event => {
      if (
        !navRef.current?.contains(event.target) &&
        !btnRef.current?.contains(event.target)
      ) {
        // alert("outside clicked");
        setIsOpen(false);

        // console.log("outside clicked");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [prevScrollPos, navRef]);

  //Handle open and closing of our nav at sm: and maybe md:
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // User clicks on a nav link
  const handleLink = e => {
    e.preventDefault();
    const href = e.target.href;
    router.push(href);
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`${
        isScrollingDown ? "-translate-y-full transform" : "translate-y-0"
      } fixed left-0 right-0 top-0 backdrop-blur-md z-50 bg-blackish/70 border-b-gray`}
    >
      <div className="container_pad mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.svg"
            alt="Natalia Davies' logo"
            width={48}
            height={40}
            // className="h-8 w-auto"
          />
          {/* <img
         src="https://flowbite.com/docs/images/logo.svg"
         className="h-8"
         alt="Flowbite Logo"
       /> */}
          {/* <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
         Flowbite
       </span> */}
        </Link>

        <button
          ref={btnRef}
          onClick={handleClick}
          className="flex flex-col items-center justify-center md:hidden"
        >
          {/* <span
         className={`block h-0.5 w-6 rounded-sm bg-gray-500 
                 transition-all duration-300 ease-out ${isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"}`}
       ></span> */}
          <span
            className={`block h-[3.8px] w-5 rounded-sm bg-gray 
                 transition-all duration-300 ease-out ${
                   isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
                 }`}
          ></span>
          <span
            className={`my-0.5 block h-[3.8px] w-5 rounded-sm 
                 bg-gray transition-all duration-300 ease-out ${
                   isOpen ? "opacity-0" : "opacity-100"
                 }`}
          ></span>
          <span
            className={`block h-[3.8px] w-5 rounded-sm bg-gray 
                 transition-all duration-300 ease-out ${
                   isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
                 }`}
          ></span>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <div className="flex gap-6 w-full flex-col md:items-center md:flex-row md:justify-between">
            <ul className="mt-4 flex flex-col rounded-lg border text-lg border-gray p-4 font-semibold uppercase md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  onClick={handleLink}
                  className={`${
                    currentPath === "/"
                      ? "bg-primary text-blackish md:text-primary"
                      : ""
                  } block rounded px-3 py-2 hover:text-primary hover:opacity-80 md:bg-transparent md:p-0`}
                  // aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  onClick={handleLink}
                  className={`${
                    currentPath === "/books"
                      ? "bg-primary text-blackish md:text-primary"
                      : ""
                  } block rounded px-3 py-2 hover:text-primary hover:opacity-80 md:bg-transparent md:p-0`}
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={handleLink}
                  className={`${
                    currentPath === "/about"
                      ? "bg-primary text-blackish md:text-primary"
                      : ""
                  } block rounded px-3 py-2 hover:text-primary hover:opacity-80 md:bg-transparent md:p-0`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={handleLink}
                  className={`${
                    currentPath === "/contact"
                      ? "bg-primary text-blackish md:text-primary"
                      : ""
                  } block rounded px-3 py-2 hover:text-primary hover:opacity-80 md:bg-transparent md:p-0`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/* SOCIAL LINKS */}
            <div className="md:hidden block">
              <Socials />
            </div>
          </div>
        </div>
        {/* 3rd item in md: nav - SOCIAL LINKS */}
        <div className="hidden md:block">
          <Socials />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
