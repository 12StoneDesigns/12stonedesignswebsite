import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './footer/Footer';
import CookieBanner from './cookie/CookieBanner';

const Layout = () => {
  useEffect(() => {
    // Force scroll to top on page load/refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-black focus:text-neon-green"
      >
        Skip to main content
      </a>

      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10"
        style={{ 
          backgroundImage: `url(/images/hero/A_modern_and_creative_workspace_represent.jpg)`,
          backgroundAttachment: 'fixed'
        }}
        role="presentation"
        aria-hidden="true"
      />
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-[2px] -z-10" 
        role="presentation"
        aria-hidden="true"
      />
      
      <header role="banner">
        <Navigation />
      </header>

      <main id="main-content" className="pt-16" role="main">
        <Outlet />
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
