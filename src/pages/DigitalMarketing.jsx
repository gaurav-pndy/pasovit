import React from "react";
import { Link } from "react-router";
import WhyUs from "../components/WhyUs";
import ProcessFlow from "../components/ProcessFlow";
import WantToTalk from "../components/WantToTalk";
import PyramidSection from "../components/PyramidSection";
import ProcessFlow2 from "../components/ProcessFlow2";

const services = [
  {
    title: "LOGO DESIGN",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/08/logo-design-2.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "FACEBOOK & INSTAGRAM ADS",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/08/fbinsta-ad-1.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "GOOGLE ADSENSE",
    image: "https://www.pasovit.com/wp-content/uploads/2024/08/google-ads.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "SEARCH ENGINE OPTIMIZATION",
    image: "https://www.pasovit.com/wp-content/uploads/2024/08/seo.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "EMAIL MARKETING",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/08/email-marketing-2.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "YOUTUBE ADS",
    image: "https://www.pasovit.com/wp-content/uploads/2024/08/youtube-ads.png", // Replace with actual image path
    link: "#",
  },
];

const DigitalMarketing = () => {
  return (
    <div>
      <section
        className="relative flex flex-col lg:flex-row items-center justify-between xl:h-[65vh] gap-10 md:gap-20  px-8 md:px-16 xl:px-32 py-16 mb-5"
        style={{
          backgroundImage:
            "url('https://www.pasovit.com/wp-content/uploads/2022/02/contact-header-bg-min.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center left",
        }}
      >
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl text-white font-[900] leading-tight">
            You focus on
            <span className="text-[#E81F38]">
              {" "}
              Your <br className="hidden md:block" /> Business
            </span>{" "}
            while we focus <br className="hidden md:block" />
            on enabling it<span className="text-[#E81F38]">.</span>
          </h1>

          <button className="mt-6 bg-white text-[#001e8a]  rounded font-medium hover:bg-[#001e8a] border border-[#001e8a] hover:text-white hover:border-white cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300">
            Book Free Strategy Call
          </button>
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/professional-hero-image.svg"
            alt="Digital Marketing Illustration"
            className="w-64 max-w-md md:w-96 "
          />
        </div>
      </section>

      <section className="py-16 px-6  max-w-6xl mx-auto">
        <div className="md:pl-4 text-center lg:text-left">
          <p className="text-[#E81F38] text-sm  tracking-[2px] uppercase">
            digital marketing
          </p>
          <h2 className="text-3xl md:text-[2.5rem] tracking-wide font-[500] leading-10 text-[#262626] mt-4">
            Digital Marketing services <br className="hidden lg:block" /> we
            provide
          </h2>
        </div>

        <div className="mt-12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link to={service.link}>
              <div
                key={index}
                className="bg-[#f7f7f9]  hover:bg-[#001e8a]/30 transition-all duration-300 rounded p-6 py-8 text-center h-full"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto mb-4 h-40 hover:scale-110 transition-all duration-300 cursor-pointer"
                />
                <a
                  href={service.link}
                  className=" underline font-[450] text-[#262626] leading-snug "
                >
                  {service.title}
                </a>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <img
        src="https://www.pasovit.com/wp-content/uploads/2022/02/divider-line-min-2048x35.png"
        alt=""
        className="h-full max-w-6xl md:my-5 w-full mx-auto"
      />

      <WhyUs />

      <img
        src="https://www.pasovit.com/wp-content/uploads/2022/02/divider-line-min-2048x35.png"
        alt=""
        className="h-full max-w-6xl md:my-5 w-full mx-auto"
      />
      <section className="w-fit mx-auto flex flex-col md:px-5  max-w-6xl my-10 justify-center">
        <video
          className="rounded shadow-xl  w-full"
          controls
          autoPlay
          muted
          playsInline
        >
          <source
            src="https://www.pasovit.com/wp-content/uploads/2024/08/Pasovit-Trinity-AI.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <button className="bg-[#001e8a] w-fit mx-auto text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300 mt-6 ">
          Book Free Strategy Call
        </button>
      </section>

      <ProcessFlow2 />
      <WantToTalk />
    </div>
  );
};

export default DigitalMarketing;
