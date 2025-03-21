
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { FileX } from 'lucide-react';

const Blog = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="section-subtitle">Stay Informed</div>
              <h1 className="section-title text-4xl md:text-5xl">Our Blog</h1>
              <p className="section-description mx-auto">
                Explore the latest news, insights, and stories from our work around the world.
              </p>
            </div>
            
            {/* Empty state */}
            <div className="flex flex-col items-center justify-center py-16">
              <div className="bg-secondary/50 p-8 rounded-full mb-6">
                <FileX className="h-16 w-16 text-foreground/40" />
              </div>
              <h3 className="text-2xl font-medium mb-2 text-center">No Articles Available</h3>
              <p className="text-foreground/70 text-center max-w-md mb-8">
                We're currently working on new content about animal and environmental issues in Nepal.
                Please check back soon for updates.
              </p>
              <a 
                href="/" 
                className="btn btn-primary"
              >
                Return to Home
              </a>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Blog;
