import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import signature from '../../assets/images/singature.png'
import aboutImg1 from '../../assets/images/about-image1.jpg'
import aboutImg2 from '../../assets/images/about-two-image2.png';

const Aboutus = () => {
  return (
    <>
      <div className="grid grid-cols-2 bg-about_bg_color-500 mb-32">
        <div className="relative img_section p-5 my-10 ms-16 flex">
            <img src={aboutImg1}/>
            <img className="absolute h-80 top-40 right-14 " src={aboutImg2}/>

        </div>
        <div className="p-5 mt-10">
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
                <div>
                  <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
                </div>
                <div className="mb-1 font-semibold">Technology Consultancy</div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
                </div>
                <div className="mb-1 font-semibold">
                  We Provide best services
                </div>
              </div>
            </div>
            <div className="ms-8 space-y-5">
              <div className="flex items-center gap-3">
                <div>
                  <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
                </div>
                <div className="mb-1 font-semibold">
                  Maintenance And Support
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <IoIosCheckmark className="text-white bg-gradient-custom rounded-full" />
                </div>
                <div className="mb-1 font-semibold">Requirements Gathering</div>
              </div>
            </div>
          </div>
         <div className="mt-10 flex gap-10">
         <div className="h-14 w-44 shadow-lg bg-gradient-custom font-semibold  text-white flex items-center justify-center">
            About Us <FaArrowRight className="ms-3" />
          </div>
          <img src={signature}/>
         </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
