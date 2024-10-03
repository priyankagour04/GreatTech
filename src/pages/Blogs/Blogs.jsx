import React from "react";
import ExploreMoreBtn from "../../components/Buttons/ExploreMoreBtn";
import CardImg1 from "../../assets/images/blog-image1.jpg";
import CardImg2 from "../../assets/images/blog-image2.jpg";
import CardImg3 from "../../assets/images/blog-image3.jpg";
const Blogs = () => {
  return (
    <>
      <div>
        <div className="  ms-9">
          <div className="flex items-center justify-center gap-3 mb-5 text-Blue-500">
            {" "}
            <div className="w-8 h-3 bg-Blue-500 rounded-xl"></div>
            <h1 className="text-xl font-semibold ">Blog & news</h1>
          </div>
          <div className="text-4xl font-bold text-center  ">
            <h1>Explore Blogs and News</h1>
          </div>
        </div>
        <div className="flex justify-around mt-12">
          <div className="bg-white shadow-2xl">
            <div>
              {" "}
              <img src={CardImg1} />
            </div>
            <div className="p-10">
              <h1 className="text-2xl">
                Necessity May Give us Best Virtual Court
              </h1>
            </div>
          </div>
          <div>
            <img src={CardImg2} />
          </div>
          <div>
            <img src={CardImg3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
