import React from "react";
import ExploreMoreBtn from "../Buttons/ExploreMoreBtn";
import { ImAndroid } from "react-icons/im";
import { FaApple } from "react-icons/fa";

const name = [
  {
    title: "   Website",
    icon: <ImAndroid />,
  },
  {
    title: "   Android",
    icon: <ImAndroid />,
  },
  {
    title: "   IOS",
    icon: <FaApple />,
  },
  {
    title: "   Watch",
    icon: <ImAndroid />,
  },
  {
    title: "   TV",
    icon: <ImAndroid />,
  },
  {
    title: "   IOT",
    icon: <ImAndroid />,
  },
];

const Offering = () => {
  return (
    <>
      <div className=" bg-footer-shadow-img bg-secondary_color-500 mb-28  pt-2 ">
      <div className="relative bg-Offer-bg-shape bg-no-repeat ">
        <div className="flex mt-28 justify-between p-8">
          <div className="  ms-9">
            <div className="flex items-center gap-3 mb-5 text-Blue-500">
              {" "}
              <div className="w-8 h-3 bg-Blue-500 rounded-xl"></div>
              <h1 className=" font-semibold ">OUR OFFERING</h1>
            </div>
            <div className="text-4xl font-bold text-white">
              <h1>Enhance and Pioneer Using</h1>
              <h1>Technology Trends</h1>
            </div>
          </div>

          <div className="me-9">
            <ExploreMoreBtn />
          </div>
        </div>

        <div className="text-white flex mx-14 justify-around mt-16">
          <div className=" w-44 h-28 border-gray-700 rounded-lg border-t border-r border-b border-l  text-2xl font-semibold flex justify-center items-center">
            Website
          </div>
          <div className=" w-44 h-28 border-gray-700 rounded-lg border-t border-r border-b border-l  text-2xl font-semibold flex justify-center items-center">
            Android
          </div>
          <div className=" w-44 h-28 border-gray-700 rounded-lg border-t border-r border-b border-l  text-2xl font-semibold flex justify-center items-center">
            IOS
          </div>
          <div className=" w-44 h-28 border-gray-700 rounded-lg border-t border-r border-b border-l  text-2xl font-semibold flex justify-center items-center">
            Watch
          </div>
          <div className=" w-44 h-28 border-gray-700 rounded-lg border-t border-r border-b border-l  text-2xl font-semibold flex justify-center items-center">
            Tv
          </div>
          <div className=" w-44 h-28 border-gray-700 rounded-lg border-t border-r border-b border-l  text-2xl font-semibold flex justify-center items-center">
            IOT
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Offering;
