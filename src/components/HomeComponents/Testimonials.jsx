import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import { User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    org: "EAFO",
    designation: "CEO & FOUNDER",
    text: '"We conducted a medical-related course event in Russia and hired Pasovit Technologies to develop our website and manage our participants. They did an excellent job! The website was user-friendly and professional, and their management of participant logistics was seamless. We highly recommend Pasovit Technologies for their outstanding service and expertise."',
  },
  {
    id: 2,
    org: "Space Meditation Center",
    designation: "FOUNDER",
    text: '"Space Meditation Center is delighted with the outstanding work Pasovit Technologies did in developing our website. They created a beautiful, user-friendly site that perfectly represents our yoga and meditation services. Their professionalism and attention to detail were impressive. We highly recommend Pasovit Technologies!"',
  },
  {
    id: 3,
    org: "Roy and Roy Associates",
    designation: "FOUNDER",
    text: '"ROY AND ROY ASSOCIATES is thrilled with the exceptional work done by Pasovit in creating our website. They delivered a visually appealing, user-friendly site that perfectly reflects our brand. Their attention to detail and responsiveness made the process smooth and enjoyable. Highly recommended!"',
  },
];

const Testimonials = () => {
  return (
    <section
      className="mt-4 pt-14 pb-6 px-0 md:px-12.5 bg-left"
      style={{
        backgroundImage:
          "url('https://www.pasovit.com/wp-content/uploads/2022/02/testimonials-background-min.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="m-7.5 max-w-5xl mx-auto relative">
        <div className="text-center">
          <h3 className="text-white text-xl tracking-[2px]">TESTIMONIALS</h3>
          <h2 className="text-2xl md:text-3xl tracking-wide lg:text-[2.5rem] text-white font-semibold mt-5">
            Voices of our clients
          </h2>
        </div>

        <div className="pt-10 relative testimonial-section overflow-hidden">
          <img
            src="https://t.commonsupport.com/adro/images/resource/user-thumbs.png"
            alt=""
            className="hidden  sm:block absolute right-2 top-28 w-32 md:w-auto "
          />

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop
            slidesPerView={1}
            grabCursor
            className="w-full h-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full max-w-4xl mx-auto w-full flex items-center justify-center px-4 sm:px-8 md:px-12 py-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="bg-white shadow-[0_0_50px_rgba(226,222,232,0.75)] rounded w-full py-10 sm:py-14 px-6 sm:px-12 md:px-20 flex flex-col"
                  >
                    <p className="text-base md:text-lg text-[#282331] font-raleway leading-relaxed mb-8 md:mb-10">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border-4 sm:border-6 border-[#e5e6fa] bg-gray-50 shadow-[0_45px_45px_rgba(147,147,147,0.35)]">
                        <User className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500" />
                      </div>

                      <div className="text-left md:py-1 flex flex-col justify-around h-full">
                        <h4 className="text-lg sm:text-xl font-[700] leading-tight text-[#382c4d] font-raleway">
                          {testimonial.org}
                        </h4>
                        <p className="text-sm sm:text-base text-[#8053f7] font-[400] font-raleway">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
