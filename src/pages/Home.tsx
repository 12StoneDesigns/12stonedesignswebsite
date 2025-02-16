import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/why-choose-us/WhyChooseUsSection';
import StarsCanvas from '../components/StarsBackground';
import { typography } from '../styles/typography';
import backgroundImage from '../assets/images/pngegg(1).png';

const Home = () => {
  return (
    <main className="min-h-screen text-[#00F3FF] bg-black relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          opacity: '0.15'
        }}
      />
      
      <StarsCanvas />
      
      <div className="relative z-10">
        <Hero />
        <ServicesSection />
        <WhyChooseUsSection />
        
        {/* CTA Section */}
        <section className="py-24 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-[#00F3FF] mb-8">
              Let's work together to create something extraordinary. Your vision, our expertise.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-md bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
              >
                <span className="font-semibold">Get Started</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
