import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation
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
  // State for counting numbers
  const [counts, setCounts] = useState(services.map(() => 0));

  useEffect(() => {
    // Increment the numbers when component mounts
    services.forEach((service, index) => {
      let start = 0;
      const increment = setInterval(() => {
        if (start < service.title) {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = start;
            return newCounts;
          });
          start += Math.ceil(service.title / 100); // Adjust the increment speed
        } else {
          clearInterval(increment);
        }
      }, 30); // Speed of the count increment
    });
  }, []);

  return (
    <>
      <div className="relative h-56 flex items-center bg-gradient-custom mt-10 mx-28">
        {/* Background circuit pattern animation */}
        <motion.div
          className="absolute inset-0 h-full bg-no-repeat bg-right bg-Counter-Card-item"
          initial="hidden"
          animate="visible"
          variants={bgVariants}
        ></motion.div>

        <div className="relative z-10 text-white flex p-24 gap-10">
          {/* Mapping over services array */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex gap-4"
              custom={index + 1} // Custom index for staggered animations
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
          ))}
        </div>
      </div>
    </>
  );
};

export default CountCard;
