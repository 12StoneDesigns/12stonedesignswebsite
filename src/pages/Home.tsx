import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/why-choose-us/WhyChooseUsSection';
import FAQSection from '../components/faq/FAQSection';
import CaseStudiesSection from '../components/case-studies/CaseStudiesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import BlogContentCalendar from '../components/blog/BlogContentCalendar';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogContentCalendar />
      
      {/* CTA Section */}
      <section className="py-24">
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
              className="inline-flex items-center px-6 py-3 rounded-md text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
            >
              <span className="font-semibold">Get Started</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
