const OrganizationSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FastLockFinder",
    "image": "https://fastlockfinder.com/logo.png",
    "logo": "https://fastlockfinder.com/logo.png",
    "url": "https://fastlockfinder.com",
    "telephone": "(555) FAST-LOCK",
    "email": "info@fastlockfinder.com",
    "description": "Professional locksmith services available 24/7 across Chicago's South & Southwest suburbs. Fast response times, licensed and insured technicians.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Oak Lawn",
      "addressRegion": "IL",
      "postalCode": "60453",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.6034,
      "longitude": -87.5665
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "serviceArea": {
      "@type": "Place",
      "name": "Chicago South & Southwest Suburbs"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Oak Lawn, IL"
      },
      {
        "@type": "Place", 
        "name": "Orland Park, IL"
      },
      {
        "@type": "Place",
        "name": "Tinley Park, IL"
      },
      {
        "@type": "Place",
        "name": "Homewood, IL"
      },
      {
        "@type": "Place",
        "name": "Frankfort, IL"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Locksmith Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Lockout Service",
            "description": "24/7 emergency lockout service for homes, cars, and businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Locksmith",
            "description": "Home lock installation, repair, and rekeying services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Locksmith", 
            "description": "Business security and access control systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automotive Locksmith",
            "description": "Car key replacement and automotive lockout services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "(555) FAST-LOCK",
        "contactType": "Emergency Service",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/fastlockfinder",
      "https://www.twitter.com/fastlockfinder",
      "https://www.linkedin.com/company/fastlockfinder"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(organizationSchema)}
    </script>
  );
};

export default OrganizationSchema;