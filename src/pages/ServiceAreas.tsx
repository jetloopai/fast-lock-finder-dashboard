import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import ServiceAreasMap from "@/components/common/ServiceAreasMap";
import { Helmet } from "react-helmet-async";

const southSuburbs = [
  { name: "Oak Lawn", slug: "oak-lawn" },
  { name: "Evergreen Park", slug: "evergreen-park" },
  { name: "Alsip", slug: "alsip" },
  { name: "Blue Island", slug: "blue-island" },
  { name: "Calumet City", slug: "calumet-city" },
  { name: "Dolton", slug: "dolton" },
  { name: "Harvey", slug: "harvey" },
  { name: "South Holland", slug: "south-holland" },
  { name: "Lansing", slug: "lansing" },
  { name: "Markham", slug: "markham" },
  { name: "Riverdale", slug: "riverdale" },
  { name: "Robbins", slug: "robbins" },
  { name: "Homewood", slug: "homewood" },
  { name: "Flossmoor", slug: "flossmoor" },
  { name: "Hazel Crest", slug: "hazel-crest" },
  { name: "Country Club Hills", slug: "country-club-hills" },
  { name: "Matteson", slug: "matteson" },
  { name: "Richton Park", slug: "richton-park" },
  { name: "Olympia Fields", slug: "olympia-fields" },
  { name: "Park Forest", slug: "park-forest" },
  { name: "University Park", slug: "university-park" },
  { name: "Crete", slug: "crete" },
  { name: "Monee", slug: "monee" },
  { name: "Steger", slug: "steger" },
  { name: "Sauk Village", slug: "sauk-village" },
  { name: "Glenwood", slug: "glenwood" }
];

const southwestSuburbs = [
  { name: "Burbank", slug: "burbank" },
  { name: "Bridgeview", slug: "bridgeview" },
  { name: "Hickory Hills", slug: "hickory-hills" },
  { name: "Justice", slug: "justice" },
  { name: "Summit", slug: "summit" },
  { name: "Bedford Park", slug: "bedford-park" },
  { name: "Chicago Ridge", slug: "chicago-ridge" },
  { name: "Worth", slug: "worth" },
  { name: "Palos Hills", slug: "palos-hills" },
  { name: "Palos Heights", slug: "palos-heights" },
  { name: "Palos Park", slug: "palos-park" },
  { name: "Orland Park", slug: "orland-park" },
  { name: "Tinley Park", slug: "tinley-park" },
  { name: "Oak Forest", slug: "oak-forest" },
  { name: "Crestwood", slug: "crestwood" },
  { name: "Midlothian", slug: "midlothian" },
  { name: "Frankfort", slug: "frankfort" },
  { name: "Mokena", slug: "mokena" },
  { name: "New Lenox", slug: "new-lenox" },
  { name: "Lockport", slug: "lockport" },
  { name: "Homer Glen", slug: "homer-glen" },
  { name: "Lemont", slug: "lemont" }
];

const ServiceAreas = () => {
  return (
    <Layout>
      <Helmet>
        <title>Service Areas | Chicago South & Southwest Suburbs Locksmith | FastLockFinder</title>
        <meta 
          name="description" 
          content="Locksmith service areas across Chicago South & Southwest suburbs - Oak Lawn, Orland Park, Tinley Park, Blue Island and 50+ cities. 15-min average response." 
        />
        <meta name="keywords" content="locksmith service areas Chicago, Oak Lawn locksmith, Orland Park locksmith, Tinley Park locksmith, Blue Island locksmith, Chicago suburbs locksmith" />
        <link rel="canonical" href="https://fastlockfinder.com/service-areas" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Service Areas | Chicago South & Southwest Suburbs Locksmith" />
        <meta property="og:description" content="50+ cities served with 15-minute average response time. Professional locksmith services across Chicago suburbs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fastlockfinder.com/service-areas" />
        <meta property="og:image" content="https://fastlockfinder.com/og-service-areas.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Areas | Chicago Suburbs Locksmith" />
        <meta name="twitter:description" content="50+ cities served with 15-minute average response time. Professional locksmith services." />
        <meta name="twitter:image" content="https://fastlockfinder.com/og-service-areas.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FastLockFinder",
            "serviceArea": [
              "Oak Lawn, IL", "Orland Park, IL", "Tinley Park, IL", "Blue Island, IL", 
              "Evergreen Park, IL", "Hickory Hills, IL", "Palos Hills, IL", "Chicago Ridge, IL"
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
            FastLockFinder serves Chicago's South & Southwest suburbs with fast, reliable locksmith services. 
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
                <h3 className="text-xl font-semibold mb-2">50+ Cities</h3>
                <p className="text-muted-foreground">Complete coverage across South & Southwest suburbs</p>
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

      {/* Service Areas Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* South Suburbs */}
            <div>
              <Card className="gradient-card-subtle border border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">South Suburbs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {southSuburbs.map((city) => (
                      <Button
                        key={city.slug}
                        variant="outline"
                        className="justify-start h-auto py-3"
                        asChild
                      >
                        <Link to={`/service-areas/${city.slug}-locksmith`}>
                          {city.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Southwest Suburbs */}
            <div>
              <Card className="gradient-card-subtle border border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Southwest Suburbs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {southwestSuburbs.map((city) => (
                      <Button
                        key={city.slug}
                        variant="outline"
                        className="justify-start h-auto py-3"
                        asChild
                      >
                        <Link to={`/service-areas/${city.slug}-locksmith`}>
                          {city.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
          <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
            <a href="tel:+1-773-377-6511">Call Now</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceAreas;