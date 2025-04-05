// components/HowWeWork.tsx

export default function HowWeWork() {
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#E81F38] text-sm  tracking-[2px] uppercase">
            HOW WE WORK
          </p>
          <h2 className="text-3xl tracking-wide text-[#262626] md:text-[2.5rem] font-[500] leading-10 mt-4">
            How we think defines how we work
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1  gap-16 items-center">
          {/* Process Digitalisation */}
          <div className="flex flex-col md:h-54 md:flex-row gap-10 items-center">
            <img
              src="https://www.pasovit.com/wp-content/uploads/2022/02/digitalization@3x.png"
              alt="Process Digitalisation"
              className="w-full max-w-xs rounded-lg"
            />
            <div className="flex flex-col justify-around h-full">
              <h3 className="text-lg font-[500] text-[#262626] ">
                PROCESS <span className="text-[#001E8A]">DIGITALISATION</span>
              </h3>
              <p className="text-[#728390] ">
                Are you looking for the best way to increase your{" "}
                <span className="text-[#263238]">business’s efficiency</span>?
                Go with it!
              </p>
              <p className="text-[#728390]">
                Our company is experienced in translating outdated solutions
                into contemporary strategies in-line with the requirements of
                our fast-paced digital world. <br /> Boost your employees’
                productivity, automate mundane tasks, and benefit from the
                modern possibilities granted by the latest tech.
              </p>
            </div>
          </div>

          {/* New Systems Implementation */}
          <div className="flex flex-col-reverse md:h-54 md:flex-row gap-10 items-center">
            <div className="flex flex-col h-full justify-around">
              <h3 className="text-lg font-[500] text-[#262626] mb-2">
                NEW SYSTEMS{" "}
                <span className="text-[#001E8A]">IMPLEMENTATION</span>
              </h3>
              <p className="text-[#728390] mb-2">
                Our team can help you not only to update your previous solutions
                but also to introduce something brand new to your product.
              </p>
              <p className="text-[#728390]">
                Spice things up with modern{" "}
                <span className="text-[#263238]">AI-powered technology</span>;
                access new audiences by extending your mobile application to a
                new environment; or adopt custom features that will help your
                brand stand out in the market. The sky’s the limit and your
                imagination calls the shots!
              </p>
            </div>
            <img
              src="https://www.pasovit.com/wp-content/uploads/2022/02/AI-img@3x-1536x1024.png"
              alt="AI Systems"
              className="w-full max-w-xs rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
