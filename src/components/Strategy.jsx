import React from "react";

const Strategy = () => {
  return (
    <section
      className="relative flex  items-center justify-center  gap-20  px-3 md:px-16 xl:px-32 py-16 md:py-20 mt-5"
      style={{
        backgroundImage: "url('/common/proposal-background-min.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center left",
      }}
    >
      {/* Left Side Content */}

      {/* Right Side Illustration */}

      <img
        src="/common/strategy-image.svg"
        alt="Rocket Illustration"
        className=" md:w-[90%]"
      />
    </section>
  );
};

export default Strategy;
