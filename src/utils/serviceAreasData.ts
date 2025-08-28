// Enhanced service areas data with zip codes for search functionality
export interface ServiceArea {
  name: string;
  slug: string;
  region: "Chicago" | "South Suburbs" | "Southwest Suburbs";
  zipCodes: string[];
  displayName: string;
}

// Comprehensive service areas data combining existing areas with zip code information
export const serviceAreasData: ServiceArea[] = [
  // Chicago Areas (from cityData with zip codes)
  {
    name: "Streeterville",
    slug: "chicago-60601-streeterville",
    region: "Chicago",
    zipCodes: ["60601"],
    displayName: "Streeterville (60601)"
  },
  {
    name: "Central Loop",
    slug: "chicago-60602-central-loop",
    region: "Chicago",
    zipCodes: ["60602"],
    displayName: "Central Loop (60602)"
  },
  {
    name: "South Loop",
    slug: "chicago-60603-south-loop",
    region: "Chicago",
    zipCodes: ["60603"],
    displayName: "South Loop (60603)"
  },
  {
    name: "Museum Campus",
    slug: "chicago-60604-museum-campus",
    region: "Chicago",
    zipCodes: ["60604"],
    displayName: "Museum Campus (60604)"
  },
  {
    name: "Printer's Row",
    slug: "chicago-60605-printers-row",
    region: "Chicago",
    zipCodes: ["60605"],
    displayName: "Printer's Row (60605)"
  },
  {
    name: "West Loop Gate",
    slug: "chicago-60606-west-loop-gate",
    region: "Chicago",
    zipCodes: ["60606"],
    displayName: "West Loop Gate (60606)"
  },
  {
    name: "West Loop",
    slug: "chicago-60607-west-loop",
    region: "Chicago",
    zipCodes: ["60607"],
    displayName: "West Loop (60607)"
  },
  {
    name: "Pilsen",
    slug: "chicago-60608-pilsen",
    region: "Chicago",
    zipCodes: ["60608"],
    displayName: "Pilsen (60608)"
  },
  {
    name: "Old Town",
    slug: "chicago-60610-old-town",
    region: "Chicago",
    zipCodes: ["60610"],
    displayName: "Old Town (60610)"
  },
  {
    name: "Magnificent Mile",
    slug: "chicago-60611-mag-mile",
    region: "Chicago",
    zipCodes: ["60611"],
    displayName: "Magnificent Mile (60611)"
  },
  {
    name: "Medical District",
    slug: "chicago-60612-medical-district",
    region: "Chicago",
    zipCodes: ["60612"],
    displayName: "Medical District (60612)"
  },
  {
    name: "Hyde Park",
    slug: "chicago-60615-hyde-park",
    region: "Chicago",
    zipCodes: ["60615"],
    displayName: "Hyde Park (60615)"
  },
  {
    name: "Chatham",
    slug: "chicago-60619-chatham",
    region: "Chicago",
    zipCodes: ["60619"],
    displayName: "Chatham (60619)"
  },
  {
    name: "Auburn Gresham",
    slug: "chicago-60620-auburn-gresham",
    region: "Chicago",
    zipCodes: ["60620"],
    displayName: "Auburn Gresham (60620)"
  },
  {
    name: "Englewood",
    slug: "chicago-60621-englewood",
    region: "Chicago",
    zipCodes: ["60621"],
    displayName: "Englewood (60621)"
  },
  {
    name: "West Englewood",
    slug: "chicago-60636-west-englewood",
    region: "Chicago",
    zipCodes: ["60636"],
    displayName: "West Englewood (60636)"
  },
  {
    name: "Woodlawn",
    slug: "chicago-60637-woodlawn",
    region: "Chicago",
    zipCodes: ["60637"],
    displayName: "Woodlawn (60637)"
  },
  {
    name: "South Shore",
    slug: "chicago-60649-south-shore",
    region: "Chicago",
    zipCodes: ["60649"],
    displayName: "South Shore (60649)"
  },
  {
    name: "Bronzeville",
    slug: "chicago-60653-bronzeville",
    region: "Chicago",
    zipCodes: ["60653"],
    displayName: "Bronzeville (60653)"
  },
  {
    name: "Roseland",
    slug: "chicago-60628-roseland",
    region: "Chicago",
    zipCodes: ["60628"],
    displayName: "Roseland (60628)"
  },
  {
    name: "Chicago Lawn",
    slug: "chicago-60629-chicago-lawn",
    region: "Chicago",
    zipCodes: ["60629"],
    displayName: "Chicago Lawn (60629)"
  },
  {
    name: "Brighton Park",
    slug: "chicago-60632-brighton-park",
    region: "Chicago",
    zipCodes: ["60632"],
    displayName: "Brighton Park (60632)"
  },
  {
    name: "Hegewisch",
    slug: "chicago-60633-hegewisch",
    region: "Chicago",
    zipCodes: ["60633"],
    displayName: "Hegewisch (60633)"
  },
  {
    name: "Garfield Ridge",
    slug: "chicago-60638-garfield-ridge",
    region: "Chicago",
    zipCodes: ["60638"],
    displayName: "Garfield Ridge (60638)"
  },
  {
    name: "Beverly",
    slug: "chicago-60643-beverly",
    region: "Chicago",
    zipCodes: ["60643"],
    displayName: "Beverly (60643)"
  },
  {
    name: "Mount Greenwood",
    slug: "chicago-60655-mount-greenwood",
    region: "Chicago",
    zipCodes: ["60655"],
    displayName: "Mount Greenwood (60655)"
  },
  {
    name: "Riverdale",
    slug: "chicago-60827-riverdale",
    region: "Chicago",
    zipCodes: ["60827"],
    displayName: "Riverdale (60827)"
  },
  {
    name: "Near West Loop",
    slug: "chicago-60661-near-west-loop",
    region: "Chicago",
    zipCodes: ["60661"],
    displayName: "Near West Loop (60661)"
  },

  // South Suburbs (enhanced with zip codes)
  {
    name: "Oak Lawn",
    slug: "oak-lawn",
    region: "South Suburbs",
    zipCodes: ["60453", "60454"],
    displayName: "Oak Lawn"
  },
  {
    name: "Evergreen Park",
    slug: "evergreen-park",
    region: "South Suburbs",
    zipCodes: ["60805"],
    displayName: "Evergreen Park"
  },
  {
    name: "Alsip",
    slug: "alsip",
    region: "South Suburbs",
    zipCodes: ["60803"],
    displayName: "Alsip"
  },
  {
    name: "Blue Island",
    slug: "blue-island",
    region: "South Suburbs",
    zipCodes: ["60406"],
    displayName: "Blue Island"
  },
  {
    name: "Calumet City",
    slug: "calumet-city",
    region: "South Suburbs",
    zipCodes: ["60409"],
    displayName: "Calumet City"
  },
  {
    name: "Dolton",
    slug: "dolton",
    region: "South Suburbs",
    zipCodes: ["60419"],
    displayName: "Dolton"
  },
  {
    name: "Harvey",
    slug: "harvey",
    region: "South Suburbs",
    zipCodes: ["60426"],
    displayName: "Harvey"
  },
  {
    name: "South Holland",
    slug: "south-holland",
    region: "South Suburbs",
    zipCodes: ["60473"],
    displayName: "South Holland"
  },
  {
    name: "Lansing",
    slug: "lansing",
    region: "South Suburbs",
    zipCodes: ["60438"],
    displayName: "Lansing"
  },
  {
    name: "Markham",
    slug: "markham",
    region: "South Suburbs",
    zipCodes: ["60428"],
    displayName: "Markham"
  },
  {
    name: "Riverdale",
    slug: "riverdale",
    region: "South Suburbs",
    zipCodes: ["60827"],
    displayName: "Riverdale"
  },
  {
    name: "Robbins",
    slug: "robbins",
    region: "South Suburbs",
    zipCodes: ["60472"],
    displayName: "Robbins"
  },
  {
    name: "Homewood",
    slug: "homewood",
    region: "South Suburbs",
    zipCodes: ["60430"],
    displayName: "Homewood"
  },
  {
    name: "Flossmoor",
    slug: "flossmoor",
    region: "South Suburbs",
    zipCodes: ["60422"],
    displayName: "Flossmoor"
  },
  {
    name: "Hazel Crest",
    slug: "hazel-crest",
    region: "South Suburbs",
    zipCodes: ["60429"],
    displayName: "Hazel Crest"
  },
  {
    name: "Country Club Hills",
    slug: "country-club-hills",
    region: "South Suburbs",
    zipCodes: ["60478"],
    displayName: "Country Club Hills"
  },
  {
    name: "Matteson",
    slug: "matteson",
    region: "South Suburbs",
    zipCodes: ["60443"],
    displayName: "Matteson"
  },
  {
    name: "Richton Park",
    slug: "richton-park",
    region: "South Suburbs",
    zipCodes: ["60471"],
    displayName: "Richton Park"
  },
  {
    name: "Olympia Fields",
    slug: "olympia-fields",
    region: "South Suburbs",
    zipCodes: ["60461"],
    displayName: "Olympia Fields"
  },
  {
    name: "Park Forest",
    slug: "park-forest",
    region: "South Suburbs",
    zipCodes: ["60466"],
    displayName: "Park Forest"
  },
  {
    name: "University Park",
    slug: "university-park",
    region: "South Suburbs",
    zipCodes: ["60484"],
    displayName: "University Park"
  },
  {
    name: "Crete",
    slug: "crete",
    region: "South Suburbs",
    zipCodes: ["60417"],
    displayName: "Crete"
  },
  {
    name: "Monee",
    slug: "monee",
    region: "South Suburbs",
    zipCodes: ["60449"],
    displayName: "Monee"
  },
  {
    name: "Steger",
    slug: "steger",
    region: "South Suburbs",
    zipCodes: ["60475"],
    displayName: "Steger"
  },
  {
    name: "Sauk Village",
    slug: "sauk-village",
    region: "South Suburbs",
    zipCodes: ["60411"],
    displayName: "Sauk Village"
  },
  {
    name: "Glenwood",
    slug: "glenwood",
    region: "South Suburbs",
    zipCodes: ["60425"],
    displayName: "Glenwood"
  },

  // Southwest Suburbs (enhanced with zip codes)
  {
    name: "Burbank",
    slug: "burbank",
    region: "Southwest Suburbs",
    zipCodes: ["60459"],
    displayName: "Burbank"
  },
  {
    name: "Bridgeview",
    slug: "bridgeview",
    region: "Southwest Suburbs",
    zipCodes: ["60455"],
    displayName: "Bridgeview"
  },
  {
    name: "Hickory Hills",
    slug: "hickory-hills",
    region: "Southwest Suburbs",
    zipCodes: ["60457"],
    displayName: "Hickory Hills"
  },
  {
    name: "Justice",
    slug: "justice",
    region: "Southwest Suburbs",
    zipCodes: ["60458"],
    displayName: "Justice"
  },
  {
    name: "Summit",
    slug: "summit",
    region: "Southwest Suburbs",
    zipCodes: ["60501"],
    displayName: "Summit"
  },
  {
    name: "Bedford Park",
    slug: "bedford-park",
    region: "Southwest Suburbs",
    zipCodes: ["60501"],
    displayName: "Bedford Park"
  },
  {
    name: "Chicago Ridge",
    slug: "chicago-ridge",
    region: "Southwest Suburbs",
    zipCodes: ["60415"],
    displayName: "Chicago Ridge"
  },
  {
    name: "Worth",
    slug: "worth",
    region: "Southwest Suburbs",
    zipCodes: ["60482"],
    displayName: "Worth"
  },
  {
    name: "Palos Hills",
    slug: "palos-hills",
    region: "Southwest Suburbs",
    zipCodes: ["60465"],
    displayName: "Palos Hills"
  },
  {
    name: "Palos Heights",
    slug: "palos-heights",
    region: "Southwest Suburbs",
    zipCodes: ["60463"],
    displayName: "Palos Heights"
  },
  {
    name: "Palos Park",
    slug: "palos-park",
    region: "Southwest Suburbs",
    zipCodes: ["60464"],
    displayName: "Palos Park"
  },
  {
    name: "Orland Park",
    slug: "orland-park",
    region: "Southwest Suburbs",
    zipCodes: ["60462", "60467"],
    displayName: "Orland Park"
  },
  {
    name: "Tinley Park",
    slug: "tinley-park",
    region: "Southwest Suburbs",
    zipCodes: ["60477", "60487"],
    displayName: "Tinley Park"
  },
  {
    name: "Oak Forest",
    slug: "oak-forest",
    region: "Southwest Suburbs",
    zipCodes: ["60452"],
    displayName: "Oak Forest"
  },
  {
    name: "Crestwood",
    slug: "crestwood",
    region: "Southwest Suburbs",
    zipCodes: ["60445"],
    displayName: "Crestwood"
  },
  {
    name: "Midlothian",
    slug: "midlothian",
    region: "Southwest Suburbs",
    zipCodes: ["60445"],
    displayName: "Midlothian"
  },
  {
    name: "Frankfort",
    slug: "frankfort",
    region: "Southwest Suburbs",
    zipCodes: ["60423"],
    displayName: "Frankfort"
  },
  {
    name: "Mokena",
    slug: "mokena",
    region: "Southwest Suburbs",
    zipCodes: ["60448"],
    displayName: "Mokena"
  },
  {
    name: "New Lenox",
    slug: "new-lenox",
    region: "Southwest Suburbs",
    zipCodes: ["60451"],
    displayName: "New Lenox"
  },
  {
    name: "Lockport",
    slug: "lockport",
    region: "Southwest Suburbs",
    zipCodes: ["60441"],
    displayName: "Lockport"
  },
  {
    name: "Homer Glen",
    slug: "homer-glen",
    region: "Southwest Suburbs",
    zipCodes: ["60491"],
    displayName: "Homer Glen"
  },
  {
    name: "Lemont",
    slug: "lemont",
    region: "Southwest Suburbs",
    zipCodes: ["60439"],
    displayName: "Lemont"
  }
];

// Helper functions for search functionality
export const getAreasByRegion = (region: ServiceArea['region']) => {
  return serviceAreasData.filter(area => area.region === region);
};

export const searchAreas = (query: string) => {
  if (!query.trim()) return serviceAreasData;
  
  const searchTerm = query.toLowerCase().trim();
  return serviceAreasData.filter(area => {
    return (
      area.name.toLowerCase().includes(searchTerm) ||
      area.displayName.toLowerCase().includes(searchTerm) ||
      area.zipCodes.some(zip => zip.includes(searchTerm)) ||
      area.region.toLowerCase().includes(searchTerm)
    );
  });
};

export const getAreaBySlug = (slug: string) => {
  return serviceAreasData.find(area => area.slug === slug);
};