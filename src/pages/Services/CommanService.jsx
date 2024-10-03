import React from "react";
import ServiceCard from "../../components/Cards/ServiceCard";
import ViewAllServices from "../../components/Buttons/ViewAllServices";

const CommanService = () => {
  return (
    <>
      <div className="container mx-auto mb-28 p-5">
      <div className="flex mt-28 justify-between">
      <div className="  ms-9">
      <div className="flex items-center gap-3 mb-5 text-Blue-500">
        {" "}
        <div className="w-8 h-3 bg-Blue-500 rounded-xl"></div>
        <h1 className="text-xl font-semibold "> WHAT WE OFFER</h1>
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
