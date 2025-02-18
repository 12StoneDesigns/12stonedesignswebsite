import React from 'react';
import { useLocation } from 'react-router-dom';
import LocalBusinessSchema from './LocalBusinessSchema';
import BreadcrumbSchema from './BreadcrumbSchema';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <main className="relative z-10">
      <LocalBusinessSchema />
      {!isHomePage && <BreadcrumbSchema />}
      {children}
    </main>
  );
};

export default PageLayout;
