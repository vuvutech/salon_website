"use client";
import { useState, useEffect } from "react";
import { serviceData as services } from "@/components/ServiceList";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    service: "General",
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
    console.log(formData.selectedServices);
  }, [formData.selectedServices]);

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
    <form
      onSubmit={handleSubmit}
      className="max-w-xl flex flex-col justify-between space-y-3"
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="number">Telephone:</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <fieldset className="flex max-w-md flex-col gap-4">
          <legend className="mb-4">Choose your Service Category</legend>

          {services[0].services.map((category) => (
            <fieldset key={category.name}>
              <legend>{category.name}</legend>
              {category.services.map((service) => (
                <div className="flex items-center gap-2" key={service.id}>
                  <Checkbox
                    id={service.id}
                    name={`service-${category.name}`}
                    value={service.name}
                    onChange={handleChange}
                    checked={formData.selectedServices.includes(service.name)}
                  />
                  <Label htmlFor={service.id}>{service.name}</Label>
                </div>
              ))}
            </fieldset>
          ))}
        </fieldset>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
