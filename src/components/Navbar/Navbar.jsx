import React, { useState } from 'react';
import { Link } from 'react-scroll';
import GetBtn from '../Buttons/GetBtn';
import { VscStarEmpty } from "react-icons/vsc";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile menu toggle

  const links = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Pages" },
    { name: "Blog" },
    { name: "Contact" },
  ];

  const toggleNav = () => setIsNavOpen(!isNavOpen); // Toggle menu
  const closeNav = () => setIsNavOpen(false); // Close menu on link click

  return (
    <>
      <nav className="flex items-center justify-between bg-transparent relative">
        {/* Brand Name */}
        <div
  className="text-white p-4 lg:p-5 text-2xl lg:text-4xl flex items-center font-bold bg-gradient-custom relative"
  style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
>
  <div className="text-4xl lg:text-5xl mr-2 flex-shrink-0">
    <VscStarEmpty />
  </div>
  <h1 className="text-lg sm:text-xl lg:text-4xl mt-0 lg:mt-1 pe-5 whitespace-nowrap">
    GreatTech
  </h1>
</div>


        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-center flex-grow">
          <ul className="flex space-x-8 font-semibold">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-lg nav-item hover:cursor-pointer"
              >
                <Link
                  activeClass="active"
                  to={link.name}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center pr-5">
          <button
            onClick={toggleNav}
            className="focus:outline-none"
          >
            {isNavOpen ? (
              
              <AiOutlineClose className="w-8 h-8 text-blue-500" /> // Close Icon
            ) : (
              <AiOutlineMenu className="w-8 h-8 text-blue-500" /> // Menu Icon
            )}
          </button>
        </div>

        {/* Get A Quote Button (Desktop) */}
        <div className="hidden lg:block me-10">
          <GetBtn />
        </div>

        {/* Mobile Navigation Menu */}
        <div
  className={`lg:hidden absolute top-0 left-0 w-full bg-black bg-opacity-90 z-50 flex flex-col items-center justify-start py-5 transform ${
    isNavOpen ? "translate-y-0" : "-translate-y-full"
  } transition-transform duration-300 ease-in-out`}
>
  {/* Close Icon */}
  <button
    onClick={closeNav}
    className="self-end mr-5 text-blue-500 text-2xl focus:outline-none"
  >
    <AiOutlineClose />
  </button>

  {/* Menu Links */}
  <ul className="text-white text-xl space-y-4 mt-5">
    {links.map((link, index) => (
      <li key={index} onClick={closeNav}>
        <Link
          activeClass="active"
          to={link.name}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

      </nav>
    </>
  );
};

export default Navbar;
