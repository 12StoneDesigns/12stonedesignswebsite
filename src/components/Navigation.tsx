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
    // Check if we have a section to scroll to after navigation
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
      // Clear the state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [location.state, scrollToSection]);

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
              <NavLink to={routes.home}>Home</NavLink>
              <Link
                to="/services"
                className={`${
                  location.pathname === '/services'
                    ? 'text-neon-green'
                    : 'text-gray-300 hover:text-neon-green'
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Services
              </Link>
              <NavLink to={routes.applications}>Applications</NavLink>
              <NavLink to={routes.blog}>Blogs</NavLink>
              <Link
                to="/about"
                className={`${
                  location.pathname === '/about'
                    ? 'text-neon-green'
                    : 'text-gray-300 hover:text-neon-green'
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`${
                  location.pathname === '/contact'
                    ? 'text-neon-green'
                    : 'text-gray-300 hover:text-neon-green'
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Contact
              </Link>
              <button 
                onClick={() => navigate(routes.contact)}
                className="px-4 py-2 rounded-md bg-neon-green/10 text-neon-green border border-neon-green/50 hover:bg-neon-green/20 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
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
            <MobileNavLink to={routes.home}>Home</MobileNavLink>
            <Link
              to="/services"
              className={`${
                location.pathname === '/services'
                  ? 'text-neon-green'
                  : 'text-gray-300 hover:text-neon-green'
              } block px-3 py-2 rounded-md text-sm font-medium`}
            >
              Services
            </Link>
            <MobileNavLink to={routes.applications}>Applications</MobileNavLink>
            <MobileNavLink to={routes.blog}>Blogs</MobileNavLink>
            <Link
              to="/about"
              className={`${
                location.pathname === '/about'
                  ? 'text-neon-green'
                  : 'text-gray-300 hover:text-neon-green'
              } block px-3 py-2 rounded-md text-sm font-medium`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                location.pathname === '/contact'
                  ? 'text-neon-green'
                  : 'text-gray-300 hover:text-neon-green'
              } block px-3 py-2 rounded-md text-sm font-medium`}
            >
              Contact
            </Link>
            <button 
              onClick={() => navigate(routes.contact)}
              className="w-full mt-4 px-4 py-2 rounded-md bg-neon-green/10 text-neon-green border border-neon-green/50 hover:bg-neon-green/20"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-neon-green transition-colors duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-gray-300 hover:text-neon-green hover:bg-gray-900"
  >
    {children}
  </Link>
);

export default Navigation;