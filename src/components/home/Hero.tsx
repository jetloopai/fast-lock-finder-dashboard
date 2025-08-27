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
                Trusted Locksmith Services in Chicago & the South Suburbs
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-lg animate-fade-in-delay">
                FastLockFinder connects you with licensed, verified locksmiths serving Oak Lawn, Lansing, Matteson, Orland Park and 50+ South Suburban communities. Safe, reliable, and available 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left">
              <Button variant="hero" size="lg" className="animate-glow hover-glow" asChild>
                <a href="tel:+1-773-377-6511" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>📞 Get Connected Instantly</span>
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Get Unlocked Fast
              </Button>
            </div>

            {/* Proof Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 animate-fade-in-delay">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center icon-glow" style={{animationDelay: '0.5s'}}>
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold">15-Minute Arrival</div>
                  <div className="text-sm text-primary-foreground/80">Average response time</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center icon-glow" style={{animationDelay: '1s'}}>
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold">24/7 Coverage</div>
                  <div className="text-sm text-primary-foreground/80">Always available</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center icon-glow" style={{animationDelay: '1.5s'}}>
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
              alt="Professional FastLockFinder locksmith van providing 24/7 emergency locksmith services in Chicago South and Southwest suburbs"
              title="FastLockFinder Emergency Locksmith Service"
              className="w-full h-auto rounded-lg shadow-2xl"
              width="600"
              height="400"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;