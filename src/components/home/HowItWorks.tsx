import { Card, CardContent } from "@/components/ui/card";
import { Phone, UserCheck, Unlock } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "1",
    title: "Call Us",
    description: "Call (555) FAST-LOCK or submit our quick form. We'll gather your location and service details."
  },
  {
    icon: UserCheck,
    step: "2", 
    title: "We Connect You",
    description: "We immediately connect you with the nearest available locksmith in your area."
  },
  {
    icon: Unlock,
    step: "3",
    title: "Get Unlocked",
    description: "Our professional locksmith arrives in 15 minutes average and gets you back in safely."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting unlocked is simple with FastLockFinder. Here's our proven 3-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="hover-lift">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="relative mx-auto w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                      <IconComponent className="h-10 w-10 text-accent-foreground" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-accent"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-accent border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;