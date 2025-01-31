import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Globe, RefreshCw, LineChart, Code } from 'lucide-react';
import { routes } from '../../config/routes';

const ServicesSection = () => {
  const services = [
    {
      name: 'Brand Development',
      description: 'Complete brand strategy, visual identity creation, and positioning for your business.',
      icon: ExternalLink,
      link: routes.services.brandDevelopment,
    },
    {
      name: 'Web Design',
      description: 'Beautiful, responsive websites that engage your audience and drive results.',
      icon: Globe,
      link: routes.services.webDesign,
    },
    {
      name: 'Web Applications',
      description: 'Custom web applications that streamline operations and enhance user experience.',
      icon: Code,
      link: routes.services.webApplications,
    },
    {
      name: 'Rebranding Services',
      description: 'Help established businesses realign their branding with current goals and markets.',
      icon: RefreshCw,
      link: routes.services.rebranding,
    },
    {
      name: 'Brand Consulting',
      description: 'Strategic insights and recommendations to strengthen and grow your brand.',
      icon: LineChart,
      link: routes.services.brandConsulting,
    },
  ];

  return (
    <section className="py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">Our Services</span>
          </h2>
          <p className="text-gray-300 text-lg mb-16">
            We provide comprehensive branding and web development solutions to help your business
            establish a strong foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.name}
                to={service.link}
                className="group relative p-6 border border-neon-green/20 rounded-lg bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-neon-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-green transition-colors duration-200">
                      {service.name}
                    </h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8">
                  <span className="text-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn More →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
