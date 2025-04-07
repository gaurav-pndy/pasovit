import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";

const FBInstaAds = () => {
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
        <div className="lg:w-[60%] text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl text-white font-[900] leading-tight">
            Targeted advertising <br className="hidden md:block" />
            on FB & Instagram for
            <br className="hidden md:block" />
            Maximum Impact
          </h1>

          <button className="mt-6 bg-white text-[#001e8a]  rounded font-medium hover:bg-[#001e8a] border border-[#001e8a] hover:text-white hover:border-white cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300">
            Book a Strategy Call
          </button>
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2024/08/Facebook-Ad-svg.png"
            alt="Ads Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto">
        <p>
          Harness the power of social media with our Facebook and Instagram Ads
          service, designed to deliver highly targeted advertising campaigns
          that maximize your reach and engagement. Our approach begins with
          understanding your marketing objectives and identifying your ideal
          audience. We then craft compelling ad copy and design eye-catching
          visuals that capture attention and drive action. Our team manages all
          aspects of the campaign, including audience targeting, ad placement,
          and budget optimization, to ensure your ads reach the right people at
          the right time. We also continuously monitor and analyze campaign
          performance, making data-driven adjustments to improve results and
          achieve your marketing goals. Whether you’re looking to increase brand
          awareness, drive website traffic, or generate leads, our social media
          ads are tailored to deliver measurable impact.
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

export default FBInstaAds;
