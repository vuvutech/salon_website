import React from "react";
import { AlarmClockPlus } from 'lucide-react';


const ChopBox = () => {
  return (
    <>
      <div className="block items-center h-full text-white font-bold py-4">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-x-0">
          <div className="hidden md:col-span-2  bg-pink-950 md:grid place-items-center"><AlarmClockPlus size={78} /></div>
          <div className="col-span-6 bg-pink-800 flex w-full flex-col justify-center items-start p-4">
            <ul className="space-y-2 text-sm ">
              <h2 className="text-sm uppercase font-bold">Operating Hours</h2>

              <li className="flex space-x-3">
                <span className="size-5 flex justify-center items-center rounded-full bg-pink-500 text-white dark:bg-blue-800/30 dark:text-blue-500">
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
                  Monday to Friday: 8am &#8212; 6pm
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="size-5 flex justify-center items-center rounded-full bg-pink-500 text-white dark:bg-blue-800/30 dark:text-blue-500">
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
                <span className="text-white">Saturday 8am &#8212; 6pm</span>
              </li>
              <li className="flex space-x-3">
                <span className="size-5 flex justify-center items-center rounded-full bg-pink-500 text-white dark:bg-blue-800/30 dark:text-blue-500">
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
                <span className="text-white">Sunday 11am &#8212; 5pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChopBox;
