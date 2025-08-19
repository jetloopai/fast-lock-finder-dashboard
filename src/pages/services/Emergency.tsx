import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Phone, Shield, MapPin, Key, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Emergency = () => {
  return (
    <Layout>
      <Helmet>
        <title>Emergency Locksmith Chicago | 24/7 Lockout Service | 15-Min Response</title>
        <meta 
          name="description" 
          content="Emergency locksmith Chicago suburbs - 24/7 car, home & business lockout service. Fast 15-minute response, licensed technicians. Call now for immediate help!" 
        />
        <meta name="keywords" content="emergency locksmith, 24/7 locksmith Chicago, car lockout service, home lockout, business lockout, fast locksmith, emergency key replacement, locked out of car, locked out of house" />
        <link rel="canonical" href="https://fastlockfinder.com/services/emergency" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency Locksmith Chicago | 24/7 Lockout Service
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Locked out of your car, home, or business? Our emergency locksmith service covers Chicago's 
              South & Southwest suburbs with rapid 15-minute response times. Licensed, bonded, and available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call: (555) FAST-LOCK</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get Emergency Help
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">15 Minutes</h3>
                <p className="text-sm text-muted-foreground">Average arrival time</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-sm text-muted-foreground">Always available</p>
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

      {/* Emergency Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency Locksmith Services Chicago
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Need an emergency locksmith? Our licensed Chicago locksmith technicians provide fast lockout service 
              for cars, homes, and businesses. No damage guaranteed - we'll get you back inside safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Emergency Car Lockout Service</CardTitle>
                <CardDescription>
                  Locked out of your car? Our emergency auto locksmith will unlock your vehicle fast with no damage.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>All vehicle makes and models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Keys locked inside</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Broken key in lock</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>No damage guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Emergency Home Lockout Service</CardTitle>
                <CardDescription>
                  Locked out of your house? Our residential locksmith provides immediate home lockout assistance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Front door lockouts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Back door access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Window security checks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Non-destructive entry</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Commercial Emergency Locksmith</CardTitle>
                <CardDescription>
                  Locked out of your business? Our commercial locksmith provides priority emergency service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Office buildings</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Retail stores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Industrial facilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Priority service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our Emergency Service Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, fast, and reliable emergency lockout assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                1
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">
                Call (555) FAST-LOCK for immediate assistance, 24/7
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                2
              </div>
              <h3 className="font-semibold mb-2">We Dispatch</h3>
              <p className="text-sm text-muted-foreground">
                Nearest technician dispatched to your location immediately
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                3
              </div>
              <h3 className="font-semibold mb-2">Fast Arrival</h3>
              <p className="text-sm text-muted-foreground">
                Average 15-minute arrival time to your location
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                4
              </div>
              <h3 className="font-semibold mb-2">Get Unlocked</h3>
              <p className="text-sm text-muted-foreground">
                Professional, damage-free entry gets you back inside
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Emergency Lockout? Call FastLockFinder Now!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait in the cold, rain, or heat. Our emergency locksmiths are standing by 24/7 
            to get you unlocked and back inside within minutes.
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

export default Emergency;