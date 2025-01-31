import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-gray-900/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
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
            </div>
            <p className="text-gray-400 max-w-md">
              Pushing the boundaries of what's possible in web applications. Join us in shaping the future of technology.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:contact@12stonedesigns.com" className="hover:text-neon-green transition-colors">
                    contact@12stonedesigns.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+14794079839" className="hover:text-neon-green transition-colors">
                    (479) 407-9839
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>Bella Vista, AR</span>
                </div>
              </div>
            </div>
            <SocialLinks />
          </div>
          <FooterLinks />
        </div>
        <div className="mt-8 pt-8 border-t border-neon-green/20">
          <p className="text-gray-300 text-sm text-center">
            &copy; {currentYear} 12Stone Designs. All rights reserved. 
          </p>
          <p className="text-gray-400 text-xs text-center mt-2">
            This website and its contents are protected by copyright law.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;