import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MapPin } from 'lucide-react';
import { serviceAreasData, type ServiceArea } from '@/utils/serviceAreasData';

const HeroSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Filter areas based on search query
  const filteredAreas = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase().trim();
    
    const results = serviceAreasData.filter(area => {
      // Search by name
      if (area.name.toLowerCase().includes(query)) return true;
      
      // Search by zip codes
      if (area.zipCodes.some(zip => zip.includes(query))) return true;
      
      // Search by region
      if (area.region.toLowerCase().includes(query)) return true;
      
      // Search by individual words in the name
      const words = area.name.toLowerCase().split(/[\s-]+/);
      return words.some(word => word.startsWith(query));
    });

    return results.slice(0, 5); // Show top 5 results for hero
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowResults(value.trim().length > 0);
  };

  const handleAreaSelect = (area: ServiceArea) => {
    navigate(`/areas/${area.slug}`);
    setSearchQuery('');
    setShowResults(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredAreas.length > 0) {
      handleAreaSelect(filteredAreas[0]);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter your zip code or city..."
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setShowResults(searchQuery.trim().length > 0)}
            className="pl-10 pr-20 h-12 text-base bg-background/95 backdrop-blur border-2 border-primary/20 focus:border-primary/40"
          />
          <Button 
            type="submit" 
            variant="secondary" 
            size="sm" 
            className="absolute right-1 top-1 bottom-1 px-4"
            disabled={filteredAreas.length === 0}
          >
            Find
          </Button>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {showResults && filteredAreas.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 bg-background/95 backdrop-blur border-2 border-primary/20 shadow-xl">
          <CardContent className="p-2">
            {filteredAreas.map((area) => (
              <button
                key={area.slug}
                onClick={() => handleAreaSelect(area)}
                className="w-full text-left p-3 rounded-md hover:bg-muted/50 transition-colors flex items-center space-x-3"
              >
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-navy-900 truncate">
                    {area.displayName}
                  </div>
                  <div className="text-sm text-navy-600">
                    {area.region} • {area.zipCodes.slice(0, 3).join(', ')}
                    {area.zipCodes.length > 3 && ` +${area.zipCodes.length - 3} more`}
                  </div>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>
      )}

      {/* No Results */}
      {showResults && searchQuery.trim() && filteredAreas.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 bg-background/95 backdrop-blur border-2 border-primary/20 shadow-xl">
          <CardContent className="p-4 text-center">
            <div className="text-muted-foreground">
              No areas found. Need help? 
              <a 
                href="tel:+1-773-377-6511" 
                className="text-primary hover:underline ml-1 font-medium"
              >
                Call us at (773) 377-6511
              </a>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default HeroSearch;