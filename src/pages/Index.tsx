import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import ClosingCTA from "@/components/home/ClosingCTA";
import CityReviews from "@/components/home/CityReviews";
import EmergencySituations from "@/components/home/EmergencySituations";
import PricingInfo from "@/components/home/PricingInfo";
import BrandsEquipment from "@/components/home/BrandsEquipment";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Locksmith Chicago South & Southwest Suburbs | 24/7 Emergency Service</title>
        <meta 
          name="description" 
          content="Professional locksmith Chicago South & Southwest suburbs. 24/7 emergency lockout service, car keys, home locks, commercial security. 15-min response time. Call now!" 
        />
        <meta name="keywords" content="locksmith Chicago, emergency locksmith, car lockout, home locksmith, commercial locksmith, 24/7 locksmith, locksmith near me, Chicago locksmith service" />
        <link rel="canonical" href="https://fastlockfinder.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FastLockFinder",
            "description": "Professional locksmith services across Chicago's South & Southwest suburbs",
            "url": "https://fastlockfinder.com",
            "telephone": "+1-555-FAST-LOCK",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chicago",
              "addressRegion": "IL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.8781",
              "longitude": "-87.6298"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "41.8781",
                "longitude": "-87.6298"
              },
              "geoRadius": "50000"
            },
            "services": [
              "Emergency Lockout Service",
              "Residential Locksmith",
              "Commercial Locksmith", 
              "Automotive Locksmith",
              "Lock Rekeying",
              "Smart Lock Installation",
              "Key Duplication",
              "Safe Services"
            ]
          })}
        </script>
      </Helmet>
      <Hero />
      <ServicesGrid />
      <EmergencySituations />
      <WhyChooseUs />
      <PricingInfo />
      <HowItWorks />
      <BrandsEquipment />
      <CityReviews cityName="Oak Lawn" landmark1="Oak Lawn Park District" landmark2="Christ Hospital" />
      <Reviews />
      <FAQ />
      <ClosingCTA />
    </Layout>
  );
};

export default Index;
