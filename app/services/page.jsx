import React from "react";
import Jumbotron from "@/components/Jumbotron";
import JumbotronFlipped from "@/components/JumbotronFlipped";
import ServiceItem from "@/components/ServiceItem";


const Services = () => {
  return (
    <>
      <Jumbotron
        title="Service Offering"
        description="Transform Your Look: Expert Hair Services for All Styles"
        paragraph="From blowouts to dreadlocks, we've got you covered! Treat your hair to our expert services: cornrows, weaves, singles, styling, relaxers, cuts, color, treatments, and more! Pamper yourself, kids welcome. Book your appointment today!"
        images={{
          background: "./jumbotron-bg2.jpg",
          overlay: "./jumbotron-bg.png",
          column1: "../woman7.webp", //// Add actual image URL
          column2: "../woman9.webp", //// Add actual image URL
          column3: "../woman8.webp", //// Add actual image URL
        }}
      />

      <section
        id="features"
        className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-20"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Services
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">

          Unleash your hair's potential! Our salon caters to all your needs, offering haircuts, styling, treatments, and essential care – everything for healthy, beautiful hair.
          </p>
        </div>

        <div className="mx-auto grid md:justify-center gap-2 sm:grid-cols-2 md:max-w-[74rem] md:grid-cols-4">

          <ServiceItem
            title="General Hair Services"
            description="More than just a cut. We offer a variety of services including scalp treatments, hair extensions, and styling consultations."
          />
          <ServiceItem
            title="Hair Treatment"
            description="Revitalize and repair. Deep treatments address dryness, damage, and thinning, leaving your hair healthy and vibrant."
          />
          <ServiceItem
            title="Hair Styling"
            description="Create your perfect look. From sleek blowouts to intricate updos, our stylists will craft an ideal style for any occasion."
          />
          <ServiceItem
            title="Standard Hair Care"
            description="Essential maintenance made easy. Our experienced stylists offer precision haircuts, trims, and washes to maintain healthy hair."
          />

        </div>
      </section>

      <JumbotronFlipped
        title="Our Vision"
        description="Our Vision Statement"
        paragraph="It is the mission of every employee to insure that each time you visit our salon we will exceed your expectations in Customer service, Professionalism, and Quality and Consistency of services."
        images={{
          background: "./jumbotron-bg2.jpg",
          overlay: "./shape-08.png",
          column1: "../woman2-gray1.png", //// Add actual image URL
          column2: "../woman2-gray1.png", //// Add actual image URL
          column3: "../woman2-gray1.png", //// Add actual image URL
        }}
      />
    </>
  );
};

export default Services;
