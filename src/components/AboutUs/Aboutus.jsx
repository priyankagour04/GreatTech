import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import signature from '../../assets/images/singature.png';
import aboutImg1 from '../../assets/images/about-image1.jpg';
import aboutImg2 from '../../assets/images/about-two-image2.png';

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state: below the viewport
  visible: (i) => ({
    opacity: 1,
    y: 0, // Final state: in position
    transition: {
      delay: i * 0.3, // Staggered delay for each card
      duration: 0.8, // Smooth transition time
      ease: "easeOut",
    },
  }),
};

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3, // Add a delay between each child animation
    },
  },
};


const Aboutus = () => {
  return (
    <div className="grid grid-cols-2 bg-about_bg_color-500 mb-32">
      {/* Image Section */}
      <motion.div 
        className="relative img_section p-5 my-10 ms-16 flex"
        custom={1} // Custom index for animation delay
              initial="hidden"
              whileInView="visible" // Trigger animation when in view
            
              variants={cardVariants}
      >
        <img src={aboutImg1} className="" alt="About Image 1" />
        <motion.img 
          src={aboutImg2} 
          className="absolute h-80 top-40 right-14"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          alt="About Image 2"
        
        />
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="p-5 mt-10"
        initial="hidden"
          animate="visible"
          variants={staggerContainer}
      >
        <motion.div 
        variants={textVariants}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-Blue-500 text-xl">WHO WE ARE</h1>
        <h1 className="text-5xl font-bold mt-5">
          Ensuring Your Success Through Reliable IT Solutions
        </h1>
        <p className="mt-10 text-gray-500">
          Aonsectetur adipiscing elit aenean scelerisque augue vitae consequat
          aisque eget congue velit in cursus sodales the turpis euismod quis
          sapien euismod quis sapien the condimentum nec lorem nulla augue.
        </p>
        <div className="mt-10 flex gap-10 ">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
              <div className="mb-1 font-semibold">Technology Consultancy</div>
            </div>
            <div className="flex items-center gap-3">
              <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
              <div className="mb-1 font-semibold">
                We Provide best services
              </div>
            </div>
          </div>
          <div className="ms-8 space-y-5">
            <div className="flex items-center gap-3">
              <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
              <div className="mb-1 font-semibold">
                Maintenance And Support
              </div>
            </div>
            <div className="flex items-center gap-3">
              <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
              <div className="mb-1 font-semibold">Requirements Gathering</div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-10">
          <div className="h-14 w-44 shadow-lg bg-gradient-custom font-semibold text-white flex items-center justify-center">
            About Us <FaArrowRight className="ms-3" />
          </div>
          <img src={signature} alt="Signature" />
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default Aboutus;
