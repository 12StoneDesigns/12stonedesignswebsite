import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#00F3FF]">Thank You!</h1>
        <p className="text-xl mb-8">
          We've received your message and will get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 rounded-md bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
        >
          <span className="font-semibold">Return to Home</span>
        </Link>
      </div>
    </PageLayout>
  );
};

export default ThankYou;
