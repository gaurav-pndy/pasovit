import React from "react";
import Hero from "../components/HomeComponents/Hero";
import AboutSection from "../components/HomeComponents/AboutSection";
import ServicesSection from "../components/HomeComponents/ServicesSection";
import RecentWork from "../components/HomeComponents/RecentWork";
import Partnerships from "../components/HomeComponents/Partnerships";
import Testimonials from "../components/HomeComponents/Testimonials";
import CTASection from "../components/HomeComponents/CTASection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <RecentWork />
      <Partnerships />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
