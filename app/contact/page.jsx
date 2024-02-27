import React from "react";
import Jumbotron from "@/components/Jumbotron";
import ChopBox from "@/components/ChopBox";
import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <section className="block h-auto">
        <Jumbotron
          title="Best Products & Service"
          description="Two Locations &#8212; Same Quality & Service "
          paragraph="From blowouts to dreadlocks, we've got you covered! Treat your hair to our expert services: cornrows, weaves, singles, styling, relaxers, cuts, color, treatments, and more! Pamper yourself, kids welcome. Book your appointment today!"
          images={{
            background: "./jumbotron-bg2.jpg",
            overlay: "./jumbotron-bg.png",
            column1: "../woman7.webp", //// Add actual image URL
            column2: "../woman10.webp", //// Add actual image URL
            column3: "../woman11.webp", //// Add actual image URL
          }}
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full relative">
        <div className="block">
          <div className="block items-center h-full text-white font-bold py-4">
            <div className="grid grid-cols-8 gap-x-0 h-full">
              <div className="hidden col-span-2  bg-teal-950 md:grid place-items-center">
                <MapPin size={78} />
              </div>
              <div className="col-span-6 bg-teal-800  flex w-full flex-col justify-center items-start p-4">
                <ul className="space-y-2 text-sm flex flex-col justify-start ">
                  <h2 className="text-sm uppercase font-bold">Locations</h2>

                  <li className="flex space-x-3">
                    <span className="size-5 flex justify-center items-center rounded-full bg-teal-500 text-white dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-white">
                      7 Deodar St, Mayberry Park, Alberton, 1481, South Africa
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="size-5 flex justify-center items-center rounded-full bg-teal-500 text-white dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-white">
                      28 Abel Moller St, Brackenhurst, Alberton, 1448, South
                      Africa
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <ChopBox />
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full h-96">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.5312594685192!2d28.104173975418764!3d-26.309291577011887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9505dac3aabf73%3A0x2fb4a95bfb421287!2s28%20Abel%20Moller%20St%2C%20Brackenhurst%2C%20Alberton%2C%201448%2C%20South%20Africa!5e0!3m2!1sen!2sgh!4v1708695513353!5m2!1sen!2sgh"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
        <div className="relative w-full h-96">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.2589230263807!2d28.1153767754191!3d-26.31811407700663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951b2bfe541ae3%3A0xd2beecc6fb991f84!2s7%20Deodar%20St%2C%20Mayberry%20Park%2C%20Alberton%2C%201481%2C%20South%20Africa!5e0!3m2!1sen!2sgh!4v1708695729708!5m2!1sen!2sgh"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
