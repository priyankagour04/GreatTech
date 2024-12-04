import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import aboutbanner from "../../assets/images/Aboutbanner-page.jpg";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import SendBtn from "../../components/Buttons/SendBtn";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Message sent successfully!");
    },
  });

  return (
    <>
      {/* Banner Section */}
      <div className="relative">
        <img
          className="w-full h-[400px] sm:h-[500px] md:h-[450px] object-cover"
          src={aboutbanner}
          alt="About Us Banner"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <div className="absolute right-44 top-36 sm:inset-16 md:right-10 md:top-48 flex flex-col justify-start text-white font-bold gap-2 px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">Contact</h1>
          <div className="flex items-center gap-1 sm:gap-3 md:gap-2">
            <h1>Home</h1>
            <div className="mt-1">
              <RiArrowRightDoubleLine />
            </div>
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 xl:p-24">
        {/* Left Section */}
        <div className="bg-Blue-500 text-white p-8 sm:p-8 lg:p-12 m-5 sm:m-8 lg:m-10 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Contact Information
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base">
            Pellentesque nec the condimentum nec lorem nulla augue est ultricies
            ac iaculis ut euismod quis sapien.
          </p>
          <div className="space-y-8 sm:space-y-10">
            <div className="mt-5 flex items-center sm:flex-row  sm:items-center gap-5">
              <div className="border-2 border-dotted border-white rounded-full p-1">
                <FaPhoneAlt className="text-5xl sm:text-5xl lg:text-5xl bg-white text-blue-400 rounded-full p-3" />
              </div>
              <span className="font-semibold text-base sm:text-lg lg:text-xl">
                +208-555-0112
              </span>
            </div>
            <div className="flex sm:flex-row sm:items-center  items-center gap-5">
              <div className="border-2 border-dotted border-white rounded-full p-1">
                <FaEnvelope className="text-5xl sm:text-5xl lg:text-5xl bg-white text-blue-400 rounded-full p-3" />
              </div>
              <span className="font-semibold text-base sm:text-lg lg:text-xl">
                info@gmail.com
              </span>
            </div>
            <div className="flex sm:flex-row items-center sm:items-center gap-5">
              <div className="border-2 border-dotted border-white rounded-full p-1">
                <FaMapMarkerAlt className="text-5xl sm:text-5xl lg:text-5xl bg-white text-blue-400 rounded-full p-3" />
              </div>
              <span className="font-semibold text-base sm:text-lg lg:text-xl">
                4577 Washington Ave.
              </span>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-10">
            <h2 className="text-lg sm:text-xl font-bold">Follow Social:</h2>
            <div className="flex gap-3 mt-3">
              <FaFacebookF className="text-3xl sm:text-4xl lg:text-4xl cursor-pointer hover:text-blue-500 text-black bg-white rounded-full p-2" />
              <FaTwitter className="text-3xl sm:text-4xl lg:text-4xl cursor-pointer hover:text-blue-500 text-black bg-white rounded-full p-2" />
              <FaLinkedinIn className="text-3xl sm:text-4xl lg:text-4xl cursor-pointer hover:text-blue-500 text-black bg-white rounded-full p-2" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10 bg-white mt-8">
          <div className="flex items-center gap-4 mb-5 text-Blue-500 lg:justify-start">
            <div className="w-10 h-3 outline outline-2 rounded-xl">
              <div className="w-5 h-3 bg-Blue-500 rounded-xl"></div>
            </div>
            <h1 className="text-lg sm:text-xl font-semibold mb-1">
              GET IN TOUCH
            </h1>
          </div>
          <h2 className="text-4xl font-bold text-gray-800">
            Ready To Get Started?
          </h2>
          <p className="text-gray-600 mt-5">
            Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut
            blandit felis odio in turpis. Quisque rhoncus, eros in auctor
            ultrices.
          </p>
          <form className="mt-5 space-y-5" onSubmit={formik.handleSubmit}>
            <div className="flex gap-5">
              <div className="w-full">
                <label
                  className="block text-gray-700 font-bold  mb-4"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label
                  className="block text-gray-700 font-bold mb-4"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-3"
                htmlFor="message"
              >
                Write Message
              </label>
              <textarea
                placeholder="Write Message"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                {...formik.getFieldProps("message")}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>
            <SendBtn />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
