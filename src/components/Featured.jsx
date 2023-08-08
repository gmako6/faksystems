import React from "react";
import { Paragraph2, Title, Title2 } from "./Title";

import { HiPlus } from "react-icons/hi";
import { Dots } from "./Dots";

export const Featured = () => {
  return (
    <div className="bg-slate-100 md:py-24 py-10">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          <Title title={"How we do it."} locate={"start"} />
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 shadow-md md:rounded-l-lg md:rounded-r-lg border">
          <div className="bg-white p-5 py-10 md:rounded-l-lg  border">
            <Dots color={"blue"} title={"01"} position={"justify-start"} />
            <div className="flex justify-between items-center py-5">
              <Title2 title={"Strategy"} />
              <span className="p-1 border border-gray-600 rounded-full">
                <HiPlus size={12} className=" text-gray-600" />
              </span>
            </div>
            <div className="">
              <Paragraph2
                className={"pt-0"}
                content={
                  "Strategic technology advice to help plan your future growth."
                }
              />
            </div>
          </div>
          <div className="bg-white p-5 py-10  border">
            <Dots color={"blue"} title={"02"} position={"justify-start"} />
            <div className="flex justify-between items-center py-5">
              <Title2 title={"Planning"} />
              <span className="p-1 border border-gray-600 rounded-full">
                <HiPlus size={12} className=" text-gray-600" />
              </span>
            </div>
            <div className="">
              <Paragraph2
                className={"pt-0"}
                content={
                  "Strategic technology advice to help plan your future growth."
                }
              />
            </div>
          </div>
          <div className="bg-white p-5 py-10   border">
            <Dots color={"blue"} title={"03"} position={"justify-start"} />
            <div className="flex justify-between items-center py-5">
              <Title2 title={"Security"} />
              <span className="p-1 border border-gray-600 rounded-full">
                <HiPlus size={12} className=" text-gray-600" />
              </span>
            </div>
            <div className="">
              <Paragraph2
                className={"pt-0"}
                content={
                  "Strategic technology advice to help plan your future growth."
                }
              />
            </div>
          </div>
          <div className="bg-white p-5 py-10 md:rounded-r-lg  border">
            <Dots color={"blue"} title={"04"} position={"justify-start"} />
            <div className="flex justify-between items-center py-5">
              <Title2 title={"Support"} />
              <span className="p-1 border border-gray-600 rounded-full">
                <HiPlus size={12} className=" text-gray-600" />
              </span>
            </div>
            <div className="">
              <Paragraph2
                className={"pt-0"}
                content={
                  "Strategic technology advice to help plan your future growth."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
