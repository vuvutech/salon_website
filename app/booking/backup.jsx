"use client";
import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { AiOutlineLoading } from "react-icons/ai";

import { RadioGroup } from "@headlessui/react";
import { serviceData } from "@/components/ServiceList";
import { DatePicker } from "antd";

import { Button, Label, TextInput } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

// import BookingForm from '@/components/BookingForm'

const Booking = () => {
  const standardService = serviceData[0].services[0];
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
  const [service, setService] = useState(serviceData[0].name);

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

    // if (!name || !email || !number || !date) {
    //   toast.error("Please fill in all required fields.");
    //   return;
    // }

    const data = {
      name,
      email,
      number,
      service,
      date: formattedDate,
    };
    // https://getform.io/f/nbdeerda
    fetch(`${siteurl}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        mode: 'no-cors'
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

      toast.success("Request Received. We shall be in Touch shortly!");
      setTimeout(() => window.location.reload(), 3000);
    }

    if (error) {
      // Show error toast
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

  function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative bg-teal-100 dark:bg-teal-950">
      <div className="rounded-3xl md:p-8 p-4 border border-spacing-2 border-teal-200/95 dark:border-teal-200/15  ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 h-auto"
          encType="multi/part/form-data"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
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
                  id="email4"
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@ElsieHairSalon.co.za"
                  required
                />
              </div>
              <div className="space-y-3">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="date" value="Choose Date & Time" />
                  </div>
                  <DatePicker 
                  selected={date}
                  onChange={(date) => setDate(date)}
                  timeClassName={handleColor}
                  isClearable
                  timeFormat="HH:mm" 
                  placeholder="Select Appointment Date and Time" 
                  showTime className="w-full p-3 rounded-lg text-gray-900 " 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="mb-2 block">
                <Label htmlFor="service" value="Select Service Type" />
              </div>

              <div className="mx-auto w-full ">
                <RadioGroup value={service} onChange={setService}>
                  <RadioGroup.Label className="sr-only">
                    Service Type
                  </RadioGroup.Label>
                  <div className=" grid grid-cols-2 gap-3  ">
                    {serviceData[0].services.map((service) => (
                      <RadioGroup.Option
                        key={service.name}
                        value={service}
                        onChange={(service) => setService(service)}

                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                              : ""
                          }
        ${
          checked ? "bg-sky-900/75 text-white" : "bg-white"
        } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium ${
                                      checked ? "text-white" : "text-gray-900"
                                    }`}
                                  >
                                    {service.name} <br />
                                    {/* <hr /> */}
                                    123456
                                  </RadioGroup.Label>
                                </div>
                              </div>
                              {checked && (
                                <div className="shrink-0 text-white">
                                  <CheckIcon className="h-6 w-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <ReCAPTCHA
                className="w-full"
                sitekey="6LcZ7ZYpAAAAAN2ExYQkPwtpAqSqd3J8DCA9NebH"
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
              />
            </div>
            <div className="text-center flex justify-center items-center">
              {showButton ? (
                <Button
                  disabled={isDisabled}
                  className="w-full md:w-2/4 flex justify-center text-center  "
                  type="submit"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  className="w-full md:w-2/4 flex justify-center text-center  "
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
        </form>
      </div>
    </section>
  );
};

export default Booking;
