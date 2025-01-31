import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last updated: January 6, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using 12Stone Designs' services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Services</h2>
            <p className="text-gray-300">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Complying with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
            <p className="text-gray-300">
              All content, features, and functionality of our services are owned by 12Stone Designs and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-300">
              12Stone Designs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Modifications</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact</h2>
            <p className="text-gray-300">
              For questions about these Terms, please contact us at:
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

export default Terms;
