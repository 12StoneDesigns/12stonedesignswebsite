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
    <div 
      className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-[#00F3FF]/30 p-4 z-50"
      role="alert"
      aria-live="polite"
    >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[#00F3FF] text-sm flex-1">
            <p>
              We use cookies to enhance your browsing experience. By continuing to use our site, 
              you agree to our use of cookies. Read our{' '}
              <Link to="/cookies" className="text-[#39FF14] hover:text-[#6F00FF] transition-colors duration-300">
                Cookie Policy
              </Link>{' '}
              to learn more.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={handleCustomize}
              className="px-4 py-2 text-[#00F3FF] hover:text-[#39FF14] transition-colors duration-300"
              aria-label="Customize cookie settings"
            >
              Customize
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] 
                rounded-md transition-all duration-300"
              aria-label="Accept all cookies"
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
