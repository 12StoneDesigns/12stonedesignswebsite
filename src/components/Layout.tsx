import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './footer/Footer';
import CookieBanner from './cookie/CookieBanner';
import PageLayout from './PageLayout';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navigation />
      <div className="flex-grow">
        <PageLayout>
          <Outlet />
        </PageLayout>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
