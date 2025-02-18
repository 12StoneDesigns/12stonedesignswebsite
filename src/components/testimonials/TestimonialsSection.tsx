import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  imageUrl: string;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechStart Solutions",
    content: "12Stone Designs transformed our digital presence completely. Their attention to detail and strategic approach to brand development helped us establish a strong market position. The new website has significantly improved our lead generation.",
    rating: 5,
    imageUrl: "/images/testimonials/sarah-johnson.jpg",
    projectType: "Brand Development & Web Design"
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "InnovateHealth",
    content: "Working with 12Stone Designs was a game-changer for our healthcare platform. They understood our unique requirements and delivered a secure, user-friendly web application that exceeded our expectations.",
    rating: 5,
    imageUrl: "/images/testimonials/michael-chen.jpg",
    projectType: "Web Application Development"
  },
  {
    name: "Emily Rodriguez",
    position: "Brand Manager",
    company: "Fashion Forward",
    content: "The rebranding process with 12Stone Designs was seamless and highly professional. They captured our vision perfectly and created a brand identity that resonates with our target audience.",
    rating: 5,
    imageUrl: "/images/testimonials/emily-rodriguez.jpg",
    projectType: "Rebranding"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            Client Testimonials
          </h2>
          <p className="mt-4 text-[#00F3FF] max-w-2xl mx-auto">
            See what our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-[#00F3FF] rounded-lg overflow-hidden hover:border-[#39FF14] transition-all duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#39FF14] text-[#39FF14]"
                      fill="currentColor"
                    />
                  ))}
                </div>
                
                <blockquote className="mb-6">
                  <p className="text-[#00F3FF] text-sm italic">"{testimonial.content}"</p>
                </blockquote>

                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div>
                    <div className="text-[#00F3FF] font-semibold">{testimonial.name}</div>
                    <div className="text-[#00F3FF]/80 text-sm">{testimonial.position}</div>
                    <div className="text-[#39FF14] text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-[#00F3FF]/20">
                <span className="text-sm text-[#6F00FF]">{testimonial.projectType}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Schema Markup for Testimonials */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": testimonials.map((testimonial, index) => ({
              "@type": "Review",
              "position": index + 1,
              "itemReviewed": {
                "@type": "Service",
                "name": testimonial.projectType,
                "provider": {
                  "@type": "Organization",
                  "name": "12Stone Designs"
                }
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": testimonial.name,
                "jobTitle": testimonial.position,
                "worksFor": {
                  "@type": "Organization",
                  "name": testimonial.company
                }
              },
              "reviewBody": testimonial.content
            }))
          })}
        </script>
      </div>
    </section>
  );
};

export default TestimonialsSection;
