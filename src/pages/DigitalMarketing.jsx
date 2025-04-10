import React from "react";
import { Link } from "react-router";
import WhyUs from "../components/WhyUs";
import ProcessFlow from "../components/ProcessFlow";
import WantToTalk from "../components/WantToTalk";
import PyramidSection from "../components/PyramidSection";
import ProcessFlow2 from "../components/ProcessFlow2";
import CalButton from "../components/CalButton";
import CalButtonWhite from "../components/CalButtonWhite";
import SEO from "../components/SEO";

const services = [
  {
    title: "LOGO DESIGN",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/08/logo-design-2.png", // Replace with actual image path
    link: "/digital-marketing/logo-design-service",
  },
  {
    title: "FACEBOOK & INSTAGRAM ADS",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/08/fbinsta-ad-1.png", // Replace with actual image path
    link: "/digital-marketing/fb-instagram-ads-service/",
  },
  {
    title: "GOOGLE ADSENSE",
    image: "https://www.pasovit.com/wp-content/uploads/2024/08/google-ads.png", // Replace with actual image path
    link: "/digital-marketing/google-ads-service/",
  },
  {
    title: "SEARCH ENGINE OPTIMIZATION",
    image: "https://www.pasovit.com/wp-content/uploads/2024/08/seo.png", // Replace with actual image path
    link: "/digital-marketing/seo-service/",
  },
  {
    title: "EMAIL MARKETING",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/08/email-marketing-2.png", // Replace with actual image path
    link: "/digital-marketing/email-marketing-service/",
  },
  {
    title: "YOUTUBE ADS",
    image: "https://www.pasovit.com/wp-content/uploads/2024/08/youtube-ads.png", // Replace with actual image path
    link: "/digital-marketing/youtube-ads-service/",
  },
];

const DigitalMarketing = () => {
  return (
    <div>
      <SEO
        title="Digital Marketing Services | Pasovit Technologies"
        description="Boost your online presence with Pasovit’s SEO, social media marketing, paid ads, and branding services."
        keywords="digital marketing, SEO, social media, branding, paid ads"
        url="https://pasovit.com/digital-marketing"
      />

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

          <CalButtonWhite />
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
          {/* <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            digital marketing
          </p> */}
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

        <div className="mt-6">
          <CalButton />
        </div>
      </section>

      <ProcessFlow2 />
      <WantToTalk />
    </div>
  );
};

export default DigitalMarketing;
