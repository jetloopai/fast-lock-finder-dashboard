import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Lock, Shield, Key, CheckCircle, Phone, Users, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Commercial = () => {
  return (
    <Layout>
      <Helmet>
        <title>Commercial Locksmith Chicago | Business Security Services | Access Control</title>
        <meta 
          name="description" 
          content="Professional commercial locksmith Chicago - business security, access control systems, master keys & emergency commercial lockouts. Licensed business locksmith." 
        />
        <meta name="keywords" content="commercial locksmith Chicago, business locksmith, access control, master key systems, commercial lock repair, office locksmith, business security" />
        <link rel="canonical" href="https://fastlockfinder.com/services/commercial" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Commercial Locksmith Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Protect your business with professional commercial locksmith services. From access control systems 
              to emergency lockouts, FastLockFinder keeps your business secure and operational 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Business Security Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Business Security Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your business deserves enterprise-level security. Our commercial locksmith services provide 
              comprehensive solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Access Control Systems</CardTitle>
                <CardDescription>
                  Advanced access control solutions to manage who enters your business and when.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Keycard entry systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Biometric scanners</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Remote access management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Employee tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Master Key Systems</CardTitle>
                <CardDescription>
                  Efficient master key systems that provide security while maintaining convenience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Custom key hierarchies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Grand master keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Restricted key systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Key control programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Emergency Lockouts</CardTitle>
                <CardDescription>
                  24/7 emergency commercial lockout service to get your business back online fast.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Office building lockouts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Retail store emergencies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Warehouse access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Priority response</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>High-Security Locks</CardTitle>
                <CardDescription>
                  Advanced commercial-grade locks designed to protect valuable assets and inventory.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Grade 1 deadbolts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Anti-drill cylinders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Magnetic locks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Electric strikes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Security Consulting</CardTitle>
                <CardDescription>
                  Professional security assessments and recommendations for your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Vulnerability assessments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security planning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Compliance guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Budget planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Lock Maintenance</CardTitle>
                <CardDescription>
                  Regular maintenance programs to keep your commercial locks functioning perfectly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Scheduled maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Lubrication services</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Preventive repairs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized commercial locksmith services tailored to your industry's unique security needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Office Buildings</h3>
              <p className="text-sm text-muted-foreground">
                Professional offices, corporate headquarters, and business complexes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Retail Stores</h3>
              <p className="text-sm text-muted-foreground">
                Shopping centers, boutiques, and retail establishments of all sizes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground">
                Medical offices, clinics, hospitals, and healthcare facilities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Industrial</h3>
              <p className="text-sm text-muted-foreground">
                Warehouses, manufacturing facilities, and industrial complexes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't leave your business vulnerable. Contact FastLockFinder for a comprehensive 
            security consultation and professional commercial locksmith services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button variant="default" size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Commercial;