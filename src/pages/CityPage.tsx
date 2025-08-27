import { useParams, Link } from "react-router-dom";
import { getCityBySlug, cityData, getAllCities } from "@/data/cities";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Clock, Shield, Star, MapPin, Home, Building, Car, Key, Lock, DollarSign, Wrench } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityReviews from "@/components/home/CityReviews";

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
  const secondaryLandmark = city.landmarks[1] || city.landmarks[0];

  // Get surrounding cities from the same region, excluding current city
  const surroundingCities = getAllCities()
    .filter(c => c.region === city.region && c.slug !== city.slug)
    .slice(0, 8); // Show up to 8 cities

  const services = [
    { icon: Lock, name: "Emergency Lockouts", description: "Car, home, and business lockouts", href: "/services/emergency" },
    { icon: Home, name: "Residential Services", description: "Lock installation, repair, and rekeying", href: "/services/residential" },
    { icon: Building, name: "Commercial Services", description: "Business security and access control", href: "/services/commercial" },
    { icon: Car, name: "Automotive Services", description: "Car key replacement and programming", href: "/services/automotive" },
    { icon: Key, name: "Key Duplication", description: "Professional key cutting services", href: "/services/key-duplication" },
    { icon: Wrench, name: "Smart Locks", description: "Installation and programming", href: "/services/smart-locks" },
    { icon: Shield, name: "Safes", description: "Installation, repair, and opening", href: "/services/safes" },
    { icon: Lock, name: "Rekeying", description: "Change locks without replacement", href: "/services/rekeying" }
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
        <meta property="og:image" content="https://fastlockfinder.com/og-city-locksmith.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${city.name} Locksmith | FastLockFinder 24/7`} />
        <meta name="twitter:description" content={`Emergency locksmith in ${city.name}. 15-min arrival, licensed & insured.`} />
        <meta name="twitter:image" content="https://fastlockfinder.com/og-city-locksmith.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `FastLockFinder - ${city.name} Locksmith`,
            "image": "https://fastlockfinder.com/logo.png",
            "url": `https://fastlockfinder.com/service-areas/${city.slug}-locksmith`,
            "telephone": "(555) FAST-LOCK",
            "email": "info@fastlockfinder.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city.name,
              "addressRegion": "IL",
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
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call: (555) FAST-LOCK</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
              Complete Locksmith Services in {city.name}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Looking for a cheap locksmith in {city.name}? Our mobile locksmith team provides emergency locksmith services, 
              lock change service, key duplication, and rekey locks throughout {city.name} including {city.majorStreets[0]}, {city.majorStreets[1]}, 
              and areas near {primaryLandmark} and {secondaryLandmark}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 h-full gradient-service-card border border-border/50 shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
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
                Frequently Asked Questions - {city.name}
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our locksmith services in {city.name}
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="arrival-time">
                <AccordionTrigger className="text-left">
                  How fast can a locksmith near me in {city.name} arrive?
                </AccordionTrigger>
                <AccordionContent>
                  Our emergency locksmith in {city.name} has an average arrival time of 15 minutes. We're a mobile locksmith 
                  serving the entire {city.name} area including {city.majorStreets[0]}, {city.majorStreets[1]}, and locations near {primaryLandmark} and {secondaryLandmark}.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="night-service">
                <AccordionTrigger className="text-left">
                  Do you have a 24 hour locksmith in {city.name}?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, our 24 hour locksmith service operates in {city.name} and all surrounding suburbs. Whether you need a 
                  locksmith open now at 2 AM or 2 PM, we're ready to help with house lockouts, car lockout service, and emergency lockouts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services-offered">
                <AccordionTrigger className="text-left">
                  What services does your commercial locksmith in {city.name} provide?
                </AccordionTrigger>
                <AccordionContent>
                  Our commercial locksmith in {city.name} provides storefront lock repair, lock change service, rekey locks, 
                  lost car key replacement, key duplication, and locksmith for businesses. We also offer residential locksmith 
                  services including house lockout assistance and emergency locksmith support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="area-coverage">
                <AccordionTrigger className="text-left">
                  Do you service {city.majorStreets[0]} and {city.majorStreets[1]} in {city.name}?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Our mobile locksmith covers all major streets in {city.name} including {city.majorStreets[0]}, {city.majorStreets[1]}, 
                  {city.majorStreets[2]}, and {city.majorStreets[3]}. We also service the {secondaryLandmark} area and all parts of {city.name} 
                  with our emergency locksmith and residential locksmith services.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* We Also Cover These Surrounding Areas */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Also Cover These Surrounding Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              FastLockFinder provides the same fast, reliable 24/7 locksmith service throughout the {city.region.toLowerCase()}.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {surroundingCities.map((surroundingCity) => (
              <Link key={surroundingCity.slug} to={`/service-areas/${surroundingCity.slug}-locksmith`}>
                <Card className="hover:shadow-md transition-all duration-200 hover:scale-105 h-full border-l-4 border-l-accent">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4 w-4 text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-sm truncate">{surroundingCity.name}</h3>
                        <p className="text-xs text-muted-foreground truncate">
                          {surroundingCity.landmarks[0]}
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
            Locked out in {city.name}? Call FastLockFinder now for 24/7 help in minutes.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - we're standing by to help you get back inside quickly and safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call: (555) FAST-LOCK</span>
              </a>
            </Button>
            <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Service Online
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
