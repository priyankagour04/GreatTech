import React from "react";
import icon1 from "../../assets/images/counter-icon1.png";
import icon2 from "../../assets/images/counter-icon2.png";
import icon3 from "../../assets/images/counter-icon3.png";
import icon4 from "../../assets/images/counter-icon4.png";

// Array of data
const services = [
  {
    title: "6,561+",
    description: "Satisfied Clients",
    image: icon1,
  },
  {
    title: "600+",
    description: "Finished Projects",
    image: icon2,
  },
  {
    title: "250+",
    description: "Skilled Experts",
    image: icon3,
  },
  {
    title: "590+",
    description: "Media Posts",
    image: icon4,
  },
];

const CountCard = () => {
  return (
    <>
      <div className="relative h-52 bg-gradient-custom mt-10 mx-28">
        {/* Adding the circuit pattern as a background */}
        <div className="absolute inset-0 h-full bg-no-repeat bg-right bg-Counter-Card-item "></div>

        <div className="relative z-10 text-white flex p-20 justify-around">
          {/* Mapping over services array */}
          {services.map((service, index) => (
            <div key={index} className="flex gap-4">
              {/* Image */}
              <img src={service.image} alt={service.description} className="object-contain" />

              {/* Text Section */}
              <div>
                <h1 className="text-4xl font-bold">{service.title}</h1>
                <h1 className="font-semibold">{service.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CountCard;
