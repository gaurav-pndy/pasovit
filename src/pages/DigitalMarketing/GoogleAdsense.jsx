import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";
import SEO from "../../components/SEO";

const GoogleAdsense = () => {
  return (
    <div>
      <SEO
        title="Google Ads Services | Pasovit Technologies"
        description="Boost your online visibility and drive sales with data-driven Google Ads campaigns."
        keywords="Google ads, PPC marketing, search ads, paid traffic, Pasovit Google advertising"
        url="https://pasovit.com/digital-marketing/google-ads-service"
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
            Drive targeted traffic <br className="hidden md:block" />
            and maximize visibility
            <br className="hidden md:block" />
            for the right audience
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2024/08/Google-Ad-svg.png"
            alt="Adsense Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto">
        <p>
          Our Google Ads service is designed to enhance your online visibility
          and attract high-quality traffic to your website. We start by
          conducting thorough keyword research to identify the search terms most
          relevant to your business. Based on this research, we create
          compelling ad copy and design optimized landing pages that align with
          your advertising goals. Our team manages all aspects of your Google
          Ads campaigns, including bid management, ad extensions, and
          performance tracking, to ensure your ads are seen by potential
          customers who are actively searching for your products or services. By
          utilizing advanced targeting options and continuously refining your
          campaigns based on performance data, we help you achieve a high return
          on investment and drive meaningful results for your business.
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

export default GoogleAdsense;
