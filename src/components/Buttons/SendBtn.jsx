import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const btntext = {
  title: "Send Message",
};

const SendBtn = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact"); // Replace "/services" with your desired URL
  };

  return (
    <div
      onClick={handleClick}
      className="relative group h-14 w-44 shadow-lg bg-gradient-custom font-semibold cursor-pointer text-white flex items-center justify-center overflow-hidden"
    >
      {/* Left-to-Right Animation for Hover Effect */}
      <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 group-hover:bg-black transition-all duration-700 ease-in-out origin-left"></div>

      {/* Button Text */}
      <div className="z-10 flex items-center justify-center w-full h-full">
        {btntext.title} <FaArrowRight className="ms-3" />
      </div>
    </div>
  );
};

export default SendBtn;
