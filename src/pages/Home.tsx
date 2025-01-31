import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/why-choose-us/WhyChooseUsSection';
import { typography } from '../styles/typography';

const Home = () => {
  return (
    <main className="min-h-screen text-white relative">
      <Hero />
      <div className="relative z-20">
        <ServicesSection />
        <WhyChooseUsSection />
        
        {/* CTA Section */}
        <section className="py-24 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`${typography.sectionTitle} ${typography.gradient}`}>
              Ready to Transform Your Digital Presence?
            </h2>
            <p className={typography.sectionSubtitle}>
              Let's work together to create something extraordinary. Your vision, our expertise.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-md bg-neon-green/10 text-neon-green border border-neon-green/50 hover:bg-neon-green/20 transition-all duration-300"
              >
                <span className={typography.button}>Get Started</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
