import React from 'react';
import { PenTool, Globe, Repeat, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { routes } from '../config/routes';

const services = [
  {
    name: 'Brand Development',
    description: 'Complete brand strategy, visual identity creation, and positioning for your business.',
    icon: PenTool,
    status: 'Available',
    href: routes.services.brandDevelopment
  },
  {
    name: 'Web Design & Development',
    description: 'Modern, user-friendly websites that align with your brand identity and business goals.',
    icon: Globe,
    status: 'Available',
    href: routes.services.webDesign
  },
  {
    name: 'Rebranding Services',
    description: 'Help established businesses realign their branding with current goals and markets.',
    icon: Repeat,
    status: 'Available',
    href: routes.services.rebranding
  },
  {
    name: 'Web App Development',
    description: 'Custom web applications and software solutions tailored to your business needs and workflows.',
    icon: LineChart,
    status: 'Available',
    href: routes.services.webApplications
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive branding and web development solutions to help your business establish a strong foundation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              to={service.href}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-neon-blue/20 hover:border-neon-green/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <service.icon className="h-6 w-6 text-neon-green" />
                <span className="text-sm text-neon-green">{service.status}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;