import { Mail, Phone, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';
import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={`py-12 bg-black/40 backdrop-blur-sm border-t border-[#00F3FF] relative z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Link to="/" className="block mb-8">
              <img 
                src="/images/12stone-designs-high-resolution-logo.png"
                alt="12 Stone Designs"
                className="h-16 w-auto transition-opacity hover:opacity-80"
              />
            </Link>
            <p className="text-[#00F3FF] mb-8 max-w-md">
              Pushing the boundaries of what's possible in web applications. Join us in shaping the future of technology.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#39FF14]">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  <a href="mailto:contact@12stonedesigns.com" className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">
                    contact@12stonedesigns.com
                  </a>
                </div>
                <div className="flex items-center text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="tel:+14794079839" className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">
                    (479) 407-9839
                  </a>
                </div>
                <div className="flex items-center text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-[#00F3FF]">Bella Vista, AR</span>
                </div>
              </div>
            </div>
            <SocialLinks />
          </div>
          <div>
            <FooterLinks />
            <p className="text-[#00F3FF] text-sm mt-8">
              &copy; {currentYear} 12 Stone Designs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;