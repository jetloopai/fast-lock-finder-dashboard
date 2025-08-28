interface City {
  name: string;
  slug: string;
  landmarks: string[];
  region: "South Suburbs" | "Southwest Suburbs" | "Chicago";
  keywords: string[];
  majorStreets: string[];
}

export const cityData: Record<string, City> = {
  // Chicago
  "chicago-60601-streeterville": {
    name: "Chicago 60601 - Streeterville",
    slug: "chicago-60601-streeterville",
    landmarks: ["Navy Pier", "Millennium Park", "Aon Center", "Maggie Daley Park"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Streeterville", "emergency locksmith in 60601", "24 hour locksmith in Streeterville",
      "car lockout service in Streeterville", "cheap locksmith in 60601", "mobile locksmith in Streeterville",
      "locksmith open now in Streeterville", "commercial locksmith in 60601", "residential locksmith in Streeterville",
      "house lockout in Streeterville", "rekey locks in 60601", "lock change service in Streeterville",
      "lost car key replacement in Streeterville", "key duplication in 60601", "locksmith for businesses in Streeterville",
      "storefront lock repair in 60601"
    ],
    majorStreets: ["Michigan Avenue & Wacker Drive", "Lake Shore Drive & Randolph Street", "Columbus Drive & South Water Street"]
  },
  "chicago-60602-central-loop": {
    name: "Chicago 60602 - Central Loop",
    slug: "chicago-60602-central-loop",
    landmarks: ["Daley Plaza", "Chicago Theatre", "Thompson Center", "City Hall"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Loop", "emergency locksmith in 60602", "24 hour locksmith in Central Loop",
      "car lockout service in Loop", "cheap locksmith in 60602", "mobile locksmith in Central Loop",
      "locksmith open now in Loop", "commercial locksmith in 60602", "residential locksmith in Central Loop",
      "house lockout in Loop", "rekey locks in 60602", "lock change service in Central Loop",
      "lost car key replacement in Loop", "key duplication in 60602", "locksmith for businesses in Loop",
      "storefront lock repair in 60602"
    ],
    majorStreets: ["Clark Street & Washington Street", "State Street & Lake Street", "LaSalle Street & Madison Street"]
  },
  "chicago-60603-south-loop": {
    name: "Chicago 60603 - South Loop",
    slug: "chicago-60603-south-loop",
    landmarks: ["Art Institute of Chicago", "Buckingham Fountain", "Symphony Center", "Congress Plaza Hotel"],
    region: "Chicago",
    keywords: [
      "locksmith near me in South Loop", "emergency locksmith in 60603", "24 hour locksmith in South Loop",
      "car lockout service in South Loop", "cheap locksmith in 60603", "mobile locksmith in South Loop",
      "locksmith open now in South Loop", "commercial locksmith in 60603", "residential locksmith in South Loop",
      "house lockout in South Loop", "rekey locks in 60603", "lock change service in South Loop",
      "lost car key replacement in South Loop", "key duplication in 60603", "locksmith for businesses in South Loop",
      "storefront lock repair in 60603"
    ],
    majorStreets: ["Michigan Avenue & Jackson Boulevard", "Wabash Avenue & Van Buren Street", "Dearborn Street & Congress Parkway"]
  },
  "chicago-60604-museum-campus": {
    name: "Chicago 60604 - Museum Campus",
    slug: "chicago-60604-museum-campus",
    landmarks: ["Shedd Aquarium", "Field Museum", "Adler Planetarium", "Roosevelt University"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Museum Campus", "emergency locksmith in 60604", "24 hour locksmith in Museum Campus",
      "car lockout service in Museum Campus", "cheap locksmith in 60604", "mobile locksmith in Museum Campus",
      "locksmith open now in Museum Campus", "commercial locksmith in 60604", "residential locksmith in Museum Campus",
      "house lockout in Museum Campus", "rekey locks in 60604", "lock change service in Museum Campus",
      "lost car key replacement in Museum Campus", "key duplication in 60604", "locksmith for businesses in Museum Campus",
      "storefront lock repair in 60604"
    ],
    majorStreets: ["Roosevelt Road & Michigan Avenue", "Columbus Drive & Balbo Drive", "Lake Shore Drive & 18th Street"]
  },
  "chicago-60605-printers-row": {
    name: "Chicago 60605 - Printer's Row",
    slug: "chicago-60605-printers-row",
    landmarks: ["Printer's Row Historic District", "Roosevelt Collection Shops", "Dearborn Station", "South Loop Elementary"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Printer's Row", "emergency locksmith in 60605", "24 hour locksmith in Printer's Row",
      "car lockout service in Printer's Row", "cheap locksmith in 60605", "mobile locksmith in Printer's Row",
      "locksmith open now in Printer's Row", "commercial locksmith in 60605", "residential locksmith in Printer's Row",
      "house lockout in Printer's Row", "rekey locks in 60605", "lock change service in Printer's Row",
      "lost car key replacement in Printer's Row", "key duplication in 60605", "locksmith for businesses in Printer's Row",
      "storefront lock repair in 60605"
    ],
    majorStreets: ["Clark Street & Polk Street", "Michigan Avenue & Roosevelt Road", "State Street & Harrison Street"]
  },
  "chicago-60606-west-loop-gate": {
    name: "Chicago 60606 - West Loop Gate",
    slug: "chicago-60606-west-loop-gate",
    landmarks: ["Willis Tower", "Union Station", "Ogilvie Transportation Center", "Civic Opera House"],
    region: "Chicago",
    keywords: [
      "locksmith near me in West Loop Gate", "emergency locksmith in 60606", "24 hour locksmith in West Loop Gate",
      "car lockout service in West Loop Gate", "cheap locksmith in 60606", "mobile locksmith in West Loop Gate",
      "locksmith open now in West Loop Gate", "commercial locksmith in 60606", "residential locksmith in West Loop Gate",
      "house lockout in West Loop Gate", "rekey locks in 60606", "lock change service in West Loop Gate",
      "lost car key replacement in West Loop Gate", "key duplication in 60606", "locksmith for businesses in West Loop Gate",
      "storefront lock repair in 60606"
    ],
    majorStreets: ["Canal Street & Madison Street", "Wacker Drive & Adams Street", "Clinton Street & Jackson Boulevard"]
  },
  "chicago-60607-west-loop": {
    name: "Chicago 60607 - West Loop",
    slug: "chicago-60607-west-loop",
    landmarks: ["Fulton Market", "UIC Pavilion", "Randolph Street Market", "Mary Bartelme Park"],
    region: "Chicago",
    keywords: [
      "locksmith near me in West Loop", "emergency locksmith in 60607", "24 hour locksmith in West Loop",
      "car lockout service in West Loop", "cheap locksmith in 60607", "mobile locksmith in West Loop",
      "locksmith open now in West Loop", "commercial locksmith in 60607", "residential locksmith in West Loop",
      "house lockout in West Loop", "rekey locks in 60607", "lock change service in West Loop",
      "lost car key replacement in West Loop", "key duplication in 60607", "locksmith for businesses in West Loop",
      "storefront lock repair in 60607"
    ],
    majorStreets: ["Halsted Street & Randolph Street", "Racine Avenue & Jackson Boulevard", "Madison Street & Ogden Avenue"]
  },
  "chicago-60608-pilsen": {
    name: "Chicago 60608 - Pilsen",
    slug: "chicago-60608-pilsen",
    landmarks: ["National Museum of Mexican Art", "Harrison Park", "Throop Park", "Dvorak Park"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Pilsen", "emergency locksmith in 60608", "24 hour locksmith in Pilsen",
      "car lockout service in Pilsen", "cheap locksmith in 60608", "mobile locksmith in Pilsen",
      "locksmith open now in Pilsen", "commercial locksmith in 60608", "residential locksmith in Pilsen",
      "house lockout in Pilsen", "rekey locks in 60608", "lock change service in Pilsen",
      "lost car key replacement in Pilsen", "key duplication in 60608", "locksmith for businesses in Pilsen",
      "storefront lock repair in 60608"
    ],
    majorStreets: ["18th Street & Halsted Street", "Damen Avenue & Blue Island Avenue", "Ashland Avenue & Cermak Road"]
  },
  "chicago-60610-old-town": {
    name: "Chicago 60610 - Old Town",
    slug: "chicago-60610-old-town",
    landmarks: ["Second City Theater", "Moody Bible Institute", "Seward Park", "Newberry Library"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Old Town", "emergency locksmith in 60610", "24 hour locksmith in Old Town",
      "car lockout service in Old Town", "cheap locksmith in 60610", "mobile locksmith in Old Town",
      "locksmith open now in Old Town", "commercial locksmith in 60610", "residential locksmith in Old Town",
      "house lockout in Old Town", "rekey locks in 60610", "lock change service in Old Town",
      "lost car key replacement in Old Town", "key duplication in 60610", "locksmith for businesses in Old Town",
      "storefront lock repair in 60610"
    ],
    majorStreets: ["Clark Street & Division Street", "Wells Street & North Avenue", "LaSalle Drive & North Avenue"]
  },
  "chicago-60611-mag-mile": {
    name: "Chicago 60611 - Magnificent Mile",
    slug: "chicago-60611-mag-mile",
    landmarks: ["John Hancock Center", "Navy Pier", "Northwestern Memorial Hospital", "Ohio Street Beach"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Magnificent Mile", "emergency locksmith in 60611", "24 hour locksmith in Mag Mile",
      "car lockout service in Magnificent Mile", "cheap locksmith in 60611", "mobile locksmith in Mag Mile",
      "locksmith open now in Magnificent Mile", "commercial locksmith in 60611", "residential locksmith in Mag Mile",
      "house lockout in Magnificent Mile", "rekey locks in 60611", "lock change service in Mag Mile",
      "lost car key replacement in Magnificent Mile", "key duplication in 60611", "locksmith for businesses in Mag Mile",
      "storefront lock repair in 60611"
    ],
    majorStreets: ["Michigan Avenue & Chicago Avenue", "Lake Shore Drive & Ontario Street", "Fairbanks Court & Erie Street"]
  },
  "chicago-60612-medical-district": {
    name: "Chicago 60612 - Medical District",
    slug: "chicago-60612-medical-district",
    landmarks: ["United Center", "Malcolm X College", "Rush University Hospital", "Stroger Hospital"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Medical District", "emergency locksmith in 60612", "24 hour locksmith in Medical District",
      "car lockout service in Medical District", "cheap locksmith in 60612", "mobile locksmith in Medical District",
      "locksmith open now in Medical District", "commercial locksmith in 60612", "residential locksmith in Medical District",
      "house lockout in Medical District", "rekey locks in 60612", "lock change service in Medical District",
      "lost car key replacement in Medical District", "key duplication in 60612", "locksmith for businesses in Medical District",
      "storefront lock repair in 60612"
    ],
    majorStreets: ["Ashland Avenue & Harrison Street", "Damen Avenue & Warren Boulevard", "Ogden Avenue & Polk Street"]
  },
  "chicago-60615-hyde-park": {
    name: "Chicago 60615 - Hyde Park",
    slug: "chicago-60615-hyde-park",
    landmarks: ["University of Chicago", "Museum of Science & Industry", "Jackson Park", "DuSable Museum"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Hyde Park", "emergency locksmith in 60615", "24 hour locksmith in Hyde Park",
      "car lockout service in Hyde Park", "cheap locksmith in 60615", "mobile locksmith in Hyde Park",
      "locksmith open now in Hyde Park", "commercial locksmith in 60615", "residential locksmith in Hyde Park",
      "house lockout in Hyde Park", "rekey locks in 60615", "lock change service in Hyde Park",
      "lost car key replacement in Hyde Park", "key duplication in 60615", "locksmith for businesses in Hyde Park",
      "storefront lock repair in 60615"
    ],
    majorStreets: ["53rd Street & Lake Park Avenue", "55th Street & Ellis Avenue", "57th Street & Stony Island Avenue"]
  },
  "chicago-60619-chatham": {
    name: "Chicago 60619 - Chatham",
    slug: "chicago-60619-chatham",
    landmarks: ["Avalon Regal Theater", "Tuley Park", "Simeon Career Academy", "Chatham Village Square"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Chatham", "emergency locksmith in 60619", "24 hour locksmith in Chatham",
      "car lockout service in Chatham", "cheap locksmith in 60619", "mobile locksmith in Chatham",
      "locksmith open now in Chatham", "commercial locksmith in 60619", "residential locksmith in Chatham",
      "house lockout in Chatham", "rekey locks in 60619", "lock change service in Chatham",
      "lost car key replacement in Chatham", "key duplication in 60619", "locksmith for businesses in Chatham",
      "storefront lock repair in 60619"
    ],
    majorStreets: ["79th Street & Cottage Grove", "83rd Street & King Drive", "87th Street & Stony Island Avenue"]
  },
  "chicago-60620-auburn-gresham": {
    name: "Chicago 60620 - Auburn Gresham",
    slug: "chicago-60620-auburn-gresham",
    landmarks: ["St. Sabina Church", "Simeon Career Academy", "Foster Park", "Auburn Park"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Auburn Gresham", "emergency locksmith in 60620", "24 hour locksmith in Auburn Gresham",
      "car lockout service in Auburn Gresham", "cheap locksmith in 60620", "mobile locksmith in Auburn Gresham",
      "locksmith open now in Auburn Gresham", "commercial locksmith in 60620", "residential locksmith in Auburn Gresham",
      "house lockout in Auburn Gresham", "rekey locks in 60620", "lock change service in Auburn Gresham",
      "lost car key replacement in Auburn Gresham", "key duplication in 60620", "locksmith for businesses in Auburn Gresham",
      "storefront lock repair in 60620"
    ],
    majorStreets: ["79th Street & Halsted Street", "83rd Street & Ashland Avenue", "87th Street & Vincennes Avenue"]
  },
  "chicago-60621-englewood": {
    name: "Chicago 60621 - Englewood",
    slug: "chicago-60621-englewood",
    landmarks: ["Kennedy-King College", "Ogden Park", "Englewood Square", "St. Bernard Hospital"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Englewood", "emergency locksmith in 60621", "24 hour locksmith in Englewood",
      "car lockout service in Englewood", "cheap locksmith in 60621", "mobile locksmith in Englewood",
      "locksmith open now in Englewood", "commercial locksmith in 60621", "residential locksmith in Englewood",
      "house lockout in Englewood", "rekey locks in 60621", "lock change service in Englewood",
      "lost car key replacement in Englewood", "key duplication in 60621", "locksmith for businesses in Englewood",
      "storefront lock repair in 60621"
    ],
    majorStreets: ["63rd Street & Halsted Street", "69th Street & Ashland Avenue", "71st Street & Racine Avenue"]
  },
  "chicago-60636-west-englewood": {
    name: "Chicago 60636 - West Englewood",
    slug: "chicago-60636-west-englewood",
    landmarks: ["Lindblom High School", "Hamilton Park", "South Side YMCA", "69th Street Retail"],
    region: "Chicago",
    keywords: [
      "locksmith near me in West Englewood", "emergency locksmith in 60636", "24 hour locksmith in West Englewood",
      "car lockout service in West Englewood", "cheap locksmith in 60636", "mobile locksmith in West Englewood",
      "locksmith open now in West Englewood", "commercial locksmith in 60636", "residential locksmith in West Englewood",
      "house lockout in West Englewood", "rekey locks in 60636", "lock change service in West Englewood",
      "lost car key replacement in West Englewood", "key duplication in 60636", "locksmith for businesses in West Englewood",
      "storefront lock repair in 60636"
    ],
    majorStreets: ["69th Street & Ashland Avenue", "71st Street & Loomis Avenue", "67th Street & Damen Avenue"]
  },
  "chicago-60637-woodlawn": {
    name: "Chicago 60637 - Woodlawn",
    slug: "chicago-60637-woodlawn",
    landmarks: ["Obama Presidential Center site", "Jackson Park", "University of Chicago Hospitals", "Midway Plaisance"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Woodlawn", "emergency locksmith in 60637", "24 hour locksmith in Woodlawn",
      "car lockout service in Woodlawn", "cheap locksmith in 60637", "mobile locksmith in Woodlawn",
      "locksmith open now in Woodlawn", "commercial locksmith in 60637", "residential locksmith in Woodlawn",
      "house lockout in Woodlawn", "rekey locks in 60637", "lock change service in Woodlawn",
      "lost car key replacement in Woodlawn", "key duplication in 60637", "locksmith for businesses in Woodlawn",
      "storefront lock repair in 60637"
    ],
    majorStreets: ["63rd Street & Stony Island Avenue", "67th Street & Cottage Grove Avenue", "61st Street & Dorchester Avenue"]
  },
  "chicago-60649-south-shore": {
    name: "Chicago 60649 - South Shore",
    slug: "chicago-60649-south-shore",
    landmarks: ["South Shore Cultural Center", "Rainbow Beach", "South Shore Nature Sanctuary", "Stony Island Plaza"],
    region: "Chicago",
    keywords: [
      "locksmith near me in South Shore", "emergency locksmith in 60649", "24 hour locksmith in South Shore",
      "car lockout service in South Shore", "cheap locksmith in 60649", "mobile locksmith in South Shore",
      "locksmith open now in South Shore", "commercial locksmith in 60649", "residential locksmith in South Shore",
      "house lockout in South Shore", "rekey locks in 60649", "lock change service in South Shore",
      "lost car key replacement in South Shore", "key duplication in 60649", "locksmith for businesses in South Shore",
      "storefront lock repair in 60649"
    ],
    majorStreets: ["71st Street & Jeffery Boulevard", "75th Street & Yates Avenue", "79th Street & South Shore Drive"]
  },
  "chicago-60653-bronzeville": {
    name: "Chicago 60653 - Bronzeville",
    slug: "chicago-60653-bronzeville",
    landmarks: ["IIT Campus", "Oakwood Beach", "35th Street Bridge", "Bronzeville Children's Museum"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Bronzeville", "emergency locksmith in 60653", "24 hour locksmith in Bronzeville",
      "car lockout service in Bronzeville", "cheap locksmith in 60653", "mobile locksmith in Bronzeville",
      "locksmith open now in Bronzeville", "commercial locksmith in 60653", "residential locksmith in Bronzeville",
      "house lockout in Bronzeville", "rekey locks in 60653", "lock change service in Bronzeville",
      "lost car key replacement in Bronzeville", "key duplication in 60653", "locksmith for businesses in Bronzeville",
      "storefront lock repair in 60653"
    ],
    majorStreets: ["35th Street & King Drive", "39th Street & Cottage Grove", "43rd Street & State Street"]
  },
  "chicago-60628-roseland": {
    name: "Chicago 60628 - Roseland",
    slug: "chicago-60628-roseland",
    landmarks: ["Pullman National Monument", "Palmer Park", "Gately Stadium", "Chicago State University"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Roseland", "emergency locksmith in 60628", "24 hour locksmith in Roseland",
      "car lockout service in Roseland", "cheap locksmith in 60628", "mobile locksmith in Roseland",
      "locksmith open now in Roseland", "commercial locksmith in 60628", "residential locksmith in Roseland",
      "house lockout in Roseland", "rekey locks in 60628", "lock change service in Roseland",
      "lost car key replacement in Roseland", "key duplication in 60628", "locksmith for businesses in Roseland",
      "storefront lock repair in 60628"
    ],
    majorStreets: ["111th Street & Michigan Avenue", "115th Street & Halsted Street", "119th Street & State Street"]
  },
  "chicago-60629-chicago-lawn": {
    name: "Chicago 60629 - Chicago Lawn",
    slug: "chicago-60629-chicago-lawn",
    landmarks: ["Midway Airport", "Marquette Park", "Ford City Mall", "St. Rita High School"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Chicago Lawn", "emergency locksmith in 60629", "24 hour locksmith in Chicago Lawn",
      "car lockout service in Chicago Lawn", "cheap locksmith in 60629", "mobile locksmith in Chicago Lawn",
      "locksmith open now in Chicago Lawn", "commercial locksmith in 60629", "residential locksmith in Chicago Lawn",
      "house lockout in Chicago Lawn", "rekey locks in 60629", "lock change service in Chicago Lawn",
      "lost car key replacement in Chicago Lawn", "key duplication in 60629", "locksmith for businesses in Chicago Lawn",
      "storefront lock repair in 60629"
    ],
    majorStreets: ["63rd Street & Pulaski Road", "67th Street & Cicero Avenue", "71st Street & Kostner Avenue"]
  },
  "chicago-60632-brighton-park": {
    name: "Chicago 60632 - Brighton Park",
    slug: "chicago-60632-brighton-park",
    landmarks: ["McKinley Park", "Curie High School", "Archer Park", "Brighton Park Library"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Brighton Park", "emergency locksmith in 60632", "24 hour locksmith in Brighton Park",
      "car lockout service in Brighton Park", "cheap locksmith in 60632", "mobile locksmith in Brighton Park",
      "locksmith open now in Brighton Park", "commercial locksmith in 60632", "residential locksmith in Brighton Park",
      "house lockout in Brighton Park", "rekey locks in 60632", "lock change service in Brighton Park",
      "lost car key replacement in Brighton Park", "key duplication in 60632", "locksmith for businesses in Brighton Park",
      "storefront lock repair in 60632"
    ],
    majorStreets: ["Archer Avenue & Pulaski Road", "47th Street & Kedzie Avenue", "51st Street & Archer Avenue"]
  },
  "chicago-60633-hegewisch": {
    name: "Chicago 60633 - Hegewisch",
    slug: "chicago-60633-hegewisch",
    landmarks: ["Wolf Lake", "Big Marsh Park", "Ford Assembly Plant", "Hegewisch Marsh"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Hegewisch", "emergency locksmith in 60633", "24 hour locksmith in Hegewisch",
      "car lockout service in Hegewisch", "cheap locksmith in 60633", "mobile locksmith in Hegewisch",
      "locksmith open now in Hegewisch", "commercial locksmith in 60633", "residential locksmith in Hegewisch",
      "house lockout in Hegewisch", "rekey locks in 60633", "lock change service in Hegewisch",
      "lost car key replacement in Hegewisch", "key duplication in 60633", "locksmith for businesses in Hegewisch",
      "storefront lock repair in 60633"
    ],
    majorStreets: ["130th Street & Torrence Avenue", "126th Street & Avenue O", "118th Street & Ewing Avenue"]
  },
  "chicago-60638-garfield-ridge": {
    name: "Chicago 60638 - Garfield Ridge",
    slug: "chicago-60638-garfield-ridge",
    landmarks: ["Midway Airport", "Hale Park", "Normandy Plaza", "Wentworth Park"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Garfield Ridge", "emergency locksmith in 60638", "24 hour locksmith in Garfield Ridge",
      "car lockout service in Garfield Ridge", "cheap locksmith in 60638", "mobile locksmith in Garfield Ridge",
      "locksmith open now in Garfield Ridge", "commercial locksmith in 60638", "residential locksmith in Garfield Ridge",
      "house lockout in Garfield Ridge", "rekey locks in 60638", "lock change service in Garfield Ridge",
      "lost car key replacement in Garfield Ridge", "key duplication in 60638", "locksmith for businesses in Garfield Ridge",
      "storefront lock repair in 60638"
    ],
    majorStreets: ["55th Street & Cicero Avenue", "63rd Street & Central Avenue", "Archer Avenue & Harlem Avenue"]
  },
  "chicago-60643-beverly": {
    name: "Chicago 60643 - Beverly",
    slug: "chicago-60643-beverly",
    landmarks: ["Beverly Arts Center", "Dan Ryan Woods", "Morgan Park High School", "Ridge Park"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Beverly", "emergency locksmith in 60643", "24 hour locksmith in Beverly",
      "car lockout service in Beverly", "cheap locksmith in 60643", "mobile locksmith in Beverly",
      "locksmith open now in Beverly", "commercial locksmith in 60643", "residential locksmith in Beverly",
      "house lockout in Beverly", "rekey locks in 60643", "lock change service in Beverly",
      "lost car key replacement in Beverly", "key duplication in 60643", "locksmith for businesses in Beverly",
      "storefront lock repair in 60643"
    ],
    majorStreets: ["95th Street & Western Avenue", "103rd Street & Longwood Drive", "111th Street & Vincennes Avenue"]
  },
  "chicago-60655-mount-greenwood": {
    name: "Chicago 60655 - Mount Greenwood",
    slug: "chicago-60655-mount-greenwood",
    landmarks: ["Saint Xavier University", "Mount Greenwood Park", "Chicago High School for Agricultural Sciences", "Mount Greenwood Cemetery"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Mount Greenwood", "emergency locksmith in 60655", "24 hour locksmith in Mount Greenwood",
      "car lockout service in Mount Greenwood", "cheap locksmith in 60655", "mobile locksmith in Mount Greenwood",
      "locksmith open now in Mount Greenwood", "commercial locksmith in 60655", "residential locksmith in Mount Greenwood",
      "house lockout in Mount Greenwood", "rekey locks in 60655", "lock change service in Mount Greenwood",
      "lost car key replacement in Mount Greenwood", "key duplication in 60655", "locksmith for businesses in Mount Greenwood",
      "storefront lock repair in 60655"
    ],
    majorStreets: ["111th Street & Pulaski Road", "115th Street & Kedzie Avenue", "119th Street & Central Park Avenue"]
  },
  "chicago-60827-riverdale": {
    name: "Chicago 60827 - Riverdale",
    slug: "chicago-60827-riverdale",
    landmarks: ["Altgeld Gardens Homes", "Riverdale Park", "Beaubien Woods Forest Preserve", "Carver Military Academy"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Riverdale", "emergency locksmith in 60827", "24 hour locksmith in Riverdale",
      "car lockout service in Riverdale", "cheap locksmith in 60827", "mobile locksmith in Riverdale",
      "locksmith open now in Riverdale", "commercial locksmith in 60827", "residential locksmith in Riverdale",
      "house lockout in Riverdale", "rekey locks in 60827", "lock change service in Riverdale",
      "lost car key replacement in Riverdale", "key duplication in 60827", "locksmith for businesses in Riverdale",
      "storefront lock repair in 60827"
    ],
    majorStreets: ["130th Street & Indiana Avenue", "134th Street & Sibley Boulevard", "138th Street & Halsted Street"]
  },
  "chicago-60661-near-west-loop": {
    name: "Chicago 60661 - Near West Loop",
    slug: "chicago-60661-near-west-loop",
    landmarks: ["Ogilvie Transportation Center", "Chicago French Market", "Fulton River Park", "Blommer Chocolate Factory"],
    region: "Chicago",
    keywords: [
      "locksmith near me in Near West Loop", "emergency locksmith in 60661", "24 hour locksmith in Near West Loop",
      "car lockout service in Near West Loop", "cheap locksmith in 60661", "mobile locksmith in Near West Loop",
      "locksmith open now in Near West Loop", "commercial locksmith in 60661", "residential locksmith in Near West Loop",
      "house lockout in Near West Loop", "rekey locks in 60661", "lock change service in Near West Loop",
      "lost car key replacement in Near West Loop", "key duplication in 60661", "locksmith for businesses in Near West Loop",
      "storefront lock repair in 60661"
    ],
    majorStreets: ["Clinton Street & Lake Street", "Canal Street & Washington Boulevard", "Fulton Street & Jefferson Street"]
  },
  
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