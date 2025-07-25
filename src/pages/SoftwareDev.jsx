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
import { services } from "../data/servicesData"; // Adjust the import path as necessary

const SoftwareDev = () => {
  const softwareServices = services.filter(
    (service) => service.category == "software-development"
  );
  return (
    <div>
      <SEO
        title="Software Development | Pasovit Technologies"
        description="Discover tailored software development services for startups, SMEs, and enterprises. We build secure, scalable ERP, CRM, and custom platforms to boost automation, engagement, and efficiency."
        keywords="custom software development, enterprise software, ERP development, CRM systems, workflow automation, software solutions"
        url="https://pasovit.com/software-development"
      />

      <section
        className="relative flex flex-col lg:flex-row items-center justify-between xl:h-[65vh] gap-10 md:gap-20  px-4 md:px-16 xl:px-32 py-16 mb-5"
        style={{
          backgroundImage: "url('/contact-header-bg-min.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center left",
        }}
      >
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl text-white font-[900] leading-tight">
            Custom Software Development Solutions for Enterprises and Growing
            Businesses
            <span className="text-[#E81F38]">.</span>
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/SoftwareDev/software-development.png"
            alt="Software Development Illustration"
            className="w-64 max-w-md md:w-96 "
          />
        </div>
      </section>
      <section className="text-[#4b4f58] max-w-5xl md:text-lg mt-20 mx-auto px-4">
        <p>
          Our software development services are tailored to meet the unique
          demands of startups, SMEs, and large enterprises. From building custom
          software and enterprise-grade platforms to developing ERP and CRM
          systems, we deliver secure, scalable, and high-performing solutions.
          We focus on your business goals and craft powerful applications that
          improve workflow automation, enhance customer engagement, and drive
          operational efficiency.
        </p>
      </section>

      <section className="py-16 px-6  max-w-6xl mx-auto">
        <div className="md:pl-4 text-center lg:text-left">
          {/* <p className="text-[#E81F38] text-xl tracking-[2px] uppercase">
            OUR SERVICES
          </p> */}
          <h2 className="text-3xl md:text-[2.5rem] tracking-wide font-[500] leading-10 text-[#262626] mt-4">
            Software Development services <br className="hidden lg:block" /> we
            provide
          </h2>
        </div>

        <div className="mt-12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {softwareServices.map((service, index) => (
            <Link to={`/software-development/${service.id}`} key={index}>
              <div className="bg-[#f7f7f9]  hover:bg-[#001e8a]/30 transition-all duration-300 rounded p-6 py-8 text-center h-full">
                <img
                  src={service.image}
                  alt={service.name}
                  className="mx-auto mb-4 h-40 hover:scale-110 transition-all duration-300 cursor-pointer"
                />
                <p className=" font-semibold text-lg text-[#262626] leading-snug ">
                  {service.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <img
        src="/divider-line-min-2048x35.png"
        alt=""
        className="h-full max-w-6xl my-5 w-full mx-auto"
      />

      <WhyUs />
      <ProcessFlow />
      <Strategy />
      <img
        src="/divider-line-min-2048x35.png"
        alt=""
        className="h-full max-w-6xl my-5 w-full mx-auto"
      />
      <HowWeWork />
      {/* <FAQSection /> */}
      <WantToTalk />
    </div>
  );
};

export default SoftwareDev;
