import React from "react";
import { Link } from "react-router";

const services = [
  {
    title: "Application <br/> Development",
    image: "https://www.pasovit.com/wp-content/uploads/2022/02/service-1_1.svg", // Replace with actual image path
    link: "/application-development",
  },
  {
    title: "Artificial intelligence & Automation services",
    image: "https://www.pasovit.com/wp-content/uploads/2022/02/service-2_1.svg", // Replace with actual image path
    link: "/artificial-intelligence",
  },
  {
    title: "Digital <br/> Marketing",
    image: "https://www.pasovit.com/wp-content/uploads/2022/02/service-3_1.svg", // Replace with actual image path
    link: "#",
  },
  {
    title: "Healthcare <br/> Facilitator",
    image: "https://www.pasovit.com/wp-content/uploads/2022/02/service-4_1.svg", // Replace with actual image path
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-6  max-w-6xl mx-auto">
      <div className="md:pl-6 text-center lg:text-left">
        <p className="text-[#E81F38] text-sm  tracking-[2px] uppercase">
          Explore
        </p>
        <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem] font-[500] leading-10 mt-4">
          Services we <br className="hidden lg:block" /> offer
        </h2>
      </div>

      <div className="mt-8  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Link to={service.link}>
            <div
              key={index}
              className="bg-white shadow-[0_6px_15px_rgba(0,0,0,0.15)] hover:bg-[#001e8a]/30 transition-all duration-300 rounded p-6 py-8 text-center "
            >
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4 h-52 md:h-42 hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <a
                href={service.link}
                className="text-lg underline font-semibold text-[##262626] leading-snug "
                dangerouslySetInnerHTML={{ __html: service.title }}
              ></a>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
