import React from 'react';
import { Construction } from 'lucide-react';

const AppShowcase = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <Construction className="w-16 h-16 text-neon-green mb-6 animate-pulse" />
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
        Applications Coming Soon
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
        We're working hard to bring you a collection of innovative web applications. 
        Stay tuned for exciting releases that will showcase our technological capabilities.
      </p>
      <div className="mt-12 p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-neon-green/50 transition-all">
        <p className="text-gray-300">
          Our upcoming applications will feature:
        </p>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
            Modern, responsive user interfaces
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
            Cutting-edge web technologies
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
            Innovative solutions for real-world problems
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppShowcase;
