import React from "react";
import { Link } from "react-router";

const services = [
  {
    title: "Software <br/> Development",
    image: "/SoftwareDev/main.png",
    link: "/software-development",
  },
  {
    title: "Web <br/> Development",
    image: "/WebDev/main.png", // Replace with actual image path
    link: "/web-development",
  },
  {
    title: "Mobile App <br/> Development",
    image: "/AppDevelopment/main.png",
    link: "/mobile-app-development",
  },

  //  {
  //     title: "Healthcare <br/> Facilitator",
  //     image: "/home/service-4_1.svg",
  //     link: "/healthcare-facilitator",
  //   },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-6  max-w-6xl mx-auto">
      <div className="md:pl-6 text-center lg:text-left">
        {/* <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
          Explore
        </p> */}
        <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem] font-semibold leading-10 mt-4">
          Services we <br className="hidden lg:block" /> offer
        </h2>
      </div>

      <div className="mt-8  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Link to={service.link} key={index}>
            <div className="bg-white shadow-[0_6px_15px_rgba(0,0,0,0.15)] hover:bg-[#001e8a]/30 transition-all duration-300 rounded p-6 py-8 text-center ">
              <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4 h-52 md:h-42 hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <p
                className="text-lg  font-semibold text-[##262626] leading-snug "
                dangerouslySetInnerHTML={{ __html: service.title }}
              ></p>
            </div>
          </Link>
        ))}
        <a
          href="https://aeontrix.com/"
          target="_blank"
          className="bg-white shadow-[0_6px_15px_rgba(0,0,0,0.15)] hover:bg-[#001e8a]/30 transition-all duration-300 rounded p-6 py-8 text-center "
        >
          <img
            src="/AI/main.png"
            alt="Artificial intelligence & Automation services"
            className="mx-auto mb-4 h-52 md:h-42 hover:scale-110 transition-all duration-300 cursor-pointer"
          />
          <p
            target="_blank"
            className="text-lg  font-semibold text-[##262626] leading-snug "
          >
            Artificial intelligence & Automation services
          </p>
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;
