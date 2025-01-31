import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';

const links = {
  Services: [
    { label: 'Brand Development', href: routes.services.brandDevelopment },
    { label: 'Web Design', href: routes.services.webDesign },
    { label: 'Rebranding', href: routes.services.rebranding },
    { label: 'Brand Consulting', href: routes.services.brandConsulting }
  ],
  Company: [
    { label: 'About', href: routes.about },
    { label: 'Blogs', href: routes.blog },
    { label: 'Contact', href: routes.contact }
  ],
  Legal: [
    { label: 'Privacy', href: routes.legal.privacy },
    { label: 'Terms', href: routes.legal.terms },
    { label: 'Cookie Policy', href: routes.legal.cookies }
  ]
};

const FooterLinks = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    {Object.entries(links).map(([category, items]) => (
      <div key={category}>
        <h3 className="text-white font-semibold mb-4">{category}</h3>
        <ul className="space-y-3">
          {items.map(({ label, href, external = false }) => (
            <li key={label}>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={href}
                  className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default FooterLinks;