// components/WhyUs.tsx

export default function ProcessFlow() {
  return (
    <section className="bg-white  py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col ">
        {/* Left Content */}
        <div>
          <div className="text-center lg:text-left lg:pl-4">
            {/* <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">
              PROCESS FLOW
            </p> */}
            <h2 className="text-3xl sm:text-[2.5rem] tracking-wide font-[500] text-[#262626] mt-4 mb-16">
              Get to know our
              <br className="hidden lg:block" /> work process
            </h2>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full hidden md:block md:px-8">
          <img
            src="/process-flow.png" // replace with actual image path
            alt="Why Choose Us Illustration"
            className="h-full max-w-6xl  w-full mx-auto"
          />
        </div>
        <div className="w-full md:hidden px-4">
          <img
            src="https://www.pasovit.com/wp-content/uploads/2022/02/progress-work.svg" // replace with actual image path
            alt="Why Choose Us Illustration"
            className="h-full max-w-6xl  w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
