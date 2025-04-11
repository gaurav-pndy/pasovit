import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";
import SEO from "../../components/SEO";

const EmailMarketing = () => {
  return (
    <div>
      <SEO
        title="Email Marketing Services | Pasovit Technologies"
        description="Drive customer engagement and retention with targeted and personalized email campaigns."
        keywords="email marketing, email campaigns, lead nurturing, Pasovit marketing, email automation"
        url="https://pasovit.com/digital-marketing/email-marketing-service"
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
        <div className="lg:w-[60%] text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl text-white font-[900] leading-tight">
            Designing personalized <br className="hidden md:block" />
            campaigns that deeply engage <br className="hidden md:block" /> your
            audience and deliver <br className="hidden md:block" /> impactful
            results.
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2024/08/Email-marketing-svg.png"
            alt="Marketing Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto px-4">
        <p>
          Our E-Mail Marketing service is designed to help you connect with your
          audience through personalized, targeted email campaigns that drive
          engagement and conversions. We start by segmenting your email list
          based on customer behavior, preferences, and demographics to ensure
          that your messages are highly relevant. Our team designs visually
          appealing email templates and crafts compelling content that resonates
          with each segment of your audience. We handle all aspects of your
          email campaigns, including scheduling, automation, and performance
          tracking, to deliver timely and impactful messages. From nurturing
          leads and driving sales to re-engaging inactive subscribers, our email
          marketing strategies are tailored to meet your specific goals. By
          analyzing campaign metrics and making data-driven adjustments, we
          continuously optimize your email marketing efforts to achieve the best
          possible results.
        </p>
      </section>

      <img
        src="https://www.pasovit.com/wp-content/uploads/2022/02/divider-line-min-2048x35.png"
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

export default EmailMarketing;
