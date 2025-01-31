import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue mb-8">
            About
          </h2>
          <img 
            src="/images/12stone-designs-high-resolution-logo.png" 
            alt="12Stone Designs"
            className="h-48 w-auto mx-auto mb-8" 
          />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            At 12Stone Designs, we craft brands that are as strong, reliable, and enduring as the 
            cornerstone they're built upon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <h3 className="text-2xl font-bold text-neon-green mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We help businesses build brands that stand the test of time by combining strategic insight, 
              creative design, and a commitment to excellence. Just as a cornerstone ensures the strength 
              of a structure, we provide the foundational elements for brands to grow and succeed.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <h3 className="text-2xl font-bold text-neon-green mb-6">
              Our Vision
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To be the cornerstone of digital excellence, helping businesses build lasting online 
              presence through innovative design, strategic thinking, and exceptional service. We 
              envision a digital landscape where every brand can shine with authenticity and purpose.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Innovation',
              description: 'We stay ahead of digital trends and technologies to deliver cutting-edge solutions that give our clients a competitive edge in their respective markets.'
            },
            {
              title: 'Excellence',
              description: 'Quality is at the heart of everything we do. From design to development, we maintain the highest standards to ensure exceptional results for every project.'
            },
            {
              title: 'Partnership',
              description: 'We believe in building lasting relationships with our clients, working together as partners to achieve their goals and bring their vision to life.'
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-neon-green mb-6">
                {item.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;