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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            Our Services
          </h2>
          <p className="mt-4 text-[#00F3FF] max-w-2xl mx-auto">
            We provide comprehensive branding and web development solutions to help your business establish a strong foundation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              to={service.href}
              className="group relative bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <service.icon className="h-6 w-6 text-[#6F00FF]" />
                <span className="text-sm text-[#39FF14]">{service.status}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#00F3FF] mb-2 group-hover:text-[#39FF14] transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-[#00F3FF] text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;