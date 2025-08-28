import React, { useState, useMemo, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MapPin, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceArea {
  name: string;
  slug: string;
  region: string;
  zipCodes: string[];
  displayName: string;
}

interface ServiceAreaSearchProps {
  areas: ServiceArea[];
  onFilter: (filteredAreas: ServiceArea[]) => void;
  className?: string;
}

const ServiceAreaSearch: React.FC<ServiceAreaSearchProps> = ({
  areas,
  onFilter,
  className
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Popular areas for quick access
  const popularAreas = useMemo(() => [
    { name: "Downtown Chicago", slug: "chicago-60602-central-loop" },
    { name: "Oak Lawn", slug: "oak-lawn" },
    { name: "Orland Park", slug: "orland-park" },
    { name: "Tinley Park", slug: "tinley-park" }
  ], []);

  // Filter areas based on search query
  const filteredAreas = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase().trim();
    const results = areas.filter(area => {
      // Search by name
      if (area.name.toLowerCase().includes(query)) return true;
      
      // Search by zip code
      if (area.zipCodes.some(zip => zip.includes(query))) return true;
      
      // Search by region
      if (area.region.toLowerCase().includes(query)) return true;
      
      // Search by partial matches
      const words = area.name.toLowerCase().split(/[\s-]+/);
      return words.some(word => word.startsWith(query));
    });

    return results.slice(0, 8); // Show top 8 results in dropdown
  }, [searchQuery, areas]);

  // Handle filtering with useEffect to avoid infinite loops
  
  useEffect(() => {
    if (!searchQuery.trim()) {
      onFilter(areas);
    } else {
      const query = searchQuery.toLowerCase().trim();
      const results = areas.filter(area => {
        if (area.name.toLowerCase().includes(query)) return true;
        if (area.zipCodes.some(zip => zip.includes(query))) return true;
        if (area.region.toLowerCase().includes(query)) return true;
        const words = area.name.toLowerCase().split(/[\s-]+/);
        return words.some(word => word.startsWith(query));
      });
      onFilter(results);
    }
  }, [searchQuery, areas, onFilter]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowResults(value.length > 0);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
    onFilter(areas);
  };

  const handleQuickAccess = (slug: string) => {
    const area = areas.find(a => a.slug === slug);
    if (area) {
      setSearchQuery(area.name);
      onFilter([area]);
      setShowResults(false);
    }
  };

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Enter zip code or city name (e.g., 60601, Oak Lawn, Loop)..."
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setShowResults(searchQuery.length > 0)}
          className="pl-12 pr-12 h-14 text-base bg-card border-2 border-border/50 focus:border-accent focus:ring-accent/20"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && filteredAreas.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 bg-card/95 backdrop-blur-sm border-2 border-border/50 shadow-lg">
          <CardContent className="p-0">
            <div className="max-h-80 overflow-y-auto">
              {filteredAreas.map((area, index) => (
                <Link
                  key={area.slug}
                  to={`/service-areas/${area.slug}-locksmith`}
                  onClick={() => setShowResults(false)}
                  className={cn(
                    "flex items-start gap-3 p-4 hover:bg-accent/10 transition-colors border-b border-border/30",
                    index === filteredAreas.length - 1 && "border-b-0"
                  )}
                >
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground truncate">
                      {area.displayName}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {area.region}
                      {area.zipCodes.length > 0 && (
                        <span className="ml-2">• {area.zipCodes.slice(0, 3).join(', ')}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* No Results */}
      {showResults && searchQuery && filteredAreas.length === 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 bg-card/95 backdrop-blur-sm border-2 border-border/50 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="text-muted-foreground mb-4">
              No service areas found for "{searchQuery}"
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              We may still be able to help! Call us to check if we serve your area.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+1-773-377-6511">Call (773) 377-6511</a>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Quick Access Buttons */}
      {!searchQuery && (
        <div className="mt-6">
          <p className="text-sm text-muted-foreground mb-3 text-center">Popular Areas:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularAreas.map((area) => (
              <Button
                key={area.slug}
                variant="outline"
                size="sm"
                onClick={() => handleQuickAccess(area.slug)}
                className="text-sm"
              >
                {area.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceAreaSearch;