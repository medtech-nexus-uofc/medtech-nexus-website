"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  function handleClick() {
    if (navbarOpen) {
      setNavbarOpen(false);
    } else {
      setNavbarOpen(true);
    }
  }

  return (
    <div className="bg-baby-blue sticky top-0 z-10 flex flex-col justify-between drop-shadow-md md:flex-row md:py-1">
      <div className="flex flex-row items-center">
        <div className="absolute left-5 md:hidden">
          <Image
            src="/svgs/assets/hamburger_icon.svg"
            alt="Open Navbar"
            width={25}
            height={15}
            onClick={handleClick}
          />
        </div>
        <div className="my-1 flex w-full justify-center md:ml-2 md:w-auto md:justify-normal">
          <Link href="/">
            <Image
              src="/favicon.ico"
              alt="MedTech Logo"
              width={75}
              height={40}
              className="hover:scale-105"
            />
          </Link>
        </div>
      </div>

      <div className="hidden md:flex">
        <NavbarLinks />
      </div>
      {navbarOpen && (
        <div className="block md:hidden">
          <NavbarLinks />
        </div>
      )}
    </div>
  );
}

function NavbarLinks() {
  return (
    <div className="font-funnel-display text-pale-blue md:text-deep-ice-blue/70 mr-5 flex w-full flex-col gap-5 bg-[#012E55] py-4 pl-5 text-2xl font-bold md:w-auto md:flex-row md:items-center md:justify-start md:gap-8 md:bg-transparent md:text-lg lg:mr-10 lg:gap-12 lg:text-xl">
      <Link href="our-team">
        <h1 className="hover:scale-105">Our Team</h1>
      </Link>

      <Link href="events">
        <h1 className="hover:scale-105">Events</h1>
      </Link>

      <Link href="contact-us">
        <h1 className="hover:scale-105">Contact</h1>
      </Link>

      <Link href="join-us">
        <h1 className="hover:scale-105">Join</h1>
      </Link>
    </div>
  );
}
