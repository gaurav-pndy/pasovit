import React from "react";
import { Link } from "react-router";
import WhyUs from "../components/WhyUs";
import ProcessFlow from "../components/ProcessFlow";
import WantToTalk from "../components/WantToTalk";
import PyramidSection from "../components/PyramidSection";
import ProcessFlow2 from "../components/ProcessFlow2";

const services = [
  {
    title: "Individual early diagnosis of diseases",
    description:
      "Comprehensive in-depth examination taking into account risk factors and genetic predisposition to cancer",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/Individual-early-diagnosis-of-diseases.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Pathomorphological examinations at PathoLogica Service",
    description:
      "Confinement without leaving home; revision of both primary conclusions and conclusions in the process of specific antitumor treatment to assess the dynamics; expert review of cyto- and histological preparations; a large team of pathologists, including foreign experts: the drugs will get to the specialist strictly within the framework of his competence and experience; accessibility for residents of any regions of the Russian Federation and foreign countries; Reply within 5-15 days.",

    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/Pathomorphological-examinations-at-PathoLogica-Service.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Molecular Council",
    description:
      "Discussion by experts of the results of comprehensive genomic sequencing (FoundationOne, OncoAtlas, etc.) for the selection of targeted therapy for cancer",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/Molecular-Council-1.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "EXPERT ADVICE",
    description:
      "Face-to-face and remote consultations with surgical oncologists, chemotherapists, radiation therapists",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/Expert-Advice.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "International Tumor Board",
    description:
      "Multidisciplinary team of medical experts. Drawing up an examination and treatment plan",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/International-Tumor-Board.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Expert review of CT, MRI, PET-CT",
    description:
      "Revision of test results to obtain a second opinion and clarify the diagnosis",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/Expert-review-of-CT-MRI-PET-CT.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "PET-CT",
    description:
      "A highly accurate method that allows you to determine the localization of tumor foci when the data of traditional methods of radiation diagnostics (ultrasound, X-ray, MRI and CT) are not enough",
    image: "https://www.pasovit.com/wp-content/uploads/2024/05/PET-CT.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Drug therapy of malignant neoplasms",
    description: "Chemotherapy. Immunotherapy. Targeted therapy",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/Drug-therapy-of-malignant-neoplasms.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Oncosurgery",
    description:
      "Gynecologic oncology. Head and neck tumors. Breast cancer. Skin tumors and melanoma. Oncoplastic surgery",
    image: "https://www.pasovit.com/wp-content/uploads/2024/05/Oncosurgery.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Medical support",
    description:
      "During the examination. Between courses of chemotherapy. After discharge from the hospital. The supervising doctor is always in touch!",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/Medical-support.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Radiotherapy",
    description:
      "Radiotherapy. Chemoradiotherapy. Stereotactic radiation therapy. Cyberknife. Gamma Knife",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/Radiotherapy.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Venous Port System Placement",
    description: "Installation of a venous port system for chemotherapy",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/Venous-Port-System-Placement.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Expert review of CT, MRI, PET-CT",
    description:
      "Revision of test results to obtain a second opinion and clarify the diagnosis",
    image:
      "https://www.pasovit.com/wp-content/uploads/2024/05/Expert-review-of-CT-MRI-PET-CT.png", // Replace with actual image path
    link: "#",
  },
];

const Healthcare = () => {
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
            Elevate
            <span className="text-[#E81F38]"> Your Health</span> with{" "}
            <br className="hidden md:block" />
            our expertise<span className="text-[#E81F38]">.</span>
          </h1>

          <button className="mt-6 bg-white text-[#001e8a]  rounded font-medium hover:bg-[#001e8a] border border-[#001e8a] hover:text-white hover:border-white cursor-pointer px-6 py-2.5  md:text-lg shadow-md  transition-all duration-300">
            Get a proposal
          </button>
        </div>

        {/* Right Side Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.pasovit.com/wp-content/uploads/elementor/thumbs/Health-professional-team-amico-qou8bsot106pwwwum35xywusfyegolro292a620hpc.png"
            alt="Rocket Illustration"
            className="w-64 max-w-md md:w-96 "
          />
        </div>
      </section>

      <section className="py-16 px-6  max-w-6xl mx-auto">
        <div className="md:pl-4 text-center lg:text-left">
          <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
            healthcare{" "}
          </p>
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
        src="https://www.pasovit.com/wp-content/uploads/2022/02/divider-line-min-2048x35.png"
        alt=""
        className="h-full max-w-6xl md:my-5 w-full mx-auto"
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
      <img
        src="https://www.pasovit.com/wp-content/uploads/2022/02/divider-line-min-2048x35.png"
        alt=""
        className="h-full max-w-6xl md:mb-5  mt-10  md:mt-20 w-full mx-auto"
      />
      <WantToTalk />
    </div>
  );
};

export default Healthcare;
