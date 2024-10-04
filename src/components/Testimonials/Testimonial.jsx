import React from "react";
import Alex from '../../assets/images/testimonial-two-image1.png';
import Suborna from '../../assets/images/testimonial-two-image2.png';
import Kawser from '../../assets/images/testimonial-two-image3.png';
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  // Array of testimonials
  const testimonials = [
    {
      name: "Kawser Ahmed",
      role: "Web Designer",
      image: Kawser,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc nul viverra Aenean pulvinar maximus leo",
      rating: 4
    },
    {
      name: "Alex Rony",
      role: "Engineering",
      image: Alex,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc nul viverra Aenean pulvinar maximus leo",
      rating: 4
    },
    {
      name: "Suborna",
      role: "UI/UX Designer",
      image: Suborna,
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc nul viverra Aenean pulvinar maximus leo",
      rating: 4
    },
  ];

  return (
    <div className="container mx-auto p-12">
      <div className="flex items-center justify-center gap-5 mb-5 text-blue-500">
      <div className="w-10 h-3 outline outline-2 rounded-xl">
        <div className="w-5 h-3 bg-Blue-500 rounded-xl"></div>
        </div>
        <h1 className="text-xl font-semibold mb-1">Testimonials</h1>
      </div>
      <h1 className="text-4xl font-bold text-center">What Our Client's Say About Us</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card shadow-2xl p-12">
            <div className="flex space-x-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <FaStar key={i} className="" />
              ))}
            </div>
            <p className="text-gray-700 mt-3">
              "{testimonial.text}"
            </p>
            <div className="flex items-center mt-4">
              <img src={testimonial.image} alt={testimonial.name} className=" " />
              <div className="ml-3">
                <h2 className="text-gray-900">{testimonial.name}</h2>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
