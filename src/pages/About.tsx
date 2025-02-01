import * as React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Palette, BarChart3, Users, Target, Zap } from 'lucide-react';
import backgroundImage from '../assets/images/A_modern_and_creative_workspace_representi_3.jpg';
import { typography } from '../styles/typography';

interface ExpertiseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const expertise: ExpertiseItem[] = [
    {
      icon: <Palette className="w-8 h-8 text-[#6F00FF]" />,
      title: 'Creative Design',
      description: 'Crafting visually stunning and intuitive user experiences that captivate and engage.'
    },
    {
      icon: <Code className="w-8 h-8 text-[#6F00FF]" />,
      title: 'Development',
      description: 'Building robust, scalable solutions using cutting-edge technologies and best practices.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#6F00FF]" />,
      title: 'Digital Strategy',
      description: 'Creating comprehensive digital strategies that drive growth and achieve business goals.'
    }
  ];

  return (
    <main className="min-h-screen text-[#00F3FF] bg-black relative">
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
      
      <div className="relative z-20">
        {/* Hero Section */}
        <div className="min-h-[50vh] flex items-center justify-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
              About 12 Stone Designs
            </h1>
            <p className="text-xl text-[#00F3FF] max-w-3xl mx-auto mb-8 animate-fade-in">
              At 12Stone Designs, we blend creativity with technical expertise to deliver exceptional digital solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-md bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300 group"
              >
                <span>Get Started</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x text-center">
              Our Expertise
            </h2>
            <p className="text-xl text-[#00F3FF] text-center mb-12 animate-fade-in">
              We combine innovative thinking with technical excellence to create solutions that make a difference.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
              {expertise.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group"
                >
                  <div className="text-[#6F00FF] mb-6 group-hover:text-[#39FF14] transition-colors duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent group-hover:animate-gradient-x">
                    {item.title}
                  </h3>
                  <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x text-center">
              Our Values
            </h2>
            <p className="text-xl text-[#00F3FF] text-center mb-12 animate-fade-in">
              Guided by strong principles, we deliver excellence in every project.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <div className="flex items-start">
                  <Users className="w-12 h-12 text-[#6F00FF] mr-6 flex-shrink-0 group-hover:text-[#39FF14] transition-colors duration-300" />
                  <div>
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent group-hover:animate-gradient-x">
                      Client-Centric Approach
                    </h3>
                    <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                      Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <div className="flex items-start">
                  <Target className="w-12 h-12 text-[#6F00FF] mr-6 flex-shrink-0 group-hover:text-[#39FF14] transition-colors duration-300" />
                  <div>
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent group-hover:animate-gradient-x">
                      Results-Driven
                    </h3>
                    <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                      We focus on delivering measurable results that help your business grow and succeed in the digital landscape.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#00F3FF] hover:border-[#39FF14] transition-all duration-300 group">
                <div className="flex items-start">
                  <Zap className="w-12 h-12 text-[#6F00FF] mr-6 flex-shrink-0 group-hover:text-[#39FF14] transition-colors duration-300" />
                  <div>
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent group-hover:animate-gradient-x">
                      Innovation
                    </h3>
                    <p className="text-[#00F3FF] group-hover:text-[#39FF14] transition-colors duration-300">
                      We stay ahead of the curve, implementing cutting-edge technologies and creative solutions to solve complex challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
