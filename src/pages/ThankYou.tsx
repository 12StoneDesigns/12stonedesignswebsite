import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
          <CheckCircle className="h-16 w-16 text-neon-green mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl mb-8">
            Your message has been received. We'll get back to you as soon as possible.
          </p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-neon-green to-neon-blue text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
