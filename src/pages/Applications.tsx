import React from 'react';
import AppShowcase from '../components/AppShowcase';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';
import { typography } from '../styles/typography';

const Applications = () => {
  return (
    <main className="min-h-screen text-white relative">
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: '0.3'
        }}
      />
      <div className="fixed inset-0 w-full h-full z-10 bg-black/50" />
      
      <div className="relative z-20">
        <div className="min-h-[80vh] flex items-center justify-center pt-24">
          <AppShowcase />
        </div>
      </div>
    </main>
  );
};

export default Applications;
