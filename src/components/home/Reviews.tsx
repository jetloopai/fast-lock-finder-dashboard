
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    city: "Oak Lawn",
    rating: 5,
    text: "I was locked out of my car near Advocate Christ Medical Center in Oak Lawn. FastLockFinder arrived in 12 minutes! Professional, fast, and reasonably priced.",
    verified: true
  },
  {
    name: "Mike R.",
    city: "Orland Park",
    rating: 5,
    text: "Called them at 2 AM when I was locked out of my house near Orland Square Mall. They came out immediately and had me back inside in no time. Excellent service!",
    verified: true
  },
  {
    name: "Jennifer L.",
    city: "Tinley Park",
    rating: 5,
    text: "Needed my locks rekeyed after moving to a new home near Hollywood Casino Amphitheatre. FastLockFinder was professional, quick, and explained everything clearly.",
    verified: true
  },
  {
    name: "David K.",
    city: "Homewood",
    rating: 5,
    text: "My business lock broke during the weekend near downtown Homewood. They came out on Saturday evening and fixed it perfectly. Highly recommend their commercial services.",
    verified: true
  },
  {
    name: "Lisa P.",
    city: "Frankfort",
    rating: 5,
    text: "Locked out of my car at Historic Downtown Frankfort. Called FastLockFinder and they were there in 14 minutes. Great communication and fair pricing.",
    verified: true
  },
  {
    name: "Tom B.",
    city: "New Lenox",
    rating: 5,
    text: "Emergency lockout at my office near Silver Cross Hospital. FastLockFinder's locksmith was professional, efficient, and got me back in quickly. Will definitely use again.",
    verified: true
  },
  {
    name: "Amy C.",
    city: "Alsip",
    rating: 5,
    text: "Got locked out of my apartment near Burr Oak Cemetery. The locksmith arrived in 13 minutes and had me back inside safely. Great 24/7 service!",
    verified: true
  },
  {
    name: "Robert H.",
    city: "Palos Heights",
    rating: 5,
    text: "Smart lock installation near Lake Katherine Nature Center went perfectly. The technician was knowledgeable and explained how everything worked. Highly recommend!",
    verified: true
  },
  {
    name: "Maria G.",
    city: "Mokena",
    rating: 5,
    text: "Car key replacement service near Hickory Creek Preserve was fast and affordable. Much better than going to the dealership. Will use FastLockFinder again!",
    verified: true
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what customers across Chicago's 
            South & Southwest suburbs say about FastLockFinder's service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Reviews;
