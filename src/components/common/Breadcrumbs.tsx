import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" }
    ];

    pathnames.forEach((pathname, index) => {
      const href = '/' + pathnames.slice(0, index + 1).join('/');
      let label = pathname.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      // Custom labels for better SEO
      if (pathname === 'services') {
        label = 'Locksmith Services';
      } else if (pathname === 'service-areas') {
        label = 'Service Areas';
      } else if (pathname === 'emergency') {
        label = 'Emergency Locksmith';
      } else if (pathname === 'residential') {
        label = 'Residential Locksmith';
      } else if (pathname === 'commercial') {
        label = 'Commercial Locksmith';
      } else if (pathname === 'automotive') {
        label = 'Automotive Locksmith';
      } else if (pathname === 'smart-locks') {
        label = 'Smart Lock Installation';
      } else if (pathname === 'key-duplication') {
        label = 'Key Duplication Service';
      } else if (pathname.includes('locksmith')) {
        // For city pages, format properly
        label = label.replace('Locksmith', '').trim() + ' Locksmith';
      }

      breadcrumbs.push({
        label,
        href: index === pathnames.length - 1 ? undefined : href
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="bg-muted/50 py-3 border-b border-border" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="flex items-center">
              {index === 0 && <Home className="h-4 w-4 mr-1" />}
              {breadcrumb.href ? (
                <Link 
                  to={breadcrumb.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {breadcrumb.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium" aria-current="page">
                  {breadcrumb.label}
                </span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;