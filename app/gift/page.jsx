import Header from "@/components/Header";
import Jumbotron from "@/components/Jumbotron";
import React from "react";

const Gift = () => {
  return (
    <>
      <Jumbotron
        title="Gift of Beauty"
        description="Unwrap Happiness: Send a Gift Card Today!"
        paragraph="Indulge someone special with a salon gift card. Let them choose from a menu of beauty services, ensuring a personalized and pampering experience. A perfect gift for any occasion!"
        images={{
          background: "./jumbotron-bg2.jpg",
          overlay: "./jumbotron-bg.png",
          column2: "./hair/women9.jpg", 
          column1: "./hair/women8.jpg", 
          column3: "./hair/women10.jpg", 

        }}
      />

    </>
  );
};

export default Gift;
