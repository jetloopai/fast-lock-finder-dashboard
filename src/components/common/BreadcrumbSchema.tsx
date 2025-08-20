import { useLocation } from "react-router-dom";

interface BreadcrumbSchemaProps {
  customBreadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

const BreadcrumbSchema = ({ customBreadcrumbs }: BreadcrumbSchemaProps) => {
  const location = useLocation();
  
  const generateBreadcrumbs = () => {
    if (customBreadcrumbs) {
      return customBreadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `https://fastlockfinder.com${crumb.url}`
      }));
    }

    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fastlockfinder.com"
      }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      let name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      
      // Custom names for known routes
      if (segment === 'service-areas') name = 'Service Areas';
      if (segment === 'services') name = 'Services';
      if (segment.includes('-locksmith')) {
        name = name.replace(' Locksmith', '').replace(/\b\w/g, l => l.toUpperCase()) + ' Locksmith';
      }

      breadcrumbs.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://fastlockfinder.com${currentPath}`
      });
    });

    return breadcrumbs;
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": generateBreadcrumbs()
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(breadcrumbSchema)}
    </script>
  );
};

export default BreadcrumbSchema;