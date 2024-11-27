import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import bannerImg1 from "../../assets/images/banner-image1.jpg";
import bannerImg2 from "../../assets/images/banner-image2.jpg";
import bannerImg3 from "../../assets/images/banner-image3.jpg";
import ExploreMoreBtn from "../../components/Buttons/ExploreMoreBtn";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [bannerImg1, bannerImg2, bannerImg3];

  // Automatically change background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5 seconds for each image
    return () => clearInterval(interval);
  }, [images.length]);

  // Define Framer Motion variants for animation
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

  return (
    <>
      <div
        className="relative items-center text-white py-36 "
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1.0s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
        {/* Overlay for better text contrast */}
        <motion.div
          className="z-10 ms-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center gap-3 mb-5 "
            variants={textVariants}
            transition={{ duration: 0.8 }}
          >
            <div className="w-11 h-4 outline outline-1 rounded-xl">
              <div className="w-6 h-4 bg-white rounded-xl "></div>
            </div>
            <motion.h1 className="text-xl font-bold">
              BEST IT SOLUTION PROVIDER
            </motion.h1>
          </motion.div>

          <div className="-tracking-tighter">
            <motion.p
              className="text-7xl font-bold"
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Excellent IT Services
            </motion.p>
            <motion.p
              className="text-7xl font-bold"
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              for Your Success
            </motion.p>
            <motion.p
              className="mt-8"
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Consectetur adipiscing elit aenean scelerisque at augue vitae
              consequat
            </motion.p>
            <motion.p
              className="mt-1"
              variants={textVariants}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              quisque eget congue velit in cursus leo sed sodales est eget
              turpis.
            </motion.p>
          </div>

          <motion.div
            className="mt-16"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <ExploreMoreBtn />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
