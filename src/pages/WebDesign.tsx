import React from 'react';
import { ArrowLeft, Layout, Smartphone, Code, Gauge, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/contact/ContactSection';

const WebDesign = () => {
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
          
          <h1 className="text-4xl sm:text-5xl font-bold text-neon-green mb-6">Web Design</h1>
          <p className="text-xl mb-8 max-w-3xl">
            Create a stunning online presence with our custom web design services. We combine aesthetics with functionality to deliver websites that engage and convert.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Layout className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-400">Websites that look and function perfectly on all devices and screen sizes.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Smartphone className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Mobile-First Approach</h3>
            <p className="text-gray-400">Optimized for mobile users while maintaining desktop excellence.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Code className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-400">Well-structured, maintainable code following best practices.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Gauge className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Performance Optimized</h3>
            <p className="text-gray-400">Fast-loading pages that keep visitors engaged.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Shield className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Security First</h3>
            <p className="text-gray-400">Built-in security measures to protect your site and users.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
            <Sparkles className="h-8 w-8 text-neon-green mb-4" />
            <h3 className="text-lg font-semibold mb-2">Modern UI/UX</h3>
            <p className="text-gray-400">Contemporary design patterns that enhance user experience.</p>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Discovery</h3>
              <p className="text-gray-400 mb-4">
                We start by understanding your business, goals, and target audience to create 
                a website that serves your specific needs.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Design</h3>
              <p className="text-gray-400 mb-4">
                Our designers create mockups and prototypes, incorporating your brand identity 
                while ensuring optimal user experience.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Development</h3>
              <p className="text-gray-400 mb-4">
                We build your website using modern technologies and best practices, ensuring 
                it's fast, secure, and scalable.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-2">Launch & Support</h3>
              <p className="text-gray-400 mb-4">
                After thorough testing, we launch your site and provide ongoing support to 
                ensure it continues to perform optimally.
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

export default WebDesign;
