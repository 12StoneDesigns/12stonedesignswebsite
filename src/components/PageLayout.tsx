import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen text-[#00F3FF] relative">
      {/* Content */}
      <div className="relative z-content">
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
