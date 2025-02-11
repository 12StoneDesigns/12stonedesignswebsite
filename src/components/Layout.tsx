import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './footer/Footer';
import CookieBanner from './cookie/CookieBanner';

const Layout = () => {
  return (
    <div className="min-h-screen text-white relative">
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-black focus:text-neon-green"
      >
        Skip to main content
      </a>

      {/* Fixed background */}
      <div 
        className="fixed inset-0 w-full h-full -z-10"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(/images/hero/A_modern_and_creative_workspace_represent.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
        role="presentation"
        aria-hidden="true"
      />

      {/* Black background to prevent white flash */}
      <div 
        className="fixed inset-0 -z-20 bg-black"
        role="presentation"
        aria-hidden="true"
      />
      
      {/* Scrollable content */}
      <div className="relative">
        <header role="banner" className="relative">
          <Navigation />
        </header>

        <main id="main-content" className="relative pt-16" role="main">
          <Outlet />
        </main>

        <Footer />
        <CookieBanner />
      </div>
    </div>
  );
};

export default Layout;
