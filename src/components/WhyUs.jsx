// components/WhyUs.tsx

const features = [
  {
    imgSrc: "https://www.pasovit.com/wp-content/uploads/2022/02/why-1_1.svg",
    label: "Transparent Process",
  },
  {
    imgSrc: "https://www.pasovit.com/wp-content/uploads/2022/02/why-P-2.svg",
    label: "Customer First",
  },
  {
    imgSrc: "https://www.pasovit.com/wp-content/uploads/2022/02/why-P-3.svg",
    label: "Reliable Quality",
  },
  {
    imgSrc: "https://www.pasovit.com/wp-content/uploads/2022/02/why-P-4.svg",
    label: "Full-Service Tech Partner",
  },
  {
    imgSrc: "https://www.pasovit.com/wp-content/uploads/2022/02/why-P-5.svg",
    label: "360-Degree Approach",
  },

  {
    imgSrc: "https://www.pasovit.com/wp-content/uploads/2022/02/why-P-6.svg",
    label: "Impactful Brainstorming",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white  py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="text-center lg:text-left lg:pl-4">
            <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
              WHY US
            </p>
            <h2 className="text-3xl sm:text-[2.5rem] tracking-wide font-[500] text-[#262626] mt-4 mb-16">
              Why choose <br className="hidden lg:block" /> PASOVIT?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <div className="w-9 h-9  rounded-md">
                  <img
                    src={item.imgSrc}
                    alt={item.label}
                    className="w-full h-full object-contain hover:scale-110 transition-all duration-300"
                  />
                </div>
                <p className=" font-[500] uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/about-P.svg" // replace with actual image path
            alt="Why Choose Us Illustration"
            className="w-60 lg:w-96 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
