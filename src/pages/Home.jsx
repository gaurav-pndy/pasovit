import React from "react";
import Hero from "../components/HomeComponents/Hero";
import AboutSection from "../components/HomeComponents/AboutSection";
import ServicesSection from "../components/HomeComponents/ServicesSection";
import RecentWork from "../components/HomeComponents/RecentWork";
import Partnerships from "../components/HomeComponents/Partnerships";
import Testimonials from "../components/HomeComponents/Testimonials";
import CTASection from "../components/HomeComponents/CTASection";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div>
      <SEO
        title="Home | Pasovit Technologies"
        description="Custom-built websites that are beautiful, fast, and scalable."
        keywords="web development, React, Pasovit, software, UI/UX"
        url="https://pasovit.com/"
      />

      <Hero />
      <AboutSection />
      <ServicesSection />
      {/* <RecentWork /> */}
      <Partnerships />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
