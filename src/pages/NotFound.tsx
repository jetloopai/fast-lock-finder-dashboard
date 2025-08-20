import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>Page Not Found - 404 | FastLockFinder</title>
        <meta 
          name="description" 
          content="Page not found. Return to FastLockFinder homepage for locksmith services in Chicago South & Southwest suburbs." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist. Let's get you back to our locksmith services.
          </p>
          <Button asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
