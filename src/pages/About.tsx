import * as React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Palette, BarChart3, Users, Target, Zap } from 'lucide-react';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';

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
        <div className="h-[60vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                Crafting Digital Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              We are more than just a digital agency. We are your partners in creating 
              exceptional digital experiences that drive real business results.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                  Our Story
                </span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  As a fresh and innovative startup, we bring a new perspective to digital design 
                  and development. While we may be young, our passion for creating exceptional 
                  digital experiences drives everything we do.
                </p>
                <p>
                  Our name, 12Stone Designs, represents our commitment to building strong, lasting 
                  foundations for our clients' digital presence. Just as a cornerstone provides 
                  stability, we aim to be a reliable partner in your digital journey.
                </p>
                <p>
                  We combine fresh ideas with industry best practices to deliver solutions that 
                  help businesses establish and grow their online presence effectively.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img 
                  src="/images/our-story.jpg" 
                  alt="Our Story" 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-neon-green to-neon-blue rounded-lg opacity-20 blur-xl" />
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
              Our Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-800 hover:border-neon-green/50 transition-all group hover:bg-gray-900/40"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-900/40">
                  <Target className="w-8 h-8 text-neon-green mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Precision</h3>
                  <p className="text-gray-300">Attention to every detail in our work</p>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-900/40">
                  <Users className="w-8 h-8 text-neon-green mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                  <p className="text-gray-300">Working together towards success</p>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-900/40">
                  <Zap className="w-8 h-8 text-neon-green mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                  <p className="text-gray-300">Pushing boundaries in technology</p>
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:bg-gray-900/40">
                  <Target className="w-8 h-8 text-neon-green mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                  <p className="text-gray-300">Delivering outstanding results</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                  Our Values
                </span>
              </h2>
              <p className="text-gray-300 mb-8">
                Our values are the cornerstone of everything we do. They guide our decisions, 
                shape our culture, and define how we work with our clients and each other.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-neon-green/10 text-neon-green border border-neon-green/50 rounded-lg hover:bg-neon-green/20 transition-all group"
              >
                Work With Us
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
