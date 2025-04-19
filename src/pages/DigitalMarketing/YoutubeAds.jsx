import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";
import SEO from "../../components/SEO";

const YoutubeAds = () => {
  return (
    <div>
      <SEO
        title="YouTube Ads Services | Pasovit Technologies"
        description="Get noticed with compelling video ads on YouTube that convert viewers into customers."
        keywords="YouTube ads, video marketing, video advertising, digital video ads, Pasovit YouTube marketing"
        url="https://pasovit.com/digital-marketing/youtube-ads-service"
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
            Crafting impactful video <br className="hidden md:block" />
            ads that captivate and <br className="hidden md:block" /> extend
            your branch's reach.
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="/DigitalMarketing/youtube-ads.svg"
            alt="Ads Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto px-4">
        <p>
          Expand your brand’s reach and engage with a global audience through
          our YouTube Ads service. Video advertising on YouTube offers a dynamic
          way to connect with potential customers and showcase your products or
          services. We handle every aspect of your YouTube advertising strategy,
          from concept development and video production to targeting and ad
          placement. Our team creates engaging, high-quality video ads that
          capture viewers’ attention and convey your message effectively. We use
          YouTube’s advanced targeting options to ensure your ads are shown to
          the most relevant audience, based on factors such as demographics,
          interests, and viewing behavior. Additionally, we monitor campaign
          performance and make data-driven adjustments to optimize results,
          helping you achieve greater brand visibility and engagement.
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

export default YoutubeAds;
