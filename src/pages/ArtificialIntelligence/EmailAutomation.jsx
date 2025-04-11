import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";
import SEO from "../../components/SEO";

const EmailAutomation = () => {
  return (
    <div>
      <SEO
        title="Email Marketing Automation | Pasovit Technologies"
        description="Automate personalized email campaigns that convert, using intelligent email marketing solutions."
        keywords="email automation, email marketing, AI email campaigns, Pasovit automation"
        url="https://pasovit.com/artificial-intelligence/email-marketing-automation"
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
            Personalized Outreach <br className="hidden md:block" />
            based on Customer
            <br className="hidden md:block" />
            Behavior
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2024/08/email-automation-svg.svg"
            alt="Email Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto px-4">
        <h3 className="text-[#3a3a3a] text-3xl font-[600]">
          Automated Campaigns:
        </h3>
        <p className="mt-5">
          Our Automated Campaigns service allows you to connect with your
          customers at the right moment, delivering tailored emails based on
          their behavior, preferences, and interactions with your brand. Whether
          a customer abandons a cart, browses specific products, or engages with
          particular content, our automation tools trigger relevant emails that
          resonate with their interests. By scheduling and sending these emails
          automatically, you maintain a consistent, personalized communication
          strategy that strengthens relationships, boosts engagement, and drives
          conversions—without the manual workload.
        </p>
        <h3 className="text-[#3a3a3a] text-3xl mt-10 font-[600]">
          Drip Campaigns:
        </h3>
        <p className="mt-5">
          Our Drip Campaigns service is designed to nurture leads over time by
          sending a carefully crafted series of emails that guide them through
          the sales funnel. Each email in the sequence is strategically timed
          and tailored to move prospects closer to a purchase decision,
          addressing their needs and overcoming objections along the way. From
          initial awareness to post-purchase follow-up, our drip campaigns
          ensure that your leads receive the right information at the right
          time, helping to build trust, enhance engagement, and ultimately,
          increase conversion rates.
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

export default EmailAutomation;
