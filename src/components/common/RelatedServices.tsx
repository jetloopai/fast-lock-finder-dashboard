import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesProps {
  services: Service[];
  title?: string;
}

const RelatedServices = ({ services, title = "Related Services" }: RelatedServicesProps) => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of professional locksmith services 
            designed to keep you secure and provide peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover-lift group h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Button variant="cta" size="lg" asChild>
            <Link to="/services">View All Locksmith Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;