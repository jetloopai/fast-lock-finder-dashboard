interface FAQ {
  question: string;
  answer: string;
}

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
      serviceAreas: [`${neighborhood} and surrounding neighborhoods`, 'downtown Chicago', 'the greater Chicago area'],
      businessContext: 'high-rise buildings, businesses, and residential properties',
      responseTime: '10-15 minutes',
      isChicago: true
    };
  }
  
  return {
    displayName: cityName,
    areaType: 'suburban',
    locationRefs: [cityName, `the ${cityName} area`, `near ${landmarks[0]}`],
    serviceAreas: [`${cityName} and surrounding suburbs`, `the greater ${cityName} area`],
    businessContext: 'homes, local businesses, and commercial properties',
    responseTime: '15-20 minutes',
    isChicago: false
  };
};

export const getCityFAQs = (cityName: string, landmarks: string[], majorStreets: string[]): FAQ[] => {
  const context = getLocationContext(cityName, landmarks, majorStreets);
  
  const faqTemplates = [
    // Response time - natural variations
    {
      question: `How quickly can you get to me in ${context.displayName}?`,
      answer: `Our average response time in ${context.displayName} is ${context.responseTime}. We have mobile locksmiths stationed throughout ${context.serviceAreas[0]} to ensure fast service when you need it most.`
    },
    
    // 24/7 service - contextual
    {
      question: context.isChicago 
        ? `Do you provide 24-hour locksmith service in ${context.displayName}?`
        : `Are you available 24/7 in ${context.displayName}?`,
      answer: `Yes! We offer round-the-clock emergency locksmith services in ${context.displayName}. Whether it's 2 AM or 2 PM, our team is ready to help with lockouts, broken keys, and security emergencies throughout ${context.serviceAreas[1]}.`
    },
    
    // Service types - area-appropriate
    {
      question: context.areaType === 'urban'
        ? `What locksmith services do you offer for businesses and residents in ${context.displayName}?`
        : `What types of locksmith services do you provide in ${context.displayName}?`,
      answer: `We provide comprehensive locksmith services for ${context.businessContext} in ${context.displayName}. This includes emergency lockouts, lock repairs and replacement, key duplication, rekeying, smart lock installation, and security upgrades for both residential and commercial properties.`
    },
    
    // Coverage area - natural street references
    {
      question: `Do you service all of ${context.displayName}?`,
      answer: `Absolutely! Our mobile locksmiths cover all of ${context.displayName}, including major areas like ${majorStreets.slice(0, 2).join(' and ')}. We also service ${context.locationRefs[2]} and throughout ${context.serviceAreas[2]} for complete coverage.`
    }
  ];
  
  return faqTemplates;
};