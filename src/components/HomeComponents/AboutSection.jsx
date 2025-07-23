export default function AboutSection() {
  return (
    <section
      className="relative flex flex-col gap-y-6 md:flex-row items-center  max-w-6xl mx-auto  py-20  px-6 md:px-12 about-bg"
      // style={{
      //   backgroundImage: "url('/home/pasovit-about-image.svg')",
      //   backgroundPosition: "bottom center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      {/* ABOUT Title */}
      {/* <p className="text-[#E81F38] text-xl tracking-[2px] uppercase">ABOUT</p> */}
      {/* Main Heading */}
      <div>
        <h2 className="text-3xl ext-[#262626] md:text-[2.5rem] font-semibold mt-5">
          Pasovit – Your Custom Software Development Partner
          {/* <span className="text-[#E81F38]">Digitally!</span> */}
        </h2>

        {/* Description */}
        <p className="mt-5 md:text-lg text-gray-600 max-w-2xl">
          Pasovit is a custom software development company delivering scalable,
          innovative digital solutions for startups, mid-cap businesses, and
          enterprises. We specialize in web, mobile, and enterprise software
          across industries like healthcare, fintech, education, e-commerce,
          logistics, real estate, and manufacturing—using agile development and
          modern technologies to solve real business challenges and accelerate
          growth.
        </p>
      </div>
      <div className="">
        <img
          src="/common/about-P.svg" // replace with actual image path
          alt="Why Choose Us Illustration"
          className="w-60 lg:w-96 mx-auto"
        />
      </div>
      {/* Background Image Section */}
    </section>
  );
}
