import { useParams, Link } from "react-router-dom";
import { getCityBySlug, cityData } from "@/data/cities";
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
    console.log("City not found for slug:", actualCitySlug);
    console.log("Original param:", citySlug);
    console.log("Available cities:", Object.keys(cityData));
    return <div>City not found</div>;
  }

  const primaryLandmark = city.landmarks[0];
  const secondaryLandmark = city.landmarks[1] || city.landmarks[0];

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
        <link rel="canonical" href={`https://fastlockfinder.com/service-areas/${city.slug}-locksmith`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Locksmith in {city.name}, IL – Fast 24/7 Service
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              When you're locked out in {city.name}, Illinois, FastLockFinder provides rapid 24/7 locksmith services with an average 15-minute response time. 
              Our licensed professionals serve the entire {city.name} community, from the {primaryLandmark} area to {secondaryLandmark} and everywhere in between. 
              Whether you need emergency lockout assistance, residential security upgrades, commercial lock services, or automotive key replacement, 
              we're your trusted local locksmith in {city.name}'s {city.region.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">15-Minute Average</h3>
                <p className="text-sm text-muted-foreground">Response time in {city.name}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground">Professional service you can trust</p>
              </CardContent>
            </Card>
            <Card className="text-center">
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
              From emergency lockouts to security upgrades, FastLockFinder provides comprehensive locksmith services 
              throughout {city.name} and the surrounding {city.region.toLowerCase()}, including areas near {primaryLandmark} and {secondaryLandmark}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
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
                  How fast can you arrive in {city.name} near {primaryLandmark}?
                </AccordionTrigger>
                <AccordionContent>
                  Our average arrival time in {city.name} is 15 minutes, depending on traffic and your exact location. 
                  We service the entire {city.name} area including locations near {primaryLandmark} and {secondaryLandmark}.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="night-service">
                <AccordionTrigger className="text-left">
                  Are you available at night in {city.name}?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, FastLockFinder operates 24/7 in {city.name} and all surrounding suburbs. Whether it's 2 AM or 2 PM, 
                  we're ready to help with your locksmith emergency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="services-offered">
                <AccordionTrigger className="text-left">
                  What locksmith services do you offer in {city.name}?
                </AccordionTrigger>
                <AccordionContent>
                  We provide complete locksmith services in {city.name} including emergency lockouts, residential and commercial 
                  lock services, automotive locksmith work, key duplication, rekeying, smart lock installation, and safe services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="area-coverage">
                <AccordionTrigger className="text-left">
                  Can you come to the {secondaryLandmark} area in {city.name}?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! We regularly service the {secondaryLandmark} area and all parts of {city.name}. 
                  Our technicians are familiar with the entire city and can reach you quickly wherever you are.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
            <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
              <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call: (555) FAST-LOCK</span>
              </a>
            </Button>
            <Button variant="default" size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              Request Service Online
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
