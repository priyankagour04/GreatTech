import React from 'react';
import { Link } from 'react-scroll';
import GetBtn from '../Buttons/GetBtn';

const Navbar = () => {
    const links=[
        { name: "Home" },
        { name: "About" },
        { name: "Services" },
        { name: "Pages" },
        { name: "Blog" },
        { name: "Contact" },
      ]
  return (
    <>
      <nav className="flex ">
        {/* Brand Name */}
        <div className="text-white w-2/6 p-5 text-4xl flex font-bold bg-gradient-custom relative" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}>
          GreatTech
        </div>

        {/* Navigation Links */}
        <div className="w-1/2 p-8">
          <div className="hidden lg:flex items-center justify-center">
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
        </div>

        {/* Get A Quote Button */}
        <div className="p-5 ">
          <GetBtn />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
