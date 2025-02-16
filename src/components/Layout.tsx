import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './footer/Footer';
import CookieBanner from './cookie/CookieBanner';
import PageLayout from './PageLayout';
import StarsCanvas from './StarsBackground';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div 
        className="fixed inset-0"
        style={{
          backgroundImage: 'url(/images/backgroundimage.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5
        }}
      />
      
      <StarsCanvas />
      
      <div className="relative flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow">
          <PageLayout>
            <Outlet />
          </PageLayout>
        </div>
        <Footer />
        <CookieBanner />
      </div>
    </div>
  );
};

export default Layout;
