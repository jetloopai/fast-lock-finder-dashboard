import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import ClosingCTA from "@/components/home/ClosingCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <ClosingCTA />
    </Layout>
  );
};

export default Index;
