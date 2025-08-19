import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Key, 
  Home, 
  Building, 
  Car, 
  RotateCcw, 
  Smartphone, 
  Copy, 
  Shield 
} from "lucide-react";

const services = [
  {
    icon: Key,
    title: "Emergency Lockouts",
    description: "24/7 emergency lockout service for homes, cars, and businesses. Average 15-minute arrival time.",
    features: ["Car lockouts", "Home lockouts", "Business lockouts", "24/7 availability"],
    link: "/services/emergency"
  },
  {
    icon: Home,
    title: "Residential Locksmith",
    description: "Complete home security solutions including lock installation, repair, and upgrade services.",
    features: ["Lock installation", "Lock repair", "Deadbolt installation", "Security upgrades"],
    link: "/services/residential"
  },
  {
    icon: Building,
    title: "Commercial Locksmith",
    description: "Professional business security systems, access control, and master key solutions.",
    features: ["Access control systems", "Master key systems", "Security upgrades", "Emergency repairs"],
    link: "/services/commercial"
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "Complete automotive locksmith services including key replacement and ignition repair.",
    features: ["Key replacement", "Ignition repair", "Transponder keys", "Car lockouts"],
    link: "/services/automotive"
  },
  {
    icon: RotateCcw,
    title: "Rekeying Services",
    description: "Professional lock rekeying services to enhance security without replacing hardware.",
    features: ["Home rekeying", "Business rekeying", "Master key systems", "Security upgrades"],
    link: "/services/rekeying"
  },
  {
    icon: Smartphone,
    title: "Smart Lock Installation",
    description: "Modern smart lock installation and programming for enhanced home and business security.",
    features: ["Smart lock installation", "Programming", "Integration setup", "Technical support"],
    link: "/services/smart-locks"
  },
  {
    icon: Copy,
    title: "Key Duplication",
    description: "Professional key cutting and duplication services performed on-site with precision.",
    features: ["Key cutting", "Key duplication", "Special keys", "On-site service"],
    link: "/services/key-duplication"
  },
  {
    icon: Shield,
    title: "Safe Services",
    description: "Complete safe services including installation, opening, and repair for residential and commercial.",
    features: ["Safe opening", "Safe installation", "Safe repair", "Combination changes"],
    link: "/services/safes"
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Locksmith Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            FastLockFinder provides comprehensive locksmith services across Chicago's South & Southwest suburbs. 
            From emergency lockouts to advanced security systems, we've got you covered 24/7.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover-lift h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Locksmith Service Right Now?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - our professional locksmiths are standing by 24/7 to help you get unlocked fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
              <a href="tel:+1-555-FAST-LOCK">Call: (555) FAST-LOCK</a>
            </Button>
            <Button variant="secondary" size="lg">
              Get Unlocked Fast
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;