import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last updated: January 6, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300">
              This Privacy Policy describes how 12Stone Designs collects, uses, and shares your personal information when you use our services.
            </p>
            <p className="text-gray-300">
              12Stone Designs may collect personal information that you provide directly to us, including but not limited to your name, email address, and any other information you choose to provide.
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Create an account</li>
              <li>Use our applications</li>
              <li>Contact us for support</li>
              <li>Subscribe to our newsletter</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Provide and maintain our services</li>
              <li>Improve user experience</li>
              <li>Send important updates and notifications</li>
              <li>Analyze usage patterns and optimize performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
            <p className="text-gray-300">
              12Stone Designs uses industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Your Rights</h2>
            <p className="text-gray-300">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;
