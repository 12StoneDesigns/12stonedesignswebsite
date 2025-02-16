import React from 'react';
import StarsCanvas from './StarsBackground';

// Import the image using Vite's asset handling
const backgroundImage = new URL('../assets/images/pngegg(1).png', import.meta.url).href;
console.log('Background image URL:', backgroundImage);

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen text-[#00F3FF] bg-black relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={backgroundImage}
          alt=""
          className="absolute left-1/2 top-1/2 w-[1200px] h-[1200px] object-contain opacity-[0.5] mix-blend-screen pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%) rotate(-5deg) scale(1.5)',
            filter: 'brightness(1.5) contrast(1.2)',
            willChange: 'transform',
          }}
          onLoad={(e) => {
            console.log('Background image loaded:', e.currentTarget.src);
          }}
          onError={(e) => {
            console.error('Failed to load background image:', e.currentTarget.src, e);
          }}
        />
      </div>
      
      {/* Stars Background */}
      <StarsCanvas />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
