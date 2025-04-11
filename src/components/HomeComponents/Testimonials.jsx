import React, { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";

const initialTestimonials = [
  {
    id: 1,
    org: "Team EAFO",
    text: '"Pasovit built our award-winning e-learning platform (ui.eafo.info & admin.eafo.info) and high-converting medical event websites, creating a seamless digital education ecosystem. Their custom web development solutions—including course management systems, attendee registration portals, and HD live streaming—have transformed how we deliver accredited medical education online. The event websites, with their intuitive UX and secure payment integration, have boosted conference participation by 40%. A top-tier web design partner for healthcare professionals."',
  },
  {
    id: 2,
    org: "Dr. Soma (Surgical Oncologist, Plastic Surgeon, Founder & CEO, EAFO)",

    text: '"Pasovit crafted a sophisticated multilingual platform for drsoma.info that beautifully showcases our diverse medical initiatives. They demonstrated particular skill in unifying clinical, academic and humanitarian content into a cohesive digital presence. The SEO-optimized design and intuitive CMS have significantly enhanced our global communications and outreach efforts."',
  },
  {
    id: 3,
    org: "Team Aviakul",

    text: "Pasovit developed an aviation training platform that truly soars. For aviakul.com, they created a dynamic interface that excites prospective students while maintaining professional credibility. Their clever use of visuals and streamlined application process has already improved our conversion rates. The team's enthusiasm for our mission made the collaboration particularly rewarding.",
  },
  {
    id: 4,
    org: "Team BeingKind",

    text: "Pasovit built more than a website for BeingKind - they created a digital sanctuary that reflects our compassionate ethos. Their designers demonstrated remarkable empathy, crafting an interface that comforts visitors while effectively communicating our services. The intuitive structure helps users quickly find the resources they need, exactly as we envisioned.",
  },
  {
    id: 5,
    org: "Team Sacreth",

    text: "Pasovit delivered a streetwear e-commerce site that pulses with urban energy. For Sacreth, they developed a bold visual language that perfectly captures our brand's edge while maintaining flawless functionality. Their innovative product display solutions and seamless checkout process have significantly enhanced our online sales performance.",
  },
  {
    id: 6,
    org: "Team Saffron Restaurant",

    text: "Pasovit’s restaurant website design increased our online reservations by 80% with mouthwatering food photography, OpenTable integration, and localized SEO for 'best fine dining'. Their Google Business Profile optimization helped us dominate local 'date night restaurant' searches.",
  },
  {
    id: 7,
    org: "Team Health-Direct",

    text: "Pasovit's oncology website for health-direct.info strikes the perfect balance between medical authority and patient comfort. Their thoughtful information architecture helps users navigate complex treatment options with confidence. The clean, reassuring design has received praise from both healthcare professionals and patients seeking our specialized services.",
  },
  {
    id: 7,
    org: "Team PathoLogica",

    text: "For pathologica.ru, Pasovit created a medical website that masterfully balances clinical precision with patient-friendly accessibility. Their ability to organize complex diagnostic information into intuitive navigation impressed our entire team. Beyond technical execution, they demonstrated genuine understanding of our mission to make quality oncology diagnostics more accessible to all patients.",
  },
  {
    id: 7,
    org: "Team FIRMST",

    text: "Pasovit translated FIRMST's scientific collaboration vision into a vibrant digital platform. For firmst.tech, they created an engaging interface that stimulates knowledge-sharing across medical disciplines. Their innovative approach to showcasing research events and member contributions has strengthened our community connections.",
  },
  {
    id: 8,
    org: "Team FIRMST Study Abroad",

    text: "Pasovit built an inspiring gateway to global medical education for FIRMST Study Abroad. Their vibrant design and intuitive navigation help students worldwide discover life-changing opportunities. The team's understanding of international education dynamics resulted in a platform that truly serves our mission to develop tomorrow's healthcare leaders.",
  },
  {
    id: 9,
    org: "Team ECRC",

    text: "Pasovit gave ECRC a digital presence worthy of our global cancer research impact. The ecrc.pro website presents complex scientific work with clarity and gravitas. Their strategic content organization helps partners and donors quickly understand our initiatives and contribution to the fight against cancer.",
  },
  {
    id: 10,
    org: "Team EGPM",

    text: "Pasovit transformed our vision into reality with egpm.one, delivering a website that exceeds expectations. Their team's technical expertise and creative problem-solving shone through every phase. We were particularly impressed by their meticulous attention to detail and commitment to understanding our goals. The result? A sleek, high-performance digital platform that perfectly represents our brand identity.",
  },
  {
    id: 11,
    org: "Team Remeslo Dobra",
    text: "Pasovit created a digital home that radiates the warmth of Remeslo Dobra's mission. Their sensitive approach to showcasing our homelessness services has helped more people find assistance. The website's compassionate design and clear call-to-action elements have measurably increased community engagement and volunteer participation.",
  },
];

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const SCROLL_AMOUNT = 1; // px per frame

  // Duplicate testimonials to create the illusion of infinite scrolling
  const extendedTestimonials = [...initialTestimonials, ...initialTestimonials];

  useEffect(() => {
    let animationId;
    const container = containerRef.current;

    const animate = () => {
      if (!isPaused && container) {
        // Update scroll position state
        setScrollPosition((prevPos) => {
          const newPosition = prevPos + SCROLL_AMOUNT;

          // Check if we need to reset (when reaching the first set of duplicates)
          if (newPosition >= container.scrollHeight / 2) {
            // Immediately reset to top without animation
            container.scrollTo({ top: 0, behavior: "auto" });
            return 0;
          }

          // Apply the scroll position
          container.scrollTo({ top: newPosition, behavior: "auto" });
          return newPosition;
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section
      className="relative py-0 px-0 md:px-12.5 min-h-[70vh] lg:min-h-[40vh] xl:min-h-[80vh] bg-left overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.pasovit.com/wp-content/uploads/2022/02/testimonials-background-min.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl flex flex-col lg:flex-row mx-auto relative z-10">
        <div className="text-center lg:text-left flex flex-col justify-center lg:w-[40%] mb-8 py-5 md:mb-0">
          <h2 className="text-4xl md:text-[4rem] font-[900] md:leading-[4.5rem] tracking-wide text-white mt-5">
            Voices of our clients
          </h2>
        </div>

        <div className="lg:w-[60%] h-[70vh] lg:h-[40vh] xl:h-[80vh] relative testimonial-section">
          <img
            src="https://t.commonsupport.com/adro/images/resource/user-thumbs.png"
            alt=""
            className="hidden sm:block absolute right-0 top-32 w-32 md:w-auto"
          />

          <div
            className="w-full md:px-10 h-full overflow-hidden relative flex flex-col items-center z-10 fade-mask"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={containerRef}
            style={{
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {extendedTestimonials.map((item, index) => (
              <div
                key={`testimonial-${item.id}-${index}`}
                className="w-[90%] md:w-[85%] lg:w-[100%] p-4 bg-white shadow-[0_0_30px_rgba(226,222,232,0.75)] mb-10 flex flex-col items-start justify-center rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-4 sm:border-6 border-[#e5e6fa] bg-gray-50 shadow-[0_15px_15px_rgba(147,147,147,0.3)] mb-2">
                  <User className="w-8 h-8 text-gray-500" />
                </div>

                <h3 className="font-bold text-lg text-blue-800">{item.org}</h3>
                <p className="text-gray-700 italic mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-mask::-webkit-scrollbar {
          display: none;
        }

        .fade-mask {
          /* Optional: add fade effect at top and bottom */
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
