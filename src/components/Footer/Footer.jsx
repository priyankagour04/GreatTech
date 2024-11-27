import React from "react";
import { motion } from "framer-motion";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { VscStarEmpty } from "react-icons/vsc";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const FooterLink = ({ text, Icon }) => (
  <div className="flex items-center space-x-2 text-gray-300 hover:text-white">
    <Icon className="text-2xl" />
    <a href="#">{text}</a>
  </div>
);

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaYoutube, href: "#" },
  ];

  const itSolutions = [
    "IT Management",
    "SEO Optimization",
    "Web Development",
    "Cyber Security",
    "Data Security",
  ];

  const quickLinks = [
    "About GreatTech",
    "Our Services",
    "Pricing Plan",
    "Our Projects",
    "Our Team",
  ];

  return (
    <footer className="bg-footer-shadow-img bg-secondary_color-500 text-white ">
     <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Logo and Description */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
  >
    <div className="flex items-center space-x-3">
      <VscStarEmpty className="text-5xl" />
      <h2 className="text-3xl sm:text-4xl font-bold">Gratech</h2>
    </div>
    <p className="mt-6 text-sm sm:text-base text-gray-300 font-semibold leading-relaxed">
      Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis.
    </p>
    <div className="flex mt-6 space-x-3">
      {socialLinks.map(({ icon: Icon, href }, idx) => (
        <a
          key={idx}
          href={href}
          className="text-white p-2 border border-gray-700 rounded hover:border-Blue-500 hover:bg-Blue-500"
        >
          <Icon />
        </a>
      ))}
    </div>
  </motion.div>

  {/* IT Solutions Links */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
  >
    <h2 className="text-2xl font-bold">IT Solutions</h2>
    <div className="mt-6 space-y-4">
      {itSolutions.map((text) => (
        <FooterLink key={text} text={text} Icon={RiArrowRightDoubleLine} />
      ))}
    </div>
  </motion.div>

  {/* Quick Links */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
  >
    <h2 className="text-2xl font-bold">Quick Links</h2>
    <div className="mt-6 space-y-4">
      {quickLinks.map((text) => (
        <FooterLink key={text} text={text} Icon={RiArrowRightDoubleLine} />
      ))}
    </div>
  </motion.div>

  {/* Contact Info */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
  >
    <h2 className="text-2xl font-bold">Contact Us</h2>
    <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-300 font-semibold">
      <p>4517 Washington Ave, Manchester, Kentucky 39495</p>
      <div>
        <h3 className="text-white font-bold">Opening Hours:</h3>
        Mon - Sat: 10.00 AM - 4.00 PM
      </div>
      <div>
        <h3 className="text-white font-bold">Phone:</h3>
        208-6666-0112, 308-5555-0113
      </div>
    </div>
  </motion.div>
</div>


      {/* Footer Bottom */}
      <div className="border-t border-gray-700 px-6 sm:px-10 lg:px-16 py-4 sm:py-6 md:text-left">
  <div className="flex flex-col md:flex-row justify-between">
    {/* Copyright Text */}
    <p className="text-gray-300 font-semibold text-sm sm:text-base">
      &copy; 2024 Gratech. All Rights Reserved.
    </p>
    
    {/* Links */}
    <div className="flex flex-wrap mt-4 md:mt-0 space-x-4 sm:space-x-6">
      <a href="#" className="text-gray-400 font-semibold hover:text-white text-sm sm:text-base">
        Terms & Conditions
      </a>
      <a href="#" className="text-gray-400 font-semibold hover:text-white text-sm sm:text-base">
        Privacy Policy
      </a>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
