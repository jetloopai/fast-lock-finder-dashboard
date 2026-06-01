// GOOGLE_PLACE_ID: fill this in once your Google Business Profile is live
// Find it at: business.google.com → your listing → "Get more reviews" link
const GOOGLE_PLACE_ID = ""; // e.g. "ChIJN1t_tDeuEmsRUsoyG83frY4"
const PHONE = "+1-773-377-6511";
const SITE_URL = "https://fastlockfinder.com";

const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Locksmith"],
        "@id": `${SITE_URL}/#business`,
        "name": "Fast Lock Finder",
        "alternateName": "FastLockFinder",
        "image": `${SITE_URL}/og-fastlockfinder.png`,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo.png`,
          "width": 200,
          "height": 60
        },
        "url": SITE_URL,
        "telephone": PHONE,
        "email": "info@fastlockfinder.com",
        "description": "Professional locksmith services available 24/7 across Chicago's South & Southwest suburbs. Licensed, insured technicians — fast response times for emergencies, lockouts, rekeying, and more.",
        "slogan": "Fast, Reliable Locksmith Service 24/7",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Oak Lawn",
          "addressRegion": "IL",
          "addressCountry": "US"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 41.6034,
            "longitude": -87.5665
          },
          "geoRadius": "50000"
        },
        "areaServed": [
          "Oak Lawn, IL","Orland Park, IL","Tinley Park, IL","Homewood, IL",
          "Frankfort, IL","Evergreen Park, IL","Burbank, IL","Alsip, IL",
          "Bridgeview, IL","Calumet City, IL","Harvey, IL","Matteson, IL",
          "Palos Hills, IL","Blue Island, IL","Chicago Ridge, IL","Worth, IL",
          "Oak Forest, IL","Homer Glen, IL","Mokena, IL","New Lenox, IL"
        ].map(name => ({ "@type": "Place", name })),
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Zelle"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Locksmith Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Lockout Service", "description": "24/7 emergency lockout service for homes, cars, and businesses" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Locksmith", "description": "Home lock installation, repair, and rekeying" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Locksmith", "description": "Business security and access control systems" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automotive Locksmith", "description": "Car key replacement and automotive lockout services" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lock Rekeying", "description": "Rekey locks without full replacement" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Lock Installation", "description": "Smart lock and keypad installation" } }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "847",
          "bestRating": "5",
          "worstRating": "1"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": PHONE,
          "contactType": "customer service",
          "areaServed": "US-IL",
          "availableLanguage": ["English", "Spanish"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        },
        "sameAs": [
          "https://www.facebook.com/fastlockfinder",
          "https://www.twitter.com/fastlockfinder",
          ...(GOOGLE_PLACE_ID ? [`https://maps.google.com/?cid=${GOOGLE_PLACE_ID}`] : [])
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export { GOOGLE_PLACE_ID, PHONE, SITE_URL };
export default OrganizationSchema;
