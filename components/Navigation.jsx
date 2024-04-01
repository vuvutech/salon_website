"use client";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

import {
  Button,
  Navbar,
  DarkThemeToggle,

} from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

// Navigation object
//-----------------------------------------------------------
export const links = [
  { id: 1, href: "/", name: "Home", label: "home" },
  { id: 2, href: "/about", name: "About", label: "about" },
  { id: 3, href: "/services", name: "Services", label: "services" },
  { id: 4, href: "/booking", name: "Booking", label: "booking" },
  { id: 5, href: "/gift", name: "GiftCard", label: "gift" },
  { id: 6, href: "/contact", name: "Contact", label: "contact" },
];

const Navigation = () => {
  return (
    <Navbar className="dark:bg-teal-950 border-b dark:border-teal-700/25 " fluid>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <span className="leading-tight ">Elsie Hair Salon</span>
          <span className="font-['poppins'] text-gray-400 ">&trade;</span>
        </span>
      </Navbar.Brand>
      <div className="flex items-center md:order-2 gap-x-2">
        <div className="sm:flex items-center sm:gap-4  ">
          <div className=" sm:flex items-center justify-end">
            <Link href="/booking">
              <Button
                outline
                pill
                size="xs"
                className="flex justify-between items-center "
              >
                <span className="text-xs px-2 ">Bookings</span>
                <HiOutlineArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <DarkThemeToggle />
        </div>
        <div>
          <Navbar.Toggle />
        </div>
      </div>
      <Navbar.Collapse>
        {links.map(
          (link) =>
            link.href !== "/booking" && (
              <Navbar.Link
                key={link.id}
                href={link.href}
                className="dark:text-white dark:hover:text-teal-300 font-bold"
              >
                <div className="flex justify-between items-center ">
                  <span>{link.name}</span>
                  <HiOutlineArrowRight className="ml-2 h-3 w-3 md:hidden " />
                </div>
              </Navbar.Link>
            )
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

