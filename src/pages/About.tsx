import * as React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Palette, BarChart3, Users, Target, Zap } from 'lucide-react';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';
import { typography } from '../styles/typography';

interface ExpertiseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const expertise: ExpertiseItem[] = [
    {
      icon: <Palette className="w-8 h-8 text-neon-green" />,
      title: 'Creative Design',
      description: 'Crafting visually stunning and intuitive user experiences that captivate and engage.'
    },
    {
      icon: <Code className="w-8 h-8 text-neon-green" />,
      title: 'Development',
      description: 'Building robust, scalable solutions using cutting-edge technologies and best practices.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-neon-green" />,
      title: 'Digital Strategy',
      description: 'Creating comprehensive digital strategies that drive growth and achieve business goals.'
    }
  ];

  return (
    <main className="min-h-screen text-white relative">
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
      <div className="fixed inset-0 w-full h-full z-10 bg-black/50" />
      
      <div className="relative z-20">
        {/* Hero Section */}
        <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className={`${typography.h1} mb-16`}>
              <span className={typography.gradient}>
                About 12Stone Designs
              </span>
            </h1>
            <p className={`${typography.bodyLg} max-w-3xl mx-auto mb-16`}>
              At 12Stone Designs, we blend creativity with technical expertise to deliver exceptional digital solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact"
                className={typography.buttonPrimary}
              >
                <span>Get Started</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${typography.sectionTitle} ${typography.gradient}`}>
              Our Expertise
            </h2>
            <p className={typography.sectionSubtitle}>
              We combine innovative thinking with technical excellence to create solutions that make a difference.
            </p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-neon-green/50 transition-all group"
                >
                  <div className="mb-6">{item.icon}</div>
                  <h3 className={`${typography.h5} mb-4`}>{item.title}</h3>
                  <p className={typography.body}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`${typography.sectionTitle} ${typography.gradient}`}>
              Our Values
            </h2>
            <p className={typography.sectionSubtitle}>
              Guided by strong principles, we deliver excellence in every project.
            </p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-neon-green/50 transition-all group">
                <div className="flex items-start">
                  <Users className="w-12 h-12 text-neon-green mr-6 flex-shrink-0" />
                  <div>
                    <h3 className={`${typography.h5} mb-4`}>Client-Centric Approach</h3>
                    <p className={typography.body}>
                      Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-neon-green/50 transition-all group">
                <div className="flex items-start">
                  <Target className="w-12 h-12 text-neon-green mr-6 flex-shrink-0" />
                  <div>
                    <h3 className={`${typography.h5} mb-4`}>Results-Driven</h3>
                    <p className={typography.body}>
                      We focus on delivering measurable results that help your business grow and succeed in the digital landscape.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-neon-green/50 transition-all group">
                <div className="flex items-start">
                  <Zap className="w-12 h-12 text-neon-green mr-6 flex-shrink-0" />
                  <div>
                    <h3 className={`${typography.h5} mb-4`}>Innovation</h3>
                    <p className={typography.body}>
                      We stay ahead of the curve, implementing cutting-edge technologies and creative solutions to solve complex challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
