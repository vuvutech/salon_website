"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "./ServerActions";
import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from 'react';


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
  const format = "HH:mm";
  const datePickerClass = "datePickerClass"; // Using the previously defined class

  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState(new Date());
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const handleChangeTime = (time) => {
    // Parse the selected time using dayjs
    const parsedTime = dayjs(time, format);
    setTime(parsedTime);
    console.log(time);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure all required fields are present before sending data. Form validation on server side.
    const formattedDate = dayjs(date).format("D MMMM YYYY, [time] h:mm a");

    console.log(name, email, number, date);
    if (!name || !email || !number || !date) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // alert(access_key);
    const formData = {
      name,
      email,
      number,
      date: formattedDate,
    };

    // https://getform.io/f/nbdeerda
    fetch("https://formcarry.com/s/phqbeIDYVuk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
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
      setTimeout(() => window.location.reload(), 3000);

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

                  <div>
                    {/* <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      ref={recaptchaRef}
                      onChange={handleCaptchaSubmission}
                    /> */}

                    <Button
                      // disabled={!isVerified}
                      className="w-full"
                      type="submit"
                    >
                      Submit
                    </Button>
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
