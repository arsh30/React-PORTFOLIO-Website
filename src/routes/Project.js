import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recents works." />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

// Here we are sending props

export default Project;
