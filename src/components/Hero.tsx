import React from 'react';
import { ChevronRight } from 'lucide-react';
import { routes } from '../config/routes';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = useScrollToSection();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[80vh] sm:min-h-screen pt-20 sm:pt-0 flex items-start sm:items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
          <span className="bg-gradient-to-r from-neon-green via-neon-blue to-neon-green bg-clip-text text-transparent animate-gradient-x">
            Build Your Brand on a Solid Foundation
          </span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
          We craft brands that are as strong, reliable, and enduring as the cornerstone they're built upon. From strategic branding to custom web solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('services')}
            className="group px-8 py-3 rounded-md bg-neon-green text-black font-semibold hover:bg-neon-green/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>Our Services</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => navigate(routes.whyChooseUs)}
            className="px-8 py-3 rounded-md border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default Hero;