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

export const getCityServiceDescription = (cityName: string, landmarks: string[], majorStreets: string[]): string => {
  const context = getLocationContext(cityName, landmarks, majorStreets);
  
  const descriptions = [
    // Template 1 - Professional focus
    `Our certified locksmith team serves ${context.serviceContext} throughout ${context.displayName}. From emergency lockouts to security upgrades, we provide comprehensive solutions with fast response times and competitive pricing.`,
    
    // Template 2 - Service range focus  
    `Whether you need emergency lockout assistance, lock installations, or key services, our mobile locksmiths cover all of ${context.displayName}. We specialize in residential, commercial, and automotive locksmith solutions.`,
    
    // Template 3 - Area coverage focus
    `Serving ${context.displayName} and the surrounding area, our experienced locksmith team handles everything from simple key duplication to complex security system installations. Available 24/7 for emergency services.`,
    
    // Template 4 - Local expertise focus
    `As your local locksmith specialists in ${context.displayName}, we understand the unique security needs of the area. Our comprehensive services include lock repairs, rekeying, smart lock installation, and emergency response.`
  ];
  
  // Select template based on city name hash for consistency
  const templateIndex = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % descriptions.length;
  return descriptions[templateIndex];
};