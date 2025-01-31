import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Palette, Code, BarChart3, Layout, RefreshCw, Zap } from 'lucide-react';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';
import { typography } from '../styles/typography';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: <Palette className="w-8 h-8 text-neon-green" />,
    title: 'Brand Development',
    description: 'Create a strong, memorable brand identity that resonates with your audience and sets you apart from competitors.',
    link: '/services/brand-development'
  },
  {
    icon: <Layout className="w-8 h-8 text-neon-green" />,
    title: 'Web Design',
    description: 'Custom website designs that combine stunning visuals with intuitive user experiences.',
    link: '/services/web-design'
  },
  {
    icon: <Code className="w-8 h-8 text-neon-green" />,
    title: 'Web Applications',
    description: 'Scalable, feature-rich web applications built with cutting-edge technologies.',
    link: '/services/web-applications'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-neon-green" />,
    title: 'Brand Consulting',
    description: 'Strategic guidance to help you make informed decisions about your brand's direction and growth.',
    link: '/services/brand-consulting'
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-neon-green" />,
    title: 'Rebranding',
    description: 'Revitalize your brand identity while maintaining the core values that make your business unique.',
    link: '/services/rebranding'
  },
  {
    icon: <Zap className="w-8 h-8 text-neon-green" />,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies that align with your business goals and drive growth.',
    link: '/services/digital-strategy'
  }
];

const Services: React.FC = () => {
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
        <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className={`${typography.h1} text-center mb-16`}>
              <span className={typography.gradient}>
                Our Services
              </span>
            </h1>
            <p className={`${typography.bodyLg} text-center max-w-3xl mx-auto mb-16`}>
              From brand development to web applications, we offer comprehensive solutions to help your business thrive in the digital landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-neon-green/50 transition-all group"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className={`${typography.h5} mb-4`}>{service.title}</h3>
                  <p className={`${typography.body} mb-8`}>{service.description}</p>
                  <Link
                    to={service.link}
                    className={`${typography.buttonPrimary} inline-flex items-center`}
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
