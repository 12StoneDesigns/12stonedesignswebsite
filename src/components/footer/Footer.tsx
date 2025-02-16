import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full z-50 bg-black/40 backdrop-blur-sm border-t border-[#00F3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex space-x-6">
            <Link to="/about" className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">About</Link>
            <Link to="/services" className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">Services</Link>
            <Link to="/contact" className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">Contact</Link>
          </div>
          <p className="text-[#00F3FF] text-sm">
            &copy; {new Date().getFullYear()} 12Stone Designs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
