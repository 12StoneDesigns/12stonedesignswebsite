import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-cyan max-w-none">
        <h2>Information Collection and Use</h2>
        <p>
          We collect information to provide better services to our users and improve our website's functionality.
        </p>

        <h2>Data Protection</h2>
        <p>
          We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information at any time.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Privacy Policy, please contact us.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
