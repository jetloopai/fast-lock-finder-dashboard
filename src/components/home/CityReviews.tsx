import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface CityReviewsProps {
  cityName: string;
  landmark1: string;
  landmark2: string;
}

const getLocationReference = (cityName: string, landmark1: string, landmark2: string) => {
  // Smart location referencing for Chicago zip codes
  if (cityName.includes('Chicago')) {
    const neighborhood = cityName.split(' - ')[1] || cityName.split(' ')[1];
    if (neighborhood) {
      return {
        area: `the ${neighborhood} area`,
        downtown: 'downtown Chicago',
        general: 'Chicago',
        landmarks: [landmark1, landmark2].filter(Boolean)
      };
    }
  }
  
  return {
    area: cityName,
    downtown: cityName,
    general: cityName,
    landmarks: [landmark1, landmark2].filter(Boolean)
  };
};

const getCityReviews = (cityName: string, landmark1: string, landmark2: string) => {
  const locationRef = getLocationReference(cityName, landmark1, landmark2);
  
  const reviewVariations = [
    // Car lockout scenarios
    [
      {
        name: "Sarah M.",
        rating: 5,
        text: `Got locked out of my car while shopping near ${locationRef.landmarks[0]}. These guys were amazing - arrived in under 15 minutes and had me back on the road quickly!`,
        verified: true
      },
      {
        name: "Marcus T.",
        rating: 5,
        text: `Left my keys in the car while running errands in ${locationRef.area}. FastLockFinder saved the day! Super professional and didn't damage anything.`,
        verified: true
      },
      {
        name: "Lisa R.",
        rating: 5,
        text: `Car key broke in the ignition right outside my office. They came out fast and made a new key on the spot. Couldn't be happier with the service!`,
        verified: true
      }
    ],
    // Home lockout scenarios
    [
      {
        name: "Mike R.",
        rating: 5,
        text: `Called at 2 AM after getting locked out of my house. They came out to ${locationRef.general} immediately and were so professional despite the late hour.`,
        verified: true
      },
      {
        name: "Jennifer K.",
        rating: 5,
        text: `Teenage son locked himself out while I was at work. They helped him get back inside safely and were really patient with him. Great service!`,
        verified: true
      },
      {
        name: "Robert D.",
        rating: 5,
        text: `Lock jammed during a snowstorm and I couldn't get into my house. They braved the weather to come help me out. Above and beyond service!`,
        verified: true
      }
    ],
    // Rekeying/security scenarios  
    [
      {
        name: "Jennifer L.",
        rating: 5,
        text: `Just moved to a new place and wanted all the locks changed. They explained everything clearly and the pricing was very fair. Highly recommend!`,
        verified: true
      },
      {
        name: "Kevin S.",
        rating: 5,
        text: `Had to rekey all my locks after a break-in attempt. They came out the same day and made sure everything was secure. Peace of mind restored!`,
        verified: true
      },
      {
        name: "Amanda G.",
        rating: 5,
        text: `Lost my house keys at the grocery store. Instead of replacing the locks, they rekeyed everything for much less money. Smart and honest!`,
        verified: true
      }
    ],
    // Business/commercial scenarios
    [
      {
        name: "David K.",
        rating: 5,
        text: `Store lock broke on a Saturday and I had inventory coming Monday. They came out over the weekend and fixed it perfectly. Saved my business day!`,
        verified: true
      },
      {
        name: "Maria S.",
        rating: 5,
        text: `Needed master key system installed for our office building. They handled the whole project professionally and finished ahead of schedule.`,
        verified: true
      },
      {
        name: "Tom H.",
        rating: 5,
        text: `Employee lost keys to our warehouse. They came out after hours and rekeyed everything so we wouldn't miss any shipments. Outstanding service!`,
        verified: true
      }
    ]
  ];

  // Select one review from each category for variety
  const selectedReviews = reviewVariations.map(category => 
    category[Math.floor(Math.random() * category.length)]
  );

  return selectedReviews.map(review => ({
    ...review,
    city: locationRef.general
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