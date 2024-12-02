import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import aboutbanner from "../../assets/images/Aboutbanner-page.jpg";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import person1 from "../../assets/images/team-image1.jpg";
import person2 from "../../assets/images/team-image2.jpg";
import person3 from "../../assets/images/team-image4.jpg";
import person4 from "../../assets/images/team-image6.jpg";

// Team data
const teamData = [
  {
    name: "Kawser Ahmed",
    role: "Web Designer",
    image: person1,
    about: [
      "This good man possesses qualities that inspire us all. He is selfless, always putting the needs of others before his own. Whether it's helping a neighbor in distress, volunteering at local charities, or simply lending a listening ear to those who need it, he consistently demonstrates the true meaning of altruism.",
      "This good man is a source of unwavering support and encouragement to those around him. He is a pillar of strength in times of adversity and a wellspring of joy in times of celebration.",
    ],
    skills: [
      { name: "IT Management", level: "90%" },
      { name: "Web Development", level: "95%" },
      { name: "Network Security", level: "85%" },
      { name: "Platform Integration", level: "98%" },
    ],
  },
  {
    name: "Anneya Roy",
    role: "Software Developer",
    image: person2,
    about: [
      "Anneya is a highly skilled developer with a passion for creating beautiful and functional user interfaces. She combines technical expertise with creative problem-solving to deliver exceptional results.",
      "Her dedication to staying updated with the latest frontend technologies makes her an invaluable member of any team.",
    ],
    skills: [
      { name: "React Development", level: "95%" },
      { name: "Node.js", level: "90%" },
      { name: "Performance Optimization", level: "85%" },
      { name: "Testing & Debugging", level: "88%" },
    ],
  },
  {
    name: "Jenny Smith",
    role: "Marketing Executive",
    image: person3,
    about: [
      "Jenny is an experienced marketing executive who excels in crafting effective marketing strategies to boost brand visibility and drive business growth.",
      "He is known for his ability to analyze market trends, develop creative campaigns, and effectively communicate a brand's message to the target audience.",
    ],
    skills: [
      { name: "Digital Marketing", level: "95%" },
      { name: "SEO & SEM", level: "90%" },
      { name: "Social Media Management", level: "92%" },
      { name: "Content Strategy", level: "88%" },
    ],
  },
  {
    name: "Emily Davis",
    role: "Project Manager",
    image: person4,
    about: [
      "Emily is an experienced project manager who ensures projects are completed on time and within budget. Her strong communication and leadership skills drive teams to success.",
      "She is adept at managing cross-functional teams and complex project requirements.",
    ],
    skills: [
      { name: "Project Planning", level: "96%" },
      { name: "Team Leadership", level: "92%" },
      { name: "Risk Management", level: "85%" },
      { name: "Client Communication", level: "94%" },
    ],
  },
];

const Team = () => {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate("/"); // Redirects to the home page
  };

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl">Team Details</h1>
          <div className="flex items-center gap-1 sm:gap-3 md:gap-2">
            <h1 onClick={handleClick} className="cursor-pointer">
              Home
            </h1>
            <div className="mt-1">
              <RiArrowRightDoubleLine />
            </div>
            <h1 className="cursor-pointer">Our Team</h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-24 my-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-10">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start gap-10"
            >
              {/* Left Section - Image and Social Links */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-lg"
                  />
                  {/* Social Media Icons */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 px-4 py-2">
                    <a
                      href="#"
                      className=" hover:bg-blue-500 text-white border shadow-md  p-2"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className=" text-white border shadow-md  p-2 hover:bg-pink-700"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      className="text-white border shadow-md  p-2 hover:bg-blue-900"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="text-white border shadow-md  p-2 hover:bg-red-700"
                    >
                      <FaPinterestP />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Section - Details */}
              <div className="flex-1">
                {/* Name and Role */}
                <h1 className="text-3xl font-bold text-gray-800">
                  {member.name}
                </h1>

                {/* About Section */}
                <div>
                  <h2 className="text-xl font-semibold text-blue-500 mt-2 mb-4">
                    {member.role}
                  </h2>
                  <hr />
                  {member.about.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 leading-relaxed mt-4 mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Skills Section */}
                <div className="mt-8 grid grid-cols-2 gap-x-28 gap-y-5">
                  {member.skills.map((skill, idx) => (
                    <div key={idx} className="mb-4">
                      <h3 className="text-gray-800 font-semibold">
                        {skill.name}
                      </h3>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
