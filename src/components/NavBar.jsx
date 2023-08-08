import React from "react";
import { HiChevronRight, HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { Logo } from "../assets";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-white text-slate-900 py-2 relative">
      <div className="navbar  container mx-auto drop-shadow-lg">
        <>
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiOutlineMenuAlt1 size={24} />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 text-slate-900 rounded-box  w-52"
              >
                <li>
                  <Link to={"/tokenomics"}>Home</Link>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Solutions
                    <FiChevronDown className="font-bold" />
                  </a>
                  <ul className="p-2 bg-base-300 text-slate-700">
                    <li>
                      <Link to={"/greengpt"}>Tailor Made</Link>
                    </li>
                    <li>
                      <Link to={"/a2e"}>Customize Safari</Link>
                    </li>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Tours
                    <FiChevronDown className="font-bold" />
                  </a>
                  <ul className="p-2 bg-base-300 text-slate-700 shadow-md">
                    <li>
                      <Link to={"/marketplace"}>Buy</Link>
                    </li>
                    <li>
                      <Link to={"/marketplace"}>Sell</Link>
                    </li>
                    <li>
                      <Link to={"/marketplace"}>Auction</Link>
                    </li>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Destination
                    <FiChevronDown className="font-bold" />
                  </a>
                  <ul className="p-2 bg-base-300 text-slate-700 shadow-md">
                    <li>
                      <Link to={"/stake"}>Stake $gGPT</Link>
                    </li>
                    <li>
                      <Link to={"/stake"}>Stake NFT</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contacts</Link>
                </li>
                <li>
                  <h1>Book</h1>
                </li>
              </ul>
            </div>
            <Link
              to={"/"}
              className="md:flex justify-center items-center hidden"
            >
              <img src={Logo} alt="logo" className="w-10 h-10" />
              <h1 className="normal-case text-2xl font-bold tracking-wide text-[#683e12] ml-2">
                FAK Systems
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={"/tokenomics"}>Home</Link>
              </li>
              <li tabIndex={0}>
                <a>
                  Solutions
                  <FiChevronDown className="font-bold" />
                </a>
                <ul className="p-2 bg-base-300 text-slate-700">
                  <li>
                    <Link to={"/greengpt"}>Tailor Made</Link>
                  </li>
                  <li>
                    <Link to={"/a2e"}>Customize Safari</Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a>
                  Tours
                  <FiChevronDown className="font-bold" />
                </a>
                <ul className="p-2 bg-base-300 text-slate-700 shadow-md">
                  <li>
                    <Link to={"/marketplace"}>Buy</Link>
                  </li>
                  <li>
                    <Link to={"/marketplace"}>Sell</Link>
                  </li>
                  <li>
                    <Link to={"/marketplace"}>Auction</Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a>
                  Destination
                  <FiChevronDown className="font-bold" />
                </a>
                <ul className="p-2 bg-base-300 text-slate-700 shadow-md">
                  <li>
                    <Link to={"/stake"}>Stake $gGPT</Link>
                  </li>
                  <li>
                    <Link to={"/stake"}>Stake NFT</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end ">
            <span className="hidden md:flex rounded-full">
              <Link
                to={"/tailormade"}
                className="btn bg-gradient-to-r from-red-500 to-pink-500 rounded-full space-1 mt-1 border-none hover:drop-shadow-lg"
              >
                Book
                <HiChevronRight size={24} />
              </Link>
            </span>

            <Link
              to={"/"}
              className="flex justify-center items-center md:hidden "
            >
              <img src={Logo} alt="logo" className="w-10 h-10" />
              <h1 className="normal-case text-2xl font-bold tracking-wide pr-3 text-[#683e12] ml-2">
                FAK Systems
              </h1>
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default NavBar;
