import React from "react";
import ExploreMoreBtn from "../Buttons/ExploreMoreBtn";
import { motion } from "framer-motion"; // Import Framer Motion
import { LiaAndroid } from "react-icons/lia";
import { SlGlobe } from "react-icons/sl";
import { IoTvOutline } from "react-icons/io5";
import { SlPlane } from "react-icons/sl";
import { IoWatchOutline } from "react-icons/io5";
import { AiOutlineApple } from "react-icons/ai";

const name = [
  { title: "Website", icon: <SlGlobe /> },
  { title: "Android", icon: <LiaAndroid /> },
  { title: "IOS", icon: <AiOutlineApple /> },
  { title: "Watch", icon: <IoWatchOutline /> },
  { title: "TV", icon: <IoTvOutline /> },
  { title: "IOT", icon: <SlPlane /> },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen below
  visible: (index) => ({
    opacity: 1,
    y: 0, // Bring to original position
    transition: {
      delay: index * 0.2, // Stagger animation by 0.2s per card
      duration: 0.9, // Smooth animation duration
      type: "spring", // Spring animation for natural effect
    },
  }),
};

const Offering = () => {
  return (
    <div className="relative bg-footer-shadow-img bg-secondary_color-500 px-10 py-10 bg-cover">
      <div className="absolute inset-0 right-60 z-0 bg-no-repeat bg-left-bottom bg-Offer-bg-left-shape opacity-40"></div>
      <div className="absolute inset-0 right-0 z-0 bg-no-repeat bg-right-top bg-Offer-bg-right-shape opacity-40"></div>


      <div className="relative bg-no-repeat mb-10 py-16 container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start sm:items-start p-8">
  <div className="ms-0 lg:ms-9 mb-6 lg:mb-0 text-center sm:text-left lg:text-left">
    <div className="flex items-center justify-center sm:justify-start lg:justify-start gap-3 mb-5 text-white">
      <div className="w-11 h-3 outline outline-1 rounded-xl">
        <div className="w-6 h-3 bg-white rounded-xl"></div>
      </div>
      <h1 className="text-xl font-semibold mb-1">OUR OFFERING</h1>
    </div>
    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
      <h1>Enhance and Pioneer Using</h1>
      <h1>Technology Trends</h1>
    </div>
  </div>

  <div className="me-0 lg:me-9">
    <ExploreMoreBtn />
  </div>
</div>



<div className="text-white grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 mx-4 sm:mx-8 lg:mx-14 mt-16 justify-items-center">
  {name.map((item, index) => (
    <motion.div
      key={index}
      custom={index} // Pass index to variants for staggered animation
      variants={cardVariants}
      initial="hidden"
      whileInView="visible" // Trigger animation when in view
      viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the card is in the viewport
      className="w-44 h-28 border-gray-500 rounded-lg border text-2xl font-semibold flex flex-col justify-center items-center"
    >
      <div className="text-blue-500 bg-secondary_color-500  hover:bg-blue-500 hover:text-white p-5 rounded-full text-4xl relative bottom-14 transition-transform duration-300 ease-in-out hover:scale-105">
        {item.icon}
      </div>
      <div className="absolute mt-8">{item.title}</div>
    </motion.div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Offering;
