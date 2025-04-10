import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";
import SEO from "../../components/SEO";

const SEOService = () => {
  return (
    <div>
      <SEO
        title="SEO Services | Pasovit Technologies"
        description="Improve your website's visibility, ranking, and traffic with our expert SEO strategies."
        keywords="SEO services, search engine optimization, keyword ranking, Pasovit SEO, organic traffic"
        url="https://pasovit.com/digital-marketing/seo-service"
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
            Boosting your online <br className="hidden md:block" />
            visibility and driving organic traffic through optimized search
            engine rankings.
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2024/08/Search-Engine-svg.png"
            alt="SEO Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto">
        <p>
          Our SEO service is dedicated to improving your website’s visibility
          and search engine ranking through a strategic, data-driven approach.
          We begin with a comprehensive audit of your current SEO performance,
          identifying areas for improvement and opportunities for growth. Our
          team conducts extensive keyword research to target relevant search
          terms and optimize your website’s content and structure. We focus on
          both on-page and off-page SEO, including optimizing meta tags,
          headings, and images, as well as building high-quality backlinks to
          enhance your site’s authority. Additionally, we address technical SEO
          aspects such as site speed, mobile-friendliness, and crawlability to
          ensure a seamless user experience. By implementing best practices and
          staying updated with the latest search engine algorithms, we help you
          achieve higher rankings, attract organic traffic, and improve your
          online presence.
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

export default SEOService;
