import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { routes } from '../config/routes';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = useScrollToSection();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
      window.history.replaceState({}, document.title);
    }
  }, [location.state, scrollToSection]);

  const navLinkClasses = (isActive: boolean) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-neon-green' : 'text-gray-300 hover:text-neon-green'
    }`;

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-neon-blue/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to={routes.home} className="flex items-center space-x-2">
              <img 
                src="/images/12stone-designs-high-resolution-logo.png"
                alt="12Stone Designs"
                className="h-8 w-auto"
              />
              <img 
                src="/images/text-logo.png"
                alt="12Stone Designs"
                className="h-8 w-auto" 
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to={routes.home} className={navLinkClasses(location.pathname === routes.home)}>
                Home
              </Link>
              <Link to="/services" className={navLinkClasses(location.pathname === '/services')}>
                Services
              </Link>
              <Link to={routes.applications} className={navLinkClasses(location.pathname === routes.applications)}>
                Applications
              </Link>
              <Link to={routes.blog} className={navLinkClasses(location.pathname === routes.blog)}>
                Blogs
              </Link>
              <Link to="/about" className={navLinkClasses(location.pathname === '/about')}>
                About
              </Link>
              <Link to="/contact" className={navLinkClasses(location.pathname === '/contact')}>
                Contact
              </Link>
              <button 
                onClick={() => navigate(routes.contact)}
                className="px-4 py-2 rounded-md bg-neon-green/10 text-neon-green border border-neon-green/50 hover:bg-neon-green/20 transition-all duration-300 ease-in-out transform hover:scale-105 text-sm font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
            <Link to={routes.home} className={navLinkClasses(location.pathname === routes.home) + ' block'}>
              Home
            </Link>
            <Link to="/services" className={navLinkClasses(location.pathname === '/services') + ' block'}>
              Services
            </Link>
            <Link to={routes.applications} className={navLinkClasses(location.pathname === routes.applications) + ' block'}>
              Applications
            </Link>
            <Link to={routes.blog} className={navLinkClasses(location.pathname === routes.blog) + ' block'}>
              Blogs
            </Link>
            <Link to="/about" className={navLinkClasses(location.pathname === '/about') + ' block'}>
              About
            </Link>
            <Link to="/contact" className={navLinkClasses(location.pathname === '/contact') + ' block'}>
              Contact
            </Link>
            <button 
              onClick={() => navigate(routes.contact)}
              className="w-full mt-4 px-4 py-2 rounded-md bg-neon-green/10 text-neon-green border border-neon-green/50 hover:bg-neon-green/20 text-sm font-medium transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;