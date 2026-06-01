import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Lock, Shield, Key, CheckCircle, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Residential = () => {
  return (
    <Layout>
      <Helmet>
        <title>Residential Locksmith Chicago | Home Security Services | Lock Installation</title>
        <meta 
          name="description" 
          content="Professional residential locksmith Chicago - home lock installation, repair, rekeying & security upgrades. Licensed home locksmith serving South & Southwest suburbs." 
        />
        <meta name="keywords" content="residential locksmith Chicago, home locksmith, lock installation, home security, house locksmith, residential lock repair, home lock rekeying" />
        <link rel="canonical" href="https://fastlockfinder.com/services/residential" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Residential Locksmith Chicago | Home Security Services" />
        <meta property="og:description" content="Professional home locksmith services - lock installation, repair, rekeying & security upgrades. Licensed professionals serving Chicago suburbs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fastlockfinder.com/services/residential" />
        <meta property="og:image" content="https://fastlockfinder.com/og-residential.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Residential Locksmith Chicago | Home Security" />
        <meta name="twitter:description" content="Professional home locksmith services - lock installation, repair, rekeying & security upgrades." />
        <meta name="twitter:image" content="https://fastlockfinder.com/og-residential.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Residential Locksmith Services",
            "provider": {
              "@type": "Locksmith",
              "name": "FastLockFinder",
              "url": "https://fastlockfinder.com",
              "telephone": "+1-773-377-6511"
            },
            "serviceType": "Residential Locksmith",
            "description": "Professional home security solutions including lock installation, repair, and upgrade services.",
            "areaServed": {
              "@type": "Place",
              "name": "Chicago South & Southwest Suburbs"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": "Contact for pricing"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Residential Locksmith Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-delay">
              Protect your home and family with professional residential locksmith services. From lock installation 
              and repair to comprehensive security upgrades, FastLockFinder keeps your home secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Get Services Now</span>
                </a>
              </Button>
              <Button variant="navy" size="lg">
                Free Security Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Home Security Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every home deserves the best security. Our residential locksmith services cover everything 
              from basic lock maintenance to advanced security system installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Lock Installation</CardTitle>
                <CardDescription>
                  Professional installation of new locks for maximum security and peace of mind.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Deadbolt installation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>High-security locks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Smart lock installation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Multi-point locking systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Lock Repair</CardTitle>
                <CardDescription>
                  Expert repair services to fix damaged or malfunctioning locks quickly and efficiently.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Stuck or jammed locks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Broken key extraction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Lock mechanism repair</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Weatherproofing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Lock Rekeying</CardTitle>
                <CardDescription>
                  Change your locks without replacement - perfect for new homes or lost keys.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>New homeowner rekeying</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Lost key situations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security upgrades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Master key systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Security Upgrades</CardTitle>
                <CardDescription>
                  Enhance your home's security with modern locks and advanced security features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>High-security cylinders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Keyless entry systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security assessments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Door reinforcement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Window & Patio Locks</CardTitle>
                <CardDescription>
                  Secure all entry points with professional window and patio door lock services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Window lock installation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Sliding door locks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security bars</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Child safety locks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Emergency Services</CardTitle>
                <CardDescription>
                  24/7 emergency residential locksmith services when you need help most.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Home lockouts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Broken lock repairs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security emergencies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Rapid response</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose FastLockFinder for Your Home?
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted residential locksmith services with a commitment to your family's security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-sm text-muted-foreground">
                Fully licensed professionals with comprehensive insurance coverage
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                All work guaranteed with high-quality parts and professional installation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Local Experts</h3>
              <p className="text-sm text-muted-foreground">
                Deep knowledge of local security needs and building requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Always available for emergency situations and urgent security needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Home Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait until it's too late. Contact FastLockFinder for a free security assessment 
            and professional residential locksmith services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Get Services Now</span>
              </a>
            </Button>
            <Button variant="navy" size="lg">
              Schedule Service
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Residential;