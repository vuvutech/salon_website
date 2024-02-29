import Link from "next/link";
import Image from "next/image";
import React from "react";
import Jumbotron from "@/components/Jumbotron";
import JumbotronFlipped from "@/components/JumbotronFlipped";

const About = () => {
  return (
    <>
      <Jumbotron
        title="Beautiful Mission"
        description="Mission Statement"
        paragraph="It is the mission of every employee to insure that each time you visit our salon we will exceed your expectations in Customer service, Professionalism, and Quality and Consistency of services."
        images={{
          background: "./jumbotron-bg2.jpg",
          overlay: "./jumbotron-bg.png",
          column1:
		  "../woman5.webp", //// Add actual image URL
          column2:
		  "../woman2.png", //// Add actual image URL
          column3:
		  "../woman3.webp", //// Add actual image URL
        }}
      />


     

      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dsark:bg-teal-800">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full space-y-4">
            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-teal-900">
              Vision Statement
            </h2>
            {/* <p className="mt-3 text-gray-800 dark:text-gray-400">
              It is the mission of every employee to insure that each time you
              visit our salon we will exceed your expectations in Customer
              service, Professionalism, and Quality and Consistency of services.
            </p> */}


            {/* <div className="grid grid-cols-2 gap-4">
              <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <a target="_blank">
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Hotel Photo"
                    />
                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </a>
              </article>
              <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <a target="_blank">
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Hotel Photo"
                    />
                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>

                      <button className="text-sm">Add to cart</button>
                    </div>
                  </div>
                </a>
              </article>
            </div> */}
            <div>
              <p>
                Elsie Hair Salon has earned its reputation as the heart of East
                Rand in South Africa leading salon experience,offering
                unsurpassed styling, colouring, beauty treatments, and customer
                service to a discerning clientele. <br /> <br />
                With expert consultation, design, creation and aftercare, we
                will not only help you realise your perfect look, but offer you
                the very best in professional and practical advice; keeping your
                hair looking salon fresh long after you’ve left the chair.{" "}
                <br /> <br />
                Our team pursue the very highest standards, pushing and honing
                their craft via intensive on-going training; and only using the
                very finest products available.
              </p>
            </div>
          </div>
          {/* End Col */}

          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-teal-500">
                <svg
                  className="flex-shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokewidth="{2}"
                  strokelinecap="round"
                  strokelinejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-teal-500">
                  EMPLOYEE EXPECTATIONS
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Stay on time, be consistent, and provide the highest level of
                  customer service in the field of cosmetology.
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-teal-500">
                <svg
                  className="flex-shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokewidth="{2}"
                  strokelinecap="round"
                  strokelinejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-teal-500">
                  EXCELLENCE THROUGH EDUCATION
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Our staff is committed to continuing education. This
                  commitment enables us to bring you the very best & latest in
                  any of our services. ​
                </p>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-teal-500">
                <svg
                  className="flex-shrink-0 size-5"
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
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-teal-500">
                  CUSTOMER SERVICE
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Salon is committed to superior customer service. We
                  consistently strive to go beyond your expectations, so it is
                  with complete confidence that we guarantee each service.
                </p>
              </div>
            </div>
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-teal-500">
                <svg
                  className="flex-shrink-0 size-5"
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
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-teal-500">
                  THE ULTIMATE CUSTOMER CARE
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Beyond customer service..."Customer Care" At Elsie Hair Salon
                  we pride ourselves on the very best in Customer Care. We
                  pledge that each time you visit the salon you shall be treated
                  to a warm, friendly, and helpful staff and environment.
                </p>
              </div>
            </div>

            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </section>

	  <JumbotronFlipped
        title="The Elsie Vision"
        description="Our Vision Statement"
        paragraph="It is the mission of every employee to insure that each time you visit our salon we will exceed your expectations in Customer service, Professionalism, and Quality and Consistency of services."
        images={{
          background: "./jumbotron-bg2.jpg",
          overlay: "./shape-08.png",
          column1:
		  "../woman2-gray1.png", //// Add actual image URL
          column2:
		  "../woman2-gray1.png", //// Add actual image URL
          column3:
            "../woman2-gray1.png", //// Add actual image URL
        }}
      />
    </>
  );
};

export default About;
