import React from "react";
import ExploreMoreBtn from "../../components/Buttons/ExploreMoreBtn";
import CardImg1 from "../../assets/images/blog-image1.jpg";
import CardImg2 from "../../assets/images/blog-image2.jpg";
import CardImg3 from "../../assets/images/blog-image3.jpg";
import { FaUser, FaComments } from "react-icons/fa"; // Icons for user and comments

const Blogs = () => {
  return (
    <>
      <div className="container mx-auto p-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-5 text-blue-500">
            <div className="w-8 h-3 bg-blue-500 rounded-xl"></div>
            <h1 className="text-xl font-semibold">Blog & News</h1>
          </div>
          <h1 className="text-4xl font-bold">Explore Blogs and News</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="relative">
              <img src={CardImg1} alt="Blog 1" className="w-full h-60 object-cover" />
              {/* <div className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-3 ">
                <span className="text-lg font-bold">10</span>
                <br />
                <span className="text-sm">Dec</span>
              </div> */}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <FaUser /> <span>By Admin</span>
                <FaComments /> <span>0 Comments</span>
              </div>
              <h2 className="text-xl font-bold my-4">
                Necessity May Give us Best Virtual Court
              </h2>
              <ExploreMoreBtn label="Read More" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="relative">
              <img src={CardImg2} alt="Blog 2" className="w-full h-60 object-cover" />
              {/* <div className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-3 rounded-lg">
                <span className="text-lg font-bold">12</span>
                <br />
                <span className="text-sm">Dec</span>
              </div> */}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <FaUser /> <span>By Admin</span>
                <FaComments /> <span>0 Comments</span>
              </div>
              <h2 className="text-xl font-bold my-4">
                Tackling the Changes of Retail Industry
              </h2>
              <ExploreMoreBtn label="Read More" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="relative">
              <img src={CardImg3} alt="Blog 3" className="w-full h-60 object-cover" />
              <div className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-3 rounded-lg">
                <span className="text-lg font-bold">15</span>
                <br />
                <span className="text-sm">Dec</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <FaUser /> <span>By Admin</span>
                <FaComments /> <span>0 Comments</span>
              </div>
              <h2 className="text-xl font-bold my-4">
                Easy and Most Powerful Server and Platform
              </h2>
              <ExploreMoreBtn label="Read More" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
