import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ViewAllServices = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services"); // Replace "/services" with your desired URL
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="h-14 w-44 shadow-lg bg-gradient-custom font-semibold text-white
        flex items-center justify-center cursor-pointer"
      >
        View All Services <FaArrowRight className="ms-3" />
      </button>
    </>
  );
};

export default ViewAllServices;
