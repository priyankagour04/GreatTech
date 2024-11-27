import React from "react";
import ViewAllCase from "../Buttons/ViewAllCase";
import { FaArrowRight } from "react-icons/fa6";
import caseImg1 from "../../assets/images/case-image1.jpg";
import caseImg2 from "../../assets/images/case-image2.jpg";
import caseImg3 from "../../assets/images/case-image3.jpg";
import caseImg4 from "../../assets/images/case-image4.jpg";
import '../../style/Home.css'

const caseStudies = [
  {
    id: 1,
    imgSrc: caseImg1,
    category: "Solution",
    title: "Network Security",
  },
  {
    id: 2,
    imgSrc: caseImg2,
    category: "Technology",
    title: "IT Management",
  },
  {
    id: 3,
    imgSrc: caseImg3,
    category: "Innovation",
    title: "Platform Integration",
  },
  {
    id: 4,
    imgSrc: caseImg4,
    category: "Security",
    title: "New Technologies",
  },
];

const CaseStudy = () => {
  return (
    <div className="container mx-auto mb-28">
      <div className="flex flex-col lg:flex-row mt-28 justify-between px-4 sm:px-8 ">
  {/* Left Section */}
  <div className="lg:ms-10  lg:text-left">
    <div className="flex items-center gap-4 mb-5 text-blue-500  lg:justify-start ms-1">
      <div className="w-10 h-3 outline outline-2 rounded-xl">
        <div className="w-5 h-3 bg-blue-500 rounded-xl"></div>
      </div>
      <h1 className="text-lg sm:text-xl font-semibold mb-1">FROM OUR CASE STUDIES</h1>
    </div>
    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
      <h1>We Delivered Best Solution</h1>
    </div>
  </div>

  {/* Right Section */}
  <div className="mt-5 lg:mt-0 lg:me-9">
    <ViewAllCase />
  </div>
</div>


      {/* Carousel Section */}
      <div className="relative mt-14 lg:px-16 px-4 ">
        <div className="overflow-x-scroll scroll-smooth snap-x snap-mandatory flex gap-6 overflow-hidden hide-scrollbar">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="relative group object-cover min-w-[300px] flex-shrink-0 snap-start transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={caseStudy.imgSrc}
                alt={`Case Study ${caseStudy.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100 transition-opacity"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <span className="text-blue-400">{caseStudy.category}</span>
                <div className="flex items-center gap-5">
                  <h2 className="text-2xl font-bold">{caseStudy.title}</h2>

                  <div className="h-10 w-10 shadow-lg bg-gradient-custom font-semibold text-white flex items-center justify-center mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
