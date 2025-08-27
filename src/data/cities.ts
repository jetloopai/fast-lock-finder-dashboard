interface City {
  name: string;
  slug: string;
  landmarks: string[];
  region: "South Suburbs" | "Southwest Suburbs";
  keywords: string[];
  majorStreets: string[];
}

export const cityData: Record<string, City> = {
  // South Suburbs
  "oak-lawn": {
    name: "Oak Lawn",
    slug: "oak-lawn",
    landmarks: ["Advocate Christ Medical Center", "Stony Creek Golf Course"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Oak Lawn", "emergency locksmith in Oak Lawn", "24 hour locksmith in Oak Lawn",
      "car lockout service in Oak Lawn", "cheap locksmith in Oak Lawn", "mobile locksmith in Oak Lawn",
      "locksmith open now in Oak Lawn", "commercial locksmith in Oak Lawn", "residential locksmith in Oak Lawn",
      "house lockout in Oak Lawn", "rekey locks in Oak Lawn", "lock change service in Oak Lawn",
      "lost car key replacement in Oak Lawn", "key duplication in Oak Lawn", "locksmith for businesses in Oak Lawn",
      "storefront lock repair in Oak Lawn"
    ],
    majorStreets: ["95th Street", "Cicero Avenue", "Ridgeland Avenue", "Southwest Highway"]
  },
  "evergreen-park": {
    name: "Evergreen Park",
    slug: "evergreen-park",
    landmarks: ["Little Company of Mary Hospital", "Evergreen Plaza"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Evergreen Park", "emergency locksmith in Evergreen Park", "24 hour locksmith in Evergreen Park",
      "car lockout service in Evergreen Park", "cheap locksmith in Evergreen Park", "mobile locksmith in Evergreen Park",
      "locksmith open now in Evergreen Park", "commercial locksmith in Evergreen Park", "residential locksmith in Evergreen Park",
      "house lockout in Evergreen Park", "rekey locks in Evergreen Park", "lock change service in Evergreen Park",
      "lost car key replacement in Evergreen Park", "key duplication in Evergreen Park", "locksmith for businesses in Evergreen Park",
      "storefront lock repair in Evergreen Park"
    ],
    majorStreets: ["95th Street", "Kedzie Avenue", "Pulaski Road", "87th Street"]
  },
  "alsip": {
    name: "Alsip",
    slug: "alsip",
    landmarks: ["Burr Oak Cemetery", "Apollo Recreation Center"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Alsip", "emergency locksmith in Alsip", "24 hour locksmith in Alsip",
      "car lockout service in Alsip", "cheap locksmith in Alsip", "mobile locksmith in Alsip",
      "locksmith open now in Alsip", "commercial locksmith in Alsip", "residential locksmith in Alsip",
      "house lockout in Alsip", "rekey locks in Alsip", "lock change service in Alsip",
      "lost car key replacement in Alsip", "key duplication in Alsip", "locksmith for businesses in Alsip",
      "storefront lock repair in Alsip"
    ],
    majorStreets: ["127th Street", "Cicero Avenue", "Pulaski Road", "119th Street"]
  },
  "blue-island": {
    name: "Blue Island",
    slug: "blue-island",
    landmarks: ["Metra Rock Island Station", "Blue Island Beer Company"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Blue Island", "emergency locksmith in Blue Island", "24 hour locksmith in Blue Island",
      "car lockout service in Blue Island", "cheap locksmith in Blue Island", "mobile locksmith in Blue Island",
      "locksmith open now in Blue Island", "commercial locksmith in Blue Island", "residential locksmith in Blue Island",
      "house lockout in Blue Island", "rekey locks in Blue Island", "lock change service in Blue Island",
      "lost car key replacement in Blue Island", "key duplication in Blue Island", "locksmith for businesses in Blue Island",
      "storefront lock repair in Blue Island"
    ],
    majorStreets: ["Western Avenue", "127th Street", "Vermont Street", "Vincennes Road"]
  },
  "calumet-city": {
    name: "Calumet City",
    slug: "calumet-city",
    landmarks: ["River Oaks Center Mall"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Calumet City", "emergency locksmith in Calumet City", "24 hour locksmith in Calumet City",
      "car lockout service in Calumet City", "cheap locksmith in Calumet City", "mobile locksmith in Calumet City",
      "locksmith open now in Calumet City", "commercial locksmith in Calumet City", "residential locksmith in Calumet City",
      "house lockout in Calumet City", "rekey locks in Calumet City", "lock change service in Calumet City",
      "lost car key replacement in Calumet City", "key duplication in Calumet City", "locksmith for businesses in Calumet City",
      "storefront lock repair in Calumet City"
    ],
    majorStreets: ["Torrence Avenue", "River Oaks Drive", "State Street", "Sibley Boulevard"]
  },
  "dolton": {
    name: "Dolton",
    slug: "dolton",
    landmarks: ["Dolton Park District", "Thornridge High School"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Dolton", "emergency locksmith in Dolton", "24 hour locksmith in Dolton",
      "car lockout service in Dolton", "cheap locksmith in Dolton", "mobile locksmith in Dolton",
      "locksmith open now in Dolton", "commercial locksmith in Dolton", "residential locksmith in Dolton",
      "house lockout in Dolton", "rekey locks in Dolton", "lock change service in Dolton",
      "lost car key replacement in Dolton", "key duplication in Dolton", "locksmith for businesses in Dolton",
      "storefront lock repair in Dolton"
    ],
    majorStreets: ["Sibley Boulevard", "Indiana Avenue", "Greenwood Road", "Dolton Road"]
  },
  "harvey": {
    name: "Harvey",
    slug: "harvey",
    landmarks: ["Ingalls Memorial Hospital"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Harvey", "emergency locksmith in Harvey", "24 hour locksmith in Harvey",
      "car lockout service in Harvey", "cheap locksmith in Harvey", "mobile locksmith in Harvey",
      "locksmith open now in Harvey", "commercial locksmith in Harvey", "residential locksmith in Harvey",
      "house lockout in Harvey", "rekey locks in Harvey", "lock change service in Harvey",
      "lost car key replacement in Harvey", "key duplication in Harvey", "locksmith for businesses in Harvey",
      "storefront lock repair in Harvey"
    ],
    majorStreets: ["Halsted Street", "159th Street", "147th Street", "Dixie Highway"]
  },
  "south-holland": {
    name: "South Holland",
    slug: "south-holland",
    landmarks: ["South Suburban College", "Veterans Memorial Park"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in South Holland", "emergency locksmith in South Holland", "24 hour locksmith in South Holland",
      "car lockout service in South Holland", "cheap locksmith in South Holland", "mobile locksmith in South Holland",
      "locksmith open now in South Holland", "commercial locksmith in South Holland", "residential locksmith in South Holland",
      "house lockout in South Holland", "rekey locks in South Holland", "lock change service in South Holland",
      "lost car key replacement in South Holland", "key duplication in South Holland", "locksmith for businesses in South Holland",
      "storefront lock repair in South Holland"
    ],
    majorStreets: ["159th Street", "170th Street", "South Park Avenue", "162nd Street"]
  },
  "lansing": {
    name: "Lansing",
    slug: "lansing",
    landmarks: ["Fox Pointe venue", "Lan-Oak Park"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Lansing", "emergency locksmith in Lansing", "24 hour locksmith in Lansing",
      "car lockout service in Lansing", "cheap locksmith in Lansing", "mobile locksmith in Lansing",
      "locksmith open now in Lansing", "commercial locksmith in Lansing", "residential locksmith in Lansing",
      "house lockout in Lansing", "rekey locks in Lansing", "lock change service in Lansing",
      "lost car key replacement in Lansing", "key duplication in Lansing", "locksmith for businesses in Lansing",
      "storefront lock repair in Lansing"
    ],
    majorStreets: ["Ridge Road", "Torrence Avenue", "Wentworth Avenue", "170th Street"]
  },
  "markham": {
    name: "Markham",
    slug: "markham",
    landmarks: ["Gately Stadium", "Cook County Circuit Courthouse"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Markham", "emergency locksmith in Markham", "24 hour locksmith in Markham",
      "car lockout service in Markham", "cheap locksmith in Markham", "mobile locksmith in Markham",
      "locksmith open now in Markham", "commercial locksmith in Markham", "residential locksmith in Markham",
      "house lockout in Markham", "rekey locks in Markham", "lock change service in Markham",
      "lost car key replacement in Markham", "key duplication in Markham", "locksmith for businesses in Markham",
      "storefront lock repair in Markham"
    ],
    majorStreets: ["167th Street", "Kedzie Avenue", "Pulaski Road", "Dixie Highway"]
  },
  "riverdale": {
    name: "Riverdale",
    slug: "riverdale",
    landmarks: ["Riverdale Metra Station", "Ivanhoe Park"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Riverdale", "emergency locksmith in Riverdale", "24 hour locksmith in Riverdale",
      "car lockout service in Riverdale", "cheap locksmith in Riverdale", "mobile locksmith in Riverdale",
      "locksmith open now in Riverdale", "commercial locksmith in Riverdale", "residential locksmith in Riverdale",
      "house lockout in Riverdale", "rekey locks in Riverdale", "lock change service in Riverdale",
      "lost car key replacement in Riverdale", "key duplication in Riverdale", "locksmith for businesses in Riverdale",
      "storefront lock repair in Riverdale"
    ],
    majorStreets: ["139th Street", "Indiana Avenue", "Halsted Street", "144th Street"]
  },
  "robbins": {
    name: "Robbins",
    slug: "robbins",
    landmarks: ["Robbins Airport site"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Robbins", "emergency locksmith in Robbins", "24 hour locksmith in Robbins",
      "car lockout service in Robbins", "cheap locksmith in Robbins", "mobile locksmith in Robbins",
      "locksmith open now in Robbins", "commercial locksmith in Robbins", "residential locksmith in Robbins",
      "house lockout in Robbins", "rekey locks in Robbins", "lock change service in Robbins",
      "lost car key replacement in Robbins", "key duplication in Robbins", "locksmith for businesses in Robbins",
      "storefront lock repair in Robbins"
    ],
    majorStreets: ["139th Street (Midlothian Turnpike)", "Kedzie Avenue", "Claire Boulevard", "Pulaski Road"]
  },
  "homewood": {
    name: "Homewood",
    slug: "homewood",
    landmarks: ["Homewood-Flossmoor High School", "Dolphin Lake Park"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Homewood", "emergency locksmith in Homewood", "24 hour locksmith in Homewood",
      "car lockout service in Homewood", "cheap locksmith in Homewood", "mobile locksmith in Homewood",
      "locksmith open now in Homewood", "commercial locksmith in Homewood", "residential locksmith in Homewood",
      "house lockout in Homewood", "rekey locks in Homewood", "lock change service in Homewood",
      "lost car key replacement in Homewood", "key duplication in Homewood", "locksmith for businesses in Homewood",
      "storefront lock repair in Homewood"
    ],
    majorStreets: ["183rd Street", "Halsted Street", "Dixie Highway", "Ridge Road"]
  },
  "flossmoor": {
    name: "Flossmoor",
    slug: "flossmoor",
    landmarks: ["Flossmoor Country Club"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Flossmoor", "emergency locksmith in Flossmoor", "24 hour locksmith in Flossmoor",
      "car lockout service in Flossmoor", "cheap locksmith in Flossmoor", "mobile locksmith in Flossmoor",
      "locksmith open now in Flossmoor", "commercial locksmith in Flossmoor", "residential locksmith in Flossmoor",
      "house lockout in Flossmoor", "rekey locks in Flossmoor", "lock change service in Flossmoor",
      "lost car key replacement in Flossmoor", "key duplication in Flossmoor", "locksmith for businesses in Flossmoor",
      "storefront lock repair in Flossmoor"
    ],
    majorStreets: ["Flossmoor Road", "Vollmer Road", "Dixie Highway", "Governors Highway"]
  },
  "hazel-crest": {
    name: "Hazel Crest",
    slug: "hazel-crest",
    landmarks: ["Advocate South Suburban Hospital"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Hazel Crest", "emergency locksmith in Hazel Crest", "24 hour locksmith in Hazel Crest",
      "car lockout service in Hazel Crest", "cheap locksmith in Hazel Crest", "mobile locksmith in Hazel Crest",
      "locksmith open now in Hazel Crest", "commercial locksmith in Hazel Crest", "residential locksmith in Hazel Crest",
      "house lockout in Hazel Crest", "rekey locks in Hazel Crest", "lock change service in Hazel Crest",
      "lost car key replacement in Hazel Crest", "key duplication in Hazel Crest", "locksmith for businesses in Hazel Crest",
      "storefront lock repair in Hazel Crest"
    ],
    majorStreets: ["167th Street", "Kedzie Avenue", "Pulaski Road", "175th Street"]
  },
  "country-club-hills": {
    name: "Country Club Hills",
    slug: "country-club-hills",
    landmarks: ["Country Club Hills Amphitheater"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Country Club Hills", "emergency locksmith in Country Club Hills", "24 hour locksmith in Country Club Hills",
      "car lockout service in Country Club Hills", "cheap locksmith in Country Club Hills", "mobile locksmith in Country Club Hills",
      "locksmith open now in Country Club Hills", "commercial locksmith in Country Club Hills", "residential locksmith in Country Club Hills",
      "house lockout in Country Club Hills", "rekey locks in Country Club Hills", "lock change service in Country Club Hills",
      "lost car key replacement in Country Club Hills", "key duplication in Country Club Hills", "locksmith for businesses in Country Club Hills",
      "storefront lock repair in Country Club Hills"
    ],
    majorStreets: ["183rd Street", "167th Street", "Cicero Avenue", "Pulaski Road"]
  },
  "matteson": {
    name: "Matteson",
    slug: "matteson",
    landmarks: ["Old Plank Road Trail", "Matteson Metra"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Matteson", "emergency locksmith in Matteson", "24 hour locksmith in Matteson",
      "car lockout service in Matteson", "cheap locksmith in Matteson", "mobile locksmith in Matteson",
      "locksmith open now in Matteson", "commercial locksmith in Matteson", "residential locksmith in Matteson",
      "house lockout in Matteson", "rekey locks in Matteson", "lock change service in Matteson",
      "lost car key replacement in Matteson", "key duplication in Matteson", "locksmith for businesses in Matteson",
      "storefront lock repair in Matteson"
    ],
    majorStreets: ["Lincoln Highway (US 30)", "Cicero Avenue", "Governors Highway", "211th Street"]
  },
  "richton-park": {
    name: "Richton Park",
    slug: "richton-park",
    landmarks: ["Richton Square School"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Richton Park", "emergency locksmith in Richton Park", "24 hour locksmith in Richton Park",
      "car lockout service in Richton Park", "cheap locksmith in Richton Park", "mobile locksmith in Richton Park",
      "locksmith open now in Richton Park", "commercial locksmith in Richton Park", "residential locksmith in Richton Park",
      "house lockout in Richton Park", "rekey locks in Richton Park", "lock change service in Richton Park",
      "lost car key replacement in Richton Park", "key duplication in Richton Park", "locksmith for businesses in Richton Park",
      "storefront lock repair in Richton Park"
    ],
    majorStreets: ["Sauk Trail", "211th Street / University Parkway", "Governors Highway", "Pulaski Road"]
  },
  "olympia-fields": {
    name: "Olympia Fields",
    slug: "olympia-fields",
    landmarks: ["Olympia Fields Country Club"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Olympia Fields", "emergency locksmith in Olympia Fields", "24 hour locksmith in Olympia Fields",
      "car lockout service in Olympia Fields", "cheap locksmith in Olympia Fields", "mobile locksmith in Olympia Fields",
      "locksmith open now in Olympia Fields", "commercial locksmith in Olympia Fields", "residential locksmith in Olympia Fields",
      "house lockout in Olympia Fields", "rekey locks in Olympia Fields", "lock change service in Olympia Fields",
      "lost car key replacement in Olympia Fields", "key duplication in Olympia Fields", "locksmith for businesses in Olympia Fields",
      "storefront lock repair in Olympia Fields"
    ],
    majorStreets: ["Vollmer Road", "Governors Highway", "Kedzie Avenue", "Western Avenue"]
  },
  "park-forest": {
    name: "Park Forest",
    slug: "park-forest",
    landmarks: ["Freedom Hall", "Thorn Creek Nature Center"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Park Forest", "emergency locksmith in Park Forest", "24 hour locksmith in Park Forest",
      "car lockout service in Park Forest", "cheap locksmith in Park Forest", "mobile locksmith in Park Forest",
      "locksmith open now in Park Forest", "commercial locksmith in Park Forest", "residential locksmith in Park Forest",
      "house lockout in Park Forest", "rekey locks in Park Forest", "lock change service in Park Forest",
      "lost car key replacement in Park Forest", "key duplication in Park Forest", "locksmith for businesses in Park Forest",
      "storefront lock repair in Park Forest"
    ],
    majorStreets: ["Sauk Trail", "Western Avenue", "Lakewood Boulevard", "Indianwood Boulevard"]
  },
  "university-park": {
    name: "University Park",
    slug: "university-park",
    landmarks: ["Governors State University"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in University Park", "emergency locksmith in University Park", "24 hour locksmith in University Park",
      "car lockout service in University Park", "cheap locksmith in University Park", "mobile locksmith in University Park",
      "locksmith open now in University Park", "commercial locksmith in University Park", "residential locksmith in University Park",
      "house lockout in University Park", "rekey locks in University Park", "lock change service in University Park",
      "lost car key replacement in University Park", "key duplication in University Park", "locksmith for businesses in University Park",
      "storefront lock repair in University Park"
    ],
    majorStreets: ["University Parkway (Stuenkel Road)", "Governors Highway", "Crawford Avenue (Pulaski)", "I-57"]
  },
  "crete": {
    name: "Crete",
    slug: "crete",
    landmarks: ["Balmoral Park", "Crete Park District"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Crete", "emergency locksmith in Crete", "24 hour locksmith in Crete",
      "car lockout service in Crete", "cheap locksmith in Crete", "mobile locksmith in Crete",
      "locksmith open now in Crete", "commercial locksmith in Crete", "residential locksmith in Crete",
      "house lockout in Crete", "rekey locks in Crete", "lock change service in Crete",
      "lost car key replacement in Crete", "key duplication in Crete", "locksmith for businesses in Crete",
      "storefront lock repair in Crete"
    ],
    majorStreets: ["Main Street", "Exchange Street", "Steger Road", "Dixie Highway"]
  },
  "monee": {
    name: "Monee",
    slug: "monee",
    landmarks: ["Monee Reservoir", "Firemen's Park"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Monee", "emergency locksmith in Monee", "24 hour locksmith in Monee",
      "car lockout service in Monee", "cheap locksmith in Monee", "mobile locksmith in Monee",
      "locksmith open now in Monee", "commercial locksmith in Monee", "residential locksmith in Monee",
      "house lockout in Monee", "rekey locks in Monee", "lock change service in Monee",
      "lost car key replacement in Monee", "key duplication in Monee", "locksmith for businesses in Monee",
      "storefront lock repair in Monee"
    ],
    majorStreets: ["Monee-Manhattan Road", "Governors Highway", "I-57", "Egyptian Trail"]
  },
  "steger": {
    name: "Steger",
    slug: "steger",
    landmarks: ["Veterans Memorial Park"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Steger", "emergency locksmith in Steger", "24 hour locksmith in Steger",
      "car lockout service in Steger", "cheap locksmith in Steger", "mobile locksmith in Steger",
      "locksmith open now in Steger", "commercial locksmith in Steger", "residential locksmith in Steger",
      "house lockout in Steger", "rekey locks in Steger", "lock change service in Steger",
      "lost car key replacement in Steger", "key duplication in Steger", "locksmith for businesses in Steger",
      "storefront lock repair in Steger"
    ],
    majorStreets: ["Steger Road", "Chicago Road (IL-1)", "Halsted Street", "Kings Road"]
  },
  "sauk-village": {
    name: "Sauk Village",
    slug: "sauk-village",
    landmarks: ["Strassburg School", "Sauk Trail Woods"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Sauk Village", "emergency locksmith in Sauk Village", "24 hour locksmith in Sauk Village",
      "car lockout service in Sauk Village", "cheap locksmith in Sauk Village", "mobile locksmith in Sauk Village",
      "locksmith open now in Sauk Village", "commercial locksmith in Sauk Village", "residential locksmith in Sauk Village",
      "house lockout in Sauk Village", "rekey locks in Sauk Village", "lock change service in Sauk Village",
      "lost car key replacement in Sauk Village", "key duplication in Sauk Village", "locksmith for businesses in Sauk Village",
      "storefront lock repair in Sauk Village"
    ],
    majorStreets: ["Sauk Trail", "Torrence Avenue", "223rd Street", "Burnham Avenue"]
  },
  "glenwood": {
    name: "Glenwood",
    slug: "glenwood",
    landmarks: ["Glenwood Woods", "Glenwoodie Golf Club"],
    region: "South Suburbs",
    keywords: [
      "locksmith near me in Glenwood", "emergency locksmith in Glenwood", "24 hour locksmith in Glenwood",
      "car lockout service in Glenwood", "cheap locksmith in Glenwood", "mobile locksmith in Glenwood",
      "locksmith open now in Glenwood", "commercial locksmith in Glenwood", "residential locksmith in Glenwood",
      "house lockout in Glenwood", "rekey locks in Glenwood", "lock change service in Glenwood",
      "lost car key replacement in Glenwood", "key duplication in Glenwood", "locksmith for businesses in Glenwood",
      "storefront lock repair in Glenwood"
    ],
    majorStreets: ["Glenwood-Lansing Road", "Cottage Grove Avenue", "183rd Street", "Glenwood-Dyer Road"]
  },

  // Southwest Suburbs
  "burbank": {
    name: "Burbank",
    slug: "burbank",
    landmarks: ["Ford City Mall area", "Reavis High School"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Burbank", "emergency locksmith in Burbank", "24 hour locksmith in Burbank",
      "car lockout service in Burbank", "cheap locksmith in Burbank", "mobile locksmith in Burbank",
      "locksmith open now in Burbank", "commercial locksmith in Burbank", "residential locksmith in Burbank",
      "house lockout in Burbank", "rekey locks in Burbank", "lock change service in Burbank",
      "lost car key replacement in Burbank", "key duplication in Burbank", "locksmith for businesses in Burbank",
      "storefront lock repair in Burbank"
    ],
    majorStreets: ["Cicero Avenue", "79th Street", "Harlem Avenue", "Narragansett Avenue"]
  },
  "bridgeview": {
    name: "Bridgeview",
    slug: "bridgeview",
    landmarks: ["SeatGeek Stadium", "Reavis High School"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Bridgeview", "emergency locksmith in Bridgeview", "24 hour locksmith in Bridgeview",
      "car lockout service in Bridgeview", "cheap locksmith in Bridgeview", "mobile locksmith in Bridgeview",
      "locksmith open now in Bridgeview", "commercial locksmith in Bridgeview", "residential locksmith in Bridgeview",
      "house lockout in Bridgeview", "rekey locks in Bridgeview", "lock change service in Bridgeview",
      "lost car key replacement in Bridgeview", "key duplication in Bridgeview", "locksmith for businesses in Bridgeview",
      "storefront lock repair in Bridgeview"
    ],
    majorStreets: ["Harlem Avenue", "87th Street", "79th Street", "71st Street"]
  },
  "hickory-hills": {
    name: "Hickory Hills",
    slug: "hickory-hills",
    landmarks: ["Stagg High School", "Hickory Hills Country Club"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Hickory Hills", "emergency locksmith in Hickory Hills", "24 hour locksmith in Hickory Hills",
      "car lockout service in Hickory Hills", "cheap locksmith in Hickory Hills", "mobile locksmith in Hickory Hills",
      "locksmith open now in Hickory Hills", "commercial locksmith in Hickory Hills", "residential locksmith in Hickory Hills",
      "house lockout in Hickory Hills", "rekey locks in Hickory Hills", "lock change service in Hickory Hills",
      "lost car key replacement in Hickory Hills", "key duplication in Hickory Hills", "locksmith for businesses in Hickory Hills",
      "storefront lock repair in Hickory Hills"
    ],
    majorStreets: ["95th Street", "Roberts Road", "87th Street", "88th Avenue"]
  },
  "justice": {
    name: "Justice",
    slug: "justice",
    landmarks: ["Argo Community High School", "Emmett Till Memorial"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Justice", "emergency locksmith in Justice", "24 hour locksmith in Justice",
      "car lockout service in Justice", "cheap locksmith in Justice", "mobile locksmith in Justice",
      "locksmith open now in Justice", "commercial locksmith in Justice", "residential locksmith in Justice",
      "house lockout in Justice", "rekey locks in Justice", "lock change service in Justice",
      "lost car key replacement in Justice", "key duplication in Justice", "locksmith for businesses in Justice",
      "storefront lock repair in Justice"
    ],
    majorStreets: ["Archer Avenue", "79th Street", "88th Avenue", "Roberts Road"]
  },
  "summit": {
    name: "Summit",
    slug: "summit",
    landmarks: ["Summit Park District", "Argo Corn Products plant"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Summit", "emergency locksmith in Summit", "24 hour locksmith in Summit",
      "car lockout service in Summit", "cheap locksmith in Summit", "mobile locksmith in Summit",
      "locksmith open now in Summit", "commercial locksmith in Summit", "residential locksmith in Summit",
      "house lockout in Summit", "rekey locks in Summit", "lock change service in Summit",
      "lost car key replacement in Summit", "key duplication in Summit", "locksmith for businesses in Summit",
      "storefront lock repair in Summit"
    ],
    majorStreets: ["Archer Avenue", "Harlem Avenue", "63rd Street", "61st Street"]
  },
  "bedford-park": {
    name: "Bedford Park",
    slug: "bedford-park",
    landmarks: ["CSX Intermodal Terminal"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Bedford Park", "emergency locksmith in Bedford Park", "24 hour locksmith in Bedford Park",
      "car lockout service in Bedford Park", "cheap locksmith in Bedford Park", "mobile locksmith in Bedford Park",
      "locksmith open now in Bedford Park", "commercial locksmith in Bedford Park", "residential locksmith in Bedford Park",
      "house lockout in Bedford Park", "rekey locks in Bedford Park", "lock change service in Bedford Park",
      "lost car key replacement in Bedford Park", "key duplication in Bedford Park", "locksmith for businesses in Bedford Park",
      "storefront lock repair in Bedford Park"
    ],
    majorStreets: ["Cicero Avenue", "73rd Street", "65th Street", "Archer Avenue"]
  },
  "chicago-ridge": {
    name: "Chicago Ridge",
    slug: "chicago-ridge",
    landmarks: ["Chicago Ridge Mall", "Richards High School"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Chicago Ridge", "emergency locksmith in Chicago Ridge", "24 hour locksmith in Chicago Ridge",
      "car lockout service in Chicago Ridge", "cheap locksmith in Chicago Ridge", "mobile locksmith in Chicago Ridge",
      "locksmith open now in Chicago Ridge", "commercial locksmith in Chicago Ridge", "residential locksmith in Chicago Ridge",
      "house lockout in Chicago Ridge", "rekey locks in Chicago Ridge", "lock change service in Chicago Ridge",
      "lost car key replacement in Chicago Ridge", "key duplication in Chicago Ridge", "locksmith for businesses in Chicago Ridge",
      "storefront lock repair in Chicago Ridge"
    ],
    majorStreets: ["95th Street", "Ridgeland Avenue", "Southwest Highway", "Oak Park Avenue"]
  },
  "worth": {
    name: "Worth",
    slug: "worth",
    landmarks: ["Water's Edge Golf Club", "Worth Metra Station"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Worth", "emergency locksmith in Worth", "24 hour locksmith in Worth",
      "car lockout service in Worth", "cheap locksmith in Worth", "mobile locksmith in Worth",
      "locksmith open now in Worth", "commercial locksmith in Worth", "residential locksmith in Worth",
      "house lockout in Worth", "rekey locks in Worth", "lock change service in Worth",
      "lost car key replacement in Worth", "key duplication in Worth", "locksmith for businesses in Worth",
      "storefront lock repair in Worth"
    ],
    majorStreets: ["111th Street", "Harlem Avenue", "Southwest Highway", "Ridgeland Avenue"]
  },
  "palos-hills": {
    name: "Palos Hills",
    slug: "palos-hills",
    landmarks: ["Moraine Valley Community College"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Palos Hills", "emergency locksmith in Palos Hills", "24 hour locksmith in Palos Hills",
      "car lockout service in Palos Hills", "cheap locksmith in Palos Hills", "mobile locksmith in Palos Hills",
      "locksmith open now in Palos Hills", "commercial locksmith in Palos Hills", "residential locksmith in Palos Hills",
      "house lockout in Palos Hills", "rekey locks in Palos Hills", "lock change service in Palos Hills",
      "lost car key replacement in Palos Hills", "key duplication in Palos Hills", "locksmith for businesses in Palos Hills",
      "storefront lock repair in Palos Hills"
    ],
    majorStreets: ["111th Street", "Roberts Road", "103rd Street", "107th Street"]
  },
  "palos-heights": {
    name: "Palos Heights",
    slug: "palos-heights",
    landmarks: ["Lake Katherine Nature Center", "Trinity Christian College"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Palos Heights", "emergency locksmith in Palos Heights", "24 hour locksmith in Palos Heights",
      "car lockout service in Palos Heights", "cheap locksmith in Palos Heights", "mobile locksmith in Palos Heights",
      "locksmith open now in Palos Heights", "commercial locksmith in Palos Heights", "residential locksmith in Palos Heights",
      "house lockout in Palos Heights", "rekey locks in Palos Heights", "lock change service in Palos Heights",
      "lost car key replacement in Palos Heights", "key duplication in Palos Heights", "locksmith for businesses in Palos Heights",
      "storefront lock repair in Palos Heights"
    ],
    majorStreets: ["127th Street", "Harlem Avenue", "Ridgeland Avenue", "College Drive (IL-83)"]
  },
  "palos-park": {
    name: "Palos Park",
    slug: "palos-park",
    landmarks: ["Swallow Cliff Woods", "Palos Park Recreation Center"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Palos Park", "emergency locksmith in Palos Park", "24 hour locksmith in Palos Park",
      "car lockout service in Palos Park", "cheap locksmith in Palos Park", "mobile locksmith in Palos Park",
      "locksmith open now in Palos Park", "commercial locksmith in Palos Park", "residential locksmith in Palos Park",
      "house lockout in Palos Park", "rekey locks in Palos Park", "lock change service in Palos Park",
      "lost car key replacement in Palos Park", "key duplication in Palos Park", "locksmith for businesses in Palos Park",
      "storefront lock repair in Palos Park"
    ],
    majorStreets: ["Southwest Highway (IL-7)", "La Grange Road (US-45)", "123rd Street", "131st Street"]
  },
  "orland-park": {
    name: "Orland Park",
    slug: "orland-park",
    landmarks: ["Orland Square Mall", "Centennial Park"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Orland Park", "emergency locksmith in Orland Park", "24 hour locksmith in Orland Park",
      "car lockout service in Orland Park", "cheap locksmith in Orland Park", "mobile locksmith in Orland Park",
      "locksmith open now in Orland Park", "commercial locksmith in Orland Park", "residential locksmith in Orland Park",
      "house lockout in Orland Park", "rekey locks in Orland Park", "lock change service in Orland Park",
      "lost car key replacement in Orland Park", "key duplication in Orland Park", "locksmith for businesses in Orland Park",
      "storefront lock repair in Orland Park"
    ],
    majorStreets: ["La Grange Road (US-45)", "159th Street", "151st Street", "143rd Street"]
  },
  "tinley-park": {
    name: "Tinley Park",
    slug: "tinley-park",
    landmarks: ["Hollywood Casino Amphitheatre"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Tinley Park", "emergency locksmith in Tinley Park", "24 hour locksmith in Tinley Park",
      "car lockout service in Tinley Park", "cheap locksmith in Tinley Park", "mobile locksmith in Tinley Park",
      "locksmith open now in Tinley Park", "commercial locksmith in Tinley Park", "residential locksmith in Tinley Park",
      "house lockout in Tinley Park", "rekey locks in Tinley Park", "lock change service in Tinley Park",
      "lost car key replacement in Tinley Park", "key duplication in Tinley Park", "locksmith for businesses in Tinley Park",
      "storefront lock repair in Tinley Park"
    ],
    majorStreets: ["159th Street", "Harlem Avenue", "80th Avenue", "171st Street"]
  },
  "oak-forest": {
    name: "Oak Forest",
    slug: "oak-forest",
    landmarks: ["Midlothian Meadows Forest Preserve"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Oak Forest", "emergency locksmith in Oak Forest", "24 hour locksmith in Oak Forest",
      "car lockout service in Oak Forest", "cheap locksmith in Oak Forest", "mobile locksmith in Oak Forest",
      "locksmith open now in Oak Forest", "commercial locksmith in Oak Forest", "residential locksmith in Oak Forest",
      "house lockout in Oak Forest", "rekey locks in Oak Forest", "lock change service in Oak Forest",
      "lost car key replacement in Oak Forest", "key duplication in Oak Forest", "locksmith for businesses in Oak Forest",
      "storefront lock repair in Oak Forest"
    ],
    majorStreets: ["159th Street", "Cicero Avenue", "Central Avenue", "167th Street"]
  },
  "crestwood": {
    name: "Crestwood",
    slug: "crestwood",
    landmarks: ["Rivercrest Shopping Center", "Cal-Sag Channel"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Crestwood", "emergency locksmith in Crestwood", "24 hour locksmith in Crestwood",
      "car lockout service in Crestwood", "cheap locksmith in Crestwood", "mobile locksmith in Crestwood",
      "locksmith open now in Crestwood", "commercial locksmith in Crestwood", "residential locksmith in Crestwood",
      "house lockout in Crestwood", "rekey locks in Crestwood", "lock change service in Crestwood",
      "lost car key replacement in Crestwood", "key duplication in Crestwood", "locksmith for businesses in Crestwood",
      "storefront lock repair in Crestwood"
    ],
    majorStreets: ["135th Street", "Cicero Avenue", "Cal-Sag Road (IL-83)", "131st Street"]
  },
  "midlothian": {
    name: "Midlothian",
    slug: "midlothian",
    landmarks: ["Bremen High School", "Natalie Creek Trail"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Midlothian", "emergency locksmith in Midlothian", "24 hour locksmith in Midlothian",
      "car lockout service in Midlothian", "cheap locksmith in Midlothian", "mobile locksmith in Midlothian",
      "locksmith open now in Midlothian", "commercial locksmith in Midlothian", "residential locksmith in Midlothian",
      "house lockout in Midlothian", "rekey locks in Midlothian", "lock change service in Midlothian",
      "lost car key replacement in Midlothian", "key duplication in Midlothian", "locksmith for businesses in Midlothian",
      "storefront lock repair in Midlothian"
    ],
    majorStreets: ["147th Street", "Pulaski Road", "Cicero Avenue", "Central Avenue"]
  },
  "frankfort": {
    name: "Frankfort",
    slug: "frankfort",
    landmarks: ["Historic Downtown Frankfort", "Frankfort Square Park"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Frankfort", "emergency locksmith in Frankfort", "24 hour locksmith in Frankfort",
      "car lockout service in Frankfort", "cheap locksmith in Frankfort", "mobile locksmith in Frankfort",
      "locksmith open now in Frankfort", "commercial locksmith in Frankfort", "residential locksmith in Frankfort",
      "house lockout in Frankfort", "rekey locks in Frankfort", "lock change service in Frankfort",
      "lost car key replacement in Frankfort", "key duplication in Frankfort", "locksmith for businesses in Frankfort",
      "storefront lock repair in Frankfort"
    ],
    majorStreets: ["Lincoln Highway (US-30)", "La Grange Road (US-45)", "Harlem Avenue", "80th Avenue"]
  },
  "mokena": {
    name: "Mokena",
    slug: "mokena",
    landmarks: ["Hickory Creek Preserve"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Mokena", "emergency locksmith in Mokena", "24 hour locksmith in Mokena",
      "car lockout service in Mokena", "cheap locksmith in Mokena", "mobile locksmith in Mokena",
      "locksmith open now in Mokena", "commercial locksmith in Mokena", "residential locksmith in Mokena",
      "house lockout in Mokena", "rekey locks in Mokena", "lock change service in Mokena",
      "lost car key replacement in Mokena", "key duplication in Mokena", "locksmith for businesses in Mokena",
      "storefront lock repair in Mokena"
    ],
    majorStreets: ["191st Street", "Wolf Road", "La Grange Road (US-45)", "187th Street"]
  },
  "new-lenox": {
    name: "New Lenox",
    slug: "new-lenox",
    landmarks: ["Silver Cross Hospital", "Commons Performing Arts Pavilion"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in New Lenox", "emergency locksmith in New Lenox", "24 hour locksmith in New Lenox",
      "car lockout service in New Lenox", "cheap locksmith in New Lenox", "mobile locksmith in New Lenox",
      "locksmith open now in New Lenox", "commercial locksmith in New Lenox", "residential locksmith in New Lenox",
      "house lockout in New Lenox", "rekey locks in New Lenox", "lock change service in New Lenox",
      "lost car key replacement in New Lenox", "key duplication in New Lenox", "locksmith for businesses in New Lenox",
      "storefront lock repair in New Lenox"
    ],
    majorStreets: ["Lincoln Highway (US-30)", "Gougar Road", "Cedar Road", "I-80"]
  },
  "lockport": {
    name: "Lockport",
    slug: "lockport",
    landmarks: ["Illinois & Michigan Canal"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Lockport", "emergency locksmith in Lockport", "24 hour locksmith in Lockport",
      "car lockout service in Lockport", "cheap locksmith in Lockport", "mobile locksmith in Lockport",
      "locksmith open now in Lockport", "commercial locksmith in Lockport", "residential locksmith in Lockport",
      "house lockout in Lockport", "rekey locks in Lockport", "lock change service in Lockport",
      "lost car key replacement in Lockport", "key duplication in Lockport", "locksmith for businesses in Lockport",
      "storefront lock repair in Lockport"
    ],
    majorStreets: ["9th Street (IL-7)", "State Street (IL-171)", "159th Street", "Division Street"]
  },
  "homer-glen": {
    name: "Homer Glen",
    slug: "homer-glen",
    landmarks: ["Messenger Woods", "Konow's Corn Maze"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Homer Glen", "emergency locksmith in Homer Glen", "24 hour locksmith in Homer Glen",
      "car lockout service in Homer Glen", "cheap locksmith in Homer Glen", "mobile locksmith in Homer Glen",
      "locksmith open now in Homer Glen", "commercial locksmith in Homer Glen", "residential locksmith in Homer Glen",
      "house lockout in Homer Glen", "rekey locks in Homer Glen", "lock change service in Homer Glen",
      "lost car key replacement in Homer Glen", "key duplication in Homer Glen", "locksmith for businesses in Homer Glen",
      "storefront lock repair in Homer Glen"
    ],
    majorStreets: ["159th Street", "Bell Road", "143rd Street", "Parker Road"]
  },
  "lemont": {
    name: "Lemont",
    slug: "lemont",
    landmarks: ["The Forge Adventure Park", "Argonne National Lab"],
    region: "Southwest Suburbs",
    keywords: [
      "locksmith near me in Lemont", "emergency locksmith in Lemont", "24 hour locksmith in Lemont",
      "car lockout service in Lemont", "cheap locksmith in Lemont", "mobile locksmith in Lemont",
      "locksmith open now in Lemont", "commercial locksmith in Lemont", "residential locksmith in Lemont",
      "house lockout in Lemont", "rekey locks in Lemont", "lock change service in Lemont",
      "lost car key replacement in Lemont", "key duplication in Lemont", "locksmith for businesses in Lemont",
      "storefront lock repair in Lemont"
    ],
    majorStreets: ["Lemont Road", "Main Street", "Archer Avenue", "127th Street"]
  }
};

export const getAllCities = () => Object.values(cityData);
export const getCityBySlug = (slug: string) => cityData[slug];