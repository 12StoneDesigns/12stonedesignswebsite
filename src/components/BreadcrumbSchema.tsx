import React from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  item: string;
}

const BreadcrumbSchema: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const generateBreadcrumbItems = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      {
        name: 'Home',
        item: 'https://12stonedesigns.com'
      }
    ];

    let path = '';
    pathSegments.forEach(segment => {
      path += `/${segment}`;
      items.push({
        name: segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        item: `https://12stonedesigns.com${path}`
      });
    });

    return items;
  };

  const breadcrumbItems = generateBreadcrumbItems();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm text-[#00F3FF]/70">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              <a
                href={item.item}
                className={`hover:text-[#39FF14] transition-colors duration-300 ${
                  index === breadcrumbItems.length - 1 ? 'text-[#39FF14]' : ''
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
};

export default BreadcrumbSchema;
