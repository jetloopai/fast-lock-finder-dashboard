import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Phone, Shield, MapPin, Key, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Padlocks = () => {
  return (
    <Layout>
      <Helmet>
        <title>Padlock Services Chicago | High-Security Lock Installation & Repair</title>
        <meta 
          name="description" 
          content="Professional padlock services in Chicago suburbs. Installation, repair, and replacement of high-security padlocks for gates, sheds, storage, and commercial use." 
        />
        <meta name="keywords" content="padlocks, high security padlocks, gate locks, shed locks, commercial padlocks, weather resistant locks, padlock repair Chicago" />
        <link rel="canonical" href="https://fastlockfinder.com/services/padlocks" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Padlock Services",
            "description": "Professional padlock installation, repair, and replacement services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "FastLockFinder",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "IL",
                "addressCountry": "US"
              }
            },
            "serviceType": "Locksmith Service",
            "areaServed": "Chicago South & Southwest Suburbs"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Padlock Services Chicago
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Professional padlock services for maximum security. Installation, repair, and replacement of 
              high-security padlocks for gates, sheds, storage, and commercial use across Chicago suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Get Services Now</span>
                </a>
              </Button>
              <Button variant="navy" size="lg">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">High Security</h3>
                <p className="text-sm text-muted-foreground">Grade 1 padlocks available</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Weather Resistant</h3>
                <p className="text-sm text-muted-foreground">All-weather protection</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">50+ Cities</h3>
                <p className="text-sm text-muted-foreground">Service coverage</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Padlock Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Padlock Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure your property with professional padlock services. From high-security installations 
              to emergency access, we provide comprehensive padlock solutions for all applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Padlock Installation</CardTitle>
                <CardDescription>
                  Professional installation of high-security padlocks for gates, sheds, storage, and commercial use.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>High-security grades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Weather-resistant options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Combination & keyed locks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Master keyed systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Emergency Access</CardTitle>
                <CardDescription>
                  Lost keys or forgotten combination? We provide safe, non-destructive padlock opening services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Non-destructive opening</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Key cutting services</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Combination reset</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Proof of ownership required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Repair & Maintenance</CardTitle>
                <CardDescription>
                  Keep your padlocks functioning properly with professional repair and maintenance services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Mechanism cleaning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Weather seal replacement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security upgrades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Preventive maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Padlock Types */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Types of Padlocks We Service
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional service for all padlock types and brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Standard Padlocks</h3>
              <p className="text-sm text-muted-foreground">
                Basic security for general use
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">High-Security</h3>
              <p className="text-sm text-muted-foreground">
                Grade 1 security for maximum protection
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Combination</h3>
              <p className="text-sm text-muted-foreground">
                Keyless convenience with numeric codes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Weatherproof</h3>
              <p className="text-sm text-muted-foreground">
                Marine grade for outdoor use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Property with Professional Padlocks
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't compromise on security. Professional padlock installation and service ensures 
            reliable protection for your gates, storage, and valuable assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Get Services Now</span>
              </a>
            </Button>
            <Button variant="navy" size="lg">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Padlocks;