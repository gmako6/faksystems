import React from "react";
import { Title } from "./Title";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Destinations = () => {
  return (
    <div className="container mx-auto p-5 md:pt-24 py-10">
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 md:gap-10">
        <div className=" p-5 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww&w=1000&q=80')] bg-cover bg-center rounded-lg">
          1434
        </div>
        <div className="col-span-2">
          <div className="flex flex-col space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 md:gap-5">
              <div className="p-5 col-span-2  bg-cover bg-center  rounded-lg">
                <h1 className="md:">
                  <Title
                    title={
                      "For over 15 year, we've provided vital IT support for our clients."
                    }
                    locate={"start"}
                  />
                </h1>
              </div>
              <div className=" p-5 "></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 md:gap-5">
              <div className="px-5">
                <Link
                  to={"/tailormade"}
                  className="btn  bg-gradient-to-r from-red-500 to-pink-500  rounded-full space-1 mt-1 border-none hover:drop-shadow-lg"
                >
                  ABOUT US
                  <HiChevronRight size={24} className="ml-2" />
                </Link>
              </div>
              <div className=" p-5  space-y-5 md:space-y-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
