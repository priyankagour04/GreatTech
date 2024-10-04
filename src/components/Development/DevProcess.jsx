import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import img1 from "../../assets/images/process-image1.png";
import img2 from "../../assets/images/process-image2.png";
import img3 from "../../assets/images/process-image3.png";

// Animation variants for cards
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

const DevProcess = () => {
  return (
    <>
      <div className="p-16">
        <div>
          <div className="ms-9">
            <div className="flex items-center justify-center gap-5 mb-5 text-Blue-500">
              <div className="w-10 h-3 outline outline-2 rounded-xl">
                <div className="w-5 h-3 bg-Blue-500 rounded-xl"></div>
              </div>
              <h1 className="text-xl font-semibold mb-1">WORK PROCESS</h1>
            </div>
            <div className="text-4xl font-bold text-center">
              <h1>Our Development Process</h1>
            </div>
          </div>

          {/* Step 1: Development Process Cards with Animation */}
          <div className="flex justify-around items-center mt-10">
            {/* Card 1 */}
            <motion.div
              className="relative inline-block mb-5"
              custom={1} // Custom index for animation delay
              initial="hidden"
              whileInView="visible" // Trigger animation when in view
            
              variants={cardVariants}
            >
              <img
                src={img1}
                className="rounded-full border-2 border-dotted border-blue-500 object-contain p-2"
                alt="Design & Prototyping"
              />
              <div className="absolute top-3 left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                1
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="relative inline-block mb-5"
              custom={2} // Stagger index for animation delay
              initial="hidden"
              whileInView="visible"
              
              variants={cardVariants}
            >
              <img
                src={img2}
                className="rounded-full border-2 border-dotted border-blue-500 object-contain p-2"
                alt="Design & Prototyping"
              />
              <div className="absolute top-3 left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                2
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="relative inline-block mb-5"
              custom={3} // Stagger index for animation delay
              initial="hidden"
              whileInView="visible"
            
              variants={cardVariants}
            >
              <img
                src={img3}
                className="rounded-full border-2 border-dotted border-blue-500 object-contain p-2"
                alt="Design & Prototyping"
              />
              <div className="absolute top-3 left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                3
              </div>
            </motion.div>
          </div>

          {/* Step Descriptions */}
          <div className="flex justify-around text-center">
            <motion.div
              className="text-center max-w-xs"
              custom={1}
              initial="hidden"
              whileInView="visible"
            
              variants={cardVariants}
            >
              <h2 className="font-semibold text-lg">Define Requirements</h2>
              <p className="text-gray-500 mt-3">
                In a free hour, when our power of choice is untrammelled and
                when nothing prevents dolor sit amet, consectetur
              </p>
            </motion.div>

            <motion.div
              className="text-center max-w-xs"
              custom={2}
              initial="hidden"
              whileInView="visible"
             
              variants={cardVariants}
            >
              <h2 className="font-semibold text-lg">Design & Prototyping</h2>
              <p className="text-gray-500 mt-3">
                In a free hour, when our power of choice is untrammelled and
                when nothing prevents dolor sit amet, consectetur
              </p>
            </motion.div>

            <motion.div
              className="text-center max-w-xs"
              custom={3}
              initial="hidden"
              whileInView="visible"
           
              variants={cardVariants}
            >
              <h2 className="font-semibold text-lg">Final Solution</h2>
              <p className="text-gray-500 mt-3">
                In a free hour, when our power of choice is untrammelled and
                when nothing prevents dolor sit amet, consectetur
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevProcess;
