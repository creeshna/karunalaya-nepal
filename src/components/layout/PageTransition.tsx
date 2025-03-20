
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
      // Start with opacity 0
      pageRef.current.style.opacity = '0';
      
      // Trigger fade in animation
      setTimeout(() => {
        if (pageRef.current) {
          pageRef.current.style.opacity = '1';
          pageRef.current.classList.add('animate-fade-in');
        }
      }, 10);
      
      // Clean up animation classes after animation completes
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
      className="w-full transition-opacity duration-500"
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
