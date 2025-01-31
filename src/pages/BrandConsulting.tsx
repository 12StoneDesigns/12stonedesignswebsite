import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/contact/ContactSection';

const BrandConsulting = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-neon-green hover:text-neon-green/80 mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Services
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-neon-green mb-8">Brand Consulting</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-8">
              Strategic insights and recommendations to strengthen and grow your brand.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Consulting Services</h2>
            <ul className="list-none space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-neon-green mr-2">•</span>
                <span>Brand Strategy Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-2">•</span>
                <span>Market Research & Analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-2">•</span>
                <span>Competitive Positioning</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-2">•</span>
                <span>Brand Voice & Messaging</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-2">•</span>
                <span>Customer Experience Strategy</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="mb-4">
              We take a data-driven approach to brand consulting, combining market research, 
              consumer insights, and industry expertise to develop actionable recommendations 
              for your brand's growth.
            </p>
            <p className="mb-8">
              Our consulting services are tailored to your specific needs and goals, ensuring 
              you receive practical, implementable solutions that drive real results.
            </p>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default BrandConsulting;
