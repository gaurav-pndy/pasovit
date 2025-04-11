import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";
import SEO from "../../components/SEO";

const WebDevelopment = () => {
  return (
    <div>
      <SEO
        title="Website & Web App Development | Pasovit Technologies"
        description="Build fast, scalable, and engaging websites and web apps tailored to your business needs."
        keywords="web development, web app development, custom websites, Pasovit web solutions"
        url="https://pasovit.com/application-development/web-development"
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
            Bridging Imagination <br className="hidden md:block" />
            and Innovation in Web
            <br className="hidden md:block" />
            Development
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/elementor/thumbs/website-development-qsck4mxk6xlzwpw4k0v6x3pg2xf46g8uj89abxdwo0.png"
            alt="Web Dev Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto px-4">
        <p>
          In today’s digital age, your website is the cornerstone of your online
          presence, essential for engaging customers and driving business
          success. Our website development services cater to a range of needs,
          from robust e-commerce platforms and business websites to specialized
          departmental sites, ensuring comprehensive coverage of your digital
          strategy.
          <br />
          <br />
          For e-commerce, we build scalable platforms with seamless shopping
          experiences, secure payments, and tools to optimize sales. Business
          websites are crafted to reflect your brand and connect with your
          audience, while departmental sites are customized to meet specific
          needs within your organization.
          <br />
          <br />
          We integrate SEO best practices into every project, enhancing
          visibility and driving organic traffic. Our ongoing support ensures
          your site remains up-to-date and effective. Whether you need an
          e-commerce site, a business website, or departmental pages, we deliver
          tailored solutions that grow with your business and help you succeed
          online.
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

export default WebDevelopment;
