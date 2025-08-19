interface City {
  name: string;
  slug: string;
  landmarks: string[];
  region: "South Suburbs" | "Southwest Suburbs";
}

export const cityData: Record<string, City> = {
  // South Suburbs
  "oak-lawn": {
    name: "Oak Lawn",
    slug: "oak-lawn",
    landmarks: ["Advocate Christ Medical Center", "Stony Creek Golf Course"],
    region: "South Suburbs"
  },
  "evergreen-park": {
    name: "Evergreen Park",
    slug: "evergreen-park",
    landmarks: ["Little Company of Mary Hospital", "Evergreen Plaza"],
    region: "South Suburbs"
  },
  "alsip": {
    name: "Alsip",
    slug: "alsip",
    landmarks: ["Burr Oak Cemetery", "Apollo Recreation Center"],
    region: "South Suburbs"
  },
  "blue-island": {
    name: "Blue Island",
    slug: "blue-island",
    landmarks: ["Metra Rock Island Station", "Blue Island Beer Company"],
    region: "South Suburbs"
  },
  "calumet-city": {
    name: "Calumet City",
    slug: "calumet-city",
    landmarks: ["River Oaks Center Mall", "Thornton Fractional North High School"],
    region: "South Suburbs"
  },
  "dolton": {
    name: "Dolton",
    slug: "dolton",
    landmarks: ["Dolton Park District", "Thornridge High School"],
    region: "South Suburbs"
  },
  "harvey": {
    name: "Harvey",
    slug: "harvey",
    landmarks: ["Ingalls Memorial Hospital", "Thornton Township High School"],
    region: "South Suburbs"
  },
  "south-holland": {
    name: "South Holland",
    slug: "south-holland",
    landmarks: ["South Suburban College", "Veterans Memorial Park"],
    region: "South Suburbs"
  },
  "lansing": {
    name: "Lansing",
    slug: "lansing",
    landmarks: ["Fox Pointe venue", "Lan-Oak Park"],
    region: "South Suburbs"
  },
  "markham": {
    name: "Markham",
    slug: "markham",
    landmarks: ["Gately Stadium", "Cook County Circuit Courthouse"],
    region: "South Suburbs"
  },
  "riverdale": {
    name: "Riverdale",
    slug: "riverdale",
    landmarks: ["Riverdale Metra Station", "Ivanhoe Park"],
    region: "South Suburbs"
  },
  "robbins": {
    name: "Robbins",
    slug: "robbins",
    landmarks: ["Robbins Airport site", "Midlothian Turnpike corridor"],
    region: "South Suburbs"
  },
  "homewood": {
    name: "Homewood",
    slug: "homewood",
    landmarks: ["Homewood-Flossmoor High School", "Dolphin Lake Park"],
    region: "South Suburbs"
  },
  "flossmoor": {
    name: "Flossmoor",
    slug: "flossmoor",
    landmarks: ["Flossmoor Country Club", "downtown Flossmoor"],
    region: "South Suburbs"
  },
  "hazel-crest": {
    name: "Hazel Crest",
    slug: "hazel-crest",
    landmarks: ["Advocate South Suburban Hospital", "Prairie State College nearby"],
    region: "South Suburbs"
  },
  "country-club-hills": {
    name: "Country Club Hills",
    slug: "country-club-hills",
    landmarks: ["Country Club Hills Amphitheater", "Hillcrest High School"],
    region: "South Suburbs"
  },
  "matteson": {
    name: "Matteson",
    slug: "matteson",
    landmarks: ["Old Plank Road Trail", "Matteson Metra"],
    region: "South Suburbs"
  },
  "richton-park": {
    name: "Richton Park",
    slug: "richton-park",
    landmarks: ["Richton Square School", "Sauk Trail corridor"],
    region: "South Suburbs"
  },
  "olympia-fields": {
    name: "Olympia Fields",
    slug: "olympia-fields",
    landmarks: ["Olympia Fields Country Club", "Franciscan Health Hospital"],
    region: "South Suburbs"
  },
  "park-forest": {
    name: "Park Forest",
    slug: "park-forest",
    landmarks: ["Freedom Hall", "Thorn Creek Nature Center"],
    region: "South Suburbs"
  },
  "university-park": {
    name: "University Park",
    slug: "university-park",
    landmarks: ["Governors State University", "Nathan Manilow Sculpture Park"],
    region: "South Suburbs"
  },
  "crete": {
    name: "Crete",
    slug: "crete",
    landmarks: ["Balmoral Park", "Crete Park District"],
    region: "South Suburbs"
  },
  "monee": {
    name: "Monee",
    slug: "monee",
    landmarks: ["Monee Reservoir", "Firemen's Park"],
    region: "South Suburbs"
  },
  "steger": {
    name: "Steger",
    slug: "steger",
    landmarks: ["Veterans Memorial Park", "Columbia Central School"],
    region: "South Suburbs"
  },
  "sauk-village": {
    name: "Sauk Village",
    slug: "sauk-village",
    landmarks: ["Strassburg School", "Sauk Trail Woods"],
    region: "South Suburbs"
  },
  "glenwood": {
    name: "Glenwood",
    slug: "glenwood",
    landmarks: ["Glenwood Woods", "Glenwoodie Golf Club"],
    region: "South Suburbs"
  },

  // Southwest Suburbs
  "burbank": {
    name: "Burbank",
    slug: "burbank",
    landmarks: ["Ford City Mall area", "Reavis High School"],
    region: "Southwest Suburbs"
  },
  "bridgeview": {
    name: "Bridgeview",
    slug: "bridgeview",
    landmarks: ["SeatGeek Stadium", "Reavis High School"],
    region: "Southwest Suburbs"
  },
  "hickory-hills": {
    name: "Hickory Hills",
    slug: "hickory-hills",
    landmarks: ["Stagg High School", "Hickory Hills Country Club"],
    region: "Southwest Suburbs"
  },
  "justice": {
    name: "Justice",
    slug: "justice",
    landmarks: ["Argo Community High School", "I-294 interchange"],
    region: "Southwest Suburbs"
  },
  "summit": {
    name: "Summit",
    slug: "summit",
    landmarks: ["Summit Park District", "Argo Corn Products plant"],
    region: "Southwest Suburbs"
  },
  "bedford-park": {
    name: "Bedford Park",
    slug: "bedford-park",
    landmarks: ["CSX Intermodal Terminal", "SeatGeek Stadium area"],
    region: "Southwest Suburbs"
  },
  "chicago-ridge": {
    name: "Chicago Ridge",
    slug: "chicago-ridge",
    landmarks: ["Chicago Ridge Mall", "Richards High School"],
    region: "Southwest Suburbs"
  },
  "worth": {
    name: "Worth",
    slug: "worth",
    landmarks: ["Water's Edge Golf Club", "Worth Metra Station"],
    region: "Southwest Suburbs"
  },
  "palos-hills": {
    name: "Palos Hills",
    slug: "palos-hills",
    landmarks: ["Moraine Valley Community College", "Green Hills Library"],
    region: "Southwest Suburbs"
  },
  "palos-heights": {
    name: "Palos Heights",
    slug: "palos-heights",
    landmarks: ["Lake Katherine Nature Center", "Trinity Christian College"],
    region: "Southwest Suburbs"
  },
  "palos-park": {
    name: "Palos Park",
    slug: "palos-park",
    landmarks: ["Swallow Cliff Woods", "Palos Park Recreation Center"],
    region: "Southwest Suburbs"
  },
  "orland-park": {
    name: "Orland Park",
    slug: "orland-park",
    landmarks: ["Orland Square Mall", "Centennial Park", "Sandburg High School"],
    region: "Southwest Suburbs"
  },
  "tinley-park": {
    name: "Tinley Park",
    slug: "tinley-park",
    landmarks: ["Hollywood Casino Amphitheatre", "Bettenhausen Recreation Center"],
    region: "Southwest Suburbs"
  },
  "oak-forest": {
    name: "Oak Forest",
    slug: "oak-forest",
    landmarks: ["Midlothian Meadows Forest Preserve", "Oak Forest High School"],
    region: "Southwest Suburbs"
  },
  "crestwood": {
    name: "Crestwood",
    slug: "crestwood",
    landmarks: ["Rivercrest Shopping Center", "Crestwood Recreation Center"],
    region: "Southwest Suburbs"
  },
  "midlothian": {
    name: "Midlothian",
    slug: "midlothian",
    landmarks: ["Bremen High School", "Natalie Creek Trail"],
    region: "Southwest Suburbs"
  },
  "frankfort": {
    name: "Frankfort",
    slug: "frankfort",
    landmarks: ["Historic Downtown Frankfort", "Frankfort Square Park"],
    region: "Southwest Suburbs"
  },
  "mokena": {
    name: "Mokena",
    slug: "mokena",
    landmarks: ["Hickory Creek Preserve", "Mokena Junior High"],
    region: "Southwest Suburbs"
  },
  "new-lenox": {
    name: "New Lenox",
    slug: "new-lenox",
    landmarks: ["Silver Cross Hospital", "Commons Performing Arts Pavilion"],
    region: "Southwest Suburbs"
  },
  "lockport": {
    name: "Lockport",
    slug: "lockport",
    landmarks: ["Illinois & Michigan Canal", "Lockport Township High School"],
    region: "Southwest Suburbs"
  },
  "homer-glen": {
    name: "Homer Glen",
    slug: "homer-glen",
    landmarks: ["Messenger Woods", "Konow's Corn Maze"],
    region: "Southwest Suburbs"
  },
  "lemont": {
    name: "Lemont",
    slug: "lemont",
    landmarks: ["The Forge Adventure Park", "Argonne National Lab"],
    region: "Southwest Suburbs"
  }
};

export const getAllCities = () => Object.values(cityData);
export const getCityBySlug = (slug: string) => cityData[slug];