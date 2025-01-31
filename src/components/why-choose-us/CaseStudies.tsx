import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Transformation",
      client: "RetailPlus",
      description: "Modernized an outdated e-commerce platform, resulting in 150% increase in online sales",
      results: ["150% sales increase", "40% better conversion", "3x faster loading"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    },
    {
      title: "Brand Identity Overhaul",
      client: "InnovateX",
      description: "Complete brand redesign and website development for a tech startup",
      results: ["200% more leads", "Brand recognition up 80%", "5x social engagement"],
      image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
    },
    {
      title: "Digital Transformation",
      client: "GrowthWave",
      description: "Comprehensive digital strategy and implementation for a traditional business",
      results: ["90% process automation", "60% cost reduction", "2x productivity"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
        Success Stories
      </h2>
      <div className="space-y-12">
        {caseStudies.map((study, index) => (
          <div 
            key={index}
            className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00F3FF] mb-2">{study.title}</h3>
                <p className="text-[#6F00FF] mb-4">{study.client}</p>
                <p className="text-[#00F3FF] mb-6">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-[#00F3FF]">
                      <ArrowRight className="w-4 h-4 text-[#39FF14] mr-2" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src={study.image} 
                  alt={`${study.title} case study`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F00FF]/20 to-[#39FF14]/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
