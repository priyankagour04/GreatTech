import React from "react";
import ExploreMoreBtn from "../Buttons/ExploreMoreBtn";

const Offering = () => {
  return (
    <>
     <div className="bg-footer-shadow-img bg-secondary_color-500 mb-28">
     <div className="flex mt-28 justify-between">
        <div className="  ms-9">
          <div className="flex items-center gap-3 mb-5 text-Blue-500">
            {" "}
            <div className="w-8 h-3 bg-Blue-500 rounded-xl"></div>
            <h1 className=" font-semibold ">OUR OFFERING</h1>
          </div>
          <div className="text-4xl font-bold text-white">
            <h1>Enhance and Pioneer Using</h1>
            <h1>Technology Trends</h1>
          </div>
        </div>

        <div className="me-9">
          <ExploreMoreBtn />
        </div>
      </div>
     </div>
    </>
  );
};

export default Offering;
