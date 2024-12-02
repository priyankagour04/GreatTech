import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import itManagementIcon from "../../assets/images/service-icon1.png";
import cyberSecurityIcon from "../../assets/images/service-icon2.png";
import webDevelopmentIcon from "../../assets/images/service-icon3.png";
import image1 from "../../assets/images/service-image1.jpg";
import image2 from "../../assets/images/service-image2.jpg";
import image3 from "../../assets/images/service-image3.jpg";
import image4 from "../../assets/images/service-image4.jpg";
import image5 from "../../assets/images/service-image5.jpg";
import image6 from "../../assets/images/service-image6.jpg";

const ITServicesCards = () => {
  const services = [
    {
      title: "Database Security",
      description:
        "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
      image: itManagementIcon,
      background: image1,
    },
    {
      title: "IT Consultancy",
      description:
        "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
      image: cyberSecurityIcon,
      background: image2,
    },
    {
      title: "App Development",
      description:
        "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
      image: webDevelopmentIcon,
      background: image3,
    },
    {
      title: "Cyber Security",
      description:
        "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
      image: cyberSecurityIcon,
      background: image4,
    },
    {
      title: "UI/UX Design",
      description:
        "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
      image: webDevelopmentIcon,
      background: image5,
    },
    {
      title: "IT Management",
      description:
        "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
      image: itManagementIcon,
      background: image6,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 my-24">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative shadow-Cardshadow bg-white transform transition-transform group overflow-hidden"
        >
          {/* Background Image Section */}
          <div className="relative h-44 w-full">
            <img
              src={service.background}
              alt={service.title}
              className="absolute inset-0 w-full  object-cover rounded-tl-3xl"
            />
          </div>

          {/* Background circuit pattern */}
          <div className="absolute inset-0 left-48 top-52 mb-10 ms-10 z-0 bg-no-repeat bg-top bg-Card-item opacity-50"></div>

          {/* Icon Section */}
          <div className="relative z-10 mt-12 ms-10 flex justify-center items-center h-16 w-16 bg-blue-50 shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="relative z-10 p-10">
            <h1 className="font-bold text-xl text-gray-800 transition-colors duration-500">
              {service.title}
            </h1>
            <p className="text-gray-500 mt-5 mb-3 transition-colors duration-500">
              {service.description}
            </p>
            <button className="font-semibold flex items-center justify-center cursor-pointer group-hover:text-blue-500">
              Read More <FaArrowRight className="ms-3" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ITServicesCards;
