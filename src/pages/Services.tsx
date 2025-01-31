import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Custom, responsive websites that captivate your audience and drive results.',
      features: [
        'Responsive Design',
        'UI/UX Design',
        'Mobile-First Approach',
        'Performance Optimization',
        'SEO Best Practices',
        'Cross-Browser Compatibility'
      ],
      process: [
        'Discovery & Planning',
        'Wireframing',
        'Design Concepts',
        'Development',
        'Testing & Refinement',
        'Launch & Support'
      ],
      link: '/web-design'
    },
    {
      title: 'Web Applications',
      description: 'Powerful, scalable web applications that streamline your business operations.',
      features: [
        'Custom Development',
        'API Integration',
        'Database Design',
        'Authentication & Security',
        'Cloud Deployment',
        'Performance Monitoring'
      ],
      process: [
        'Requirements Analysis',
        'System Architecture',
        'Development Sprints',
        'Quality Assurance',
        'Deployment',
        'Maintenance & Updates'
      ],
      link: '/web-applications'
    },
    {
      title: 'Brand Development',
      description: 'Comprehensive branding solutions that establish your unique market presence.',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Visual Identity',
        'Brand Strategy',
        'Marketing Collateral',
        'Brand Voice & Messaging'
      ],
      process: [
        'Brand Discovery',
        'Market Research',
        'Concept Development',
        'Design Execution',
        'Brand Guidelines',
        'Implementation Support'
      ],
      link: '/brand-development'
    },
    {
      title: 'Rebranding',
      description: 'Strategic rebranding services to evolve and strengthen your market position.',
      features: [
        'Brand Audit',
        'Identity Redesign',
        'Market Repositioning',
        'Communication Strategy',
        'Implementation Plan',
        'Brand Migration'
      ],
      process: [
        'Current Brand Analysis',
        'Stakeholder Input',
        'Strategy Development',
        'Design Evolution',
        'Rollout Planning',
        'Launch & Transition'
      ],
      link: '/rebranding'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your unique needs. Each service is crafted with 
            precision, expertise, and a commitment to excellence.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-neon-green mb-4">{service.title}</h2>
                <p className="text-xl text-gray-300 mb-8">{service.description}</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-neon-green mr-2">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Our Process</h3>
                    <ul className="space-y-3">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="text-neon-blue mr-2">{stepIndex + 1}.</span>
                          <span className="text-gray-300">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to={service.link}
                    className="inline-flex items-center px-6 py-3 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-200 rounded-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
