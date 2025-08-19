import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface CityReviewsProps {
  cityName: string;
  landmark1: string;
  landmark2: string;
}

const getCityReviews = (cityName: string, landmark1: string, landmark2: string) => {
  const reviewTemplates = [
    {
      name: "Sarah M.",
      rating: 5,
      text: `I was locked out of my car near ${landmark1}. FastLockFinder arrived in 12 minutes! Professional, fast, and reasonably priced.`,
      verified: true
    },
    {
      name: "Mike R.",
      rating: 5,
      text: `Called them at 2 AM when I was locked out of my house near ${landmark2}. They came out immediately and had me back inside in no time. Excellent service!`,
      verified: true
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: `Needed my locks rekeyed after moving to a new home near ${landmark1}. FastLockFinder was professional, quick, and explained everything clearly.`,
      verified: true
    },
    {
      name: "David K.",
      rating: 5,
      text: `My business lock broke during the weekend near ${landmark2}. They came out on Saturday evening and fixed it perfectly. Highly recommend their commercial services.`,
      verified: true
    }
  ];

  return reviewTemplates.map(review => ({
    ...review,
    city: cityName
  }));
};

const CityReviews = ({ cityName, landmark1, landmark2 }: CityReviewsProps) => {
  const reviews = getCityReviews(cityName, landmark1, landmark2);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our {cityName} Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reviews from customers we've helped in {cityName} and the surrounding area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground italic">
                  "{review.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.city}, IL</div>
                  </div>
                  {review.verified && (
                    <div className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                      Verified
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityReviews;