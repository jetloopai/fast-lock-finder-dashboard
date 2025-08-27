import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

const ClosingCTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground animate-fade-in">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold animate-slide-up">
            Locked Out in Chicago's South or Southwest Suburbs?
          </h2>
          <p className="text-xl text-primary-foreground/90 animate-fade-in-delay">
            Don't wait another minute. FastLockFinder's professional locksmiths are standing by 
            to help you get unlocked fast. Call now for immediate assistance or submit our quick form.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-left">
            <Button variant="hero" size="lg" className="animate-glow hover-glow" asChild>
              <a href="tel:+1-773-377-6511" className="flex items-center space-x-3">
                <Phone className="h-6 w-6" />
                <div className="text-left">
                  <div className="font-bold text-lg">Call Now</div>
                  <div className="text-sm opacity-90">Emergency Help</div>
                </div>
              </a>
            </Button>
            
            <div className="text-primary-foreground/60 font-semibold">OR</div>
            
            <Button variant="secondary" size="lg">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Unlocked Fast
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-center animate-slide-up">
            <div>
              <div className="text-3xl font-bold text-accent">15 Min</div>
              <div className="text-primary-foreground/80">Average Arrival</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-primary-foreground/80">Always Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">50+ Cities</div>
              <div className="text-primary-foreground/80">South & Southwest Suburbs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;