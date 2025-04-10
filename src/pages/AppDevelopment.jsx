import React from "react";
import { Link } from "react-router";
import WhyUs from "../components/WhyUs";
import ProcessFlow from "../components/ProcessFlow";
import Strategy from "../components/Strategy";
import HowWeWork from "../components/HowWeWork";
import FAQSection from "../components/FAQSection";
import WantToTalk from "../components/WantToTalk";
import CalButtonWhite from "../components/CalButtonWhite";
import SEO from "../components/SEO";

const services = [
  {
    title: "WEBSITE & WEB APP DEVELOPMENT",
    image:
      "https://www.pasovit.com/wp-content/uploads/2022/02/website-development.svg", // Replace with actual image path
    link: "/application-development/web-development",
  },
  {
    title: "ANDROID & MOBILE APP DEVELOPMENT",
    image: "https://www.pasovit.com/wp-content/uploads/2022/02/mobile-app.svg", // Replace with actual image path
    link: "/application-development/mobile-app-development",
  },
];

const AppDevelopment = () => {
  return (
    <div>
      <SEO
        title="Application Development | Pasovit Technologies"
        description="Explore our application development services including custom mobile and web solutions tailored to your business."
        keywords="app development, mobile development, web development, software solutions"
        url="https://pasovit.com/application-development"
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
            Build coherent <br className="hidden md:block" />
            <span className="text-[#E81F38]">Applications</span> suiting your{" "}
            <br className="hidden md:block" />
            business needs<span className="text-[#E81F38]">.</span>
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/application-services-hero-image_1.svg"
            alt="Rocket Illustration"
            className="w-64 max-w-md md:w-96 "
          />
        </div>
      </section>

      <section className="py-16 px-6  max-w-6xl mx-auto">
        <div className="md:pl-4 text-center lg:text-left">
          <p className="text-[#E81F38] text-xl tracking-[2px] uppercase">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-[2.5rem] tracking-wide font-[500] leading-10 text-[#262626] mt-4">
            Website and App Development services{" "}
            <br className="hidden lg:block" /> we provide
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
        className="h-full max-w-6xl my-5 w-full mx-auto"
      />

      <WhyUs />
      <ProcessFlow />
      <Strategy />
      <img
        src="https://www.pasovit.com/wp-content/uploads/2022/02/divider-line-min-2048x35.png"
        alt=""
        className="h-full max-w-6xl my-5 w-full mx-auto"
      />
      <HowWeWork />
      <FAQSection />
      <WantToTalk />
    </div>
  );
};

export default AppDevelopment;
