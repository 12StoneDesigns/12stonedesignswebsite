import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/about/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/contact/ContactSection';
import PricingSection from '../components/pricing/PricingSection';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </>
  );
};

export default Home;
