
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/layout/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-grow flex items-center justify-center py-20">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
            <p className="text-2xl text-foreground/80 mb-6">Oops! Page not found</p>
            <p className="text-foreground/70 max-w-md mx-auto mb-8">
              We couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
            </p>
            <Link to="/" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium">
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default NotFound;
