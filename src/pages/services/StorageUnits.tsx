import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Phone, Shield, MapPin, Key, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const StorageUnits = () => {
  return (
    <Layout>
      <Helmet>
        <title>Storage Unit Lock Services Chicago | Professional Installation & Repair</title>
        <meta 
          name="description" 
          content="Storage unit lock services in Chicago suburbs. Professional installation, repair, and replacement of storage unit locks. Secure your belongings with trusted locksmith experts." 
        />
        <meta name="keywords" content="storage unit locks, storage facility locksmith, padlock installation, storage unit security, lock repair, storage lock replacement Chicago" />
        <link rel="canonical" href="https://fastlockfinder.com/services/storage-units" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Storage Unit Lock Services",
            "description": "Professional storage unit lock installation, repair, and replacement services",
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
              Storage Unit Lock Services Chicago
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Secure your storage unit with professional lock installation, repair, and replacement services. 
              Our licensed locksmiths provide high-security storage solutions across Chicago's South & Southwest suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button variant="secondary" size="lg">
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
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">High Security</h3>
                <p className="text-sm text-muted-foreground">Weather-resistant locks</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">All Sizes</h3>
                <p className="text-sm text-muted-foreground">Units of every size</p>
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

      {/* Storage Lock Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Storage Unit Lock Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Keep your belongings secure with professional storage unit locks. From installation to emergency 
              access, our locksmiths provide comprehensive storage security solutions.
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
                  Professional installation of high-quality padlocks and disc locks for your storage unit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>High-security padlocks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Disc locks available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Weather-resistant options</span>
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
                  <Package className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Lock Repair & Replacement</CardTitle>
                <CardDescription>
                  Repair damaged locks or replace old locks with upgraded security options.
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
                    <span>Lock mechanism service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security upgrades</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Emergency Access</CardTitle>
                <CardDescription>
                  Lost your storage unit key? We provide safe, non-destructive access to your unit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Lost key solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Non-destructive entry</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Lock replacement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Proof of ownership required</span>
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
              How Our Storage Lock Service Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional installation and service process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                1
              </div>
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Evaluate your storage unit security needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                2
              </div>
              <h3 className="font-semibold mb-2">Recommendation</h3>
              <p className="text-sm text-muted-foreground">
                Suggest the best lock type for your needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                3
              </div>
              <h3 className="font-semibold mb-2">Installation</h3>
              <p className="text-sm text-muted-foreground">
                Professional installation with proper fitting
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                4
              </div>
              <h3 className="font-semibold mb-2">Testing</h3>
              <p className="text-sm text-muted-foreground">
                Test operation and provide multiple keys
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Storage Unit Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't risk losing your belongings. Professional storage unit locks provide peace of mind 
            and maximum security for your stored items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button variant="secondary" size="lg">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StorageUnits;