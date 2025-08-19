import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Shield, CheckCircle } from "lucide-react";

const BrandsEquipment = () => {
  const lockBrands = [
    "Schlage", "Kwikset", "Baldwin", "Yale", "Medeco", "ASSA ABLOY",
    "August", "Nest", "Samsung", "ADT", "Honeywell", "Weiser"
  ];

  const carBrands = [
    "Ford", "Chevrolet", "Toyota", "Honda", "BMW", "Mercedes-Benz",
    "Audi", "Nissan", "Hyundai", "Kia", "Jeep", "Volkswagen"
  ];

  const safeBrands = [
    "SentrySafe", "Liberty Safe", "Cannon Safe", "Stack-On", 
    "AMSEC", "Browning", "Winchester", "Fort Knox"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Equipment & Brand Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Chicago locksmith technicians are trained and equipped to work with all major lock, 
            car, and safe brands using professional-grade tools and equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="hover-lift">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle>Lock Brands We Service</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {lockBrands.map((brand, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>{brand}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle>Vehicle Brands</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {carBrands.map((brand, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>{brand}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle>Safe Manufacturers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {safeBrands.map((brand, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>{brand}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Professional Locksmith Equipment Chicago
            </h3>
            <p className="text-lg text-muted-foreground">
              Our mobile locksmith units are equipped with the latest professional tools and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Key Cutting Machines</h4>
              <p className="text-sm text-muted-foreground">Precision laser and standard key cutting equipment</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Transponder Programming</h4>
              <p className="text-sm text-muted-foreground">Latest automotive key programming technology</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Lock Pick Tools</h4>
              <p className="text-sm text-muted-foreground">Professional lock picking and bump key tools</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Safe Drilling Equipment</h4>
              <p className="text-sm text-muted-foreground">Specialized safe opening and repair tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsEquipment;