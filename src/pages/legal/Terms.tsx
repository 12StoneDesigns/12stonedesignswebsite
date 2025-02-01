import React from 'react';
import backgroundImage from '../../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

const Terms = () => {
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
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-[#00F3FF] mb-6">Last updated: January 30, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">1. Agreement to Terms</h2>
              <p className="text-[#00F3FF]/90">
                By accessing or using the services of 12Stone Designs ("Company", "we", "us", "our"), you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">2. Intellectual Property Rights</h2>
              <p className="text-[#00F3FF]/90">
                The Service and its original content, features, and functionality are owned by 12Stone Designs and are protected by copyright and other intellectual property laws.
              </p>
              <div className="mt-4 space-y-2 text-[#00F3FF]/90">
                <p className="font-semibold text-[#00F3FF]">2.1 Our Content</p>
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of 12Stone Designs or its content suppliers and is protected by copyright laws.
                </p>
                <p className="font-semibold text-[#00F3FF]">2.2 Your Use of Our Content</p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content on our website, except as follows:
                </p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Your computer may temporarily store copies of materials for viewing purposes only</li>
                  <li>You may print or download one copy of a reasonable number of pages for your personal, non-commercial use</li>
                  <li>You may share links to our content on social media platforms</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">3. User Content</h2>
              <p className="text-[#00F3FF]/90">
                By submitting content to us, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute it in any media.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">4. Limitation of Liability</h2>
              <p className="text-[#00F3FF]/90">
                12Stone Designs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">5. Contact Information</h2>
              <p className="text-[#00F3FF]/90">
                If you have any questions about these Terms, please contact us at:
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
    </div>
  );
};

export default Terms;
