import React from "react";

const WantToTalk = () => {
  return (
    <section
      className="flex max-w-6xl flex-col items-center h-56 md:h-80 xl:h-[50vh]  justify-center mx-auto "
      style={{
        backgroundImage:
          "url(https://www.pasovit.com/wp-content/uploads/2022/02/map-bg-min.png)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <h2 className="text-3xl md:text-5xl tracking-wide font-[900] leading-10 text-[#262626] text-center ">
        Want to talk about your
        <span className="text-[#E81F38]"> Idea</span>?
      </h2>
      <button className="bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300 mt-6 md:mt-10">
        Book Free Strategy Call
      </button>
    </section>
  );
};

export default WantToTalk;
