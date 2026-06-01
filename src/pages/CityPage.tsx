import { useParams, Link } from "react-router-dom";
import { getCityBySlug, cityData, getAllCities } from "@/data/cities";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Clock, Shield, Star, MapPin, Home, Building, Car, Key, Lock, DollarSign, Wrench } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityReviews from "@/components/home/CityReviews";
import { getCityFAQs } from "@/utils/cityFAQs";
import { getCityServiceDescription } from '@/utils/cityServiceDescription';

const CityPage = () => {
  const { citySlug } = useParams();
  
  if (!citySlug) {
    return <div>City not found</div>;
  }

  // Extract city slug from the full URL parameter (remove "-locksmith" suffix)
  const actualCitySlug = citySlug.replace("-locksmith", "");
  const city = getCityBySlug(actualCitySlug);
  
  if (!city) {
    return (
      <Layout>
        <Helmet>
          <title>City Not Found - FastLockFinder | Locksmith Services</title>
          <meta name="description" content="The requested city page was not found. Explore our service areas for professional locksmith services." />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-[60vh] flex items-center justify-center bg-background">
          <div className="text-center max-w-md mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary mb-4">City Not Found</h1>
            <p className="text-muted-foreground mb-8">
              We couldn't find that city. Check out our service areas to find locksmith services near you.
            </p>
            <Button asChild>
              <Link to="/service-areas">View Service Areas</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const primaryLandmark = city.landmarks[0];
  const secondaryLandmark = city.landmarks[1] || `${city.majorStreets[0]} area`;

  // Get surrounding cities from the same region, excluding current city
  const surroundingCities = getAllCities()
    .filter(c => c.region === city.region && c.slug !== city.slug)
    .slice(0, 8); // Show up to 8 cities

  const services = [
    { 
      icon: Lock, 
      name: "Emergency Lockouts", 
      description: `24/7 car, home & business lockout service in ${city.name}`, 
      href: "/services/emergency",
      alt: `Emergency locksmith service near ${primaryLandmark}` 
    },
    { 
      icon: Home, 
      name: "Residential Services", 
      description: `House lockout, lock installation & rekeying in ${city.name}`, 
      href: "/services/residential",
      alt: `Residential locksmith services in ${city.name}` 
    },
    { 
      icon: Building, 
      name: "Commercial Services", 
      description: `Business security & storefront lock repair in ${city.name}`, 
      href: "/services/commercial",
      alt: `Commercial locksmith near ${primaryLandmark}` 
    },
    { 
      icon: Car, 
      name: "Automotive Services", 
      description: `Car key replacement & lockout service in ${city.name}`, 
      href: "/services/automotive",
      alt: `Auto locksmith services in ${city.name}` 
    },
    { 
      icon: Key, 
      name: "Key Duplication", 
      description: `Professional key cutting services in ${city.name}`, 
      href: "/services/key-duplication",
      alt: `Key duplication near ${primaryLandmark}` 
    },
    { 
      icon: Wrench, 
      name: "Smart Locks", 
      description: `Smart lock installation & programming in ${city.name}`, 
      href: "/services/smart-locks",
      alt: `Smart lock installation in ${city.name}` 
    },
    { 
      icon: Shield, 
      name: "Safes", 
      description: `Safe installation, repair & opening in ${city.name}`, 
      href: "/services/safes",
      alt: `Safe locksmith services near ${primaryLandmark}` 
    },
    { 
      icon: Lock, 
      name: "Rekeying", 
      description: `Rekey locks service in ${city.name} - same day`, 
      href: "/services/rekeying",
      alt: `Lock rekeying service in ${city.name}` 
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>{city.name} Locksmith | FastLockFinder 24/7 Service</title>
        <meta 
          name="description" 
          content={`Locked out in ${city.name}? Fast 15-minute arrival, 24/7 locksmith service for homes, cars, and businesses near ${primaryLandmark} and ${secondaryLandmark}.`} 
        />
        <meta name="keywords" content={city.keywords.slice(0, 10).join(', ')} />
        <link rel="canonical" href={`https://fastlockfinder.com/service-areas/${city.slug}-locksmith`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${city.name} Locksmith | FastLockFinder 24/7 Service`} />
        <meta property="og:description" content={`Locked out in ${city.name}? Fast 15-minute arrival, 24/7 locksmith service near ${primaryLandmark} and ${secondaryLandmark}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://fastlockfinder.com/service-areas/${city.slug}-locksmith`} />
        <meta property="og:image" content="https://fastlockfinder.com/og-city-locksmith.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${city.name} Locksmith | FastLockFinder 24/7`} />
        <meta name="twitter:description" content={`Emergency locksmith in ${city.name}. 15-min arrival, licensed & insured.`} />
        <meta name="twitter:image" content="https://fastlockfinder.com/og-city-locksmith.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Locksmith",
            "name": `FastLockFinder - ${city.name} Locksmith`,
            "image": "https://fastlockfinder.com/logo.png",
            "url": `https://fastlockfinder.com/service-areas/${city.slug}-locksmith`,
            "telephone": "+1-773-377-6511",
            "email": "info@fastlockfinder.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city.name,
              "addressRegion": "IL",
              "addressCountry": "US"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": `${city.name} and surrounding areas`
            },
            "priceRange": "$$",
            "currenciesAccepted": "USD",
            "paymentAccepted": "Cash, Credit Card, Debit Card",
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
            }
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `How fast can you arrive in ${city.name} near ${primaryLandmark}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Our average arrival time in ${city.name} is 15 minutes, depending on traffic and your exact location. We service the entire ${city.name} area including locations near ${primaryLandmark} and ${secondaryLandmark}.`
                }
              },
              {
                "@type": "Question",
                "name": `Are you available at night in ${city.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Yes, FastLockFinder operates 24/7 in ${city.name} and all surrounding suburbs. Whether it's 2 AM or 2 PM, we're ready to help with your locksmith emergency.`
                }
              },
              {
                "@type": "Question",
                "name": `What locksmith services do you offer in ${city.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `We provide complete locksmith services in ${city.name} including emergency lockouts, residential and commercial lock services, automotive locksmith work, key duplication, rekeying, smart lock installation, and safe services.`
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              24/7 Locksmith in {city.name}
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-delay">
              Emergency locksmith services available 24/7 in {city.name}. Mobile locksmith team ready to help with 
              house lockouts, car lockout services, and commercial locksmith needs. Serving {city.majorStreets[0]} and {city.majorStreets[1]} areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left">
              <Button variant="city-primary" size="lg" asChild>
                <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button variant="city-secondary" size="lg">
                Get Unlocked Fast
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center gradient-card-subtle border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">15-Minute Average</h3>
                <p className="text-sm text-muted-foreground">Response time in {city.name}</p>
              </CardContent>
            </Card>
            <Card className="text-center gradient-card-subtle border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground">Professional service you can trust</p>
              </CardContent>
            </Card>
            <Card className="text-center gradient-card-subtle border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Upfront Pricing</h3>
                <p className="text-sm text-muted-foreground">No hidden fees or surprises</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              24 Hour Locksmith Services in {city.name}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {getCityServiceDescription(city.name, [primaryLandmark, secondaryLandmark], city.majorStreets, city.keywords)}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.href}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 h-full gradient-service-card border border-border/50 shadow-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4" role="img" aria-label={service.alt}>
                        <service.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <h3 className="font-semibold mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City Reviews */}
      <CityReviews cityName={city.name} landmark1={primaryLandmark} landmark2={secondaryLandmark} />

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Local Locksmith Questions - {city.name} Residents Ask
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our mobile locksmith services in {city.name}
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {getCityFAQs(city.name, city.landmarks, city.majorStreets, city.keywords).map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* We Also Cover These Surrounding Areas */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency Locksmith Service in Surrounding Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              FastLockFinder provides the same fast, reliable 24/7 mobile locksmith service throughout the {city.region.toLowerCase()}.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {surroundingCities.map((surroundingCity) => (
              <Link key={surroundingCity.slug} to={`/service-areas/${surroundingCity.slug}-locksmith`}>
                <Card className="hover:shadow-md transition-all duration-200 hover:scale-105 h-full border-l-4 border-l-accent">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0" role="img" aria-label={`Emergency locksmith in ${surroundingCity.name}`}>
                        <MapPin className="h-4 w-4 text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-sm truncate">24/7 Locksmith in {surroundingCity.name}</h3>
                        <p className="text-xs text-muted-foreground truncate">
                          Near {surroundingCity.landmarks[0]}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Emergency Locksmith in {city.name} - Call Now for 15-Minute Response
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Need a mobile locksmith near {primaryLandmark}? We're standing by 24/7 to help you get back inside quickly and safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="city-primary" size="lg" asChild>
              <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button variant="city-secondary" size="lg">
              Request Service Online
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
