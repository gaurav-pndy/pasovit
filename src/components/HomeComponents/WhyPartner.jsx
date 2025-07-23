import React from "react";

const whyPartnerData = [
  {
    title: "Expert Team",
    description:
      "Our skilled developers, designers, and consultants bring deep expertise and are dedicated to delivering impactful results.",
    icon: "/icons/expert-team.svg",
  },
  {
    title: "Collaborative Approach",
    description:
      "We work closely with you, ensuring clear communication and building long-term, reliable partnerships.",
    icon: "/icons/collaborative-approach.svg",
  },
  {
    title: "Agile Process",
    description:
      "Our flexible development approach allows for faster delivery, continuous feedback, and easy adjustments as your needs evolve.",
    icon: "/icons/agile-process.svg",
  },
  {
    title: "Quality Assurance",
    description:
      "Every solution undergoes rigorous testing to ensure security, stability, and high performance.",
    icon: "/icons/quality-assurance.svg",
  },
];

const WhyPartner = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="md:pl-6 text-center lg:text-left mb-10">
        <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem]  font-semibold leading-10">
          Why Partner with <br className="hidden lg:block" /> Pasovit?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {whyPartnerData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-[0_6px_15px_rgba(0,0,0,0.15)]  transition-all duration-300 rounded p-6 py-8 text-center"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="mx-auto mb-4 h-24 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-[#262626] mb-2">
              {item.title}
            </h3>
            <p className=" text-[#555]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPartner;
