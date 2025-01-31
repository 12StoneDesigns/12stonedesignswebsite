import React from 'react';
import { Code2, Users, Lightbulb, Award, Workflow, Laptop } from 'lucide-react';
import TechStack from './TechStack';

const WhyChooseUsSection = () => {
  const uniqueApproach = [
    {
      title: "Foundation-First Approach",
      description: "We believe in building brands on solid foundations, just like a cornerstone supports an entire structure.",
      icon: Lightbulb
    },
    {
      title: "Client Partnership",
      description: "We work closely with you, ensuring your vision and goals are at the center of every decision.",
      icon: Users
    },
    {
      title: "Technical Excellence",
      description: "Our solutions leverage cutting-edge technologies while maintaining clean, maintainable code.",
      icon: Code2
    }
  ];

  const expertise = [
    {
      area: "Brand Development",
      achievements: "Created memorable brands across various industries",
      icon: Award
    },
    {
      area: "Web Development",
      achievements: "Built scalable, modern web applications",
      icon: Laptop
    },
    {
      area: "Process Management",
      achievements: "Streamlined development workflows for optimal results",
      icon: Workflow
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src="/images/12stone-designs-high-resolution-logo.png"
              alt="12Stone Designs Logo"
              className="h-40 w-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            Why Choose 12Stone Designs?
          </h1>
          <p className="text-xl text-[#00F3FF] max-w-3xl mx-auto">
            We combine technical expertise with creative innovation to build digital solutions 
            that stand the test of time.
          </p>
        </div>

        {/* Unique Approach Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            Our Unique Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uniqueApproach.map((approach) => {
              const Icon = approach.icon;
              return (
                <div 
                  key={approach.title}
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-[#6F00FF] mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-[#00F3FF]">{approach.title}</h3>
                  <p className="text-[#00F3FF]">{approach.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Expertise Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            Team Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.area}
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-[#6F00FF] mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-[#00F3FF]">{item.area}</h3>
                  <p className="text-[#00F3FF]">{item.achievements}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Overview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            Our Process
          </h2>
          <div className="relative">
            <div className="absolute top-0 left-1/2 h-full w-px bg-[#6F00FF]/20"></div>
            <div className="space-y-12">
              {[
                { step: 1, title: "Discovery & Planning", description: "Understanding your goals and planning the perfect solution" },
                { step: 2, title: "Design & Development", description: "Creating beautiful, functional solutions with attention to detail" },
                { step: 3, title: "Testing & Refinement", description: "Ensuring everything works flawlessly" },
                { step: 4, title: "Launch & Support", description: "Successful deployment and ongoing maintenance" }
              ].map((step) => (
                <div key={step.step} className="relative">
                  <div className="flex items-center">
                    <div className="flex-1 text-right mr-8 md:mr-16">
                      <div className="inline-flex items-center">
                        <span className="text-[#39FF14] font-bold text-xl">Step {step.step}</span>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#39FF14] flex items-center justify-center">
                      <span className="text-black font-bold">{step.step}</span>
                    </div>
                    <div className="flex-1 ml-8 md:ml-16">
                      <h3 className="text-xl font-semibold text-[#00F3FF]">{step.title}</h3>
                      <p className="text-[#00F3FF] mt-2">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <TechStack />
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
