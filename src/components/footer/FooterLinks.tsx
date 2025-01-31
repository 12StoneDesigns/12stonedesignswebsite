import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks'; // Assuming SocialLinks is a separate component

const FooterLinks = () => {
  const links = [
    { title: 'Services', items: [
      { name: 'Web Design', path: '/web-design' },
      { name: 'Web Applications', path: '/web-applications' },
      { name: 'Brand Development', path: '/brand-development' },
      { name: 'Brand Consulting', path: '/brand-consulting' }
    ]},
    { title: 'Company', items: [
      { name: 'About', path: '/about' },
      { name: 'Why Choose Us', path: '/why-choose-us' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ]},
    { title: 'Legal', items: [
      { name: 'Privacy Policy', path: '/legal/privacy' },
      { name: 'Terms of Service', path: '/legal/terms' },
      { name: 'Cookie Policy', path: '/legal/cookies' }
    ]},
    { title: 'Connect', items: []} // Assuming SocialLinks will be rendered here
  ];

  return (
    <div className="grid grid-cols-4 gap-8">
      {links.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-[#39FF14] mb-4">{section.title}</h3>
          {section.title === 'Connect' ? (
            <SocialLinks />
          ) : (
            <ul className="space-y-2">
              {section.items.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    to={link.path}
                    className="text-[#00F3FF] hover:text-[#6F00FF] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;