import React from 'react';
import { ArrowLeft, Target, BarChart2, Users, Lightbulb, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/contact/ContactSection';
import { typography } from '../styles/typography';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

const BrandConsulting = () => {
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
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#39FF14]/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#8A2BE2]/30 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/" className="inline-flex items-center text-[#00F3FF] hover:text-[#39FF14] transition-colors duration-300 mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Services
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Strategic Brand Consulting
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto mb-12 animate-fade-in">
              Transform your brand's potential with data-driven insights and expert guidance that drive measurable results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards */}
              <div className="p-8 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group hover:transform hover:scale-105">
                <Target className="w-12 h-12 mb-6 text-[#39FF14] group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Brand Strategy Development
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Create a comprehensive brand strategy that aligns with your business goals and market position.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group hover:transform hover:scale-105">
                <BarChart2 className="w-12 h-12 mb-6 text-[#39FF14] group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Market Research & Analysis
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Gain deep insights into your market, competitors, and target audience through comprehensive research.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group hover:transform hover:scale-105">
                <Users className="w-12 h-12 mb-6 text-[#39FF14] group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Customer Experience Strategy
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Develop a customer-centric approach that enhances brand loyalty and drives engagement.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group hover:transform hover:scale-105">
                <Lightbulb className="w-12 h-12 mb-6 text-[#39FF14] group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Innovation Consulting
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Stay ahead of market trends with innovative strategies and creative solutions.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group hover:transform hover:scale-105">
                <MessageCircle className="w-12 h-12 mb-6 text-[#39FF14] group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Communication Strategy
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Craft compelling brand messages that resonate with your target audience.
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
              Let's work together to develop a strategic approach that elevates your brand and drives sustainable growth.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] text-black hover:from-[#39FF14] hover:via-[#00F3FF] hover:to-[#6F00FF] transition-all duration-500"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  );
};

export default BrandConsulting;
