"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const recentWorks = [
  "https://www.pasovit.com/wp-content/uploads/2024/08/Roy-and-Roy-associates-Mockup.png", // Replace with actual paths
  "https://www.pasovit.com/wp-content/uploads/2024/08/Space-meditation-centre-mockup.png",
  "https://www.pasovit.com/wp-content/uploads/2024/08/Eafo-brest-mockup.png",
  "https://www.pasovit.com/wp-content/uploads/2024/08/Eafo-path-mockup.png",
];

const RecentWork = () => {
  return (
    <section
      className="relative mt-4  pt-10 px-4 md:px-12.5 bg-left"
      style={{
        backgroundImage:
          "url('https://www.pasovit.com/wp-content/uploads/2022/02/our-work-background-min.png')",
        // backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }} // Replace with actual path
    >
      <div className=" mx-auto flex flex-col md:flex-row items-center  md:min-h-[31.3rem]">
        {/* Left Side - Text Content */}
        <div className="md:w-[45%] text-left  text-[#262626]">
          <h2 className="text-5xl md:text-[4.1rem] font-[900]  md:leading-[4.5rem] ">
            Our <br className="hidden md:block" />{" "}
            <span className="">recent great</span>{" "}
            <span className="">Work</span>
            <span className="text-red-500">.</span>
          </h2>
          <p className="text-xl md:text-[1.4rem]  mt-4 leading-[1.2em] font-semibold">
            Engaging web projects that perfectly match your brand
          </p>
          <button className="mt-6 bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300">
            Click & Explore
          </button>
        </div>

        {/* Right Side - Swiper Carousel */}
        <div className="md:w-[55%] w-full mt-12 md:mt-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            className="w-full min-h-44" // Ensuring height is set
          >
            {recentWorks.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <img
                  src={image}
                  alt={`Work ${index + 1}`}
                  className="w-full object-contain" // Removed `h-full` to maintain aspect ratio
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
