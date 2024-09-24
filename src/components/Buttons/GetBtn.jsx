import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const btntext = {
  title : " Get A Quote",
 

}

const GetBtn = () => {
  return (
    <>
      <div className='h-14 w-44 shadow-lg bg-gradient-custom font-semibold  text-white flex items-center justify-center'>
        {btntext.title} <FaArrowRight className='ms-3' />

      </div>
    </>
  );
};

export default GetBtn;
