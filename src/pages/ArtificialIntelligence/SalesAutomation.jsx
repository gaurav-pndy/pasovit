import React from "react";
import WhyUs from "../../components/WhyUs";
import PyramidSection from "../../components/PyramidSection";
import ProcessFlow2 from "../../components/ProcessFlow2";
import WantToTalk from "../../components/WantToTalk";
import CalButtonWhite from "../../components/CalButtonWhite";

const SalesAutomation = () => {
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
            Automate reminders, <br className="hidden md:block" />
            confirmations, shipping
            <br className="hidden md:block" />
            updates, and follow-ups <br className="hidden md:block" />
            to recover lost sales.
          </h1>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-[40%] flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2024/08/Sales-automation-svg.svg"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="text-[#4b4f58] max-w-5xl mt-20 mx-auto">
        <h3 className="text-[#3a3a3a] text-3xl font-[600]">
          Cart Abandonment:
        </h3>
        <p className="mt-5">
          Our Cart Abandonment solution addresses one of the most common
          challenges in e-commerce by automatically sending reminders to
          customers who have abandoned their shopping carts. These tailored
          follow-up emails or notifications encourage customers to return and
          complete their purchase, often including incentives such as discounts
          or limited-time offers. By automating this process, you recover
          potentially lost sales and boost your conversion rates without manual
          intervention, ensuring that abandoned carts turn into completed
          transactions.
        </p>
        <h3 className="text-[#3a3a3a] text-3xl mt-10 font-[600]">
          Order Processing:
        </h3>
        <p className="mt-5">
          Streamline your order management with our comprehensive Order
          Processing automation. Our system automatically handles order
          confirmations, updates customers on shipping status, and sends
          post-purchase follow-ups, ensuring that every step of the buying
          process is smooth and efficient. This not only enhances the customer
          experience by keeping them informed but also reduces the
          administrative burden on your team. By automating these critical
          tasks, you ensure timely, accurate communication and foster greater
          customer satisfaction and loyalty.
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

export default SalesAutomation;
