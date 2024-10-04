import React from "react";
import ServiceCard from "../../components/Cards/ServiceCard";
import ViewAllServices from "../../components/Buttons/ViewAllServices";

const CommanService = () => {
  return (
    <>
      <div className="container mx-auto mb-28 p-5">
      <div className="flex mt-28 justify-between">
      <div className="  ms-10">
      <div className="flex items-center gap-4 mb-5 text-Blue-500 ms-1">
        {" "}
        <div className="w-10 h-3 outline outline-2 rounded-xl">
        <div className="w-5 h-3 bg-Blue-500 rounded-xl"></div>
        </div>
        <h1 className="text-xl font-semibold mb-1 "> WHAT WE OFFER</h1>
      </div>
      <div className="text-5xl font-bold">
        <h1>Excellent It Services</h1>
      </div>
      </div>
    
      <div className="me-9">
        <ViewAllServices/>
      </div>
      </div>
      <div className="mt-10 px-6">
      <ServiceCard />
      </div>
      </div>
    </>
  );
};

export default CommanService;
