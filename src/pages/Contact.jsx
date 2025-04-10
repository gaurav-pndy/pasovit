import React from "react";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact Us | Pasovit Technologies"
        description="Get in touch with Pasovit Technologies for project inquiries, support, or collaboration opportunities."
        keywords="Contact Pasovit, get in touch, Pasovit Technologies contact"
        url="https://pasovit.com/contact"
      />
      <section
        className="relative flex flex-col lg:flex-row items-center justify-between xl:h-[60vh] gap-10 md:gap-20  px-8 md:px-16 xl:px-32 py-16 mb-5"
        style={{
          backgroundImage:
            "url('https://www.pasovit.com/wp-content/uploads/2022/02/contact-header-bg-min.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center left",
        }}
      >
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-center lg:pl-20 lg:text-left">
          <h1 className="text-4xl md:text-5xl text-white font-[900] leading-tight">
            Contact Us
          </h1>

          <p className="text-white text-2xl mt-6">
            For general queries, sales and partnerships please drop a mail
            anytime ans we will reach you.
          </p>

          <button className="mt-4 bg-white text-[#001e8a]  rounded font-medium hover:bg-[#001e8a] border border-[#001e8a] hover:text-white hover:border-white cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300">
            Mail Us
          </button>
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/contact.svg"
            alt="Contact Illustration"
            className="w-64 max-w-md md:w-90 "
          />
        </div>
      </section>
      <section className="relative flex flex-col lg:flex-row items-center justify-between xl:h-[60vh] gap-10 md:gap-20  px-8 md:px-16 xl:px-32 py-16 my-20">
        <div className="md:pl-20 text-center lg:text-left">
          {/* <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            CONSULTATION
          </p> */}
          <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem] font-[500] leading-10 mt-4">
            Let's catch the initial{" "}
            <span className="text-[#E81F38]">Spark!</span>
          </h2>
          <button className="bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300 mt-6 md:mt-10">
            Book Free Strategy Call
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/contact-P.svg"
            alt="Pasovit Illustration"
            className="w-64 max-w-md md:w-96 "
          />
        </div>
      </section>
      <section
        className="relative  .contact-places-bg  xl:h-[70vh]   px-8 md:px-16 xl:px-48 py-16 mb-5"
        style={{
          backgroundImage:
            "url('https://www.pasovit.com/wp-content/uploads/2022/02/address-bg-min.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "top right",
        }}
      >
        {/* Left Side Content */}
        {/* <p className="text-white text-xl  tracking-[2px] uppercase">SPOT US</p> */}
        <h1 className="text-3xl tracking-wide md:text-[2.5rem] font-[500] leading-10 text-white  mt-4">
          Our offices around <br className="hidden md:block" /> the world
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 text-white lg:grid-cols-4 gap-10 mt-12 ">
          <div className="flex flex-col gap-4">
            <div className="h-24 ">
              <img src="/chennai.svg" alt="" className="h-full  " />
            </div>

            <h5 className="text-[1.4rem] font-[500] ">CHENNAI - IN</h5>
            <p>
              715 A, 7th Floor, Spencer Plaza, Suite No. 718, Mount Road, Anna
              Salai, Chennai – 600 002, India
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-24">
              <img src="/delhi.svg" alt="" className="h-full " />
            </div>{" "}
            <h5 className="text-[1.4rem] font-[500] ">DELHI - IN</h5>
            <p>
              B - 1, Greater Kailash II, Third Floor, New Delhi - 110 048,{" "}
              <br /> India
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-24">
              <img src="/moscow.svg" alt="" className="h-full " />
            </div>{" "}
            <h5 className="text-[1.4rem] font-[500] ">MOSCOW - RU</h5>
            <p>
              606C, 1C1, Volokolomskoe Shosse, Moscow -125 080, Russian
              Federation
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="h-24">
              <img src="/airdrie.svg" alt="" className="h-full " />
            </div>{" "}
            <h5 className="text-[1.4rem] font-[500] ">AIRDRIE - UK</h5>
            <p>5 Victoria Place, Airdrie, Scotland, United Kingdom - ML6 9BU</p>
          </div>
        </div>

        {/* Right Side Illustration */}
      </section>{" "}
      <section
        className="flex max-w-6xl flex-col items-center h-56 md:h-80 xl:h-[50vh]  justify-center mx-auto mt-28"
        style={{
          backgroundImage:
            "url(https://www.pasovit.com/wp-content/uploads/2022/02/map-bg-min.png)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <h2 className="text-3xl md:text-5xl tracking-wide font-[900] md:leading-16 text-[#262626] text-center ">
          Let's transform
          <span className="text-[#E81F38]"> Your Business</span>{" "}
          <br className="hidden md:block" /> for a change that matters
        </h2>

        <a href="mailto:contact@pasovit.com" target="_blank">
          <button className="bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300 mt-6 md:mt-14">
            Book Free Strategy Call
          </button>
        </a>
      </section>
    </div>
  );
};

export default Contact;
