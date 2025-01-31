import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CookieSettingsPanel from './CookieSettings';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieSettings', JSON.stringify({
      analytics: true,
      functional: true
    }));
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setIsSettingsOpen(true);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-neon-green/20 p-4 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-300 text-sm flex-1">
            <p>
              We use cookies to enhance your browsing experience. By continuing to use our site, 
              you agree to our use of cookies. Read our{' '}
              <Link to="/cookies" className="text-neon-green hover:underline">
                Cookie Policy
              </Link>{' '}
              to learn more.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={handleCustomize}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Customize
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-neon-green/10 text-neon-green border border-neon-green/50 
                rounded-md hover:bg-neon-green/20 transition-all duration-300"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      <CookieSettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => {
          setIsSettingsOpen(false);
          setIsVisible(false);
          localStorage.setItem('cookieConsent', 'customized');
        }}
      />
    </>
  );
};

export default CookieBanner;
