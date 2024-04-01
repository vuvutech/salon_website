"use client";
import { useState, useEffect } from "react";
import { serviceData as services } from "@/components/ServiceList";
import { DatePicker, Space } from "antd";

import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Datepicker,
  DarkThemeToggle,
} from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function BookingForm() {

  const dateClasses = `block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg`;

  const onDateSelect = (value, dateString) => {

    setFormData((prevData) => ({
      ...prevData,
      date: dateString, // Update formData.date with the selected date string
    }));
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    selectedServices: [], // Array to store selected services
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          selectedServices: [...prevData.selectedServices, value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          selectedServices: prevData.selectedServices.filter(
            (service) => service !== value
          ),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Inside the component
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative bg-teal-100 dark:bg-teal-950">
      <div className="rounded-3xl md:p-8 p-4 border border-spacing-2 border-teal-200/95 dark:border-teal-200/15  ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between space-y-3"
        >
          <div className="space-y-3">
            <div>
              <label className="dark:text-white font-bold" htmlFor="name">Your Name:</label>
              <TextInput
                type="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What Should we call you...."
                required
                />
            </div>

            <div>
              <label className="dark:text-white font-bold" htmlFor="email">Email:</label>
              <TextInput
                type="email"
                id="email"
                placeholder="Your Email Address ..."
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="dark:text-white font-bold" htmlFor="number">Telephone:</label>
              <TextInput
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                placeholder="Your Telephone Number ..."
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="dark:text-white font-bold" htmlFor="date">Date:</label>
    <DatePicker className={dateClasses} allowClear showTime onChange={onDateSelect} placeholder={'Select Date and Time'} />


              {/*               <Datepicker
                value={formData.date}
                onChange={handleChange}
                required
              /> */}
            </div>
          </div>
          <div>
            <div className="space-y-8 ">
              <legend className="mb-4 dark:text-white font-2xl font-bold uppercase ">
                Choose your Service Category
              </legend>

              {services[0].services.map((category) => (
                <fieldset className="flex flex-wrap gap-4 " key={category.id}>
                  <legend className="font-bold capitalize dark:text-white ">
                    {category.name}
                  </legend>
                  {category.services.map((service) => (
                    <div className="max-w-3xl gap-4 " key={service.id}>
                      <div className="flex justify-between items-center w-full max-w-xs px-4 py-2 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className=" text-xs font-normal px-4">
                          <Label className="dark:text-white font-bold" htmlFor={service.id}>{service.name}</Label>
                        </div>
                        <div>
                          <Checkbox
                            id={service.id}
                            name={`service-${category.name}`}
                            value={service.name}
                            onChange={handleChange}
                            checked={formData.selectedServices.includes(
                              service.name
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    // <div className="flex gap-2 p-4 " key={service.id}>
                    //   <Checkbox
                    //     id={service.id}
                    //     name={`service-${category.name}`}
                    //     value={service.name}
                    //     onChange={handleChange}
                    //     checked={formData.selectedServices.includes(service.name)}
                    //     />

                    //   <Label className="dark:text-white font-bold" htmlFor={service.id}>{service.name}</Label>
                    // </div>
                  ))}
                </fieldset>
              ))}
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
