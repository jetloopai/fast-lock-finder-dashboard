import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import ServiceAreasMap from "@/components/common/ServiceAreasMap";
import ServiceAreaSearch from "@/components/common/ServiceAreaSearch";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { serviceAreasData, type ServiceArea, getAreasByRegion } from "@/utils/serviceAreasData";

// Static data arrays are now replaced by the serviceAreasData from utils

const ServiceAreas = () => {
  const [filteredAreas, setFilteredAreas] = useState<ServiceArea[]>(serviceAreasData);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleFilter = (areas: ServiceArea[]) => {
    setFilteredAreas(areas);
    setIsSearchActive(areas.length !== serviceAreasData.length);
  };

  // Get areas by region for display
  const displayChicagoAreas = isSearchActive 
    ? filteredAreas.filter(area => area.region === "Chicago")
    : getAreasByRegion("Chicago");
    
  const displaySouthSuburbs = isSearchActive 
    ? filteredAreas.filter(area => area.region === "South Suburbs")
    : getAreasByRegion("South Suburbs");
    
  const displaySouthwestSuburbs = isSearchActive 
    ? filteredAreas.filter(area => area.region === "Southwest Suburbs")
    : getAreasByRegion("Southwest Suburbs");

  const hasResults = displayChicagoAreas.length > 0 || displaySouthSuburbs.length > 0 || displaySouthwestSuburbs.length > 0;

  return (
    <Layout>
      <Helmet>
        <title>Service Areas | Chicago & Suburbs Locksmith | FastLockFinder</title>
        <meta 
          name="description" 
          content="Locksmith service areas across Chicago and South & Southwest suburbs - Downtown Chicago, Oak Lawn, Orland Park, Tinley Park and 75+ areas. 15-min average response." 
        />
        <meta name="keywords" content="locksmith service areas Chicago, downtown Chicago locksmith, Loop locksmith, Oak Lawn locksmith, Orland Park locksmith, Tinley Park locksmith, Chicago suburbs locksmith" />
        <link rel="canonical" href="https://fastlockfinder.com/service-areas" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Service Areas | Chicago & Suburbs Locksmith" />
        <meta property="og:description" content="75+ areas served with 15-minute average response time. Professional locksmith services across Chicago and suburbs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fastlockfinder.com/service-areas" />
        <meta property="og:image" content="https://fastlockfinder.com/og-fastlockfinder.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Areas | Chicago Suburbs Locksmith" />
        <meta name="twitter:description" content="75+ areas served with 15-minute average response time. Professional locksmith services." />
        <meta name="twitter:image" content="https://fastlockfinder.com/og-fastlockfinder.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Locksmith",
            "name": "FastLockFinder",
            "serviceArea": [
              "Chicago, IL", "Oak Lawn, IL", "Orland Park, IL", "Tinley Park, IL", "Blue Island, IL", 
              "Evergreen Park, IL", "Hickory Hills, IL", "Palos Hills, IL", "Chicago Ridge, IL",
              "Streeterville, IL", "Loop, IL", "Hyde Park, IL", "Pilsen, IL"
            ],
            "geo": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "41.6528",
                "longitude": "-87.7319"
              },
              "geoRadius": "30000"
            }
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Service Areas
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-delay">
            FastLockFinder serves Chicago and the South & Southwest suburbs with fast, reliable locksmith services. 
            Our professional locksmiths are available 24/7 in your area.
          </p>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center gradient-card-subtle border border-border/50 shadow-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">15-Minute Average</h3>
                <p className="text-muted-foreground">Response time across all service areas</p>
              </CardContent>
            </Card>
            <Card className="text-center gradient-card-subtle border border-border/50 shadow-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">75+ Areas</h3>
                <p className="text-muted-foreground">Complete coverage across Chicago and suburbs</p>
              </CardContent>
            </Card>
            <Card className="text-center gradient-card-subtle border border-border/50 shadow-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
                <p className="text-muted-foreground">Available every day, all year round</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <ServiceAreasMap />

      {/* Search Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Area</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Search by zip code or city name to quickly find locksmith services in your area
            </p>
          </div>
          <ServiceAreaSearch 
            areas={serviceAreasData} 
            onFilter={handleFilter}
            className="mb-8"
          />
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {!hasResults && isSearchActive ? (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4 text-lg">
                No service areas found for your search
              </div>
              <p className="text-muted-foreground mb-6">
                We may still be able to help! Call us to check if we serve your area.
              </p>
              <Button variant="default" size="lg" asChild>
                <a href="tel:+1-773-377-6511">Call (773) 377-6511</a>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chicago */}
              {displayChicagoAreas.length > 0 && (
                <div>
                  <Card className="gradient-card-subtle border border-border/50 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl text-center">
                        Chicago ({displayChicagoAreas.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-2">
                        {displayChicagoAreas.map((area) => (
                          <Button
                            key={area.slug}
                            variant="outline"
                            className="justify-start h-auto py-2 text-sm hover:bg-accent/10 hover:border-accent"
                            asChild
                          >
                            <Link to={`/service-areas/${area.slug}-locksmith`}>
                              {area.displayName}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* South Suburbs */}
              {displaySouthSuburbs.length > 0 && (
                <div>
                  <Card className="gradient-card-subtle border border-border/50 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl text-center">
                        South Suburbs ({displaySouthSuburbs.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-3">
                        {displaySouthSuburbs.map((area) => (
                          <Button
                            key={area.slug}
                            variant="outline"
                            className="justify-start h-auto py-3 hover:bg-accent/10 hover:border-accent"
                            asChild
                          >
                            <Link to={`/service-areas/${area.slug}-locksmith`}>
                              {area.displayName}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Southwest Suburbs */}
              {displaySouthwestSuburbs.length > 0 && (
                <div>
                  <Card className="gradient-card-subtle border border-border/50 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl text-center">
                        Southwest Suburbs ({displaySouthwestSuburbs.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-3">
                        {displaySouthwestSuburbs.map((area) => (
                          <Button
                            key={area.slug}
                            variant="outline"
                            className="justify-start h-auto py-3 hover:bg-accent/10 hover:border-accent"
                            asChild
                          >
                            <Link to={`/service-areas/${area.slug}-locksmith`}>
                              {area.displayName}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your City Listed?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We may still be able to help! Call us to check if we can provide service in your area.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href="tel:+1-773-377-6511">Call Now</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceAreas;