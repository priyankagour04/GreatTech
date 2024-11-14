import React from 'react';
import ViewAllCase from '../Buttons/ViewAllCase';
import caseImg1 from '../../assets/images/case-image1.jpg';
import caseImg2 from '../../assets/images/case-image2.jpg';
import caseImg3 from '../../assets/images/case-image3.jpg';
import caseImg4 from '../../assets/images/case-image4.jpg';

const CaseStudy = () => {
  return (
    <>
      <div className="container mx-auto mb-28 p-5">
        <div className="flex mt-28 justify-between">
          <div className="ms-10">
            <div className="flex items-center gap-4 mb-5 text-blue-500 ms-1">
              <div className="w-10 h-3 outline outline-2 rounded-xl">
                <div className="w-5 h-3 bg-blue-500 rounded-xl"></div>
              </div>
              <h1 className="text-xl font-semibold mb-1">FROM OUR CASE STUDIES</h1>
            </div>
            <div className="text-5xl font-bold">
              <h1>We Delivered Best Solution</h1>
            </div>
          </div>

          <div className="me-9 mt-5">
            <ViewAllCase />
          </div>
        </div>

        {/* Cards section */}
        <div className="grid grid-cols-3 gap-5 ms-14 mt-14">
          {/* Card 1 */}
          <div className="relative group">
            <img src={caseImg1} alt="Case Study 1" className="w-full h-full object-cover " />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100 transition-opacity rounded-lg"></div>
            <div className="absolute bottom-5 left-5 text-white">
              <span className="text-blue-400">Security</span>
              <h2 className="text-2xl font-semibold">Network Security</h2>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group">
            <img src={caseImg2} alt="Case Study 2" className="w-full h-full object-cover " />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100 transition-opacity rounded-lg"></div>
            <div className="absolute bottom-5 left-5 text-white">
              <span className="text-blue-400">Solution</span>
              <h2 className="text-2xl font-semibold">IT Management</h2>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group">
            <img src={caseImg3} alt="Case Study 3" className="w-full h-full object-cover " />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100  transition-opacity rounded-lg"></div>
            <div className="absolute bottom-5 left-5 text-white">
              <span className="text-blue-400">Technology</span>
              <h2 className="text-2xl font-semibold">Platform Integration</h2>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group">
            <img src={caseImg4} alt="Case Study 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100  transition-opacity rounded-lg"></div>
            <div className="absolute bottom-5 left-5 text-white">
              <span className="text-blue-400">Innovation</span>
              <h2 className="text-2xl font-semibold">New Technologies</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
