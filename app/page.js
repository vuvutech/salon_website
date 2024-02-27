"use client";
import Image from "next/image";
import ReactDOM from "react-dom";
import { Carousel } from "@trendyol-js/react-carousel";
import Jumbotron from "@/components/Jumbotron";
import ServiceIntro from "@/components/ServiceIntro";
import { serviceData as services } from "@/components/ServiceList";

export default function Home() {
  return (
    <>
      <>
        {/* Hero */}

        <Carousel
          show={1}
          responsive={true}
          swiping={true}
          infinite={true}
          hideArrows={false}
        >
          <Jumbotron
            title="Beautiful Mission"
            description="Mission Statement"
            paragraph="It is the mission of every employee to insure that each time you visit our salon we will exceed your expectations in Customer service, Professionalism, and Quality and Consistency of services."
            images={{
              background: "./jumbotron-bg2.jpg",
              overlay: "./jumbotron-bg.png",
              column1: "../woman5.webp", //// Add actual image URL
              column2: "../woman2.png", //// Add actual image URL
              column3: "../woman3.webp", //// Add actual image URL
            }}
          />
          <Jumbotron
            title="Beautiful Mission"
            description="Mission Statement"
            paragraph="It is the mission of every employee to insure that each time you visit our salon we will exceed your expectations in Customer service, Professionalism, and Quality and Consistency of services."
            images={{
              background: "./jumbotron-bg2.jpg",
              overlay: "./jumbotron-bg.png",
              column1: "../woman5.webp", //// Add actual image URL
              column2: "../woman2.png", //// Add actual image URL
              column3: "../woman3.webp", //// Add actual image URL
            }}
          />
        </Carousel>
        {/* End Hero */}
      </>
      <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
          <div className="space-y-3">
            <h2 className="mt-4 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Discover Beauty Excellence: Unveiling <br /> a Spectrum of Tailored Salon Services
            </h2>
            <div className="max-w-7xl">
              <p className="">
              This salon caters to men and women with various hair care services. It offers standard options like haircuts and washes, along with specialized treatments and extensions. From classic braids to trendy dreadlocks, hairstyling options abound. General services like coloring and straightening complete the one-stop shop experience. 
              </p>
            </div>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            
            {/* Service intro */}
           { <ServiceIntro
              title="First feature"
              description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
              imageUrl="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
            />}
           { <ServiceIntro
              title="First feature"
              description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
              imageUrl="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
            />}
           { <ServiceIntro
              title="First feature"
              description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
              imageUrl="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
            />}
           { <ServiceIntro
              title="First feature"
              description="Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum."
              imageUrl="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
            />}
          </div>
        </div>
      </div>
    </>
  );
}
