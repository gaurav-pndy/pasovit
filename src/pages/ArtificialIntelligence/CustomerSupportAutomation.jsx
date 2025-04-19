import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";
import SEO from "../../components/SEO";

const CustomerSupportAutomation = () => {
  return (
    <div>
      <SEO
        title="Customer Support Automation | Pasovit Technologies"
        description="Deliver fast, 24/7 customer support using intelligent automation and AI-driven tools."
        keywords="customer support automation, AI support, helpdesk automation, Pasovit support AI"
        url="https://pasovit.com/artificial-intelligence/customer-support-automation"
      />

      <section
        className="relative flex flex-col lg:flex-row items-center justify-between xl:h-[65vh] gap-10 md:gap-20  px-8 md:px-16 xl:px-32 py-16 mb-5"
        style={{
          backgroundImage: "url('/contact-header-bg-min.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center left",
        }}
      >
        {/* Left Side Content */}
        <div className="lg:w-[60%] text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl text-white font-[900] leading-tight">
            Implement AI chatbots <br className="hidden md:block" />
            for common queries and
            <br className="hidden md:block" />
            automate ticket creation and prioritization.
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="/AI/Customer-Support-svg.svg"
            alt="Customer Support Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto px-4">
        <h3 className="text-[#3a3a3a] text-3xl font-[600]">Chatbots:</h3>
        <p className="mt-5">
          Enhance your customer support with our AI-powered chatbots, designed
          to efficiently handle common queries and provide instant assistance.
          These chatbots use advanced natural language processing to understand
          and respond to customer inquiries in real-time, offering solutions,
          information, or directing users to the right resources. By automating
          routine interactions, you not only speed up response times but also
          free up your support team to focus on more complex issues, improving
          overall efficiency and customer satisfaction.
        </p>
        <h3 className="text-[#3a3a3a] text-3xl mt-10 font-[600]">
          Ticketing System:
        </h3>
        <p className="mt-5">
          Our automated ticketing system streamlines the support process by
          automatically generating and prioritizing support tickets based on
          customer issues. When a customer reaches out, the system quickly
          categorizes and assigns the ticket to the appropriate support agent,
          ensuring that issues are addressed promptly and efficiently. This
          automation helps manage workload, reduce response times, and ensure
          that high-priority issues receive the attention they need. By
          providing a structured and organized approach to handling customer
          support, you enhance your team’s productivity and deliver a superior
          support experience.
        </p>
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

export default CustomerSupportAutomation;
