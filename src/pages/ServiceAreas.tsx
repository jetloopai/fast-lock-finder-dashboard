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

const chicagoAreas = [
  { name: "Streeterville (60601)", slug: "chicago-60601-streeterville" },
  { name: "Central Loop (60602)", slug: "chicago-60602-central-loop" },
  { name: "South Loop (60603)", slug: "chicago-60603-south-loop" },
  { name: "Museum Campus (60604)", slug: "chicago-60604-museum-campus" },
  { name: "Printer's Row (60605)", slug: "chicago-60605-printers-row" },
  { name: "West Loop Gate (60606)", slug: "chicago-60606-west-loop-gate" },
  { name: "West Loop (60607)", slug: "chicago-60607-west-loop" },
  { name: "Pilsen (60608)", slug: "chicago-60608-pilsen" },
  { name: "Old Town (60610)", slug: "chicago-60610-old-town" },
  { name: "Magnificent Mile (60611)", slug: "chicago-60611-mag-mile" },
  { name: "Medical District (60612)", slug: "chicago-60612-medical-district" },
  { name: "Hyde Park (60615)", slug: "chicago-60615-hyde-park" },
  { name: "Chatham (60619)", slug: "chicago-60619-chatham" },
  { name: "Auburn Gresham (60620)", slug: "chicago-60620-auburn-gresham" },
  { name: "Englewood (60621)", slug: "chicago-60621-englewood" },
  { name: "West Englewood (60636)", slug: "chicago-60636-west-englewood" },
  { name: "Woodlawn (60637)", slug: "chicago-60637-woodlawn" },
  { name: "South Shore (60649)", slug: "chicago-60649-south-shore" },
  { name: "Bronzeville (60653)", slug: "chicago-60653-bronzeville" },
  { name: "Roseland (60628)", slug: "chicago-60628-roseland" },
  { name: "Chicago Lawn (60629)", slug: "chicago-60629-chicago-lawn" },
  { name: "Brighton Park (60632)", slug: "chicago-60632-brighton-park" },
  { name: "Hegewisch (60633)", slug: "chicago-60633-hegewisch" },
  { name: "Garfield Ridge (60638)", slug: "chicago-60638-garfield-ridge" },
  { name: "Beverly (60643)", slug: "chicago-60643-beverly" },
  { name: "Mount Greenwood (60655)", slug: "chicago-60655-mount-greenwood" },
  { name: "Riverdale (60827)", slug: "chicago-60827-riverdale" },
  { name: "Near West Loop (60661)", slug: "chicago-60661-near-west-loop" }
];

const ServiceAreas = () => {
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
        <meta property="og:image" content="https://fastlockfinder.com/og-service-areas.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Areas | Chicago Suburbs Locksmith" />
        <meta name="twitter:description" content="75+ areas served with 15-minute average response time. Professional locksmith services." />
        <meta name="twitter:image" content="https://fastlockfinder.com/og-service-areas.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
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

      {/* Service Areas Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chicago */}
            <div>
              <Card className="gradient-card-subtle border border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Chicago</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {chicagoAreas.map((area) => (
                      <Button
                        key={area.slug}
                        variant="outline-navy"
                        className="justify-start h-auto py-2 text-sm"
                        asChild
                      >
                        <Link to={`/service-areas/${area.slug}-locksmith`}>
                          {area.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* South Suburbs */}
            <div>
              <Card className="gradient-card-subtle border border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">South Suburbs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {southSuburbs.map((city) => (
                      <Button
                        key={city.slug}
                        variant="outline-navy"
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
                  <div className="grid grid-cols-1 gap-3">
                    {southwestSuburbs.map((city) => (
                      <Button
                        key={city.slug}
                        variant="outline-navy"
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
          <Button variant="cta" size="lg" asChild>
            <a href="tel:+1-773-377-6511">Call Now</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceAreas;