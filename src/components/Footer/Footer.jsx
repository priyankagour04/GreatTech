import React from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { VscStarEmpty } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
   <>
     <footer className="bg-footer-shadow-img bg-secondary_color-500 text-white  " 
    
    >
      <div className="container mx-auto p-20 grid grid-cols-1 md:grid-cols-4 gap-8  ">
        {/* Logo and Description */}
        <div className="">
          <div className="flex space-x-3">
            <div className="text-5xl">
              {" "}
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
        </div>

        {/* IT Solutions Links */}
        <div className="ps-16">
          <h2 className="text-2xl font-bold">IT Solution</h2>
          <div className="mt-8 space-y-4 font-semibold ">
            <div className="flex space-x-2  text-gray-300 hover:text-white">
              <div className="text-2xl">
                <RiArrowRightDoubleLine />
              </div>
              <a href="#">IT Management</a>
            </div>
            <div className="flex space-x-2 text-gray-300 hover:text-white">
              <div className="text-2xl">
                <RiArrowRightDoubleLine />
              </div>
              <a href="#">SEO Optimization</a>
            </div>
            <div className="flex space-x-2 text-gray-300 hover:text-white">
              <div className="text-2xl">
                <RiArrowRightDoubleLine />
              </div>
              <a href="#">Web Development</a>
            </div>
            <div className="flex space-x-2 text-gray-300 hover:text-white">
              <div className="text-2xl">
                <RiArrowRightDoubleLine />
              </div>
              <a href="#">Cyber Security</a>
            </div>
            <div className="flex space-x-2 text-gray-300 hover:text-white">
              <div className="text-2xl">
                <RiArrowRightDoubleLine />
              </div>
              <a href="#">Data Security</a>
            </div>
          </div>
        </div>

        {/* Quick Links  */}
        <div className="ps-10">
          <h2 className="text-2xl font-bold">Quick Link</h2>
          <div className="mt-8 space-y-4 font-semibold ">
            <div className="flex space-x-2  text-gray-300 hover:text-white">
              <div className="text-2xl">
                <RiArrowRightDoubleLine />
              </div>
              <a href="#">About GreatTech</a>
            </div>
            <div className="flex space-x-2 text-gray-300 hover:text-white">
              <div className="text-2xl">
                <RiArrowRightDoubleLine />
              </div>
              <a href="#">Our Services</a>
            </div>
            <div className="flex space-x-2 text-gray-300 hover:text-white">
              <div className="text-2xl">
                <RiArrowRightDoubleLine />
              </div>
              <a href="#">Pricing Plan</a>
            </div>
            <div className="flex space-x-2 text-gray-300 hover:text-white">
              <div className="text-2xl">
                <RiArrowRightDoubleLine />
              </div>
              <a href="#">Our Projects</a>
            </div>
            <div className="flex space-x-2 text-gray-300 hover:text-white">
              <div className="text-2xl">
                <RiArrowRightDoubleLine />
              </div>
              <a href="#">Our Team</a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="">
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
              <h1 className="text-white font-bold">Phone: </h1>208-6666-0112,
              308-5555-0113
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t text-gray-300 border-gray-700 p-16 pt-6">
        <div className="flex items-center justify-between font-semibold ">
          <p className="ms-16">&copy; All Copyright 2024 By Gratech</p>
          <div className="flex space-x-6 ml-4 me-24 ">
            <a href="#" className=" hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className=" hover:text-white">
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
