import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const partners = [
  {
    src: "https://www.pasovit.com/wp-content/uploads/2022/04/ecrc.png",
    title: "Eurasian Cancer Research Council",
  },
  {
    src: "https://www.pasovit.com/wp-content/uploads/2022/04/Health-direct.png",
    title: "HEALTH DIRECT",
  },
  {
    src: "https://www.pasovit.com/wp-content/uploads/2022/04/pathologica.png",
    title: "PATHOLOGICA",
  },
  {
    src: "https://www.pasovit.com/wp-content/uploads/2022/04/eafo.png",
    title: "Eurasian Federation of Oncology",
  },
  {
    src: "https://www.pasovit.com/wp-content/uploads/2024/08/Black-Logo.png",
    title: "",
  },
  {
    src: "https://www.pasovit.com/wp-content/uploads/2022/04/aviakul.png",
    title: "Aviakul Aviation Academy",
  },
  {
    src: "https://www.pasovit.com/wp-content/uploads/2022/04/maindoc.png",
    title: "MeinDoc",
  },
];

const Partnerships = () => {
  return (
    <section className="w-full mt-5 py-12 bg-white">
      <div className="container mx-auto max-w-6xl px-8 ">
        <div className="md:pl-6 text-center md:text-left">
          <p className="text-red-600 text-sm  tracking-widest uppercase">
            Our Bond
          </p>
          <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-10 mt-4">
            It’s all about our <br className="hidden md:block" /> Partnership
          </h2>
        </div>
        <div className="mt-6 md:mt-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500 }}
            loop
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full flex items-center"
          >
            {partners.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex  min-h-40 border-yellow-500 justify-center items-center"
              >
                <div className="h-40 relative">
                  <img
                    src={image.src}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <span className="text-[#8C8C8C] text-lg tracking-[1px] absolute bottom-3 w-full text-center">
                    {image.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
