import React from 'react';
import { ArrowLeft, CheckCircle2, Target, Palette, Users, BarChart2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/contact/ContactSection';
import { typography } from '../styles/typography';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

const BrandDevelopment = () => {
  return (
    <main className="min-h-screen text-[#00F3FF] bg-black relative">
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
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300 mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Services
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Brand Development
            </h1>
            <p className="text-[#00F3FF] text-xl mb-8 max-w-3xl">
              Transform your business into a memorable brand. We help create strong, distinctive brand identities that resonate with your target audience.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service Cards */}
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all">
              <CheckCircle2 className="h-8 w-8 text-[#6F00FF] mb-4" />
              <h3 className="text-[#39FF14] text-lg font-semibold mb-2">Brand Strategy</h3>
              <p className="text-[#00F3FF]">Develop a clear, effective strategy that aligns with your business goals.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all">
              <Target className="h-8 w-8 text-[#6F00FF] mb-4" />
              <h3 className="text-[#39FF14] text-lg font-semibold mb-2">Market Positioning</h3>
              <p className="text-[#00F3FF]">Position your brand effectively in your target market.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all">
              <Palette className="h-8 w-8 text-[#6F00FF] mb-4" />
              <h3 className="text-[#39FF14] text-lg font-semibold mb-2">Visual Identity</h3>
              <p className="text-[#00F3FF]">Create a distinctive visual language for your brand.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all">
              <Users className="h-8 w-8 text-[#6F00FF] mb-4" />
              <h3 className="text-[#39FF14] text-lg font-semibold mb-2">Brand Voice</h3>
              <p className="text-[#00F3FF]">Develop a consistent and engaging tone for your brand communications.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all">
              <BarChart2 className="h-8 w-8 text-[#6F00FF] mb-4" />
              <h3 className="text-[#39FF14] text-lg font-semibold mb-2">Brand Guidelines</h3>
              <p className="text-[#00F3FF]">Create comprehensive guidelines for consistent brand application.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all">
              <BookOpen className="h-8 w-8 text-[#6F00FF] mb-4" />
              <h3 className="text-[#39FF14] text-lg font-semibold mb-2">Brand Story</h3>
              <p className="text-[#00F3FF]">Craft a compelling narrative that connects with your audience.</p>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              Our Brand Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all">
                <h3 className="text-[#39FF14] text-xl font-semibold mb-4">Discovery Phase</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#6F00FF] mr-2 mt-1" />
                    <span className="text-[#00F3FF]">In-depth analysis of your business goals and values</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#6F00FF] mr-2 mt-1" />
                    <span className="text-[#00F3FF]">Market research and competitor analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#6F00FF] mr-2 mt-1" />
                    <span className="text-[#00F3FF]">Target audience identification and research</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all">
                <h3 className="text-[#39FF14] text-xl font-semibold mb-4">Development Phase</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#6F00FF] mr-2 mt-1" />
                    <span className="text-[#00F3FF]">Brand strategy development and positioning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#6F00FF] mr-2 mt-1" />
                    <span className="text-[#00F3FF]">Visual identity creation and refinement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#6F00FF] mr-2 mt-1" />
                    <span className="text-[#00F3FF]">Brand guidelines documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  );
};

export default BrandDevelopment;
