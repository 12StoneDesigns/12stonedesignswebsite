import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#00F3FF] mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-[#00F3FF] mb-6">Last updated: January 30, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#00F3FF] mb-4">1. Agreement to Terms</h2>
            <p className="text-[#00F3FF]">
              By accessing or using the services of 12Stone Designs ("Company", "we", "us", "our"), you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#00F3FF] mb-4">2. Intellectual Property Rights</h2>
            <p className="text-[#00F3FF]">
              The Service and its original content, features, and functionality are owned by 12Stone Designs and are protected by copyright and other intellectual property laws.
            </p>
            <div className="mt-4 space-y-2 text-[#00F3FF]">
              <p><strong>2.1 Our Content</strong></p>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of 12Stone Designs or its content suppliers and is protected by copyright laws.
              </p>
              <p><strong>2.2 Your Use of Our Content</strong></p>
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
            <h2 className="text-2xl font-semibold text-[#00F3FF] mb-4">3. User Content</h2>
            <p className="text-[#00F3FF]">
              By posting, uploading, or submitting content to our service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute that content for the purpose of providing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#00F3FF] mb-4">4. Prohibited Uses</h2>
            <p className="text-[#00F3FF]">
              You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-[#00F3FF] mt-2">
              <li>Use the Service in any way that violates applicable laws or regulations</li>
              <li>Infringe upon or violate our intellectual property rights or those of others</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Interfere with or disrupt the Service or servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#00F3FF] mb-4">5. DMCA Notice & Takedown Procedures</h2>
            <p className="text-[#00F3FF]">
              If you believe that any content on our website infringes upon your copyright, please send a notification containing:
            </p>
            <ul className="list-disc pl-6 text-[#00F3FF] mt-2">
              <li>Identification of the copyrighted work claimed to be infringed</li>
              <li>Identification of the allegedly infringing material</li>
              <li>Your contact information</li>
              <li>A statement of good faith belief</li>
              <li>A statement of accuracy under penalty of perjury</li>
            </ul>
            <p className="text-[#00F3FF] mt-4">
              Send DMCA notices to: dmca@12stonedesigns.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#00F3FF] mb-4">6. Limitation of Liability</h2>
            <p className="text-[#00F3FF]">
              12Stone Designs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#00F3FF] mb-4">7. Changes to Terms</h2>
            <p className="text-[#00F3FF]">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#00F3FF] mb-4">8. Contact Information</h2>
            <p className="text-[#00F3FF]">
              For any questions about these Terms, please contact us at:
            </p>
            <div className="text-[#00F3FF] mt-4">
              <p>Email: legal@12stonedesigns.com</p>
              <p>Phone: (479) 407-9839</p>
              <p>Address: Bella Vista, AR</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
