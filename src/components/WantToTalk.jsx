import React from "react";
import CalButton from "./CalButton";

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
      <div className="mt-6 md:mt-10">
        <CalButton />
      </div>
    </section>
  );
};

export default WantToTalk;
