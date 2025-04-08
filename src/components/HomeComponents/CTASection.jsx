import React from "react";
import CalButton from "../CalButton";

const CTASection = () => {
  return (
    <section className="w-full flex justify-end bg-white px-0 py-20">
      <div className="max-w-7xl w-full  flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-[4.1rem] font-[900] text-[#262626] ">
            Got a <span className="text-red-600">Project</span> or a{" "}
            <br className="hidden md:block" />
            Partnership in mind?
          </h2>
          <div className="mt-6">
            <CalButton />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-2xl">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/lets-talk-idea.svg"
            alt="CTA Illustration"
            className="w-[50rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
