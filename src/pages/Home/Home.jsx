import React, { useEffect, useState } from "react";
import bannerImg1 from "../../assets/images/banner-image1.jpg";
import bannerImg2 from "../../assets/images/banner-image2.jpg"; // Add your other images
import bannerImg3 from "../../assets/images/banner-image3.jpg";
import ExploreMoreBtn from "../../components/Buttons/ExploreMoreBtn";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [bannerImg1, bannerImg2, bannerImg3];

  // Automatically change background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5 seconds for each image
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div
        className="relative h-screen flex items-center text-white"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1.0s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
        {/* Overlay for better text contrast */}
        <div className="z-10 ms-16  ">
          <div className="flex items-center gap-3 mb-5">
            {" "}
            <div className="w-10 h-4 bg-white rounded-xl"></div>
            <h1 className="text-xl font-bold ">BEST IT SOLUTION PROVIDER</h1>
          </div>

          <div className="-tracking-tighter">
            {" "}
            <p className="text-7xl font-bold ">Excellent IT Services </p>
            <p className="text-7xl font-bold">for Your Success</p>
            <p className="mt-8">
              Consectetur adipiscing elit aenean scelerisque at augue vitae
              consequat
            </p>
            <p className="mt-1">
              quisque eget congue velit in cursus leo sed sodales est eget
              turpis.
            </p>
          </div>
         <div className="mt-16">
         <ExploreMoreBtn/>
         </div>
        </div>
      </div>
    </>
  );
};

export default Home;
