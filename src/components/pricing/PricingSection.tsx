import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './PricingSection.module.css';

const tiers = [
  {
    name: 'Custom Landing Page',
    price: 399,
    originalPrice: 799,
    description: '🔥 LIMITED TIME OFFER! Professional landing page design.',
    features: [
      'Custom Design',
      'Mobile Responsive',
      'Contact Form Integration',
      'Call-to-Action Optimization',
      'Fast Loading Speed',
      'SEO Best Practices',
      'Social Proof Section',
      '2 Rounds of Revisions',
      '7 Days Support'
    ],
    cta: 'Claim Offer',
    href: '/contact',
    highlight: true
  },
  {
    name: 'Brand Development',
    price: 799,
    description: 'Essential brand identity package for small businesses.',
    features: [
      'Logo Design',
      'Color Palette',
      'Typography Selection',
      'Basic Brand Guidelines',
      'One Landing Page',
      'Business Card Design',
      'Social Media Templates',
      'Email Signature',
      '1 Round of Revisions'
    ],
    cta: 'Start Branding',
    href: '/contact'
  },
  {
    name: 'Web Design',
    price: 1499,
    description: 'Professional website design and development.',
    features: [
      'Custom Website Design',
      'Mobile Responsive Layout',
      'Up to 5 Core Pages',
      'Contact Form Integration',
      'Basic SEO Setup',
      'Social Media Integration',
      'Content Management System',
      '14 Days Support'
    ],
    cta: 'Start Web Design',
    href: '/contact',
    mostPopular: true
  },
  {
    name: 'Rebranding',
    price: 1299,
    description: 'Refresh your existing brand identity.',
    features: [
      'Brand Audit',
      'Logo Redesign',
      'Visual Identity Update',
      'Brand Guidelines',
      'Social Media Kit',
      'Business Collateral',
      'Implementation Guide',
      '30 Days Support'
    ],
    cta: 'Start Rebranding',
    href: '/contact'
  },
  {
    name: 'Web Application',
    price: 2999,
    description: 'Custom web application development.',
    features: [
      'Custom Web App Design',
      'User Interface Development',
      'Basic Database Setup',
      'User Authentication',
      'Admin Dashboard',
      'Core Features Development',
      'Performance Optimization',
      '30 Days Support'
    ],
    cta: 'Start Development',
    href: '/contact'
  }
];

const PricingSection = () => {
  return (
    <section className="py-12 sm:py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-400">
            Choose the perfect package for your business needs
          </p>
        </div>
        <div className={styles.pricingContainer}>
          <div className={styles.cardStack}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={styles.cardContainer}
              >
                <div
                  className={`${styles.card} relative rounded-2xl p-4 sm:p-8 transition-all duration-300 hover:bg-gradient-to-br hover:from-neon-green/30 hover:to-neon-green/10 ${
                    tier.highlight
                      ? 'bg-gray-900/50 backdrop-blur-sm ring-1 ring-neon-green'
                      : tier.mostPopular
                      ? 'bg-gray-900/50 backdrop-blur-sm ring-1 ring-neon-blue'
                      : 'bg-gray-900/50 backdrop-blur-sm ring-1 ring-gray-800'
                  } group`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {tier.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2">
                        {tier.description}
                      </p>
                    </div>
                    <div className="text-left sm:text-right mt-4 sm:mt-0">
                      <div className="text-2xl sm:text-3xl font-bold text-white">
                        ${tier.price}
                      </div>
                      {tier.originalPrice && (
                        <div className="text-sm line-through text-gray-500">
                          ${tier.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>

                  {tier.highlight && (
                    <div className="absolute -top-3 right-4 sm:right-8">
                      <div className="inline-flex items-center gap-1 rounded-full bg-neon-green px-3 py-0.5 text-xs font-semibold text-black">
                        <Sparkles className="h-3 w-3" />
                        SALE
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check
                          className={`h-4 w-4 flex-none ${
                            tier.highlight
                              ? 'text-neon-green'
                              : tier.mostPopular
                              ? 'text-neon-blue'
                              : 'text-white'
                          }`}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8">
                    <Link
                      to={tier.href}
                      className={`rounded-md px-3 sm:px-4 py-2 text-sm font-semibold ${
                        tier.highlight
                          ? 'bg-neon-green text-black hover:brightness-110'
                          : tier.mostPopular
                          ? 'bg-neon-blue text-black hover:brightness-110'
                          : 'bg-white text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
