import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Key, Shield, Phone, CheckCircle, Clock, Wrench } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Automotive = () => {
  return (
    <Layout>
      <Helmet>
        <title>Auto Locksmith Chicago | Car Key Replacement | Emergency Car Lockout</title>
        <meta 
          name="description" 
          content="Professional auto locksmith Chicago - car key replacement, emergency car lockouts, ignition repair & transponder programming. 24/7 automotive locksmith service." 
        />
        <meta name="keywords" content="auto locksmith Chicago, car locksmith, car key replacement, automotive locksmith, car lockout service, ignition repair, transponder key programming" />
        <link rel="canonical" href="https://fastlockfinder.com/services/automotive" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Automotive Locksmith Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Locked out of your car? Need a replacement key? FastLockFinder provides complete automotive 
              locksmith services for all vehicle makes and models, 24/7 across Chicago's suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call: (555) FAST-LOCK</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Emergency Car Lockout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Automotive Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Auto Locksmith Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From emergency lockouts to advanced key programming, our automotive locksmith services 
              cover all your vehicle security needs with professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Emergency Car Lockouts</CardTitle>
                <CardDescription>
                  Fast 24/7 car lockout service to get you back on the road quickly and safely.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>All vehicle makes & models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Keys locked inside</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>No damage guarantee</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>15-minute average arrival</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Car Key Replacement</CardTitle>
                <CardDescription>
                  Professional car key cutting and replacement for lost or damaged keys.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Traditional car keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Transponder keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Smart keys & fobs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>On-site programming</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Ignition Repair</CardTitle>
                <CardDescription>
                  Expert ignition cylinder repair and replacement for all vehicle types.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Stuck ignition repair</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Broken key extraction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Ignition replacement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Key programming</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Transponder Programming</CardTitle>
                <CardDescription>
                  Advanced transponder key programming for modern vehicle security systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Chip key programming</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Remote fob setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Keyless entry repair</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security system reset</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Key Duplication</CardTitle>
                <CardDescription>
                  Precise automotive key duplication for spare keys and replacements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Standard car keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>High-security keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Laser-cut keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Mobile key cutting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>24/7 Emergency Service</CardTitle>
                <CardDescription>
                  Round-the-clock emergency automotive locksmith service when you need it most.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Always available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Roadside assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Parking lot service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Fast response times</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Vehicle Makes & Models
            </h2>
            <p className="text-xl text-muted-foreground">
              Our automotive locksmith experts work on all vehicle types and brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4">
              <h3 className="font-semibold">Ford</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Chevrolet</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Honda</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Toyota</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">BMW</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Mercedes</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Audi</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Nissan</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Hyundai</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Kia</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Jeep</h3>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">& More</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Auto Locksmith Service Now?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't let a car lockout ruin your day. Our automotive locksmith experts are ready 
            to get you back on the road quickly and affordably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
              <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call: (555) FAST-LOCK</span>
              </a>
            </Button>
            <Button variant="default" size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              Text for Service
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Automotive;