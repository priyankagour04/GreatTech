import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import signature from "../../assets/images/singature.png";
import aboutImg1 from "../../assets/images/about-image1.jpg";
import aboutImg2 from "../../assets/images/about-two-image2.png";
import Aboutbtn from "../Buttons/Aboutbtn";

const containerVariants = {
  hidden: { opacity: 0 }, // Initial state for the container
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child's animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Smooth transition to position
};

const Aboutus = () => {
  return (
    <div className="grid grid-cols-2 bg-about_bg_color-500 mb-32 overflow-hidden ">
      <div className="">
        {/* Image Section */}
      <motion.div
        className="relative img_section p-5 my-10 ms-16 flex"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >  
        <img src={aboutImg1} className="" alt="About Image 1" />
        <motion.img
          src={aboutImg2}
          className="absolute h-80 top-40 right-14"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          alt="About Image 2"
        />
      </motion.div>
      </div>

    <div>
        {/* Content Section */}
      <motion.div
        className="p-5 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Trigger animation once when in view
      >
        <motion.h1
          className="text-Blue-500 text-xl"
          variants={itemVariants}
        >
          WHO WE ARE
        </motion.h1>
        <motion.h1
          className="text-5xl font-bold mt-5"
          variants={itemVariants}
        >
          Ensuring Your Success Through Reliable IT Solutions
        </motion.h1>
        <motion.p
          className="mt-10 text-gray-500"
          variants={itemVariants}
        >
          Aonsectetur adipiscing elit aenean scelerisque augue vitae consequat
          aisque eget congue velit in cursus sodales the turpis euismod quis
          sapien euismod quis sapien the condimentum nec lorem nulla augue.
        </motion.p>
        <motion.div
          className="mt-10 flex gap-10"
          variants={containerVariants}
        >
          <div className="space-y-5">
            <motion.div className="flex items-center gap-3" variants={itemVariants}>
              <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
              <div className="mb-1 font-semibold">Technology Consultancy</div>
            </motion.div>
            <motion.div className="flex items-center gap-3" variants={itemVariants}>
              <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
              <div className="mb-1 font-semibold">
                We Provide best services
              </div>
            </motion.div>
          </div>
          <div className="ms-8 space-y-5">
            <motion.div className="flex items-center gap-3" variants={itemVariants}>
              <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
              <div className="mb-1 font-semibold">
                Maintenance And Support
              </div>
            </motion.div>
            <motion.div className="flex items-center gap-3" variants={itemVariants}>
              <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
              <div className="mb-1 font-semibold">Requirements Gathering</div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="mt-10 flex gap-10"
          variants={itemVariants}
        >
         <Aboutbtn/>
          <img src={signature} alt="Signature" />
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};

export default Aboutus;
