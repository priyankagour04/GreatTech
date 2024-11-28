import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import icon1 from "../../assets/images/counter-icon1.png";
import icon2 from "../../assets/images/counter-icon2.png";
import icon3 from "../../assets/images/counter-icon3.png";
import icon4 from "../../assets/images/counter-icon4.png";

// Array of data
const services = [
  {
    title: 6561,
    description: "Satisfied Clients",
    image: icon1,
  },
  {
    title: 600,
    description: "Finished Projects",
    image: icon2,
  },
  {
    title: 250,
    description: "Skilled Experts",
    image: icon3,
  },
  {
    title: 590,
    description: "Media Posts",
    image: icon4,
  },
];

// Animation Variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

// Background animation variant
const bgVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const CountCard = () => {
  const [counts, setCounts] = useState(services.map(() => 0));
  const [inViewIndices, setInViewIndices] = useState([]); // Track indices in view

  // Handle count animation when card enters view
  const startCounting = (index, service) => {
    let start = 0;
    const incrementSpeed = Math.ceil(service.title / 100); // Adjust the increment speed
    const intervalId = setInterval(() => {
      if (start < service.title) {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = start;
          return newCounts;
        });
        start += incrementSpeed; // Increment count
      } else {
        clearInterval(intervalId); // Stop the interval once the count reaches the target value
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = service.title; // Ensure final value is exact
          return newCounts;
        });
      }
    }, 30); // Speed of the count increment
  };

  return (
    <div className="relative flex items-center bg-gradient-custom my-10 mx-28 overflow-hidden">
      {/* Background circuit pattern animation */}
      <motion.div
        className="absolute inset-0 h-full bg-no-repeat bg-right bg-Counter-Card-item"
        initial="hidden"
        whileInView="visible" // Trigger the background animation every time it comes in view
        viewport={{ once: false }} // Allows it to animate every time
        variants={bgVariants}
      ></motion.div>

      <div className="relative z-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-20">
        {/* Mapping over services array */}
        {services.map((service, index) => {
          const isInView = inViewIndices.includes(index);

          return (
            <motion.div
              key={index}
              className="flex gap-4"
              custom={index + 1} // Custom index for staggered animations
              initial="hidden"
              whileInView="visible" // Trigger animation every time in view
              viewport={{ once: false }} // Allows repeated animations when card comes into view
              onViewportEnter={() => {
                if (!isInView || counts[index] !== service.title) {
                  startCounting(index, service);
                  setInViewIndices((prev) => [...prev, index]); // Mark this index as in view
                }
              }}
              variants={cardVariants}
            >
              {/* Icon Image */}
              <img
                src={service.image}
                alt={service.description}
                className="object-contain"
              />

              {/* Text Section */}
              <div className="w-32">
                {/* Count Incrementing */}
                <h1 className="text-4xl font-bold">{counts[index]}+</h1>
                <h1 className="font-semibold">{service.description}</h1>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CountCard;
