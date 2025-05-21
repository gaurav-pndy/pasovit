import { desc, title } from "framer-motion/client";
import React from "react";
import SEO from "../components/SEO";

const items = [
  {
    title: "1. General Refund Eligibility",
    description: `Pasovit Technologies offers refunds under the following conditions: <br/><br/> <ul class='list-disc list-outside ml-6 md:ml-10'>
      <li><b>Digital Products and Services:</b> Refunds are available if the product or service is defective or not as described.</li> <br/>
      <li><b>Subscription Services:</b> Refunds for subscriptions are considered if requested within 14 days of purchase and the service has not been utilized.</li>
      </ul>`,
  },
  {
    title: "2. Non-Refundable Items",
    description: `The following items are non-refundable: 
    <br/><br/>
       <ul class='list-disc list-outside ml-6 md:ml-10'>
      <li><b>Customized Services:</b> Services tailored specifically to the customer's requirements.</li> <br/>
      <li><b>Used Services:</b> Any service that has been accessed or utilized by the customer.</li>
      </ul>`,
  },
  {
    title: "3. Refund Request Process",
    description: `To request a refund:
    <br/><br/>
       <ol class='list-decimal list-outside ml-6 md:ml-10'>
      <li><b>Contact Support:</b> Email our support team at support@pasovit.com within 14 days of purchase.</li> <br/>
      <li><b>Provide Details:</b> Include your order number, the reason for the refund request, and any relevant documentation or evidence.</li><br/>
      <li><b>Await Response:</b> Our team will review your request and respond within 5 business days.</li>
      </ol>`,
  },
  {
    title: "4. Refund Processing",
    description: `<ul class='list-disc list-outside ml-4 md:ml-10'>
      <li><b>Approved Refunds:</b> Once approved, refunds will be processed to the original payment method within 7-10 business days.</li><br/>
      <li><b>Partial Refunds:</b> In cases where services have been partially used, a partial refund may be granted at Pasovit's discretion.</li>
      </ul>`,
  },
  {
    title: "5. Chargebacks and Disputes",
    description: `Initiating a chargeback without first contacting Pasovit for a resolution may result in the suspension of your account. We encourage customers to reach out to our support team to resolve any issues amicably.`,
  },
  {
    title: "6. Policy Updates",
    description: `Pasovit Technologies reserves the right to modify this refund policy at any time. Changes will be posted on our website, and continued use of our services constitutes acceptance of the revised policy.`,
  },
];

const RefundPolicy = () => {
  return (
    <div>
      <SEO
        title="Refund Policy | Pasovit Technologies"
        description="Read the refund policy of Pasovit Technologies' website and services."
        keywords="refund policy, Pasovit refund policy, website policy"
        url="https://pasovit.com/refund-policy"
      />

      <section
        className="relative flex flex-col lg:flex-row items-center justify-between xl:h-[60vh] gap-10 md:gap-20  px-8 md:px-16 xl:px-32 py-16 mb-5"
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
            Refund Policy
          </h1>

          <p className="text-[1.7rem] leading-9 text-white mt-6">
            By purchasing any product or service from Pasovit, you acknowledge
            that you have read, understood, and agreed to be bound by this
            Refund Policy.
            <br />
            <br />
            {/* <br /> */}
            Visit our website at{" "}
            <a
              href="www.pasovit.com"
              target="_blank"
              className="hover:underline text-[#E81F38]"
            >
              www.pasovit.com
            </a>
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20 px-4">
        <p className="text-lg font-[600] text-[#001E8A]">
          Last updated on 19 May 2025
        </p>

        <div className="space-y-10 mt-10">
          {items.map((item, index) => (
            <div key={index}>
              <h2 className="text-lg text-[#001E8A] capitalize font-[500] ">
                {item.title}
              </h2>
              <p
                className="text-[#262626] text-justify mt-5  "
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          ))}
        </div>

        <p className="mt-16  font-[500]">
          This refund policy is designed to provide transparency and fairness to
          our customers while protecting the integrity of our services. For any
          questions or further assistance, please contact our support team at{" "}
          <a
            href="mailto:support@pasovit.com"
            class="text-blue-700 hover:underline cursor-pointer"
            target="_blank"
          >
            support@pasovit.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
