import React from "react";
import { Title } from "./Title";

export const Portfolio = () => {
  return (
    <div className="container mx-auto p-5 md:py-24 py-10">
      <div className="">
        <div className="flex items-center justify-start  gap-2 mb-5">
          <span className="p-2 bg-blue-500 rounded-full"></span>
          <span className="p-2 bg-red-500 rounded-full"></span>
          <h5 className="text-sm text-gray-600">OUR WORKS</h5>
        </div>
        <Title title={"Portfolio"} locate={"start"} />
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 md:gap-10">
        <div className=" p-5 bg-[url('https://placekitten.com/1400')] bg-cover bg-center rounded-lg h-64">
          1434
        </div>
        <div className="col-span-2">
          <div className="flex flex-col space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-5 md:space-y-0 md:gap-5 md:h-32">
              <div className="p-5 col-span-2 bg-[url('https://placekitten.com/1400')] bg-cover bg-center  rounded-lg  h-64 md:h-28">
                34353
              </div>
              <div className=" p-5 bg-[url('https://placekitten.com/1400')] bg-cover bg-center  rounded-lg h-64 md:h-28">
                34353
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 md:gap-5  md:h-32">
              <div className=" p-5 bg-[url('https://placekitten.com/1400')] bg-cover bg-center  rounded-lg h-64 md:h-28">
                34353
              </div>
              <div className=" p-5 bg-[url('https://placekitten.com/1400')] bg-cover bg-center space-y-5 md:space-y-0  rounded-lg h-64 md:h-28">
                34353
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
