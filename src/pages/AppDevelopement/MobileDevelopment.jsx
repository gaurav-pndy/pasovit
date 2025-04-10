import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";
import SEO from "../../components/SEO";

const MobileDevelopment = () => {
  return (
    <div>
      <SEO
        title="Mobile App Development | Pasovit Technologies"
        description="Launch powerful Android and cross-platform mobile apps designed for performance and user engagement."
        keywords="mobile app development, Android app, iOS app, cross-platform apps, Pasovit mobile solutions"
        url="https://pasovit.com/application-development/mobile-app-development"
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
            Transforming Ideas into <br className="hidden md:block" />
            Impactful <span className="text-[#E81F38]">Mobile </span>
            <br className="hidden md:block" />
            Experiences
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/elementor/thumbs/app-devlopment-qscof5mfoh4wh1g09tdbt3zbl7tbj7ocg10sfga1sw.png"
            alt="Rocket Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto">
        <p>
          In today’s mobile-driven world, a powerful app is essential for
          engaging your audience and driving business growth. Our mobile app
          development services deliver custom iOS and Android apps that are
          visually stunning, functionally robust, and tailored to your needs.
          <br />
          <br />
          We prioritize user experience, performance, and security, ensuring
          your app runs flawlessly across devices. From concept to launch, we
          integrate the latest technologies and best practices, including app
          store optimization (ASO), to boost visibility and engagement. With our
          ongoing support, your app will stay competitive and aligned with your
          business goals.
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
          <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem] font-[500] leading-10 mt-4">
            Our Customer philosophy
          </h2>
          <p className="text-[#728390] mt-6 md:mt-10">
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

export default MobileDevelopment;
