import useScrollAnimation from "@/hooks/useScrollAnimation";

const ServiceAreasMap = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`py-20 bg-background scroll-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-xl p-8 shadow-lg border border-border/20">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            Our Service Areas
          </h2>
          
          {/* Google My Map Embed */}
          <div className="relative w-full h-[480px] md:h-[600px] mb-6">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1I_qM5snqLFX__R-FGMjF0DrABUrC4v4&ehbc=2E312F&noprof=1"
              className="w-full h-full rounded-lg shadow-md border border-border/30"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FastLockFinder Service Areas Map - Chicago South & Southwest Suburbs"
              aria-label="Interactive map showing FastLockFinder locksmith service areas across Chicago's South and Southwest suburbs"
            />
          </div>
          
          {/* SEO-Friendly Caption */}
          <p className="text-center text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            FastLockFinder provides 24/7 locksmith services across Chicago and the South & Southwest Suburbs, 
            including downtown Chicago areas (Loop, Streeterville, West Loop), Oak Lawn, Orland Park, Tinley Park, 
            Calumet City, Homewood, Frankfort, New Lenox, Mokena, and more. Our certified locksmiths deliver fast, 
            reliable service throughout the greater Chicago metropolitan area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasMap;