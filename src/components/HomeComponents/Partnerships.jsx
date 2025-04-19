import Marquee from "react-fast-marquee";

const partners = [
  {
    src: "/home/logos/ecrc.png",
    title: "Eurasian Cancer Research Council",
  },
  {
    src: "/home/logos/Health-direct.png",
    title: "HEALTH DIRECT",
  },
  {
    src: "/home/logos/pathologica.png",
    title: "PATHOLOGICA",
  },
  {
    src: "/home/logos/eafo.png",
    title: "Eurasian Federation of Oncology",
  },
  {
    src: "/home/logos/Black-Logo.png",
    title: "",
  },
  {
    src: "/home/logos/aviakul.png",
    title: "Aviakul Aviation Academy",
  },
  {
    src: "/home/logos/maindoc.png",
    title: "MeinDoc",
  },
  {
    src: "/home/logos/eafo.png",
    title: "Eurasian Federation of Oncology",
  },
];

const Partnerships = () => {
  // Split into 2 rows
  const half = Math.ceil(partners.length / 2);
  const topRow = partners.slice(0, half);
  const bottomRow = partners.slice(half);

  return (
    <section className="w-full mt-10 lg:mt-5 py-12 bg-white ">
      <div className="container mx-auto max-w-6xl md:px-8">
        <div className="md:pl-6 text-center lg:text-left px-4 md:px-0">
          {/* <p className="text-[#E81F38] text-xl tracking-[2px] uppercase">
            Our Bond
          </p> */}
          <h2 className="text-3xl text-[#262626] tracking-wide md:text-[2.5rem] font-semibold leading-10 mt-4">
            It’s all about our <br className="hidden md:block" /> Partnership
          </h2>
        </div>

        {/* Top Row */}
        <div className="mt-10">
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {topRow.map((partner, index) => (
              <div
                key={`top-${index}`}
                className="flex items-center justify-center md:mx-4 max-w-60 h-24 px-4 py-2 "
              >
                <img
                  src={partner.src}
                  alt={partner.title || `Partner ${index + 1}`}
                  className="w-full  h-10 object-cover "
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom Row */}
        <div className="mt-6">
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
            direction="right"
          >
            {bottomRow.map((partner, index) => (
              <div
                key={`bottom-${index}`}
                className="flex items-center justify-center md:mx-4 max-w-60 px-4 py-2 h-20 overflow-y-hidden "
              >
                <img
                  src={partner.src}
                  alt={partner.title || `Partner ${index + 1}`}
                  className="w-full  object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
