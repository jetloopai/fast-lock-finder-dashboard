import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw, Key, Shield, Phone, CheckCircle, DollarSign, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Rekeying = () => {
  return (
    <Layout>
      <Helmet>
        <title>Lock Rekeying Chicago | Rekey Locks Service | Change Lock Keys</title>
        <meta 
          name="description" 
          content="Professional lock rekeying Chicago - change your locks without replacement. Cost-effective rekey service for homes & businesses. Same-day lock rekeying available." 
        />
        <meta name="keywords" content="lock rekeying Chicago, rekey locks, change lock keys, lock rekeying service, rekey house locks, commercial rekeying, rekeying near me" />
        <link rel="canonical" href="https://fastlockfinder.com/services/rekeying" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Professional Lock Rekeying Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-in-delay">
              Change your locks without the expense of replacement. FastLockFinder's rekeying services provide 
              enhanced security by creating new keys while keeping your existing lock hardware.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call: (555) FAST-LOCK</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Free Rekeying Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cost Effective</h3>
                <p className="text-sm text-muted-foreground">Much cheaper than replacing entire locks</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Process</h3>
                <p className="text-sm text-muted-foreground">Most rekeying completed in under 30 minutes</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                <p className="text-sm text-muted-foreground">Old keys no longer work, ensuring complete security</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rekeying Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Rekeying Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you need residential or commercial rekeying, our professional locksmith services 
              provide secure, affordable solutions for all your lock rekeying needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <RotateCcw className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Residential Rekeying</CardTitle>
                <CardDescription>
                  Secure your home with professional residential lock rekeying services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>New homeowner rekeying</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Lost or stolen key situations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Roommate or tenant changes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security upgrade needs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Multiple locks to match one key</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Commercial Rekeying</CardTitle>
                <CardDescription>
                  Professional business lock rekeying for enhanced commercial security.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Employee termination security</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Office space changes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Master key system setup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Security breach response</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Bulk rekeying projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When to Rekey */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              When Should You Rekey Your Locks?
            </h2>
            <p className="text-xl text-muted-foreground">
              Common situations where rekeying provides the best security solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Moving to a New Home</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure previous owners and contractors can't access your new home
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Lost or Stolen Keys</h3>
                <p className="text-sm text-muted-foreground">
                  Immediate security when keys are lost, stolen, or misplaced
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Relationship Changes</h3>
                <p className="text-sm text-muted-foreground">
                  Secure your home after breakups, divorce, or roommate changes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Employee Termination</h3>
                <p className="text-sm text-muted-foreground">
                  Maintain business security when employees leave the company
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Cost-Effective Upgrade</h3>
                <p className="text-sm text-muted-foreground">
                  Enhance security without the expense of new lock hardware
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Multiple Lock Management</h3>
                <p className="text-sm text-muted-foreground">
                  Create a master key system for convenient access control
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rekeying Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Lock Rekeying Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional rekeying process completed quickly and efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                1
              </div>
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Our locksmith evaluates your current locks and security needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                2
              </div>
              <h3 className="font-semibold mb-2">Disassembly</h3>
              <p className="text-sm text-muted-foreground">
                Lock cylinder is carefully removed and disassembled
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                3
              </div>
              <h3 className="font-semibold mb-2">Pin Replacement</h3>
              <p className="text-sm text-muted-foreground">
                Internal pins are replaced to match your new key configuration
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-foreground">
                4
              </div>
              <h3 className="font-semibold mb-2">Testing</h3>
              <p className="text-sm text-muted-foreground">
                New keys are tested and lock is reassembled perfectly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional Rekeying Service?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't compromise on security. Contact FastLockFinder for fast, affordable, and professional 
            lock rekeying services that enhance your security without breaking the budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
              <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call: (555) FAST-LOCK</span>
              </a>
            </Button>
            <Button variant="default" size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rekeying;