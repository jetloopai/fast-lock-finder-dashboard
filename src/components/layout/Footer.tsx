import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { serviceAreasData } from "@/utils/serviceAreasData";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg inline-block">
              <img 
                src="/lovable-uploads/f6abcd6d-055f-4b46-b777-5991e5e31014.png" 
                alt="FastLockFinder Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80">
              Fast, reliable 24/7 locksmith service across Chicago's South & Southwest suburbs.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Clock className="h-4 w-4" />
              <span>24/7 Emergency Service</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Services
              </Link>
              <Link to="/service-areas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Service Areas
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/services/emergency" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Emergency Lockouts
              </Link>
              <Link to="/services/residential" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Residential Locksmith
              </Link>
              <Link to="/services/commercial" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Commercial Locksmith
              </Link>
              <Link to="/services/automotive" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Automotive Locksmith
              </Link>
              <Link to="/services/rekeying" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Lock Rekeying
              </Link>
              <Link to="/services/smart-locks" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Smart Locks
              </Link>
              <Link to="/services/key-duplication" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Key Duplication
              </Link>
              <Link to="/services/safes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Safe Services
              </Link>
            </nav>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Service Areas</h3>
            <div className="grid grid-cols-4 gap-x-2 gap-y-1">
              {/* Priority suburbs and south Chicago neighborhoods */}
              {[
                // Main suburbs requested
                serviceAreasData.find(area => area.name === "Oak Lawn"),
                serviceAreasData.find(area => area.name === "Tinley Park"),
                serviceAreasData.find(area => area.name === "Orland Park"),
                serviceAreasData.find(area => area.name === "Homewood"),
                serviceAreasData.find(area => area.name === "Matteson"),
                serviceAreasData.find(area => area.name === "Lansing"),
                // Additional suburbs
                serviceAreasData.find(area => area.name === "Evergreen Park"),
                serviceAreasData.find(area => area.name === "South Holland"),
                serviceAreasData.find(area => area.name === "Country Club Hills"),
                serviceAreasData.find(area => area.name === "Oak Forest"),
                // South Chicago neighborhoods (4)
                serviceAreasData.find(area => area.name === "Hyde Park"),
                serviceAreasData.find(area => area.name === "Chatham"),
                serviceAreasData.find(area => area.name === "South Shore"),
                serviceAreasData.find(area => area.name === "Bronzeville"),
                // Key downtown areas (2)
                serviceAreasData.find(area => area.name === "South Loop"),
                serviceAreasData.find(area => area.name === "West Loop"),
              ].filter(Boolean).slice(0, 16).map((area) => (
                <Link 
                  key={area.slug}
                  to={`/service-areas/${area.slug}`}
                  className="text-xs text-primary-foreground/80 hover:text-primary-foreground transition-colors truncate"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <Link 
              to="/service-areas" 
              className="inline-block text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              View All Areas →
            </Link>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <a 
                href="tel:+1-773-377-6511"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Chicago, IL</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@fastlockfinder.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            &copy; 2026 FastLockFinder. All rights reserved. |
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors ml-1">
              Privacy Policy
            </Link> | 
            <Link to="/terms" className="hover:text-primary-foreground transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;