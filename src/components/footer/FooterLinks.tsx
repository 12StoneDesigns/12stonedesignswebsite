import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
  const links = [
    { title: 'Company', items: [
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' }
    ]},
    { title: 'Services', items: [
      { name: 'Web Development', path: '/services' },
      { name: 'UI/UX Design', path: '/services' },
      { name: 'Digital Strategy', path: '/services' }
    ]},
  ];

  return (
    <div className="grid grid-cols-2 gap-8">
      {links.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-neon-green transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;