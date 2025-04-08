import React from "react";
import CalButtonWhite from "../components/CalButtonWhite";

const About = () => {
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
            src="https://www.pasovit.com/wp-content/uploads/2022/02/aboutpage-hero-image.svg"
            alt="Pasovit Illustration"
            className="w-64 max-w-md md:w-96 "
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-20 ">
        <div className="md:pl-6 text-center">
          <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            KNOW US
          </p>
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
        className="relative flex flex-col lg:flex-row items-center justify-between xl:h-[65vh] gap-10 md:gap-20  px-8 md:px-16 xl:px-32 py-16 mb-5"
        style={{
          backgroundImage:
            "url('https://www.pasovit.com/wp-content/uploads/2022/02/proposal-background-min.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center left",
        }}
      >
        {/* Left Side Content */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-20">
          <p className="text-white text-xl  tracking-[2px] uppercase">BELIEF</p>
          <h1 className="text-4xl md:text-5xl text-white font-[500] leading-tight mt-4">
            We are what we Believe in
          </h1>

          <p className="text-white text-xl mt-4">
            We are what we believe in. And we believe in Coherence. Be it a
            simple project or a complex product, solutions with coherence work
            the best!
            <br />
            <br /> Always!
          </p>
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/coherence-image.svg"
            alt="Pasovit Illustration"
            className="w-64 max-w-md md:w-[30rem] "
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto my-20 ">
        <div className="md:pl-6 text-center">
          <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            WORK
          </p>
          <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem] font-[500] leading-10 mt-4">
            How we work
          </h2>

          <h5 className="text-xl font-[500] mt-6 md:mt-10 text-[#262626]">
            We understand that every single project is a unique opportunity to
            build something great.
          </h5>
          <p className="text-[#728390] mt-6 ">
            To deliver outstanding software, we work in Agile and Lean. We
            believe in the power of the iterative process – the step-by-step
            design,development, testing, and release of functionalities.
            <br /> <br />
            We follow a data-driven development loop. Data helps us improve
            functionalities and add more value with every sprint.
          </p>
        </div>
      </section>

      <section className="max-w-5xl flex flex-col items-center mx-auto my-20 ">
        <img
          src="https://www.pasovit.com/wp-content/uploads/2022/02/pasovit-teamwork.svg"
          alt=""
          className="w-full h-full"
        />
        <button className="mt-6 bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300">
          Book Free Strategy Call
        </button>
      </section>

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
