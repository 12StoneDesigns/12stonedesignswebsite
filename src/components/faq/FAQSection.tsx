import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does 12Stone Designs offer?",
    answer: "We offer comprehensive web design, brand development, web application development, rebranding services, and brand consulting. Our solutions are tailored to help businesses establish a strong digital presence and brand identity."
  },
  {
    question: "How long does a typical web design project take?",
    answer: "Project timelines vary based on complexity and scope. A basic website typically takes 4-6 weeks, while more complex web applications can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing website maintenance?",
    answer: "Yes, we offer website maintenance packages that include regular updates, security monitoring, performance optimization, and content updates to ensure your website remains current and secure."
  },
  {
    question: "What's included in your brand development service?",
    answer: "Our brand development service includes brand strategy, visual identity creation (logo, color palette, typography), brand guidelines, messaging framework, and brand collateral design. We ensure your brand has a strong foundation for growth."
  },
  {
    question: "Can you help with existing website redesign?",
    answer: "Absolutely! We specialize in website redesigns, helping businesses modernize their online presence while maintaining their brand identity. We'll analyze your current site and recommend improvements for better user experience and performance."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[#00F3FF] max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-[#00F3FF] rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm hover:border-[#39FF14] transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-[#00F3FF] font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#39FF14]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#00F3FF]" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-300 ${
                  openIndex === index ? 'py-4 border-t border-[#00F3FF]/20' : 'h-0 overflow-hidden'
                }`}
              >
                <p className="text-[#00F3FF] text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Schema Markup for FAQs */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
};

export default FAQSection;
