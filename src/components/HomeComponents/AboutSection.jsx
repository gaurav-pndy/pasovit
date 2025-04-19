export default function AboutSection() {
  return (
    <section
      className="relative flex flex-col items-center text-center py-20 md:pb-52 px-6 md:px-12 about-bg"
      style={{
        backgroundImage: "url('/home/pasovit-about-image.svg')",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "contain",
      }}
    >
      {/* ABOUT Title */}
      {/* <p className="text-[#E81F38] text-xl tracking-[2px] uppercase">ABOUT</p> */}
      {/* Main Heading */}
      <h2 className="text-3xl ext-[#262626] md:text-[2.5rem] font-semibold mt-5">
        Let's transform your business,{" "}
        <span className="text-[#E81F38]">Digitally!</span>
      </h2>

      {/* Description */}
      <p className="mt-5 text-gray-600 max-w-2xl">
        We transform bold business ideas / concepts into exceptional digital
        solutions. We ideate, design, and develop data-driven digital products
        made to answer business challenges by offering 360° services to smoothly
        guide you on your way.
      </p>

      {/* Background Image Section */}
    </section>
  );
}
