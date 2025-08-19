import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Key, Phone, CheckCircle, Wrench, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Safes = () => {
  return (
    <Layout>
      <Helmet>
        <title>Safe Locksmith Chicago | Safe Opening | Safe Installation & Repair</title>
        <meta 
          name="description" 
          content="Professional safe locksmith Chicago - safe opening, combination reset, safe installation & repair. Emergency safe lockout service for all safe types." 
        />
        <meta name="keywords" content="safe locksmith Chicago, safe opening, safe installation, safe repair, combination reset, gun safe, home safe, commercial safe" />
        <link rel="canonical" href="https://fastlockfinder.com/services/safes" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Professional Safe Locksmith Chicago
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-delay">
              Locked out of your safe? Need installation or repair? FastLockFinder provides expert safe services 
              for home and commercial safes, gun safes, and vault systems across Chicago's suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call: (555) FAST-LOCK</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Emergency Safe Opening
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Emergency Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
                <p className="text-sm text-muted-foreground">24/7 safe lockout emergency response</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">All Safe Types</h3>
                <p className="text-sm text-muted-foreground">Home, commercial, gun safes & more</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Service</h3>
                <p className="text-sm text-muted-foreground">Specialized safe technicians</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safe Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Safe Locksmith Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional safe services for all your security needs, from emergency safe opening 
              to installation and maintenance of all safe types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Safe Opening Service</CardTitle>
                <CardDescription>
                  Professional safe opening when you're locked out or forgot the combination.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Digital safe opening</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Combination safe opening</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Key safe opening</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>No damage methods</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Safe Installation</CardTitle>
                <CardDescription>
                  Professional safe installation for home and business security needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Home safe installation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Gun safe setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Commercial vault installation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Floor & wall mounting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Combination Reset</CardTitle>
                <CardDescription>
                  Reset forgotten combinations and reprogram digital safe access codes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Digital code reset</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Mechanical combination change</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Master code programming</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>User manual training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Safe Repair Services</CardTitle>
                <CardDescription>
                  Expert repair for damaged safe locks, hinges, and electronic components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Lock mechanism repair</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Hinge replacement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Electronic component repair</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Battery replacement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Gun Safe Services</CardTitle>
                <CardDescription>
                  Specialized services for gun safes and firearm security systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Gun safe opening</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Biometric setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Quick access configuration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Compliance consultation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Emergency Safe Service</CardTitle>
                <CardDescription>
                  24/7 emergency safe services when you need immediate access.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>24/7 availability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Rapid response</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Emergency opening</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>After-hours service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safe Types */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Safe Types We Service
            </h2>
            <p className="text-xl text-muted-foreground">
              Expert service for all types of safes and security storage systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Home Safes</h3>
                <p className="text-sm text-muted-foreground">
                  Personal safes for jewelry, documents, and valuables
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Gun Safes</h3>
                <p className="text-sm text-muted-foreground">
                  Firearm storage safes and quick access gun safes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Commercial Safes</h3>
                <p className="text-sm text-muted-foreground">
                  Business safes, drop safes, and commercial vaults
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Vault Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Bank vaults, large commercial vault systems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Safe Brands */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Safe Brands We Service
            </h2>
            <p className="text-xl text-muted-foreground">
              Expert service for all major safe manufacturers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4">
              <h3 className="font-semibold">SentrySafe</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Stack-On</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Liberty Safe</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Cannon Safe</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">AMSEC</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Browning</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Safe Locksmith Service?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're locked out of your safe or need professional installation, FastLockFinder's 
            safe experts are ready to help with fast, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
              <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call: (555) FAST-LOCK</span>
              </a>
            </Button>
            <Button variant="default" size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              Schedule Safe Service
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Safes;