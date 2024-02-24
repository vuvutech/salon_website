import Header from "@/components/Header";
import React from "react";

const Gift = () => {
  return (
    <>
          <>
            {/* Hero */}
            <div className="relative overflow-hidden">
              {/* Gradients */}
              <div
                aria-hidden="true"
                className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
              >
                <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
                <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
              </div>
              {/* End Gradients */}

              <div className="relative z-10">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                  <div className="max-w-2xl text-center mx-auto">
                    <h5 className="text-pink-600 uppercase font-extrabold tracking-wider text-xl ">
                      Why Choose Us
                    </h5>

                    {/* Title */}
                    <div className="mt-5 max-w-5xl">
                      <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                        The Intuitive Web Solutions
                      </h1>
                    </div>
                    {/* End Title */}

                    <div className="mt-5 max-w-5xl">
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        Preline UI is an open-source set of prebuilt UI
                        components, ready-to-use examples and Figma design
                        system based on the utility-first Tailwind CSS
                        framework.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Hero */}
          </>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-2 lg:items-center  border rounded-3xl p-4 md:p-12">
          <div className="lg:col-span-7">
            {/* Grid */}
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center ">
              <div className="col-span-3">
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
              <div className="col-span-3">
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
              <div className="col-span-5">
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h5 className="uppercase font-bold ">Gift of Beauty</h5>
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                  Collaborative tools to design user experience
                </h2>
                <p className="text-gray-500">
                  Use our tools to explore your ideas and make your vision come
                  true. Then share your work easily.
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
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
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">Less routine</span> – more
                    creativity
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
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
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    Hundreds of thousands saved
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
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
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    Scale budgets <span className="font-bold">efficiently</span>
                  </span>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </>
  );
};

export default Gift;
