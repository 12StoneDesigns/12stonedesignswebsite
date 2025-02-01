import React from 'react';
import backgroundImage from '../../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

const Privacy = () => {
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
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-[#00F3FF] mb-6">Last updated: January 30, 2025</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">1. Information We Collect</h2>
              <p className="text-[#00F3FF]/90">
                12Stone Designs ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share your personal information when you use our services.
              </p>
              <p className="text-[#00F3FF]/90 mt-4">
                We collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-[#00F3FF]/90 mt-2">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business information</li>
                <li>IP address and device information</li>
                <li>Cookies and usage data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">2. Legal Basis for Processing (GDPR)</h2>
              <p className="text-[#00F3FF]/90">
                Under the EU General Data Protection Regulation (GDPR), we process your personal data based on:
              </p>
              <ul className="list-disc pl-6 text-[#00F3FF]/90 mt-2">
                <li>Your consent</li>
                <li>Performance of a contract</li>
                <li>Legal obligations</li>
                <li>Legitimate business interests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">3. Your Rights Under GDPR</h2>
              <p className="text-[#00F3FF]/90">
                If you are in the European Economic Area (EEA), you have these rights:
              </p>
              <ul className="list-disc pl-6 text-[#00F3FF]/90 mt-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restriction of processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">4. International Data Transfers</h2>
              <p className="text-[#00F3FF]/90">
                We may transfer your personal data to countries outside the EEA. When we do, we ensure appropriate safeguards are in place through:
              </p>
              <ul className="list-disc pl-6 text-[#00F3FF]/90 mt-2">
                <li>Standard contractual clauses</li>
                <li>Privacy Shield certification</li>
                <li>Adequacy decisions by the European Commission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">5. Data Security</h2>
              <p className="text-[#00F3FF]/90">
                We implement appropriate technical and organizational measures to protect your personal data, including:
              </p>
              <ul className="list-disc pl-6 text-[#00F3FF]/90 mt-2">
                <li>SSL/TLS encryption</li>
                <li>Access controls</li>
                <li>Regular security assessments</li>
                <li>Employee training</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">6. Data Retention</h2>
              <p className="text-[#00F3FF]/90">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal and compliance obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">7. Contact Information</h2>
              <p className="text-[#00F3FF]/90">
                For any privacy-related questions or to exercise your rights, contact our Data Protection Officer:
              </p>
              <div className="text-[#00F3FF] mt-4">
                <p>Email: privacy@12stonedesigns.com</p>
                <p>Phone: (479) 407-9839</p>
                <p>Address: Bella Vista, AR</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] bg-clip-text text-transparent">8. Updates to This Policy</h2>
              <p className="text-[#00F3FF]/90">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
