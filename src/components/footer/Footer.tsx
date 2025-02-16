import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';

const Footer = () => {
  return (
    <footer className="relative w-full z-content bg-black/80 border-t border-[#00F3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[5rem] flex flex-wrap items-center justify-center sm:justify-between gap-2 py-2">
          {/* All Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-1">
            <Link to="/about" className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">About</Link>
            <Link to="/services" className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">Services</Link>
            <Link to="/contact" className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">Contact</Link>
            <span className="hidden sm:inline text-[#00F3FF]/20">|</span>
            <Link to={routes.legal.privacy} className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300 text-sm">Privacy</Link>
            <Link to={routes.legal.terms} className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300 text-sm">Terms</Link>
            <Link to={routes.legal.cookies} className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300 text-sm">Cookies</Link>
          </div>

          {/* Copyright */}
          <p className="text-[#00F3FF] text-xs sm:text-sm whitespace-nowrap">
            &copy; {new Date().getFullYear()} 12Stone Designs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
