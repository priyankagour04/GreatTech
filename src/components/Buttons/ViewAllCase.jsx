import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ViewAllCase = () => {
  return (
    <>
      <div
        className="relative group h-14 w-44 shadow-lg bg-gradient-custom font-semibold text-white 
        flex items-center justify-center cursor-pointer"
      >
        {/* Left-to-Right Animation for Hover Effect */}
        <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 group-hover:bg-black transition-all duration-700 ease-in-out origin-left"></div>

        {/* Button Text */}
        <span className="z-10 flex items-center justify-center">
          View All Case <FaArrowRight className="ms-3" />
        </span>
      </div>
    </>
  );
};

export default ViewAllCase;
