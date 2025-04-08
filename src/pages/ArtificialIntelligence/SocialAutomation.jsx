import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";

const EmailAutomation = () => {
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
            Schedule social media content and automate instant customer replies.
            <br className="hidden md:block" />
            Behavior
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2024/08/Social-media-automation-svg.svg"
            alt="Social Media Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto">
        <h3 className="text-[#3a3a3a] text-3xl font-[600]">Scheduled Posts:</h3>
        <p className="mt-5">
          Our Social Media Automation service lets you plan and schedule posts
          across multiple platforms well in advance, ensuring a consistent and
          strategic online presence. By automating your posting schedule, you
          can manage your content calendar more efficiently, maintain regular
          engagement with your audience, and ensure that your messages are timed
          for maximum impact. This approach allows you to focus on creating
          high-quality content while our automation tools handle the logistics,
          saving you time and enhancing your overall social media strategy.
        </p>
        <h3 className="text-[#3a3a3a] text-3xl mt-10 font-[600]">
          Automated Responses:
        </h3>
        <p className="mt-5">
          Enhance your customer service and engagement with our Automated
          Responses feature. This service allows you to set up predefined
          replies to common inquiries and comments, ensuring that your audience
          receives prompt and consistent responses. By automating these
          interactions, you not only improve response times but also provide a
          reliable and efficient support experience, even outside of business
          hours. This helps you maintain a positive brand image, address
          customer needs swiftly, and free up your team to handle more complex
          or personalized interactions.
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

export default EmailAutomation;
