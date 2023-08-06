import React from "react";
import {
  Destinations,
  FAQs,
  Featured,
  Hero,
  Operation,
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
      <Operation />
    </div>
  );
};

export default Home;
