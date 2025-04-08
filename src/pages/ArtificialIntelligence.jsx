import React from "react";
import { Link } from "react-router";
import WhyUs from "../components/WhyUs";
import WantToTalk from "../components/WantToTalk";
import PyramidSection from "../components/PyramidSection";
import ProcessFlow2 from "../components/ProcessFlow2";
import CalButtonWhite from "../components/CalButtonWhite";

const services = [
  {
    title: "AI CHAT BOTS",
    image: "https://www.pasovit.com/wp-content/uploads/2024/08/ai-chat-bot.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "EMAIL MARKETING",
    image: "src/assets/email-marketing-1.png", // Replace with actual image path
    link: "/artificial-intelligence/email-marketing-automation",
  },
  {
    title: "CUSTOMER RELATIONSHIP MANAGEMENT (CRM) AUTOMATION",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/08/crm-automation-1.png", // Replace with actual image path
    link: "/artificial-intelligence/crm-automation",
  },
  {
    title: "SOCIAL MEDIA AUTOMATION",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/08/social-media-automation-2.png", // Replace with actual image path
    link: "/artificial-intelligence/sm-automation",
  },
  {
    title: "SALES & E-COMMERCE AUTOMATION",
    image: "https://www.pasovit.com/wp-content/uploads/2024/08/sales.png", // Replace with actual image path
    link: "/artificial-intelligence/sales-ecom-automation",
  },
  {
    title: "CUSTOMER SUPPORT AUTOMATION",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/08/coustomer-support-automation-1.png", // Replace with actual image path
    link: "/artificial-intelligence/customer-support-automation",
  },
];

const ArtificialIntelligence = () => {
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
            Let's transform
            <span className="text-[#E81F38]">
              {" "}
              Your <br className="hidden md:block" /> Business
            </span>{" "}
            with our <br className="hidden md:block" />
            expertise<span className="text-[#E81F38]">.</span>
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/consultation-services-heroimage.svg"
            alt="Rocket Illustration"
            className="w-64 max-w-md md:w-96 "
          />
        </div>
      </section>

      <section className="py-16 px-6  max-w-6xl mx-auto">
        <div className="md:pl-4 text-center lg:text-left">
          <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            AI & AUTOMATION
          </p>
          <h2 className="text-3xl md:text-[2.5rem] tracking-wide font-[500] leading-10 text-[#262626] mt-4">
            Artificial Intelligence and Automation Services{" "}
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
        className="h-full max-w-6xl md:my-5 w-full mx-auto"
      />

      <WhyUs />
      <PyramidSection />
      <section className="max-w-6xl mx-auto mt-20 mb-4">
        <div className="md:pl-6 text-center">
          <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            A READ
          </p>
          <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem] font-[500] leading-10 mt-4">
            Our Customer philosophy
          </h2>
          <p className="text-[#728390] mt-6 md:mt-10">
            There is no better way to understand someone than showing empathy.
            We step right into your shoes and look into the problem right from
            your perspective. This makes us to better understand what you want
            without you asking for it. That’s our core philosophy towards
            understaning our customers
          </p>
        </div>
      </section>
      <ProcessFlow2 />
      <WantToTalk />
    </div>
  );
};

export default ArtificialIntelligence;
