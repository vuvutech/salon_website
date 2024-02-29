"use client"
import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "./ServerActions"
import React, { useRef, useState } from "react"

import {
  Button,
  Navbar,
  Label,
  Modal,
  TextInput,
  Datepicker,
  DarkThemeToggle
} from "flowbite-react"
import { HiOutlineArrowRight } from "react-icons/hi"

// Navigation object
//-----------------------------------------------------------
export const links = [
  { id: 1, href: "/", name: "Home", label: "home" },
  { id: 2, href: "/about", name: "About", label: "about" },
  { id: 3, href: "/services", name: "Services", label: "services" },
  { id: 4, href: "/booking", name: "Booking", label: "booking" },
  { id: 5, href: "/gift", name: "GiftCard", label: "gift" },
  { id: 6, href: "/contact", name: "Contact", label: "contact" }
]

const Navigation = () => {
  const recaptchaRef = useRef(null)
  const [isVerified, setIsverified] = useState(false)

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }

  const [openModal, setOpenModal] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [date, setDate] = useState("")

  function onCloseModal() {
    setOpenModal(false)
    setEmail("")
    setDate("")
    setName("")
    setNumber("")
  }
  function onSubmit() {
    setOpenModal(false)
    setEmail("")
    setDate("")
    setName("")
    setNumber("")
  }
  return (
    <Navbar fluid>
      <Navbar.Brand href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Elsie Hair Salon
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
        <div className="sm:flex sm:gap-4">
          <div className="hidden sm:flex items-center justify-end">
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
          </div>

          <Modal
            className="max-h-[100vh]"
            show={openModal}
            size="md"
            onClose={onCloseModal}
            popup
          >
            <form className="flex flex-col gap-4 h-auto">
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-3">
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
                      onChange={event => setName(event.target.value)}
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
                      onChange={event => setEmail(event.target.value)}
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
                      onChange={event => setNumber(event.target.value)}
                      required
                    />
                  </div>
                  <div className="">
                    <div className="mb-2 block">
                      <Label htmlFor="date" value="Choose Date" />
                    </div>
                    <Datepicker
                      // Set minDate to today's date
                      minDate={new Date()}
                      maxDate={new Date(2027, 3, 30)}
                    />
                  </div>

                  <div>
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      ref={recaptchaRef}
                      onChange={handleCaptchaSubmission}
                    />

                    <Button
                      disabled={!isVerified}
                      className="w-full"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </form>
          </Modal>
        </div>
        <DarkThemeToggle />
      </div>
      <Navbar.Collapse>
        {links.map(
          link =>
            link.href !== "/booking" && (
              <Navbar.Link key={link.id} href={link.href}>
                {link.name}
              </Navbar.Link>
            )
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
