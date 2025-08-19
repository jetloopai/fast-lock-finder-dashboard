import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Key,
    title: "Emergency Lockouts",
    description: "Locked out of your home, car, or business? We'll get you back in fast.",
    link: "/services/emergency"
  },
  {
    icon: Home,
    title: "Residential Services",
    description: "Lock installation, repair, and replacement for your home security.",
    link: "/services/residential"
  },
  {
    icon: Building,
    title: "Commercial Locksmith",
    description: "Business security systems, access control, and master key systems.",
    link: "/services/commercial"
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description: "Car lockouts, key replacement, and ignition repair services.",
    link: "/services/automotive"
  },
  {
    icon: RotateCcw,
    title: "Rekeying Services",
    description: "Rekey your locks for enhanced security without replacing hardware.",
    link: "/services/rekeying"
  },
  {
    icon: Smartphone,
    title: "Smart Locks",
    description: "Modern smart lock installation and programming services.",
    link: "/services/smart-locks"
  },
  {
    icon: Copy,
    title: "Key Duplication",
    description: "Professional key cutting and duplication services on-site.",
    link: "/services/key-duplication"
  },
  {
    icon: Shield,
    title: "Safe Services",
    description: "Safe opening, installation, and repair for residential and commercial.",
    link: "/services/safes"
  }
];

const ServicesGrid = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef as any}
          className={`text-center mb-16 scroll-fade ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Locksmith Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From emergency lockouts to advanced security systems, we provide comprehensive 
            locksmith services across Chicago's South & Southwest suburbs.
          </p>
        </div>

        <div 
          ref={gridRef as any}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-scale ${gridVisible ? 'visible' : ''}`}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const cardDelay = gridVisible ? `${index * 100}ms` : '0ms';
            return (
              <Card 
                key={index} 
                className="hover-lift hover-glow group" 
                style={{
                  transitionDelay: cardDelay
                }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 icon-glow">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription>{service.description}</CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg" className="animate-glow hover-glow" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;