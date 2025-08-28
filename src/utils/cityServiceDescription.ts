const getLocationContext = (cityName: string, landmarks: string[], majorStreets: string[]) => {
  // Smart location referencing for different city types
  if (cityName.includes('Chicago')) {
    const parts = cityName.split(' - ');
    const neighborhood = parts[1] || parts[0].split(' ')[1];
    const zipCode = parts[0].match(/\d{5}/)?.[0];
    
    return {
      displayName: neighborhood || cityName,
      areaType: 'urban',
      locationRefs: [
        `the ${neighborhood} area`,
        'downtown Chicago',
        `near ${landmarks[0]}`,
        zipCode ? `the ${zipCode} area` : neighborhood
      ].filter(Boolean),
      serviceContext: 'high-rise buildings, businesses, and residential properties',
      isChicago: true
    };
  }
  
  return {
    displayName: cityName,
    areaType: 'suburban',
    locationRefs: [cityName, `the ${cityName} area`, `near ${landmarks[0]}`],
    serviceContext: 'homes, local businesses, and commercial properties',
    isChicago: false
  };
};

export const getCityServiceDescription = (cityName: string, landmarks: string[], majorStreets: string[], keywords: string[]): string => {
  const context = getLocationContext(cityName, landmarks, majorStreets);
  
  // Extract key phrases from keywords for natural integration
  const keywordTypes = {
    emergency: keywords.find(k => k.includes('emergency locksmith')) || '',
    mobile: keywords.find(k => k.includes('mobile locksmith')) || '',
    cheap: keywords.find(k => k.includes('cheap locksmith')) || '',
    area: keywords.find(k => k.includes('locksmith near me')) || ''
  };
  
  const descriptions = [
    // Template 1 - Professional focus with emergency keyword
    `Our certified ${keywordTypes.emergency ? keywordTypes.emergency.replace('in ', 'serving ') : 'emergency locksmith'} team serves ${context.serviceContext} throughout ${context.displayName}. From emergency lockouts to security upgrades, we provide comprehensive 24-hour locksmith solutions with fast response times and competitive pricing.`,
    
    // Template 2 - Service range focus with mobile keyword
    `Whether you need emergency lockout assistance, lock installations, or key services, our ${keywordTypes.mobile ? keywordTypes.mobile.replace('in ', 'covering ') : 'mobile locksmith service'} covers all of ${context.displayName}. We specialize in residential, commercial, and automotive locksmith solutions with upfront pricing.`,
    
    // Template 3 - Area coverage focus with cheap/affordable keyword
    `Serving ${context.displayName} and the surrounding area, our experienced locksmith team handles everything from simple key duplication to complex security system installations. Need a ${keywordTypes.cheap ? keywordTypes.cheap.replace('in ', 'serving ') : 'reliable locksmith'}? We're available 24/7 for emergency services.`,
    
    // Template 4 - Local expertise focus with area keyword
    `As your ${keywordTypes.area ? keywordTypes.area : `local locksmith specialists in ${context.displayName}`}, we understand the unique security needs of the area. Our comprehensive services include lock repairs, rekeying, smart lock installation, and emergency response throughout ${context.locationRefs[0]}.`
  ];
  
  // Select template based on city name hash for consistency
  const templateIndex = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % descriptions.length;
  return descriptions[templateIndex];
};