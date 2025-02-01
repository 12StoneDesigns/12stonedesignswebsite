import React, { useState } from 'react';
import CookieSettingsPanel from '../../components/cookie/CookieSettings';
import backgroundImage from '../../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

const Cookies = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image */}
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
      
      <div className="relative z-10 pt-20 pb-12 bg-black/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">Cookie Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-[#00F3FF] mb-6">Last updated: January 30, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">1. What Are Cookies</h2>
              <p className="text-[#00F3FF]/90">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#00F3FF] mb-2">Essential Cookies</h3>
                  <p className="text-[#00F3FF]/90">
                    Required for basic website functionality. These cannot be disabled.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#00F3FF] mb-2">Analytics Cookies</h3>
                  <p className="text-[#00F3FF]/90">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#00F3FF] mb-2">Functional Cookies</h3>
                  <p className="text-[#00F3FF]/90">
                    Enable enhanced functionality and personalization.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">3. Managing Cookies</h2>
              <p className="text-[#00F3FF]/90">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Cookie Settings
              </button>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">4. Contact Us</h2>
              <p className="text-[#00F3FF]/90">
                If you have any questions about our Cookie Policy, please contact us:
              </p>
              <div className="mt-4 text-[#00F3FF]">
                <p>Email: contact@12stonedesigns.com</p>
                <p>Phone: (479) 407-9839</p>
                <p>Address: Bella Vista, AR</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {isSettingsOpen && (
        <CookieSettingsPanel onClose={() => setIsSettingsOpen(false)} />
      )}
    </div>
  );
};

export default Cookies;
