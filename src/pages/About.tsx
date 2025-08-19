import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Phone, 
  Shield, 
  CheckCircle, 
  Star,
  MapPin,
  Award,
  Users,
  Wrench
} from "lucide-react";
import { Link } from "react-router-dom";
import ClosingCTA from "@/components/home/ClosingCTA";
import { Helmet } from "react-helmet-async";

const About = () => {
  const stats = [
    { icon: Clock, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Happy Customers", value: "5,000+" },
    { icon: MapPin, label: "Cities Served", value: "50+" },
    { icon: Award, label: "Licensed & Insured", value: "100%" }
  ];

  const services = [
    { name: "Emergency Lockouts", href: "/services/emergency" },
    { name: "Residential Locksmith", href: "/services/residential" },
    { name: "Commercial Locksmith", href: "/services/commercial" },
    { name: "Automotive Locksmith", href: "/services/automotive" },
    { name: "Lock Rekeying", href: "/services/rekeying" },
    { name: "Smart Lock Installation", href: "/services/smart-locks" },
    { name: "Key Duplication", href: "/services/key-duplication" },
    { name: "Safe Services", href: "/services/safes" }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About FastLockFinder | Professional Locksmith Chicago South Suburbs</title>
        <meta 
          name="description" 
          content="Learn about FastLockFinder - Chicago's trusted locksmith serving South & Southwest suburbs for 15+ years. Licensed, insured, and available 24/7 for all locksmith needs." 
        />
        <meta name="keywords" content="about FastLockFinder, Chicago locksmith company, professional locksmith, licensed locksmith, locksmith experience, South suburbs locksmith" />
        <link rel="canonical" href="https://fastlockfinder.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About FastLockFinder
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Your trusted locksmith partner serving Chicago's South & Southwest suburbs 
              for over 15 years. We're committed to keeping you secure with fast, 
              professional, and reliable locksmith services available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <a href="tel:+1-555-FAST-LOCK">Call: (555) FAST-LOCK</a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story & Mission
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009, FastLockFinder began as a small family business with a simple mission: 
                  to provide fast, reliable locksmith services to the communities of Chicago's South and 
                  Southwest suburbs. What started with a single van and a commitment to customer service 
                  has grown into the area's most trusted locksmith company.
                </p>
                <p>
                  Today, we serve over 50 cities across the region, maintaining our founding principles 
                  of integrity, professionalism, and rapid response times. Our team of licensed and 
                  insured technicians is available 24/7 to handle any locksmith emergency or scheduled service.
                </p>
                <p>
                  Whether you're locked out of your home, need commercial security upgrades, or require 
                  automotive locksmith services, we're here to help with the expertise and reliability 
                  you can count on.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-accent" />
                    <span>Licensed & Insured</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    All our technicians are fully licensed, bonded, and insured, giving you 
                    complete peace of mind with every service call.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>24/7 Availability</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Lockouts don't wait for business hours. That's why we're available 
                    around the clock, every day of the year.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wrench className="h-5 w-5 text-accent" />
                    <span>Professional Equipment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We use the latest tools and techniques to ensure efficient, 
                    damage-free service for all types of locks and security systems.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Locksmith Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From emergency lockouts to advanced security installations, we provide the complete 
              range of locksmith services throughout Chicago's South and Southwest suburbs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Button key={index} variant="outline" asChild className="h-auto p-4 text-center">
                <Link to={service.href}>
                  {service.name}
                </Link>
              </Button>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas Link */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Serving 50+ Cities Across Chicago South & Southwest Suburbs
          </h2>
          <p className="text-lg mb-8 opacity-90">
            From Oak Lawn to Orland Park, from Burbank to Tinley Park - we're your local locksmith experts.
          </p>
          <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
            <Link to="/service-areas">View All Service Areas</Link>
          </Button>
        </div>
      </section>

      <ClosingCTA />
    </Layout>
  );
};

export default About;