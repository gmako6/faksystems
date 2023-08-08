import React from "react";

export const Dots = ({ color, title, position }) => {
  return (
    <div className={`flex items-center  ${position}  gap-2 mb-5`}>
      <span className={`p-2 bg-${color}-500 rounded-full`}></span>
      <span className="p-2 bg-red-500 rounded-full"></span>
      <h5 className="text-sm text-gray-600 uppercase">{title}</h5>
    </div>
  );
};
