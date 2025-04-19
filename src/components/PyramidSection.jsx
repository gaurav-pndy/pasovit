import React from "react";

const PyramidSection = () => {
  return (
    <section
      className="relative flex  items-center justify-center  gap-20  px-3 md:px-16 xl:px-24 py-15.5 mt-5"
      style={{
        backgroundImage: "url('/common/pyramid-bg-min.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
      }}
    >
      {/* Left Side Content */}

      {/* Right Side Illustration */}

      <img
        src="/common/pyramid-desktop.png"
        alt="Pyramid Illustration"
        className=" md:w-[90%] md:hover:scale-110 transition duration-300 hidden lg:block"
      />
      <img
        src="/common/pyramid-phone.png"
        alt="Pyramid Illustration"
        className=" w-80 md:hover:scale-110 transition duration-300  lg:hidden"
      />
    </section>
  );
};

export default PyramidSection;
