import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/contact/ContactSection';
import { motion } from 'framer-motion';

const BrandConsulting = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Create a style element for the animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes moveBackground {
        0% { background-position: 0 0; }
        100% { background-position: 60px 60px; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2339FF14' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundPosition: '0 0',
          backgroundSize: '60px 60px',
          animation: 'moveBackground 30s linear infinite'
        }}
      />

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn}>
            <Link to="/" className="inline-flex items-center text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300 mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Services
            </Link>
            
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-[#00F3FF] via-[#6F00FF] to-[#39FF14] text-transparent bg-clip-text">
              Brand Consulting
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <motion.p 
                className="text-xl mb-8 text-[#00F3FF]"
                {...fadeIn}
              >
                Strategic insights and recommendations to strengthen and grow your brand.
              </motion.p>
              
              <motion.div
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="backdrop-blur-lg bg-black/30 rounded-lg p-8 mb-8"
              >
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F3FF] to-[#39FF14] text-transparent bg-clip-text">
                  Consulting Services
                </h2>
                <ul className="list-none space-y-4 mb-8">
                  {[
                    'Brand Strategy Development',
                    'Market Research & Analysis',
                    'Competitive Positioning',
                    'Brand Voice & Messaging',
                    'Customer Experience Strategy'
                  ].map((service, index) => (
                    <motion.li
                      key={index}
                      variants={fadeIn}
                      className="flex items-start group"
                    >
                      <span className="text-[#39FF14] mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                      <span className="text-[#00F3FF] group-hover:text-[#6F00FF] transition-colors duration-300">
                        {service}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="backdrop-blur-lg bg-black/30 rounded-lg p-8"
              >
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#39FF14] to-[#6F00FF] text-transparent bg-clip-text">
                  Our Approach
                </h2>
                <motion.p 
                  variants={fadeIn}
                  className="mb-4 text-[#00F3FF]"
                >
                  We take a data-driven approach to brand consulting, combining market research, 
                  consumer insights, and industry expertise to develop actionable recommendations 
                  for your brand's growth.
                </motion.p>
                <motion.p 
                  variants={fadeIn}
                  className="mb-8 text-[#00F3FF]"
                >
                  Our consulting services are tailored to your specific needs and goals, ensuring 
                  you receive practical, implementable solutions that drive real results.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default BrandConsulting;
