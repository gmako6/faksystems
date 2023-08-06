import React from "react";
import { Title } from "./Title";

export const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center ">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:mx-40 p-5 md:rounded-full rounded-lg drop-shadow-lg md:px-10">
        <div className="flex items-center justify-center">
          <Title
            title={"Free Consultation"}
            className={"drop-shadow-lg text-slate-100"}
          />
        </div>
        <div className=" bg-slate-200 flex items-center justify-between rounded-full space-x-5 p-1 ">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full rounded-full max-w-xs drop-shadow"
          />
          <button
            type="submit"
            className="btn   bg-gradient-to-r from-red-500 to-pink-500 rounded-full px-5  border-none hover:drop-shadow"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};
