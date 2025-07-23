import React from "react";

import { useParams, useLocation, Link } from "react-router-dom";
import SEO from "../components/SEO";
import CalButtonWhite from "../components/CalButtonWhite";
import WhyUs from "../components/WhyUs";
import PyramidSection from "../components/PyramidSection";
import ProcessFlow2 from "../components/ProcessFlow2";
import WantToTalk from "../components/WantToTalk";
import { services } from "../data/servicesData";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  return (
    <div>
      <SEO
        title={`${service.name} | Pasovit Technologies`}
        description={service.seoDesc}
        keywords={service.keywords}
        url={`https://pasovit.com/${service.category}/${service.id}`}
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
        <div className="lg:w-[60%] text-center lg:text-left">
          <h1
            className="text-4xl md:text-5xl text-white font-[900] leading-tight"
            dangerouslySetInnerHTML={{ __html: service.title }}
          ></h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src={service.image}
            alt={service.name}
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] md:text-lg max-w-5xl mt-20 mx-auto px-4">
        <p dangerouslySetInnerHTML={{ __html: service.desc }}></p>
      </section>

      <img
        src="/divider-line-min-2048x35.png"
        alt=""
        className="h-full max-w-6xl my-5 w-full mx-auto"
      />
      <WhyUs />
      <PyramidSection />

      <section className="max-w-6xl mx-auto mt-20 mb-4">
        <div className="md:pl-6 text-center">
          {/* <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            A READ
          </p> */}
          <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem] font-[500] leading-10 mt-4 px-4">
            Our Customer philosophy
          </h2>
          <p className="text-[#728390] mt-6 md:mt-10 px-4">
            There is no better way to understand someone than showing empathy.
            We step right into your shoes and look into the problem right from
            your perspective. This makes us to better understand what you want
            without you asking for it. That’s our core philosophy towards
            understanding our customers.
          </p>
        </div>
      </section>

      <ProcessFlow2 />
      <WantToTalk />
    </div>
  );
};

export default ServiceDetails;
