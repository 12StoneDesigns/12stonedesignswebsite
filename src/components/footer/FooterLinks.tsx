import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import { routes } from '../../config/routes';
import { typography } from '../../styles/typography';

const FooterLinks = () => {
  const links = [
    { title: 'Services', items: [
      { name: 'Web Design', path: routes.services.webDesign },
      { name: 'Web Applications', path: routes.services.webApplications },
      { name: 'Brand Development', path: routes.services.brandDevelopment },
      { name: 'Brand Consulting', path: routes.services.brandConsulting },
      { name: 'Rebranding', path: routes.services.rebranding }
    ]},
    { title: 'Company', items: [
      { name: 'About', path: routes.about },
      { name: 'Why Choose Us', path: routes.whyChooseUs },
      { name: 'Blog', path: routes.blog },
      { name: 'Contact', path: routes.contact }
    ]},
    { title: 'Legal', items: [
      { name: 'Privacy Policy', path: routes.legal.privacy },
      { name: 'Terms of Service', path: routes.legal.terms },
      { name: 'Cookie Policy', path: routes.legal.cookies }
    ]},
    { title: 'Connect', items: []}
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {links.map((section, index) => (
        <div key={index} className="flex flex-col">
          <h3 className={`${typography.footerTitle} mb-4`}>{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link 
                  to={item.path}
                  className={typography.footerLink}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {section.title === 'Connect' && <SocialLinks />}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;