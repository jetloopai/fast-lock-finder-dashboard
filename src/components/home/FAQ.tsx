import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast can you arrive at my location?",
    answer: "Our average arrival time is 15 minutes across all service areas in Chicago's South & Southwest suburbs. We guarantee arrival within 30 minutes for emergency lockout situations, and we're available 24/7."
  },
  {
    question: "Do you provide service late at night and on weekends?",
    answer: "Yes! FastLockFinder operates 24/7, 365 days a year. Whether it's 3 AM on a Sunday or during a holiday, our professional locksmiths are available for emergency lockout situations and urgent security needs."
  },
  {
    question: "What locksmith services do you offer?",
    answer: "We provide comprehensive locksmith services including emergency lockouts (home, car, business), lock installation and repair, rekeying, smart lock installation, key duplication, safe services, and advanced security systems for both residential and commercial properties."
  },
  {
    question: "Which areas do you cover?",
    answer: "FastLockFinder serves all of Chicago's South & Southwest suburbs including Oak Lawn, Orland Park, Tinley Park, Homewood, Frankfort, New Lenox, Alsip, Blue Island, Harvey, and many more. Check our Service Areas page for the complete list of covered cities."
  },
  {
    question: "What are your pricing policies?",
    answer: "We believe in transparent, upfront pricing with no hidden fees. Our locksmith will provide you with a clear quote before starting any work. We accept cash, credit cards, and offer competitive rates for all our services."
  },
  {
    question: "Are your locksmiths licensed and insured?",
    answer: "Absolutely. All FastLockFinder locksmiths are fully licensed, bonded, and insured. We're committed to providing professional, trustworthy service you can count on for your home and business security needs."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our locksmith services, 
            coverage areas, and response times.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;