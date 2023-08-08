import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaTripadvisor,
  FaTwitter,
} from "react-icons/fa";
import "./hero.css";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="bg-[url('https://www.shutterstock.com/shutterstock/videos/1097472473/thumb/1.jpg?ip=x480')] bg-cover relative ">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="container mx-auto md:py-24 py-10 px-5 rounded-lg ">
          <div className="hero-content text-center md:text-start flex flex-col md:flex-row md:justify-between drop-shadow-lg">
            <div className="">
              <h1 className="md:text-7xl text-3xl text-white font-bold tracking-wide">
                <span className="btn bg-red-600 hover:bg-[#683e12] border-none rounded-full mb-5">
                  <h1 className="text-xs ">Tech Point Zone.</h1>
                </span>
                <br />
                <span className="drop-shadow-lg">
                  Top Managed <br />
                  ICT Services Provider.
                </span>
              </h1>
              <p className="py-6 text-slate-300">
                Strategic technology advice to help plan future growth.
              </p>
              <div className="flex justify-center md:justify-start gap-5 md:mt-10">
                <Link
                  to={"/tailormade"}
                  className="btn bg-gradient-to-r from-red-500 to-pink-500 rounded-full space-1 mt-1 border-none hover:drop-shadow-lg"
                >
                  Book
                  <HiChevronRight size={24} className="ml-2" />
                </Link>

                <Link
                  to={"/tailormade"}
                  className="btn border border-red-600 bg-transparent hover:bg-gradient-to-r from-red-500 to-pink-500 rounded-full space-1 mt-1 hover:drop-shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-col justify-center md:justify-end items-center  gap-2 md:mt-12">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/tanzaniatrails"
                className="btn bg-gradient-to-r from-red-500 to-pink-500 border-none rounded-full "
              >
                <FaInstagram className="" size={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tripadvisor.com/tanzaniatrails"
                className="btn  bg-gradient-to-r from-red-500 to-pink-500  border-none rounded-full"
              >
                <FaTripadvisor className="" size={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/tanzaniatrails"
                className="btn  bg-gradient-to-r from-red-500 to-pink-500  border-none rounded-full "
              >
                <FaTelegram className="" size={20} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/tanzaniatrails"
                className="btn  bg-gradient-to-r from-red-500 to-pink-500  border-none rounded-full "
              >
                <FaTwitter className="" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
