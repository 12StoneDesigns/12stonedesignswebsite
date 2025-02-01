import React from 'react';
import { ArrowLeft, Layout, Smartphone, Code, Gauge, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/contact/ContactSection';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

const WebDesign = () => {
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
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#8A2BE2]/30 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Web Design Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-12 animate-fade-in">
              Create stunning, responsive websites that captivate your audience and drive results.
            </p>
            <Link to="/" className="inline-flex items-center text-[#00F3FF] hover:text-[#39FF14] mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Services
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards */}
              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <Layout className="h-8 w-8 text-[#00F3FF] mb-4" />
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Custom Website Design
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Unique, tailored website designs that reflect your brand identity and meet your business objectives.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <Smartphone className="h-8 w-8 text-[#00F3FF] mb-4" />
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Responsive Development
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Mobile-first websites that look and function perfectly across all devices and screen sizes.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <Code className="h-8 w-8 text-[#00F3FF] mb-4" />
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Clean Code
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Well-structured, maintainable code following best practices.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <Gauge className="h-8 w-8 text-[#00F3FF] mb-4" />
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Performance Optimized
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Fast-loading, optimized websites that provide an excellent user experience and boost SEO rankings.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <Shield className="h-8 w-8 text-[#00F3FF] mb-4" />
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Security First
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Built-in security measures to protect your site and users.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <Sparkles className="h-8 w-8 text-[#00F3FF] mb-4" />
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Modern UI/UX
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Intuitive user interfaces and engaging user experiences that keep visitors coming back.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Why Choose Our Web Design Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Modern Design Trends
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Stay ahead with cutting-edge design trends and technologies that make your website stand out.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent group-hover:animate-gradient-x">
                  Performance Optimized
                </h3>
                <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                  Fast-loading, optimized websites that provide an excellent user experience and boost SEO rankings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
              Let's create a website that sets you apart from the competition.
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

export default WebDesign;
