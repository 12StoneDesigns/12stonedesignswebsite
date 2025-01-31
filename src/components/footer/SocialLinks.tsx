import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { Icon: FaTwitter, href: 'https://twitter.com/12stonedesigns', label: 'Twitter' },
    { Icon: FaGithub, href: 'https://github.com/12stonedesigns', label: 'GitHub' },
    { Icon: FaLinkedin, href: 'https://linkedin.com/company/12stonedesigns', label: 'LinkedIn' }
  ];

  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neon-green transition-colors duration-300"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;