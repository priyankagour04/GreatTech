import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../../components/Cards/ServiceCard";
import ViewAllServices from "../../components/Buttons/ViewAllServices";

// Define animation variants for the cards
const cardVariants = {
  hidden: { opacity: 0, y: 100 }, // Start from below (y: 100) and opacity 0
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }, // Smooth transition to position
};
const CommanService = () => {
  return (
    <>
      <div className="container mx-auto mb-28 ">

      <div className="flex flex-col lg:flex-row mt-14 lg:mt-28 justify-between  lg:items-start sm:px-8 md:px-12 lg:px-16">
  {/* Left Section */}
  <div className="px-4 lg:text-left">
    <div className="flex items-center gap-4 mb-5 text-Blue-500  lg:justify-start">
      <div className="w-10 h-3 outline outline-2 rounded-xl">
        <div className="w-5 h-3 bg-Blue-500 rounded-xl"></div>
      </div>
      <h1 className="text-lg sm:text-xl font-semibold mb-1">WHAT WE OFFER</h1>
    </div>
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
      <h1>Excellent IT Services</h1>
    </div>
  </div>

  {/* Right Section */}
  <div className="px-4 mt-6 lg:mt-5">
    <ViewAllServices />
  </div>
</div>


        {/* Service Cards */}
        <div className="mt-10">
          {/* Wrap ServiceCard with motion.div */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
          >
            <ServiceCard />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CommanService;
