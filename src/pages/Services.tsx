import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Key, 
  Home, 
  Building, 
  Car, 
  RotateCcw, 
  Smartphone, 
  Copy, 
  Shield,
  Mail,
  FileText,
  Warehouse,
  Lock
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
  },
  {
    icon: Mail,
    title: "Mailbox Services",
    description: "Professional mailbox lock repair, replacement, and master key services for residential and commercial properties.",
    features: ["Mailbox lock repair", "Lock replacement", "Master key systems", "USPS approved locks"],
    link: "/services/mailboxes"
  },
  {
    icon: FileText,
    title: "File Cabinet Services",
    description: "File cabinet lock repair, replacement, and key services to secure your important documents.",
    features: ["Lock repair", "Key replacement", "New installations", "Emergency opening"],
    link: "/services/file-cabinets"
  },
  {
    icon: Warehouse,
    title: "Storage Unit Services",
    description: "Storage unit lock services including lock installation, repair, and emergency access solutions.",
    features: ["Lock installation", "Emergency access", "Lock repair", "High-security locks"],
    link: "/services/storage-units"
  },
  {
    icon: Lock,
    title: "Padlock Services",
    description: "Professional padlock services including installation, repair, and high-security padlock solutions.",
    features: ["Padlock installation", "High-security options", "Weather-resistant locks", "Key services"],
    link: "/services/padlocks"
  }
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Locksmith Services Chicago | Emergency, Residential, Commercial | FastLockFinder</title>
        <meta 
          name="description" 
          content="Professional locksmith services in Chicago South & Southwest suburbs - 24/7 emergency, residential, commercial, automotive locksmith. Licensed & insured." 
        />
        <meta name="keywords" content="locksmith services Chicago, emergency locksmith, residential locksmith, commercial locksmith, automotive locksmith, key duplication, smart locks, safes" />
        <link rel="canonical" href="https://fastlockfinder.com/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional Locksmith Services | Chicago South & Southwest Suburbs" />
        <meta property="og:description" content="24/7 locksmith services - emergency lockouts, residential, commercial, automotive. Licensed professionals serving Chicago suburbs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fastlockfinder.com/services" />
        <meta property="og:image" content="https://fastlockfinder.com/og-services.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Locksmith Services | Chicago Suburbs" />
        <meta name="twitter:description" content="24/7 locksmith services - emergency lockouts, residential, commercial, automotive. Licensed professionals." />
        <meta name="twitter:image" content="https://fastlockfinder.com/og-services.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Locksmith Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "FastLockFinder",
              "url": "https://fastlockfinder.com"
            },
            "serviceType": ["Emergency Locksmith", "Residential Locksmith", "Commercial Locksmith", "Automotive Locksmith"],
            "areaServed": {
              "@type": "Place",
              "name": "Chicago South & Southwest Suburbs"
            }
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Professional Locksmith Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-delay">
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
                <Card key={index} className="hover-lift h-full gradient-service-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
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
            <Button variant="cta" size="lg" asChild>
              <a href="tel:+1-773-377-6511">Call Now</a>
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