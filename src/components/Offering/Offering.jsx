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
      <div className=" bg-footer-shadow-img bg-secondary_color-500 mb-28 h-fit p-16 ">
        <div className="relative  bg-no-repeat ">
          <div className="flex  justify-between p-8">
            <div className="  ms-9">
              <div className="flex items-center gap-3 mb-5 text-white">
                {" "}
                <div className="w-11 h-3 outline outline-1 rounded-xl">
              <div className="w-6 h-3 bg-white rounded-xl "></div>
            </div>
                <h1 className=" text-xl font-semibold mb-1">OUR OFFERING</h1>
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
