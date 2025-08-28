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

export const getCityFAQs = (cityName: string, landmarks: string[], majorStreets: string[], keywords: string[]): FAQ[] => {
  const context = getLocationContext(cityName, landmarks, majorStreets);
  
  // Extract relevant keywords for natural FAQ integration
  const keywordQuestions = {
    cheap: keywords.find(k => k.includes('cheap locksmith')) || '',
    hours: keywords.find(k => k.includes('24 hour locksmith')) || '',
    commercial: keywords.find(k => k.includes('commercial locksmith')) || '',
    residential: keywords.find(k => k.includes('residential locksmith')) || '',
    carLockout: keywords.find(k => k.includes('car lockout')) || '',
    houseLockout: keywords.find(k => k.includes('house lockout')) || ''
  };
  
  const faqTemplates = [
    // Response time with keyword integration
    {
      question: `How quickly can a ${keywordQuestions.hours ? keywordQuestions.hours.replace('in ', '') : '24 hour locksmith'} get to me in ${context.displayName}?`,
      answer: `Our average response time in ${context.displayName} is ${context.responseTime}. We have mobile locksmiths stationed throughout ${context.serviceAreas[0]} to ensure fast emergency locksmith service when you need it most.`
    },
    
    // Cost/cheap locksmith question
    {
      question: keywordQuestions.cheap 
        ? `How much does a ${keywordQuestions.cheap.replace('in ', '')} cost?`
        : `What are your locksmith prices in ${context.displayName}?`,
      answer: `We provide upfront, transparent pricing for all locksmith services in ${context.displayName}. Our rates are competitive throughout ${context.serviceAreas[0]}, and we never charge hidden fees. Emergency lockout service typically starts at $89, with most jobs completed for under $200.`
    },
    
    // Service types with keyword variations
    {
      question: context.areaType === 'urban'
        ? `Do you provide both ${keywordQuestions.commercial.replace('in ', '') || 'commercial locksmith'} and ${keywordQuestions.residential.replace('in ', '') || 'residential locksmith'} services?`
        : `What types of locksmith services do you provide in ${context.displayName}?`,
      answer: `Yes! We provide comprehensive locksmith services for ${context.businessContext} in ${context.displayName}. This includes emergency lockouts, lock repairs and replacement, key duplication, rekeying, smart lock installation, and security upgrades for both residential and commercial properties.`
    },
    
    // Car vs house lockouts
    {
      question: keywordQuestions.carLockout
        ? `Do you handle ${keywordQuestions.carLockout.replace('in ', '')} and ${keywordQuestions.houseLockout.replace('in ', '') || 'house lockout'} emergencies?`
        : `Do you handle both car and house lockouts in ${context.displayName}?`,
      answer: `Absolutely! We specialize in both automotive and residential lockout emergencies in ${context.displayName}. Whether you're locked out of your car near ${landmarks[0]} or need house lockout service anywhere in ${context.serviceAreas[0]}, our mobile locksmiths respond quickly 24/7.`
    },
    
    // Coverage area with street references
    {
      question: `Do you service all of ${context.displayName}?`,
      answer: `Yes! Our mobile locksmiths cover all of ${context.displayName}, including major areas like ${majorStreets.slice(0, 2).join(' and ')}. We also service ${context.locationRefs[2]} and throughout ${context.serviceAreas[2]} for complete locksmith coverage.`
    }
  ];
  
  return faqTemplates;
};