import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";
import SEO from "../../components/SEO";

const CRMAutomation = () => {
  return (
    <div>
      <SEO
        title="CRM Automation | Pasovit Technologies"
        description="Streamline your sales and customer relationships with AI-powered CRM automation tools."
        keywords="CRM automation, customer relationship management, AI CRM, sales automation, Pasovit AI"
        url="https://pasovit.com/artificial-intelligence/crm-automation"
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
            Automate the Process of <br className="hidden md:block" />
            Capturing and Nurturing
            <br className="hidden md:block" />
            Leads
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="/AI/CRM-automation-svg.svg"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto px-4">
        <h3 className="text-[#3a3a3a] text-3xl font-[600]">Lead Management:</h3>
        <p className="mt-5">
          Our CRM Automation service streamlines lead management by automating
          the entire process from capture to conversion. Automatically collect
          and organize leads from various sources, ensuring that no opportunity
          is missed. Our system then nurtures these leads through personalized
          follow-ups, automated responses, and targeted communications based on
          their behavior and engagement. This not only saves time but also
          ensures a consistent, effective approach to converting prospects into
          customers, allowing your sales team to focus on high-value
          interactions.
        </p>
        <h3 className="text-[#3a3a3a] text-3xl mt-10 font-[600]">
          Customer Segmentation:
        </h3>
        <p className="mt-5">
          Effective customer segmentation is crucial for personalized marketing
          and targeted sales efforts. Our CRM Automation service enhances this
          by automatically segmenting customers based on their interactions,
          behavior, and data. This intelligent segmentation enables you to
          tailor your communications, offers, and strategies to specific
          customer groups, improving relevance and engagement. By leveraging
          detailed analytics and automated processes, you can create highly
          targeted campaigns that resonate with each segment, ultimately driving
          better results and fostering stronger customer relationships.
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

export default CRMAutomation;
