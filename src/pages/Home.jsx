import React from "react";
import {
  Services,
  Featured,
  Hero,
  Portfolio,
  TourCategories,
  AboutUs,
} from "../components";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <TourCategories />
      <AboutUs />
      <Featured />
      <Services />
      <Portfolio />
    </div>
  );
};

export default Home;
