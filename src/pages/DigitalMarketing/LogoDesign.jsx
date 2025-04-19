import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import SEO from "../../components/SEO";

const LogoDesign = () => {
  return (
    <div>
      <SEO
        title="Logo Design Services | Pasovit Technologies"
        description="Create memorable brand identities with our professional and creative logo design services."
        keywords="logo design, brand identity, custom logo, graphic design, Pasovit branding"
        url="https://pasovit.com/digital-marketing/logo-design-service"
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
            Creating unique and <br className="hidden md:block" />
            memorable identities that
            <br className="hidden md:block" />
            capture your brand's <br className="hidden md:block" />
            essence
          </h1>

          <button className="mt-6 bg-white text-[#001e8a]  rounded font-medium hover:bg-[#001e8a] border border-[#001e8a] hover:text-white hover:border-white cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300">
            Get a proposal
          </button>
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="/DigitalMarketing/logo-design-svg.png"
            alt="Logo Design Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto px-4">
        <p>
          Our Logo Design service is committed to developing logos that
          encapsulate your brand’s unique identity and values. We understand
          that a logo is more than just a symbol—it’s a visual representation of
          your business that leaves a lasting impression. Our design process
          begins with in-depth consultations to understand your brand’s mission,
          vision, and target audience. We then create several design concepts,
          considering aspects such as color psychology, typography, and
          iconography to ensure your logo stands out in a crowded marketplace.
          By focusing on originality and relevance, we ensure that your logo not
          only looks professional but also resonates with your audience, helping
          to build brand recognition and loyalty.
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

export default LogoDesign;
