import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const EmergencySituations = () => {
  const situations = [
    {
      icon: AlertTriangle,
      title: "Locked Out of Car",
      description: "Keys locked inside or lost car keys",
      keywords: "car lockout Chicago, automotive locksmith, locked out of car"
    },
    {
      icon: Clock,
      title: "Home Lockout Emergency", 
      description: "Locked out of house or apartment",
      keywords: "home lockout, house lockout Chicago, residential locksmith emergency"
    },
    {
      icon: Shield,
      title: "Office Lockout",
      description: "Locked out of business or office building",
      keywords: "commercial lockout, office lockout Chicago, business locksmith"
    },
    {
      icon: DollarSign,
      title: "Broken Key Extraction",
      description: "Key broke off in lock cylinder",
      keywords: "broken key extraction, key stuck in lock, emergency key repair"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Locksmith Emergency Situations in Chicago
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't let these common lockout situations ruin your day. Our emergency locksmith service 
            in Chicago's South & Southwest suburbs responds quickly to get you back inside.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {situations.map((situation, index) => {
            const IconComponent = situation.icon;
            return (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">{situation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{situation.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-accent text-accent-foreground rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Emergency Locksmith Chicago - Available 24/7
          </h3>
          <p className="text-lg mb-6 opacity-90">
            No matter what time of day or night, our emergency locksmith technicians are ready to help. 
            We serve all of Chicago's South & Southwest suburbs with fast, professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Call Emergency Line Now
            </Button>
            <Button variant="default" size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              Request Emergency Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySituations;