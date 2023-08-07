import React from "react";
import {
  Destinations,
  FAQs,
  Featured,
  Hero,
  Operation,
  Portfolio,
  TourCategories,
} from "../components";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <TourCategories />
      <Destinations />
      <Featured />
      <FAQs />
      <Portfolio />
      {/* <Operation /> */}
    </div>
  );
};

export default Home;
