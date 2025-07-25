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

const AppDevelopment = () => {
  const appServices = services.filter(
    (service) => service.category == "mobile-app-development"
  );
  return (
    <div>
      <SEO
        title="Mobile App Development | Pasovit Technologies"
        description="Build fast, scalable, and user-friendly mobile apps for Android and iOS. From intuitive UI design to post-launch support, we deliver secure and high-performing mobile solutions tailored to your needs."
        keywords="mobile app development, Android app development, iOS app development, custom mobile apps, mobile UI design, app maintenance"
        url="https://pasovit.com/mobile-app-development"
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
            Custom Mobile App Development for Android, iOS, and Ongoing Support
            <span className="text-[#E81F38]">.</span>
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/AppDevelopment/mobile-app-development.png"
            alt="Mobile App Development Illustration"
            className="w-64 max-w-md md:w-96 "
          />
        </div>
      </section>
      <section className="text-[#4b4f58] max-w-5xl md:text-lg mt-20 mx-auto px-4">
        <p>
          We specialize in mobile app development services tailored for Android
          and iOS platforms. Whether you're launching a new app or need
          long-term support, we deliver fast, scalable, and user-friendly mobile
          solutions. From sleek UI design to post-launch maintenance, we ensure
          your app performs flawlessly, stays secure, and keeps users engaged.
        </p>
      </section>

      <section className="py-16 px-6  max-w-6xl mx-auto">
        <div className="md:pl-4 text-center lg:text-left">
          {/* <p className="text-[#E81F38] text-xl tracking-[2px] uppercase">
            OUR SERVICES
          </p> */}
          <h2 className="text-3xl md:text-[2.5rem] tracking-wide font-[500] leading-10 text-[#262626] mt-4">
            Mobile App Development services <br className="hidden lg:block" />{" "}
            we provide
          </h2>
        </div>

        <div className="mt-12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {appServices.map((service, index) => (
            <Link to={`/mobile-app-development/${service.id}`} key={index}>
              <div className="bg-[#f7f7f9]  hover:bg-[#001e8a]/30 transition-all duration-300 rounded p-6 py-8 text-center h-full">
                <img
                  src={service.image}
                  alt={service.name}
                  className="mx-auto mb-4 h-40 hover:scale-110 transition-all duration-300 cursor-pointer"
                />
                <p className="font-semibold text-lg text-[#262626] leading-snug ">
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

export default AppDevelopment;
