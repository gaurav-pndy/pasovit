import React from "react";
import { Link } from "react-router";
import WhyUs from "../components/WhyUs";
import ProcessFlow from "../components/ProcessFlow";
import WantToTalk from "../components/WantToTalk";
import PyramidSection from "../components/PyramidSection";
import ProcessFlow2 from "../components/ProcessFlow2";
import SEO from "../components/SEO";
import CalButtonWhite from "../components/CalButtonWhite";

const services = [
  {
    title: "Individual early diagnosis of diseases",
    description:
      "Comprehensive in-depth examination taking into account risk factors and genetic predisposition to cancer",
    image: "/HealthcareImages/Individual early diagnosis of diseases.png",
    link: "#",
  },
  {
    title: "Pathomorphological examinations at PathoLogica Service",
    description:
      "Confinement without leaving home; revision of both primary conclusions and conclusions in the process of specific antitumor treatment to assess the dynamics; expert review of cyto- and histological preparations; a large team of pathologists, including foreign experts: the drugs will get to the specialist strictly within the framework of his competence and experience; accessibility for residents of any regions of the Russian Federation and foreign countries; Reply within 5-15 days.",

    image:
      "/HealthcareImages/Pathomorphological examinations at PathoLogica Service.png",
    link: "#",
  },
  {
    title: "Molecular Council",
    description:
      "Discussion by experts of the results of comprehensive genomic sequencing (FoundationOne, OncoAtlas, etc.) for the selection of targeted therapy for cancer",
    image: "/HealthcareImages/Molecular Council.png",
    link: "#",
  },
  {
    title: "EXPERT ADVICE",
    description:
      "Face-to-face and remote consultations with surgical oncologists, chemotherapists, radiation therapists",
    image: "/HealthcareImages/EXPERT ADVICE.png",
    link: "#",
  },
  {
    title: "International Tumor Board",
    description:
      "Multidisciplinary team of medical experts. Drawing up an examination and treatment plan",
    image: "/HealthcareImages/International Tumor Board.png",
    link: "#",
  },
  {
    title: "Expert review of CT, MRI, PET-CT",
    description:
      "Revision of test results to obtain a second opinion and clarify the diagnosis",
    image: "/HealthcareImages/Expert review of CT, MRI, PET-CT.png",
    link: "#",
  },
  {
    title: "PET-CT",
    description:
      "A highly accurate method that allows you to determine the localization of tumor foci when the data of traditional methods of radiation diagnostics (ultrasound, X-ray, MRI and CT) are not enough",
    image: "/HealthcareImages/PET-CT.png",

    link: "#",
  },
  {
    title: "Drug therapy of malignant neoplasms",
    description: "Chemotherapy. Immunotherapy. Targeted therapy",
    image: "/HealthcareImages/Drug therapy of malignant neoplasms.png",
    link: "#",
  },
  {
    title: "Oncosurgery",
    description:
      "Gynecologic oncology. Head and neck tumors. Breast cancer. Skin tumors and melanoma. Oncoplastic surgery",
    image: "/HealthcareImages/Oncosurgery.png",

    link: "#",
  },
  {
    title: "Medical support",
    description:
      "During the examination. Between courses of chemotherapy. After discharge from the hospital. The supervising doctor is always in touch!",
    image: "/HealthcareImages/Medical support.png",
    link: "#",
  },
  {
    title: "Radiotherapy",
    description:
      "Radiotherapy. Chemoradiotherapy. Stereotactic radiation therapy. Cyberknife. Gamma Knife",
    image: "/HealthcareImages/Radiotherapy.png",
    link: "#",
  },
  {
    title: "Traumatology and orthopedics",
    description:
      "Face-to-face and remote consultations. High-tech surgical treatment",
    image: "/HealthcareImages/Traumatology and orthopedics.png",
    link: "#",
  },
  {
    title: "Venous Port System Placement",
    description: "Installation of a venous port system for chemotherapy",
    image: "/HealthcareImages/Venous Port System Placement.png",
    link: "#",
  },
];

const Healthcare = () => {
  return (
    <div>
      <SEO
        title="Healthcare Facilitator Services | Pasovit Technologies"
        description="Connecting patients and providers with seamless healthcare facilitator services powered by technology."
        keywords="healthcare facilitator, medical services, patient support, Pasovit health"
        url="https://pasovit.com/healthcare-facilitator"
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
            Elevate
            <span className="text-[#E81F38]"> Your Health</span> with{" "}
            <br className="hidden md:block" />
            our expertise<span className="text-[#E81F38]">.</span>
          </h1>

          {/* <button className="mt-6 bg-white text-[#001e8a]  rounded font-medium hover:bg-[#001e8a] border border-[#001e8a] hover:text-white hover:border-white cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300">
            Get a proposal
          </button> */}
          <CalButtonWhite buttonText="Get a proposal" />
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/HealthcareImages/Health-professional-team-amico-qou8bsot106pwwwum35xywusfyegolro292a620hpc.png"
            alt="Rocket Illustration"
            className="w-64 max-w-md md:w-96 "
          />
        </div>
      </section>

      <section className="py-16 px-6  max-w-6xl mx-auto">
        <div className="md:pl-4 text-center lg:text-left">
          {/* <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            healthcare{" "}
          </p> */}
          <h2 className="text-3xl md:text-[2.5rem] tracking-wide font-[500] leading-10 text-[#262626] mt-4">
            Healthcare services <br className="hidden lg:block" /> we provide
          </h2>
        </div>

        <div className="mt-12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link to={service.link}>
              <div
                key={index}
                className="bg-[#f7f7f9]  hover:bg-[#001e8a]/30 transition-all duration-300 rounded p-6 py-8 text-center h-full"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto mb-4 h-30 hover:scale-110 transition-all duration-300 cursor-pointer"
                />
                <h4
                  href={service.link}
                  className="  font-[450]  uppercase text-[#262626] leading-snug "
                >
                  {service.title}
                </h4>
                <p className="text-[#001E8A] mt-2 text-justify">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <img
        src="/divider-line-min-2048x35.png"
        alt=""
        className="h-full max-w-6xl md:my-5 w-full mx-auto"
      />

      <WhyUs />
      <PyramidSection />
      <section className="max-w-6xl mx-auto mt-20 mb-4">
        <div className="md:pl-6 text-center">
          {/* <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            A READ
          </p> */}
          <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem] font-[500] leading-10 mt-4 px-4">
            Our Customer philosophy
          </h2>
          <p className="text-[#728390] mt-6 md:mt-10 px-4">
            There is no better way to understand someone than showing empathy.
            We step right into your shoes and look into the problem right from
            your perspective. This makes us to better understand what you want
            without you asking for it. That’s our core philosophy towards
            understanding our customers.
          </p>
        </div>
      </section>
      <img
        src="/divider-line-min-2048x35.png"
        alt=""
        className="h-full max-w-6xl md:mb-5  mt-10  md:mt-20 w-full mx-auto"
      />
      <WantToTalk />
    </div>
  );
};

export default Healthcare;
