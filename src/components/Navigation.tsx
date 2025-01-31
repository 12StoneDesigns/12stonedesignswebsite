import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { typography } from '../styles/typography';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Applications', href: '/applications' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`${typography.h4} ${typography.gradientStatic}`}>
            12Stone
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`${typography.navLink} ${
                  location.pathname === link.href
                    ? 'text-neon-green'
                    : 'text-gray-300 hover:text-neon-green'
                } transition-colors duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-neon-green transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-lg border-t border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`${typography.navLink} block px-3 py-2 rounded-md ${
                  location.pathname === link.href
                    ? 'text-neon-green bg-neon-green/10'
                    : 'text-gray-300 hover:text-neon-green hover:bg-neon-green/5'
                } transition-all duration-300`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;