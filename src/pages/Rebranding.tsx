import React from 'react';
import { ArrowLeft, RefreshCw, Target, PieChart, Users, Lightbulb, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/contact/ContactSection';

const Rebranding = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <Link to="/" className="inline-flex items-center text-neon-green hover:text-neon-green/80 mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Services
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-neon-green mb-6">Rebranding Services</h1>
          <p className="text-xl mb-8 max-w-3xl">
            Transform and revitalize your brand identity to meet current market demands. We help established businesses 
            evolve their brand while maintaining their core values and customer trust.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <RefreshCw className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Brand Audit & Analysis</h3>
            <p className="text-gray-400">Comprehensive evaluation of your current brand position, strengths, and areas for improvement.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Target className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Market Repositioning</h3>
            <p className="text-gray-400">Strategic realignment of your brand to better serve current market demands and opportunities.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <PieChart className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Competition Analysis</h3>
            <p className="text-gray-400">In-depth research of market competitors to identify unique positioning opportunities.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Users className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Stakeholder Engagement</h3>
            <p className="text-gray-400">Inclusive approach ensuring all stakeholders are aligned with the rebranding direction.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Lightbulb className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Identity Refresh</h3>
            <p className="text-gray-400">Modern update to visual elements while maintaining brand recognition and trust.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Rocket className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Launch Strategy</h3>
            <p className="text-gray-400">Carefully planned rollout of your new brand identity across all channels and touchpoints.</p>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Our Rebranding Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Discovery & Analysis</h3>
              <p className="text-gray-400 mb-4">
                We begin with a thorough analysis of your current brand position, market research, 
                and stakeholder interviews to understand the need for change.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Strategy Development</h3>
              <p className="text-gray-400 mb-4">
                Based on our findings, we develop a comprehensive rebranding strategy that 
                aligns with your business objectives and market opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Creative Execution</h3>
              <p className="text-gray-400 mb-4">
                Our creative team develops new brand elements that reflect your evolved identity 
                while maintaining connection with your existing brand equity.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Implementation & Launch</h3>
              <p className="text-gray-400 mb-4">
                We guide you through the rollout process, ensuring a smooth transition across 
                all platforms and touchpoints.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactSection />
      </div>
    </div>
  );
};

export default Rebranding;
