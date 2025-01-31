import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl flex flex-col justify-center items-center">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent leading-none">About</span>
            <img 
              src="/images/12stone-designs-high-resolution-logo.png" 
              alt="12Stone Designs"
              className="h-48 sm:h-64 md:h-80 w-auto -mt-4" 
            />
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            At 12Stone Designs, we craft brands that are as strong, reliable, and enduring as the cornerstone they're built upon. 
            Our focus is on purpose-driven design, strategic branding, and creating timeless legacies for businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-neon-green/20">
            <h3 className="text-xl font-semibold text-neon-green mb-4">Our Mission</h3>
            <p className="text-gray-400">
              We help businesses build brands that stand the test of time by combining strategic insight, 
              creative design, and a commitment to excellence. Just as a cornerstone ensures the strength 
              of a structure, we provide the foundational elements for brands to grow and succeed.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-neon-blue/20">
            <h3 className="text-xl font-semibold text-neon-blue mb-4">Our Values</h3>
            <p className="text-gray-400">
              We're built on the principles of Foundation, Excellence, Intentionality, Timelessness, 
              and Collaboration. Every project we undertake is guided by these core values, ensuring 
              we deliver solutions that are both impactful and enduring.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-900 rounded-xl p-6 border border-neon-green/20">
            <h3 className="text-xl font-semibold text-neon-green mb-4">Our Approach</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              "Like a cornerstone, we believe every successful brand needs a strong foundation. 
              We combine expertise in web design and development with strategic branding to create 
              digital experiences that truly represent your business's vision and values."
            </p>
            <p className="mt-4 text-neon-green font-medium">- T. Landon Love</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;