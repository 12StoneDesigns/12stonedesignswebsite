import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/contact/ContactSection';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

const BrandConsulting = () => {
  return (
    <div className="min-h-screen bg-black relative">
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
      
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300 mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Services
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">
            Brand Consulting
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-[#00F3FF]/90 mb-8">
              Strategic insights and recommendations to strengthen and grow your brand.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">
              Consulting Services
            </h2>
            <ul className="list-none space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-[#39FF14] mr-2">•</span>
                <span className="text-[#00F3FF]/90">Brand Strategy Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#39FF14] mr-2">•</span>
                <span className="text-[#00F3FF]/90">Market Research & Analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#39FF14] mr-2">•</span>
                <span className="text-[#00F3FF]/90">Competitive Positioning</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#39FF14] mr-2">•</span>
                <span className="text-[#00F3FF]/90">Brand Voice & Messaging</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#39FF14] mr-2">•</span>
                <span className="text-[#00F3FF]/90">Customer Experience Strategy</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">
              Our Approach
            </h2>
            <p className="text-[#00F3FF]/90 mb-4">
              We take a data-driven approach to brand consulting, combining market research, 
              consumer insights, and industry expertise to develop actionable recommendations 
              for your brand's growth.
            </p>
            <p className="text-[#00F3FF]/90 mb-8">
              Through our proven methodology and collaborative process, you receive practical, 
              implementable solutions that drive real results.
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default BrandConsulting;
