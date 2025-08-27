import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Key, Shield, Phone, CheckCircle, Clock, Wrench } from "lucide-react";
import { Helmet } from "react-helmet-async";

const KeyDuplication = () => {
  return (
    <Layout>
      <Helmet>
        <title>Key Duplication Chicago | Key Copying Service | Duplicate Keys</title>
        <meta 
          name="description" 
          content="Professional key duplication Chicago - house keys, car keys, office keys & high-security key copying. Fast, accurate key duplication service near you." 
        />
        <meta name="keywords" content="key duplication Chicago, key copying, duplicate keys, copy keys, spare keys, key cutting service, key duplication near me" />
        <link rel="canonical" href="https://fastlockfinder.com/services/key-duplication" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Professional Key Duplication Chicago
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-delay">
              Need spare keys? FastLockFinder provides fast, accurate key duplication services for homes, 
              cars, and businesses. Professional key cutting with precision and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get Keys Made Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Duplication Benefits */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Service</h3>
                <p className="text-sm text-muted-foreground">Most keys duplicated while you wait</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Precision Cutting</h3>
                <p className="text-sm text-muted-foreground">Professional equipment ensures perfect copies</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Copy className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">All Key Types</h3>
                <p className="text-sm text-muted-foreground">Standard to high-security key duplication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Key Duplication Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional key cutting and duplication for all types of keys, from standard house keys 
              to specialized high-security systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>House Key Duplication</CardTitle>
                <CardDescription>
                  Standard residential key copying for all family members and spare keys.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Standard house keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Deadbolt keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Mailbox keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Same-day service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Car Key Duplication</CardTitle>
                <CardDescription>
                  Automotive key cutting for all vehicle makes and models.
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
                    <span>Transponder keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Laser-cut keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Key programming available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Office Key Duplication</CardTitle>
                <CardDescription>
                  Commercial key copying for businesses and office environments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Office building keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Cabinet keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Master key systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Bulk duplication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>High-Security Keys</CardTitle>
                <CardDescription>
                  Specialized duplication for restricted and high-security key systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Restricted key systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Medeco keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>ASSA ABLOY keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Authorization required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Copy className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Specialty Key Cutting</CardTitle>
                <CardDescription>
                  Custom key cutting for unusual locks and specialty applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Antique lock keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Safe keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Skeleton keys</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Custom solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Emergency Key Service</CardTitle>
                <CardDescription>
                  Fast key duplication when you need spare keys urgently.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>While-you-wait service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Mobile key cutting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Same-day availability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Quality guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Our Key Duplication Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional key cutting process for accurate, reliable duplicates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                1
              </div>
              <h3 className="font-semibold mb-2">Key Analysis</h3>
              <p className="text-sm text-muted-foreground">
                We examine your original key to determine the best cutting method
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                2
              </div>
              <h3 className="font-semibold mb-2">Precision Cutting</h3>
              <p className="text-sm text-muted-foreground">
                Professional key cutting machines ensure accurate duplication
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                3
              </div>
              <h3 className="font-semibold mb-2">Quality Testing</h3>
              <p className="text-sm text-muted-foreground">
                Each duplicate key is tested to ensure proper function
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                4
              </div>
              <h3 className="font-semibold mb-2">Final Inspection</h3>
              <p className="text-sm text-muted-foreground">
                Complete quality check before delivery to ensure perfection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Keys Duplicated Today?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't get caught without spare keys. Contact FastLockFinder for fast, accurate key duplication 
            services with professional quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
              <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button variant="default" size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              Get Keys Made Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KeyDuplication;