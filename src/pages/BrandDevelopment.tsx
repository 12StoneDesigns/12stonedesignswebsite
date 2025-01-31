import React from 'react';
import { ArrowLeft, CheckCircle2, Target, Palette, Users, BarChart2, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/contact/ContactSection';

const BrandDevelopment = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <Link to="/" className="inline-flex items-center text-neon-green hover:text-neon-green/80 mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Services
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-neon-green mb-6">Brand Development</h1>
          <p className="text-xl mb-8 max-w-3xl">
            Transform your business into a memorable brand. We help create strong, distinctive brand identities that resonate with your target audience.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <CheckCircle2 className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Brand Strategy</h3>
            <p className="text-gray-400">Develop a clear, effective strategy that aligns with your business goals.</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Target className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Market Positioning</h3>
            <p className="text-gray-400">Position your brand effectively in your target market.</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Palette className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Visual Identity</h3>
            <p className="text-gray-400">Create a distinctive visual language for your brand.</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Users className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Brand Voice</h3>
            <p className="text-gray-400">Develop a consistent and engaging tone for your brand communications.</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <BarChart2 className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Brand Guidelines</h3>
            <p className="text-gray-400">Create comprehensive guidelines for consistent brand application.</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <BookOpen className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Brand Story</h3>
            <p className="text-gray-400">Craft a compelling narrative that connects with your audience.</p>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Brand Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-neon-green">Discovery Phase</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-neon-green mr-2 mt-1" />
                  <span>In-depth analysis of your business goals and values</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-neon-green mr-2 mt-1" />
                  <span>Market research and competitor analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-neon-green mr-2 mt-1" />
                  <span>Target audience identification and research</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-neon-green">Development Phase</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-neon-green mr-2 mt-1" />
                  <span>Brand strategy development and positioning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-neon-green mr-2 mt-1" />
                  <span>Visual identity creation and refinement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-neon-green mr-2 mt-1" />
                  <span>Brand guidelines documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default BrandDevelopment;
