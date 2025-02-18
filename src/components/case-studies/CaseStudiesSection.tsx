import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
  technologies: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "E-commerce Platform Redesign",
    client: "Fashion Retailer",
    industry: "Retail",
    challenge: "Outdated website with poor mobile experience and low conversion rates.",
    solution: "Complete redesign with responsive layout, improved navigation, and optimized checkout process.",
    results: [
      "150% increase in mobile conversions",
      "45% reduction in cart abandonment",
      "60% improvement in page load speed"
    ],
    imageUrl: "/images/case-studies/ecommerce-redesign.jpg",
    technologies: ["React", "Node.js", "Shopify", "TailwindCSS"]
  },
  {
    title: "Brand Identity Transformation",
    client: "Tech Startup",
    industry: "Technology",
    challenge: "Inconsistent brand identity affecting market positioning and recognition.",
    solution: "Comprehensive brand redesign including logo, color scheme, and brand guidelines.",
    results: [
      "200% increase in brand recognition",
      "35% improvement in user engagement",
      "40% increase in social media following"
    ],
    imageUrl: "/images/case-studies/brand-transformation.jpg",
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"]
  },
  {
    title: "Web Application Development",
    client: "Healthcare Provider",
    industry: "Healthcare",
    challenge: "Need for secure, efficient patient management system.",
    solution: "Custom web application with patient portal and administrative dashboard.",
    results: [
      "70% reduction in administrative time",
      "90% patient satisfaction rate",
      "50% decrease in scheduling errors"
    ],
    imageUrl: "/images/case-studies/healthcare-app.jpg",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"]
  }
];

const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            Case Studies
          </h2>
          <p className="mt-4 text-[#00F3FF] max-w-2xl mx-auto">
            Explore how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article 
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-[#00F3FF] rounded-lg overflow-hidden hover:border-[#39FF14] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.imageUrl}
                  alt={`${study.title} case study`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="400"
                  height="192"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 text-sm bg-black/60 backdrop-blur-sm text-[#39FF14] rounded-full border border-[#39FF14]">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#00F3FF] mb-2">{study.title}</h3>
                <p className="text-[#00F3FF]/80 text-sm mb-4">{study.challenge}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#39FF14] mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-[#00F3FF] flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2 text-[#6F00FF]" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {study.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-xs bg-[#6F00FF]/20 text-[#6F00FF] rounded-md border border-[#6F00FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Schema Markup for Case Studies */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": caseStudies.map((study, index) => ({
              "@type": "Article",
              "position": index + 1,
              "name": study.title,
              "description": study.challenge,
              "about": {
                "@type": "Thing",
                "name": study.industry
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
