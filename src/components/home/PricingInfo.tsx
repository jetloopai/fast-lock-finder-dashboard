import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Clock, CheckCircle, Shield } from "lucide-react";

const PricingInfo = () => {
  const pricingFeatures = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees - you know the cost upfront before we start any work"
    },
    {
      icon: Clock,
      title: "No Trip Charges",
      description: "We don't charge extra for coming to your location, even for emergencies"
    },
    {
      icon: CheckCircle,
      title: "Competitive Rates", 
      description: "Fair, honest pricing for all locksmith services in Chicago suburbs"
    },
    {
      icon: Shield,
      title: "Service Guarantee",
      description: "All work guaranteed - if you're not satisfied, we'll make it right"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Locksmith Prices Chicago
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get professional locksmith service at competitive prices. We believe in transparent, 
            upfront pricing with no surprises for all our Chicago area customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Common Locksmith Service Costs
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Emergency Lockout Service</span>
                  <span className="font-semibold">Starting at $75</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lock Installation</span>
                  <span className="font-semibold">Starting at $95</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lock Rekeying</span>
                  <span className="font-semibold">Starting at $25/lock</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Car Key Replacement</span>
                  <span className="font-semibold">Starting at $125</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Why Choose Our Pricing?</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>No markup on parts or materials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Free estimates for all services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Senior and military discounts available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Payment plans for larger projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingInfo;