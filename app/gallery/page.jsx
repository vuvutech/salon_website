import React from "react";
import Jumbotron from "@/components/Jumbotron";

const Gallery = () => {
  return (
    <div>
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
      <div className="flex flex-col md:grid md:grid-cols-3 gap-3 p-4">
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?salon"
            alt="Hair Treatment"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Hair Treatment
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?braids"
            alt="Planter Stand with Pots"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Planter Stand with Pots
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?watering-cans"
            alt="Watering Cans"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Watering Cans
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?metal-planters"
            alt="Metal Planters"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Metal Planters
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?table-top-planters"
            alt="Table Top Planters"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Table Top Planters
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?wall-mounted-stands"
            alt="Wall Mounted Stands"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Wall Mounted Stands
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?jute-plant-pots"
            alt="Jute Plant Pots"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Jute Plant Pots
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?bird-feeders"
            alt="Bird Feeders"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Bird Feeders
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?hanging-birds"
            alt="Hanging Birds"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
            Hanging Birds
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?garden-sticks"
            alt="Garden Sticks"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Garden Sticks
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?garden-tray-miniatures"
            alt="Garden Tray Miniatures"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
            Garden Tray Miniatures
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <img
            src="https://source.unsplash.com/400x300/?garden-tool-set"
            alt="Garden Tool Set"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover-bg-opacity-60 transition">
            Garden Tool Set
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
