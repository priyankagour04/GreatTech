import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { VscStarEmpty } from "react-icons/vsc";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Framer Motion animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <footer className="bg-footer-shadow-img bg-secondary_color-500 text-white ">
        <div className="container mx-auto p-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <div className="flex space-x-3">
              <div className="text-5xl">
                <VscStarEmpty />
              </div>
              <h2 className="text-4xl mt-1 font-bold">Gratech</h2>
            </div>

            <p className="mt-7 ms-3 font-semibold text-gray-300">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis.
            </p>

            <div className="flex mt-8 ms-3 space-x-2">
              <a
                href="#"
                className="text-white p-2 border-t border-r border-b border-l border-gray-700  hover:border-Blue-500  hover:bg-Blue-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white p-2 border-t border-r border-b border-l border-gray-700  hover:border-Blue-500 hover:bg-Blue-500"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white p-2 border-t border-r border-b border-l border-gray-700  hover:border-Blue-500 hover:bg-Blue-500"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-white p-2 border-t border-r border-b border-l border-gray-700  hover:border-Blue-500 hover:bg-Blue-500"
              >
                <FaYoutube />
              </a>
            </div>
          </motion.div>

          {/* IT Solutions Links */}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold ">IT Solution</h2>
            <div className="mt-8 space-y-4 font-semibold">
              {[
                "IT Management",
                "SEO Optimization",
                "Web Development",
                "Cyber Security",
                "Data Security",
              ].map((text) => (
                <div className="flex space-x-2  text-gray-300 hover:text-white" key={text}>
                  <div className="text-2xl">
                    <RiArrowRightDoubleLine />
                  </div>
                  <a href="#">{text}</a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold">Quick Link</h2>
            <div className="mt-8 space-y-4 font-semibold">
              {[
                "About GreatTech",
                "Our Services",
                "Pricing Plan",
                "Our Projects",
                "Our Team",
              ].map((text) => (
                <div className="flex space-x-2 text-gray-300 hover:text-white" key={text}>
                  <div className="text-2xl">
                    <RiArrowRightDoubleLine />
                  </div>
                  <a href="#">{text}</a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <div className="text-2xl font-bold">Contact Us</div>

            <div className="space-y-5 mt-8">
              <p className="mt-2 text-gray-300 font-semibold">
                4517 Washington Ave, Manchester, Kentucky 39495
              </p>
              <div className="mt-2 text-gray-300 font-semibold">
                <h1 className="text-white font-bold">Opening Hours:</h1> Mon -
                Sat: 10.00 AM - 4.00 PM
              </div>
              <div className="mt-2 text-gray-300 font-semibold">
                <h1 className="text-white font-bold">Phone: </h1>
                208-6666-0112, 308-5555-0113
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t text-gray-300 border-gray-700 p-16 pt-6">
          <div className="flex items-center justify-between font-semibold">
            <p className="lg:ms-16">&copy; All Copyright 2024 By Gratech</p>
            <div className="flex space-x-6 ml-4 me-24">
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
