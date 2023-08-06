import React from "react";
import { Paragraph, Paragraph2, Title, Title2 } from "./Title";
import { PackageCard } from "./PackageCard";
import { Link } from "react-router-dom";
import { FaBackward, FaForward } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

export const Featured = () => {
  return (
    <div className="bg-slate-100 md:py-24 py-10">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          <Title title={"How we do it."} locate={"start"} />
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 shadow-md md:rounded-l-lg md:rounded-r-lg border">
          <div className="bg-white p-5 py-10 md:rounded-l-lg  border">
            <div className="flex items-center justify-start  gap-2">
              <span className="p-2 bg-blue-500 rounded-full"></span>
              <span className="p-2 bg-red-500 rounded-full"></span>
              <h5 className="text-sm text-gray-600">01</h5>
            </div>
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
            <div className="flex items-center justify-start  gap-2">
              <span className="p-2 bg-blue-500 rounded-full"></span>
              <span className="p-2 bg-red-500 rounded-full"></span>
              <h5 className="text-sm text-gray-600">02</h5>
            </div>
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
            <div className="flex items-center justify-start  gap-2">
              <span className="p-2 bg-blue-500 rounded-full"></span>
              <span className="p-2 bg-red-500 rounded-full"></span>
              <h5 className="text-sm text-gray-600">03</h5>
            </div>
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
            <div className="flex items-center justify-start  gap-2">
              <span className="p-2 bg-blue-500 rounded-full"></span>
              <span className="p-2 bg-red-500 rounded-full"></span>
              <h5 className="text-sm text-gray-600">04</h5>
            </div>
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

export const BeachFeatured = () => {
  return (
    <div className="w-full  bg-[url('https://placekitten.com/1400')] bg-cover bg-center ">
      <div className="w-full  backdrop-brightness-50">
        <div className="container mx-auto px-5 md:py-24 py-10 ">
          <div className="flex items-center justify-between">
            <Title
              title={"Beach Tours"}
              locate={"start"}
              className={"text-white drop-shadow-lg"}
            />

            {/** Slider Numbers */}
            <div className="md:flex items-center hidden">
              <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow rounded-full">
                <FaBackward />
              </button>
              <h4 className="p-3 font-bold text-white">1</h4>
              <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow  rounded-full">
                <FaForward />
              </button>
            </div>
          </div>

          <Paragraph
            content={"Most recommended tours on this season."}
            locate={"start"}
            color={"slate-200"}
            className={""}
          />
          <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="col-span-3">
              <div className="flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <PackageCard />
                  <PackageCard />
                  <PackageCard />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center  bg-[#683e12] hover:bg-[#51300d] rounded-lg drop-shadow py-10">
              <Title2 title={"Don't Miss A Chance"} color={"white"} />
              <div className="mt-10 flex flex-col space-y-5">
                <Link
                  to={"/tailor-made"}
                  className="btn bg-white text-[#683e12] hover:bg-slate-200 rounded-full  border-none"
                >
                  Customize Your Safari
                </Link>
                <Link
                  to={"/generate-itinerary"}
                  className="btn  bg-white text-[#683e12] hover:bg-slate-200 rounded-full  border-none"
                >
                  Generate Itinerary
                </Link>
              </div>
            </div>
          </div>

          {/** View All */}
          <div className="mt-5 flex items-center justify-between">
            <Title2
              title={"View All"}
              locate={"start"}
              className={"text-white drop-shadow-lg"}
            />

            {/** Slider Numbers */}
            <div className="md:hidden flex items-center ">
              <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow rounded-full">
                <FaBackward />
              </button>
              <h4 className="p-3 font-bold text-white">1</h4>
              <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow  rounded-full">
                <FaForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TrekkingFeatured = () => {
  return (
    <div className="bg-slate-100 md:py-24 py-10">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          <Title title={"Best Trekking Tours"} locate={"start"} />

          {/** Slider Numbers */}
          <div className="md:flex items-center hidden">
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow rounded-full">
              <FaBackward />
            </button>
            <h4 className="p-3 font-bold">1</h4>
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow  rounded-full">
              <FaForward />
            </button>
          </div>
        </div>

        <Paragraph
          content={"Most recommended tours on this season."}
          locate={"start"}
          color={"slate-500"}
        />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5 ">
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </div>

        {/** View All */}
        <div className="mt-5 flex items-center justify-between">
          <Title2
            title={"View All"}
            locate={"start"}
            className={"text-[#683e12] drop-shadow-lg"}
          />

          {/** Slider Numbers */}
          <div className="md:hidden flex items-center ">
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow rounded-full">
              <FaBackward />
            </button>
            <h4 className="p-3 font-bold ">1</h4>
            <button className="p-3 text-white bg-[#683e12] hover:bg-[#51300d] hover:drop-shadow  rounded-full">
              <FaForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PopularFeatured = () => {
  return (
    <div className="bg-slate-100 py-10">
      <div className="container mx-auto px-5">
        <Title title={"Featured Tours"} locate={"start"} />
        <Paragraph
          content={"Most recommended tours on this season."}
          locate={"start"}
          color={"slate-500"}
        />
        <div className="mt-5 flex md:flex-row items-center  flex-wrap gap-5 md:w-1/3">
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </div>
      </div>
    </div>
  );
};
