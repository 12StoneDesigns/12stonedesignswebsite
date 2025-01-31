import React from 'react';
import { Quote } from 'lucide-react';

const ClientTestimonials = () => {
  const testimonials = [
    {
      quote: "12Stone Designs transformed our online presence. Their attention to detail and strategic approach helped us achieve our business goals.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Solutions"
    },
    {
      quote: "Working with 12Stone was a game-changer. They didn't just build a website; they created a digital foundation for our brand's growth.",
      author: "Michael Chen",
      position: "Founder, InnovateX"
    },
    {
      quote: "Their expertise in both design and development made the entire process seamless. The results exceeded our expectations.",
      author: "Emily Rodriguez",
      position: "Marketing Director, GrowthWave"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-neon-green">Client Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-gray-900/50 rounded-xl p-6 border border-neon-green/20 relative group hover:border-neon-green/40 transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-neon-green/30 absolute -top-4 -left-4 group-hover:text-neon-green/50 transition-all duration-300" />
            <p className="text-gray-400 mb-6 italic">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-sm text-neon-green">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
