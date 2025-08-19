import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-locksmith.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up">
                Locked Out?
                <span className="block text-accent text-glow">We'll Be There in 15 Minutes</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-lg animate-fade-in-delay">
                Fast, reliable 24/7 locksmith service across Chicago's South & Southwest suburbs. 
                Professional locksmiths, upfront pricing, never more than 30 minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left">
              <Button variant="hero" size="lg" className="animate-glow hover-glow" asChild>
                <a href="tel:+1-555-FAST-LOCK" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now: (555) FAST-LOCK</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get Unlocked Fast
              </Button>
            </div>

            {/* Proof Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 animate-fade-in-delay">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center icon-float" style={{animationDelay: '0.5s'}}>
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold">15-Minute Arrival</div>
                  <div className="text-sm text-primary-foreground/80">Average response time</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center icon-float" style={{animationDelay: '1s'}}>
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold">24/7 Coverage</div>
                  <div className="text-sm text-primary-foreground/80">Always available</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center icon-float" style={{animationDelay: '1.5s'}}>
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold">Trusted Locally</div>
                  <div className="text-sm text-primary-foreground/80">South & Southwest suburbs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <img 
              src={heroImage} 
              alt="FastLockFinder locksmith van arriving quickly in Chicago suburbs"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;