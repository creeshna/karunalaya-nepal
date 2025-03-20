
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
    
    // Add animation classes
    if (pageRef.current) {
      pageRef.current.classList.add('animate-fade-in');
      
      // Clean up animation classes
      const timer = setTimeout(() => {
        if (pageRef.current) {
          pageRef.current.classList.remove('animate-fade-in');
        }
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);
  
  return (
    <div 
      ref={pageRef}
      className="w-full opacity-0"
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
