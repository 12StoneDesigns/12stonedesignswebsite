import React from 'react';
import { ChevronRight } from 'lucide-react';
import { routes } from '../config/routes';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-16">
          <span className="block mb-2 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            Build Your Brand on a Solid
          </span>
          <span className="bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            Foundation
          </span>
        </h1>

        <p className="text-xl text-[#00F3FF] max-w-3xl mx-auto mb-16">
          We craft brands that are as strong, reliable, and enduring as the cornerstone they're built upon. From strategic branding to custom web solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => scrollToSection('services')}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
          >
            <span className="font-semibold">Our Services</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => navigate(routes.whyChooseUs)}
            className="px-6 py-3 rounded-md bg-[#6F00FF]/20 text-[#6F00FF] border border-[#6F00FF] hover:bg-[#6F00FF]/30 transition-all duration-300 font-semibold"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {/* Bottom Left Glow - Neon Green */}
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#39FF14]/20 rounded-full filter blur-3xl animate-pulse"></div>
        
        {/* Bottom Right Glow - Electric Indigo */}
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#8A2BE2]/30 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        
        {/* Top Center Glow - Neon Blue */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00F3FF]/20 rounded-full filter blur-3xl animate-pulse delay-1400"></div>
      </div>
    </div>
  );
};

export default Hero;