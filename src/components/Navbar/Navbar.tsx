"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import clsx from "clsx";
import { Logo } from "../Logo";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-cubic", offset: -100 });
    AOS.refresh();
    if (window) {
      let prevScrollPos = window.screenY;
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const visible = prevScrollPos > currentScrollPos;

        setShowNavbar(visible);
        prevScrollPos = currentScrollPos;
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav
      className={clsx(`fixed top-0 w-full h-20 z-30 px-5 items-center `, {
        ["block"]: showNavbar,
        "lg:hidden": !showNavbar,
        "backdrop-blur-lg": !isOpen,
      })}
    >
      <div className="flex z-10 py-10 justify-between items-center mx-auto w-full max-w-screen-2xl h-full">
        <div className="flex gap-x-10 items-center">
          <Logo />
          <Link href="#individuals" className="max-lg:hidden btn-ghost btn">
            Individual
          </Link>
          <Link href="#business" className="max-lg:hidden btn-ghost btn">
            Business
          </Link>
          <Link href="#pricing" className="max-lg:hidden btn-ghost btn">
            Pricing
          </Link>
          <Link
            href="#set-your-payroll"
            className="max-lg:hidden btn-ghost btn"
          >
            Set your payroll
          </Link>
        </div>
        <div className="flex gap-x-7 items-center">
          <button className="rounded-full btn px-12 btn-outline text-primary border-primary max-lg:hidden">
            Login
          </button>
          <button className="rounded-full btn px-10 bg-primary text-white max-lg:hidden">
            Register
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer lg:hidden"
          >
            {isOpen ? <IoClose size={40} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      <div
        className={`bg-white fixed menu overflow-auto -z-[1] right-0 left-0 top-0 bottom-0 opacity-0 transition-opacity duration-300 pt-20 px-5 ${
          isOpen ? "block opacity-100" : "hidden"
        } lg:hidden`}
      >
        <div className="flex flex-col items-start justify-start mt-10 relative gap-7 cursor-pointer lg:hidden">
          <Link href="#individuals" className="lg:hidden btn-ghost btn">
            Individual
          </Link>
          <Link href="#business" className="lg:hidden btn-ghost btn">
            Business
          </Link>
          <Link href="#pricing" className="lg:hidden btn-ghost btn">
            Pricing
          </Link>
          <Link href="#set-your-payroll" className="lg:hidden btn-ghost btn">
            Set your payroll
          </Link>
        </div>
      </div>
    </nav>
  );
}
