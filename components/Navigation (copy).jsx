"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  Datepicker,
  DarkThemeToggle, 
  Flowbite
} from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

// Navigation object
//-----------------------------------------------------------
export const links = [
  { id: 1, href: "/", name: "Home", label: "home" },
  { id: 2, href: "/about", name: "About", label: "about" },
  { id: 2, href: "/services", name: "Services", label: "services" },
  { id: 3, href: "/booking", name: "Booking", label: "booking" },
  { id: 5, href: "/gift", name: "GiftCard", label: "gift" },
  { id: 6, href: "/contact", name: "Contact", label: "contact" },
];

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
    setDate("");
    setName("");
    setNumber("");
  }
  function onSubmit() {
    setOpenModal(false);
    setEmail("");
    setDate("");
    setName("");
    setNumber("");
  }

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="#">
              <span className="sr-only">Home</span>
              Elsie Hair Salon
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {links.map(
                  (link) =>
                    link.href !== "/booking" && (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex items-center justify-end">
                <Link href="/booking">
                  <Button
                    outline
                    pill
                    size="sm"
                    className="flex justify-between items-center"
                    onClick={() => setOpenModal(true)}
                  >
                    <span className="">Bookings</span>
                    <HiOutlineArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <Modal show={openModal} size="md" onClose={onCloseModal} popup>
              <form className="flex max-w-md flex-col gap-4">
                <Modal.Header />
                <Modal.Body>
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Sign in to our platform
                    </h3>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" />
                      </div>
                      <TextInput
                        id="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                      </div>
                      <TextInput
                        id="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="number" value="Your number" />
                      </div>
                      <TextInput
                        id="number"
                        placeholder="+27 065 742 0778"
                        value={number}
                        onChange={(event) => setNumber(event.target.value)}
                        required
                      />
                    </div>
                    <div className="">
                      <div className="mb-2 block">
                        <Label htmlFor="date" value="Choose Date" />
                      </div>
                      <Datepicker
                        minDate={new Date()} // Set minDate to today's date
                        maxDate={new Date(2027, 3, 30)}
                      />
                    </div>

                    <div>
                      <Button type="submit">Submit</Button>
                    </div>
                  
                  </div>
                </Modal.Body>
                </form>
              </Modal>
            </div>
            <DarkThemeToggle />

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
