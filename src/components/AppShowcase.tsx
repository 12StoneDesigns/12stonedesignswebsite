import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { typography } from '../styles/typography';

interface Application {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const applications: Application[] = [
  {
    title: 'Web Applications',
    description: 'Custom web solutions tailored to your business needs, from simple websites to complex web applications.',
    imageUrl: '/images/web-app.jpg',
    link: '/contact'
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences across all devices.',
    imageUrl: '/images/mobile-app.jpg',
    link: '/contact'
  },
  {
    title: 'Desktop Software',
    description: 'Powerful desktop applications that streamline your business processes and boost productivity.',
    imageUrl: '/images/desktop-app.jpg',
    link: '/contact'
  }
];

const AppShowcase: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className={`${typography.h1} text-center mb-16`}>
        <span className={typography.gradient}>
          Our Applications
        </span>
      </h1>
      <p className="text-[#00F3FF] text-lg sm:text-xl lg:text-2xl text-center max-w-3xl mx-auto mb-16">
        Discover our range of innovative applications designed to transform your digital presence and streamline your operations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {applications.map((app, index) => (
          <div
            key={index}
            className="p-8 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all group"
          >
            <h3 className="text-[#39FF14] text-xl sm:text-2xl lg:text-3xl font-bold mb-4">{app.title}</h3>
            <p className="text-[#00F3FF] text-lg mb-8">{app.description}</p>
            <Link
              to={app.link}
              className="inline-flex items-center text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300"
            >
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppShowcase;
