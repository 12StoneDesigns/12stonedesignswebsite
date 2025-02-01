import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';
import ContactSection from '../components/contact/ContactSection';

const Rebranding = () => {
  return (
    <main className="min-h-screen bg-black text-[#00F3FF] relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: '0.3'
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        {/* Background Glows */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#39FF14]/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#8A2BE2]/30 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Rebranding Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-12 animate-fade-in">
              Transform your brand identity and position your business for future success.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards */}
              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Brand Analysis
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Comprehensive analysis of your current brand position and market opportunities.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Identity Redesign
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Fresh, modern visual identity that maintains brand recognition while moving forward.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Implementation Strategy
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Strategic rollout plan to ensure smooth transition and stakeholder buy-in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Our Rebranding Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Research & Discovery
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Deep dive into your brand's history, values, and market position to inform the rebranding strategy.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Design & Development
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Creation of new brand elements while maintaining core brand equity and recognition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
              Let's work together to evolve your brand while maintaining its core values and recognition.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300 group"
            >
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Rebranding;
