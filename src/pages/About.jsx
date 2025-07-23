import React from "react";
import CalButtonWhite from "../components/CalButtonWhite";
import SEO from "../components/SEO";

const About = () => {
  return (
    <div>
      <SEO
        title="About | Pasovit Technologies"
        description="Learn about Pasovit Technologies – our journey, vision, and the people behind our success."
        keywords="About Pasovit, company info, web development team, Pasovit Technologies"
        url="https://pasovit.com/about"
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
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl text-white font-[900] leading-tight">
            About Us
          </h1>

          <p className="text-white text-2xl mt-6">
            At Pasovit, we are committed to provide coherent solutions, make our
            clients sustain and be among the elite in their domain through
            digital best practices.
          </p>

          <CalButtonWhite />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/about/aboutpage-hero-image.svg"
            alt="Pasovit Illustration"
            className="w-64 max-w-md md:w-96 "
          />
        </div>
      </section>
      <section className="max-w-6xl mx-auto my-20 px-4">
        <div className="md:pl-6 text-center">
          {/* <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            KNOW US
          </p> */}
          <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem] font-[500] leading-10 mt-4">
            More than just a Software house
          </h2>
          <p className="text-[#728390] mt-6 text-justify md:mt-10">
            An ambitious and nerdish bunch, we’re focused on innovation and
            continuous improvement. Our team includes consultants, product
            designers, software developers, QA testers, product managers, and
            product owners. We work together building high-quality software on
            demand. Headquartered in Chennai, India, we also have representative
            offices in Delhi – IN, Moscow – RU and Airdrie – UK, where we answer
            all your questions and support your software needs every day. <br />{" "}
            <br />
            Pasovit is a place where{" "}
            <span className="text-black">passionate professionals</span> align
            your business goals with the latest tech solutions. We are young,
            daring, and we want to change the world. How? By pairing up our most
            brilliant talents with our most demanding clients. Meet the team
            behind themost customer-oriented software company you’ve ever worked
            with – and get on board!
          </p>
        </div>
      </section>
      <section
        className="relative  .contact-places-bg  xl:h-[70vh]   px-8 md:px-16 xl:px-48 py-16 mb-5"
        style={{
          backgroundImage: "url('/contact/address-bg-min.png')",
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
      <section className="bg-white  py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col ">
          {/* Left Content */}
          <div>
            <div className="text-center  lg:pl-4">
              {/* <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
              PROCESS FLOW
            </p> */}
              <h2 className="text-3xl sm:text-[2.5rem] tracking-wide font-[500] text-[#262626] mt-4 mb-16">
                How we work ?
              </h2>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full hidden md:block md:px-8">
            <img
              src="/common/process-flow.png" // replace with actual image path
              alt="Why Choose Us Illustration"
              className="h-full max-w-6xl  w-full mx-auto"
            />
          </div>
          <div className="w-full md:hidden px-4">
            <img
              src="/common/progress-work.svg" // replace with actual image path
              alt="Why Choose Us Illustration"
              className="h-full max-w-6xl  w-full mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="max-w-5xl flex flex-col items-center mx-auto my-20 px-4">
        <img
          src="/about/pasovit-teamwork.svg"
          alt=""
          className="w-full h-full"
        />
        <button className="mt-6 bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300">
          Book Free Strategy Call
        </button>
      </section>
      <section
        className="flex max-w-6xl flex-col items-center h-56 md:h-80 xl:h-[50vh]  justify-center mx-auto mt-28 px-4"
        style={{
          backgroundImage: "url(/common/map-bg-min.png)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <h2 className="text-3xl md:text-5xl tracking-wide font-[900] leading-10 text-[#262626] text-center ">
          Want to
          <span className="text-[#E81F38]"> Join</span> Pasovit?
        </h2>
        <p className="text-[#262626] text-center mt-6 md:mt-8">
          At Pasovit, we help innovative companies, entrepreneurs and futurists
          create unforgettable digital products and services. <br />
          <br />
          Join us and help us to create wonderful products which touch people’s
          life. <br />
          Kindly send us a mail with your name, number and your story and our
          team will respond to you.
        </p>
        <a href="mailto:contact@pasovit.com" target="_blank">
          <button className="bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300 mt-6 md:mt-10">
            Mail Us
          </button>
        </a>
      </section>
    </div>
  );
};

export default About;
