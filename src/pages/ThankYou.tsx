import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

const ThankYou = () => {
  return (
    <main className="min-h-screen text-[#00F3FF] bg-black relative">
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

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full animate-fade-in">
          <div className="bg-black/40 backdrop-blur-sm p-8 sm:p-12 rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-500">
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 animate-ping">
                  <CheckCircle className="h-16 w-16 text-[#39FF14] opacity-50" />
                </div>
                <CheckCircle className="h-16 w-16 text-[#39FF14] relative animate-bounce" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
                Thank You!
              </h1>
              
              <p className="text-xl text-[#00F3FF] mb-8 max-w-lg text-center">
                Your message has been received. We'll get back to you as soon as possible.
              </p>

              <Link
                to="/"
                className="group inline-flex items-center px-6 py-3 rounded-md bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Return Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
