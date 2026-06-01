import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Shield, MapPin, Key, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Mailboxes = () => {
  return (
    <Layout>
      <Helmet>
        <title>Mailbox Lock Services Chicago | USPS Approved Lock Installation & Repair</title>
        <meta 
          name="description" 
          content="Professional mailbox lock services in Chicago suburbs. USPS approved lock installation, repair, and key replacement for residential and commercial mailboxes." 
        />
        <meta name="keywords" content="mailbox locks, USPS approved locks, mailbox key replacement, residential mailbox, commercial mailbox locks, mail security Chicago" />
        <link rel="canonical" href="https://fastlockfinder.com/services/mailboxes" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mailbox Lock Services",
            "description": "Professional mailbox lock installation, repair, and key replacement services",
            "provider": {
              "@type": "Locksmith",
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
              Mailbox Lock Services Chicago
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Secure your mail with professional mailbox lock services. USPS approved installations, 
              key replacement, and repairs for residential and commercial mailboxes across Chicago suburbs.
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
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">USPS Approved</h3>
                <p className="text-sm text-muted-foreground">Compliant installations</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Secure</h3>
                <p className="text-sm text-muted-foreground">Mail theft prevention</p>
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

      {/* Mailbox Lock Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Mailbox Lock Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect your mail and prevent identity theft with professional mailbox lock services. 
              From residential to commercial installations, we ensure your mail stays secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Lock Installation</CardTitle>
                <CardDescription>
                  Professional installation of USPS approved mailbox locks for residential and commercial use.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>USPS approved locks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Standard & cluster boxes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Weather-resistant locks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Master key systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Key Replacement</CardTitle>
                <CardDescription>
                  Lost your mailbox key? We provide authorized key replacement and rekeying services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Authorized replacements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Proof of ownership required</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Lock rekeying available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Multiple key copies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Lock Repair & Security</CardTitle>
                <CardDescription>
                  Repair damaged mailbox locks and upgrade security to prevent mail theft.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Stuck lock repair</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Broken key extraction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security upgrades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Anti-theft solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our Mailbox Service Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional mailbox lock service process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                1
              </div>
              <h3 className="font-semibold mb-2">Verification</h3>
              <p className="text-sm text-muted-foreground">
                Verify ownership and assess mailbox type
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                2
              </div>
              <h3 className="font-semibold mb-2">USPS Compliance</h3>
              <p className="text-sm text-muted-foreground">
                Ensure compliance with postal regulations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                3
              </div>
              <h3 className="font-semibold mb-2">Installation</h3>
              <p className="text-sm text-muted-foreground">
                Professional lock installation or repair
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                4
              </div>
              <h3 className="font-semibold mb-2">Key Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Provide keys and test functionality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Mail Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't let mail theft compromise your security. Professional mailbox locks provide reliable 
            protection for your important mail and packages.
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

export default Mailboxes;