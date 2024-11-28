import React from "react";
import aboutbanner from "../../assets/images/Aboutbanner-page.jpg";
import Aboutus from "../../components/AboutUs/Aboutus";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Offering from "../../components/Offering/Offering";

const About = () => {
  return (
    <>
      <div className="relative">
        {/* Set the image as the background of the div */}
        <img
          className="w-full h-[400px] sm:h-[500px] md:h-[450px] object-cover"
          src={aboutbanner}
          alt="About Us Banner"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

        {/* Decorative shapes */}
        <div className="absolute inset-0 right-0 z-0 bg-no-repeat bg-right-top bg-About-right-shape opacity-100"></div>
        <div className="absolute inset-0 right-10 sm:right-20 z-0 bg-no-repeat bg-left-bottom bg-About-left-shape opacity-100"></div>

        {/* Text positioned over the image */}
        <div className="absolute right-44 top-36 sm:inset-16 md:right-10 md:top-48 flex flex-col justify-start text-white font-bold gap-2 px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">About Us</h1>
          <div className="flex items-center gap-1 sm:gap-3 md:gap-2">
            <h1>Home</h1>
            <div className="mt-1">
              <RiArrowRightDoubleLine />
            </div>
            <h1>About Us</h1>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="my-16 sm:my-24 md:my-32">
        <Aboutus />
      </div>

      {/* Offering Section */}
      <div className="my-16 sm:my-24 md:my-32">
        <Offering />
      </div>
    </>
  );
};

export default About;
