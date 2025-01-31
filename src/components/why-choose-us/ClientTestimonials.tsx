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
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
        Client Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#00F3FF] hover:border-[#39FF14] relative group transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-[#6F00FF] absolute -top-4 -left-4 group-hover:text-[#39FF14] transition-all duration-300" />
            <p className="text-[#00F3FF] mb-6 italic">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold text-[#00F3FF]">{testimonial.author}</p>
              <p className="text-sm text-[#39FF14]">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
