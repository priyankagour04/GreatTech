import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Aboutbtn = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/about"); // Replace "/services" with your desired URL
    };

  return (
    <>
      <div
        className="relative group h-14 w-44 shadow-lg bg-gradient-custom font-semibold text-white 
        flex items-center justify-center cursor-pointer"
      >
        {/* Left-to-Right Animation for Hover Effect */}
        <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 group-hover:bg-black transition-all duration-700 ease-in-out origin-left"></div>

        {/* Button Text */}
        <span onClick={handleClick} className="z-10 flex items-center justify-center">
          About Us <FaArrowRight className="ms-3" />
        </span>
      </div>
    </>
  );
};

export default Aboutbtn;
