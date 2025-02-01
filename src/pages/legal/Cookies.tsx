import React, { useState } from 'react';
import CookieSettingsPanel from '../../components/cookie/CookieSettings';

const Cookies = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last updated: January 6, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies</h2>
            <p className="text-gray-300">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to function properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                <p className="text-gray-300">
                  Required for basic website functionality. These cannot be disabled.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                <p className="text-gray-300">
                  Help us understand how visitors interact with our website.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Functional Cookies</h3>
                <p className="text-gray-300">
                  Enable enhanced functionality and personalization.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Managing Cookies</h2>
            <p className="text-gray-300">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Cookie Settings</h2>
            <p className="text-gray-300">
              You can adjust your cookie preferences at any time using our cookie settings panel:
            </p>
            <button 
              className="mt-4 px-4 py-2 bg-neon-green/10 text-neon-green border border-neon-green/50 rounded-md hover:bg-neon-green/20 transition-all duration-300"
              onClick={() => setIsSettingsOpen(true)}
            >
              Cookie Settings
            </button>
            <CookieSettingsPanel
              isOpen={isSettingsOpen}
              onClose={() => setIsSettingsOpen(false)}
            />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
            <p className="text-gray-300">
              If you have questions about our use of cookies, please contact us at:
              <br />
              <a href="mailto:contact@12stonedesigns.com" className="text-neon-green hover:underline">
                contact@12stonedesigns.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
