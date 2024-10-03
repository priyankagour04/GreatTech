import React from "react";
import img1 from "../../assets/images/process-image1.png";
import img2 from "../../assets/images/process-image2.png";
import img3 from "../../assets/images/process-image3.png";
import arrow from '../../assets/images/process-arry.png'

const DevProcess = () => {
  return (
    <>
      <div className="p-16">
        <div>
          <div className="  ms-9">
            <div className="flex items-center justify-center gap-3 mb-5 text-Blue-500">
              {" "}
              <div className="w-8 h-3 bg-Blue-500 rounded-xl"></div>
              <h1 className="text-xl font-semibold ">WORK PROCESS</h1>
            </div>
            <div className="text-4xl font-bold text-center  ">
              <h1>Our Development Process</h1>
            </div>
          </div>

          <div className="flex justify-around items-center mt-10">
          <div className="relative inline-block mb-5">
              <img
                src={img1}
                className="rounded-full border-2 border-dotted border-blue-500 object-contain p-2"
                alt="Design & Prototyping"
              />
              <div className="absolute top-3 left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                1
              </div>
            </div>

            <div className="relative inline-block mb-5">
              <img
                src={img2}
                className="rounded-full border-2 border-dotted border-blue-500 object-contain p-2"
                alt="Design & Prototyping"
              />
              <div className="absolute top-3 left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                2
              </div>
            </div>


            <div className="relative inline-block mb-5">
              <img
                src={img3}
                className="rounded-full border-2 border-dotted border-blue-500 object-contain p-2"
                alt="Design & Prototyping"
              />
              <div className="absolute top-3 left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                3
              </div>
            </div>
          </div>
          <div className="flex justify-around text-center  ">
            <div className="text-center max-w-xs">
              <h2 className="font-semibold text-lg">Define Requirements</h2>
              <p className="text-gray-500 mt-3">
                In a free hour, when our power of choice is untrammelled and
                when nothing prevents dolor sit amet, consectetur
              </p>
            </div>

            <div className="text-center max-w-xs">
              <h2 className="font-semibold text-lg">Design & Prototyping</h2>
              <p className="text-gray-500 mt-3">
                In a free hour, when our power of choice is untrammelled and
                when nothing prevents dolor sit amet, consectetur
              </p>
            </div>
            <div className="text-center max-w-xs">
              <h2 className="font-semibold text-lg">Final Solution</h2>
              <p className="text-gray-500 mt-3">
                In a free hour, when our power of choice is untrammelled and
                when nothing prevents dolor sit amet, consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevProcess;
