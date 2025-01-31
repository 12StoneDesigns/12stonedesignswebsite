import React from 'react';
import { ArrowLeft, Database, Cloud, Layers, GitBranch, Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/contact/ContactSection';

const WebApplications = () => {
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
          
          <h1 className="text-4xl sm:text-5xl font-bold text-neon-green mb-6">Web Application Development</h1>
          <p className="text-xl mb-8 max-w-3xl">
            Transform your business with powerful, scalable web applications. We build custom solutions that streamline operations and enhance user experience.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Database className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
            <p className="text-gray-400">Tailored web applications designed to meet your specific business needs.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Cloud className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Cloud Integration</h3>
            <p className="text-gray-400">Seamless cloud integration for scalability and accessibility.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Layers className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Scalable Architecture</h3>
            <p className="text-gray-400">Built to grow with your business needs.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <GitBranch className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Version Control</h3>
            <p className="text-gray-400">Systematic development with proper version management.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Lock className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Security</h3>
            <p className="text-gray-400">Enterprise-grade security measures to protect your data.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Zap className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Performance</h3>
            <p className="text-gray-400">Optimized for speed and efficiency.</p>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Requirements Analysis</h3>
              <p className="text-gray-400 mb-4">
                We begin by understanding your business processes and requirements to design 
                the perfect solution for your needs.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Architecture Design</h3>
              <p className="text-gray-400 mb-4">
                Creating a robust and scalable architecture that ensures long-term 
                sustainability and growth potential.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Development & Testing</h3>
              <p className="text-gray-400 mb-4">
                Agile development process with continuous testing to ensure quality 
                and reliability.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Deployment & Support</h3>
              <p className="text-gray-400 mb-4">
                Smooth deployment process and ongoing support to ensure your application 
                runs optimally.
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

export default WebApplications;
