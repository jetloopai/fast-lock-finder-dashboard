import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Wifi, Shield, Key, CheckCircle, Phone, Battery } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SmartLocks = () => {
  return (
    <Layout>
      <Helmet>
        <title>Smart Lock Installation Chicago | Keyless Entry Systems | Digital Locks</title>
        <meta 
          name="description" 
          content="Professional smart lock installation Chicago - keyless entry, digital locks, WiFi smart locks & app-controlled security. Expert smart lock installation & setup." 
        />
        <meta name="keywords" content="smart lock installation Chicago, keyless entry, digital locks, smart home security, WiFi locks, app controlled locks, electronic locks" />
        <link rel="canonical" href="https://fastlockfinder.com/services/smart-locks" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Smart Lock Installation Chicago | Keyless Entry Systems" />
        <meta property="og:description" content="Professional smart lock installation - WiFi, Bluetooth, keypad, biometric locks. Expert setup for keyless entry systems in Chicago suburbs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fastlockfinder.com/services/smart-locks" />
        <meta property="og:image" content="https://fastlockfinder.com/og-smart-locks.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smart Lock Installation Chicago | Keyless Entry" />
        <meta name="twitter:description" content="Professional smart lock installation - WiFi, Bluetooth, keypad, biometric locks. Expert setup for keyless entry systems." />
        <meta name="twitter:image" content="https://fastlockfinder.com/og-smart-locks.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Smart Lock Installation Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "FastLockFinder",
              "url": "https://fastlockfinder.com",
              "telephone": "+1-773-377-6511"
            },
            "serviceType": "Smart Lock Installation",
            "description": "Professional installation of smart locks including WiFi, Bluetooth, keypad, and biometric locks for enhanced security.",
            "areaServed": {
              "@type": "Place",
              "name": "Chicago South & Southwest Suburbs"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Smart Lock Types",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "WiFi Smart Lock Installation"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bluetooth Smart Lock Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Keypad Smart Lock Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Biometric Smart Lock Installation"
                  }
                }
              ]
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
              Smart Lock Installation Chicago
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-delay">
              Upgrade to modern smart lock technology with FastLockFinder's professional installation services. 
              Enjoy keyless entry, remote access, and enhanced security for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Smart Lock Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Lock Features */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">App Control</h3>
                <p className="text-sm text-muted-foreground">Control your locks from anywhere with smartphone apps</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Keyless Entry</h3>
                <p className="text-sm text-muted-foreground">No more lost keys - use codes, apps, or biometrics</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                <p className="text-sm text-muted-foreground">Advanced encryption and monitoring capabilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Lock Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Lock Installation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional installation of the latest smart lock technology, customized for your security needs 
              and lifestyle preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Wifi className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>WiFi Smart Locks</CardTitle>
                <CardDescription>
                  Connect directly to your home WiFi for remote access and control.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Remote access from anywhere</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Real-time notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Guest access management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Activity logging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Bluetooth Smart Locks</CardTitle>
                <CardDescription>
                  Proximity-based locks that unlock automatically when you approach.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Auto-unlock feature</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Low power consumption</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Phone app control</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Enhanced privacy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Keypad Smart Locks</CardTitle>
                <CardDescription>
                  Digital keypads with customizable access codes for family and guests.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Multiple user codes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Temporary access codes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Backlit keypad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Weather resistant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Biometric Smart Locks</CardTitle>
                <CardDescription>
                  Advanced fingerprint and facial recognition technology for ultimate security.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Fingerprint recognition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Facial recognition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Multiple user storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Anti-spoofing technology</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Battery className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Z-Wave Smart Locks</CardTitle>
                <CardDescription>
                  Integrate with home automation systems for complete smart home control.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Smart home integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Automation compatibility</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Voice control support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Extended battery life</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Hybrid Smart Locks</CardTitle>
                <CardDescription>
                  Combine traditional key access with smart technology features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Traditional key backup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Smart features available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Retrofit compatible</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Easy installation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Smart Lock Brands We Install
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional installation of leading smart lock manufacturers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4">
              <h3 className="font-semibold">August</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Yale</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Schlage</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Kwikset</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Nest x Yale</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Samsung</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade to Smart Lock Technology?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the convenience and security of smart locks. Contact FastLockFinder for professional 
            smart lock installation and setup services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button variant="default" size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              Schedule Installation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SmartLocks;