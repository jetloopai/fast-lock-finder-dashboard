import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "../common/Breadcrumbs";
import BreadcrumbSchema from "../common/BreadcrumbSchema";
import OrganizationSchema from "../common/OrganizationSchema";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema />
      <OrganizationSchema />
      <Header />
      <Breadcrumbs />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;