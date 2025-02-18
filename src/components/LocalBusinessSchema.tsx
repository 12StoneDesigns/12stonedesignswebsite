import React from 'react';

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "12Stone Designs",
    "image": "https://12stonedesigns.com/images/12stone-designs-high-resolution-logo.png",
    "description": "Professional web design and brand development services. We specialize in creating innovative digital solutions for businesses.",
    "url": "https://12stonedesigns.com",
    "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address", // Replace with actual address
      "addressLocality": "Your City", // Replace with actual city
      "addressRegion": "Your State", // Replace with actual state
      "postalCode": "Your Zip", // Replace with actual zip
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "XX.XXXXX", // Replace with actual latitude
      "longitude": "XX.XXXXX" // Replace with actual longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/12stonedesigns",
      "https://twitter.com/12stonedesigns",
      "https://www.linkedin.com/company/12stonedesigns",
      "https://www.instagram.com/12stonedesigns"
    ],
    "priceRange": "$$",
    "servesCuisine": "Web Design and Development Services",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "XX.XXXXX", // Replace with actual latitude
        "longitude": "XX.XXXXX" // Replace with actual longitude
      },
      "geoRadius": "50000" // 50km radius
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
