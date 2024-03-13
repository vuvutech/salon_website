"use client";
import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { AiOutlineLoading } from "react-icons/ai";

import {
  Button,
  Navbar,
  Label,
  Modal,
  TextInput,
  Datepicker,
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
  const siteurl = process.env.NEXT_PUBLIC_SITE_URL;
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  // console.log(sitekey);

  const format = "HH:mm";
  const datePickerClass = "datePickerClass"; // Using the previously defined class

  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState(new Date());
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleCaptchaSubmission = (token) => {
    // console.log("reCAPTCHA verified:", token);
    setShowButton(true);
    return; // Assuming verification is successful (replace with actual validation)
    // Send the token to your server for verification
  };

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsDisabled(true);

    // Ensure all required fields are present before sending data. Form validation on server side.
    const formattedDate = dayjs(date).format("D MMMM YYYY, [time] h:mm a");

    if (!name || !email || !number || !date) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const data = {
      name,
      email,
      number,
      date: formattedDate,
    };
    // https://getform.io/f/nbdeerda
    fetch(`${siteurl}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 200) {
          setSubmitted(true);
        } else if (response.status === 500) {
          setError(true);
        }
      })
      .catch((error) => {
        console.log("An error occurred while sending your request");
      });
  };

  useEffect(() => {
    if (submitted) {
      // Show success toast
      onCloseModal();
      toast.success("Request Received. We shall be in Touch shortly!");
      setTimeout(() => window.location.reload(), 3000);
    }

    if (error) {
      // Show error toast
      onCloseModal();
      toast.error("Submission Failure");
      // setTimeout(() => window.location.reload(), 3000);
    }
  }, [submitted, error]);

  function onCloseModal() {
    setOpenModal(false);
    setName("");
    setEmail("");
    setNumber("");
    setDate("");
  }

  return (
    <Navbar className="dark:bg-teal-950" fluid>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar.Brand href="/">
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
              className="flex justify-between items-center "
              onClick={() => setOpenModal(true)}
            >
              <span className="">Bookings</span>
              <HiOutlineArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Modal
            id="modal"
            className="max-h-auto h-auto"
            show={openModal}
            size="xl"
            onClose={onCloseModal}
            popup
          >
            <Modal.Header />
            <Modal.Body className="h-auto max-h-full">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 h-auto"
                encType="multi/part/form-data"
              >
                <div className="space-y-2">
                  <h5 className="text-sm font-small text-gray-900 dark:text-white">
                    Book Appointment
                  </h5>
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
                  <div className=" grid grid-cols-1">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="date" value="Choose Date & Time" />
                      </div>
                      <DatePicker
                        showIcon
                        selected={date}
                        onChange={(date) => setDate(date)}
                        timeClassName={handleColor}
                        showTimeSelect
                        isClearable
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        className={datePickerClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div>
                      <ReCAPTCHA
                        sitekey="6LcZ7ZYpAAAAAN2ExYQkPwtpAqSqd3J8DCA9NebH"
                        ref={recaptchaRef}
                        onChange={handleCaptchaSubmission}
                      />
                    </div>
                    <div>
                      {showButton ? (
                        <Button
                          disabled={isDisabled}
                          className="w-full"
                          type="submit"
                        >
                          Submit
                        </Button>
                      ) : (
                        <Button
                          disabled
                          size="md"
                          isProcessing
                          processingSpinner={
                            <AiOutlineLoading className="h-6 w-6 animate-spin" />
                          }
                        >
                          Verifying...{" "}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
        <DarkThemeToggle />
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
                {link.name}
              </Navbar.Link>
            )
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
