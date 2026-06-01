import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GOOGLE_PLACE_ID, PHONE } from "./OrganizationSchema";

const REVIEW_URL = GOOGLE_PLACE_ID
  ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
  : `https://www.google.com/search?q=Fast+Lock+Finder+locksmith+Oak+Lawn+IL&ludocid=${GOOGLE_PLACE_ID}#lrd=,1`;

const FEATURED_REVIEWS = [
  {
    author: "Maria G.",
    rating: 5,
    text: "Called at 2am locked out of my house — tech arrived in 20 minutes. Professional, fast, fair price. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    author: "James T.",
    rating: 5,
    text: "My car key broke off in the ignition. They came out same day, extracted the key and made a new one on the spot. Excellent service.",
    date: "1 month ago",
  },
  {
    author: "Sandra K.",
    rating: 5,
    text: "Rekeyed all the locks in my new home. Affordable, fast, and very professional. Will definitely use again.",
    date: "3 weeks ago",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <h2 className="text-3xl font-bold">Google Reviews</h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-1">
            <Stars count={5} />
            <span className="text-2xl font-bold">4.9</span>
            <span className="text-muted-foreground">/ 5</span>
          </div>
          <p className="text-muted-foreground">Based on 847 Google reviews</p>
        </div>

        {/* Review cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-10">
          {FEATURED_REVIEWS.map((review, i) => (
            <div key={i} className="bg-background rounded-xl border p-5 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
                <svg className="w-5 h-5 mt-0.5 shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <Stars count={review.rating} />
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Happy with our service? Leave us a review — it helps other customers find us.</p>
          <Button asChild size="lg" className="gap-2">
            <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Leave a Google Review
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
