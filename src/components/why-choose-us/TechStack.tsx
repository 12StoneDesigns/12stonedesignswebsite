import React from 'react';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      techs: [
        { name: "React", description: "Modern UI development" },
        { name: "TypeScript", description: "Type-safe code" },
        { name: "Tailwind CSS", description: "Responsive styling" }
      ]
    },
    {
      category: "Development",
      techs: [
        { name: "Vite", description: "Fast build tools" },
        { name: "Git", description: "Version control" },
        { name: "Node.js", description: "Runtime environment" }
      ]
    },
    {
      category: "Design",
      techs: [
        { name: "Figma", description: "UI/UX design" },
        { name: "Adobe Suite", description: "Graphics & assets" },
        { name: "Responsive Design", description: "Mobile-first approach" }
      ]
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-neon-blue">Our Technology Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((category) => (
          <div 
            key={category.category}
            className="bg-gray-900/50 rounded-xl p-6 border border-neon-blue/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-neon-blue">{category.category}</h3>
            <div className="space-y-4">
              {category.techs.map((tech) => (
                <div key={tech.name} className="group">
                  <div className="flex items-center mb-1">
                    <div className="w-2 h-2 bg-neon-blue rounded-full mr-2 group-hover:w-3 transition-all duration-300"></div>
                    <h4 className="font-semibold text-white">{tech.name}</h4>
                  </div>
                  <p className="text-gray-400 text-sm ml-4">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
