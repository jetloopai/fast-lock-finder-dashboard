import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Users, DollarSign } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Lightning Fast Arrival",
    description: "15-minute average response time, never more than 30 minutes. We know being locked out is stressful."
  },
  {
    icon: Shield,
    title: "24/7 Availability",
    description: "Emergency locksmith services around the clock, 365 days a year. We're here when you need us most."
  },
  {
    icon: Users,
    title: "Trusted Local Experts",
    description: "Professional locksmiths serving Chicago's South & Southwest suburbs with years of experience."
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees or surprise charges. We provide clear, honest pricing before we start any work."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose FastLockFinder?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            When you're locked out, every minute matters. Here's why thousands of customers 
            trust FastLockFinder for their locksmith needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover-lift border-none shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;