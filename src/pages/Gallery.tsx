
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { ImageOff } from 'lucide-react';

const Gallery = () => {
  const categories = [
    "All",
    "Wildlife",
    "Conservation",
    "Community",
    "Education",
    "Events"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="section-subtitle">Our Impact</div>
              <h1 className="section-title text-4xl md:text-5xl">Gallery</h1>
              <p className="section-description mx-auto">
                A visual journey through our projects, events, and achievements around the world.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex justify-center mb-10">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                      index === 0
                        ? 'bg-brand-500 text-white'
                        : 'bg-secondary text-foreground/70 hover:bg-secondary/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Empty Gallery State */}
            <div className="flex flex-col items-center justify-center py-16">
              <div className="bg-secondary/50 p-8 rounded-full mb-6">
                <ImageOff className="h-16 w-16 text-foreground/40" />
              </div>
              <h3 className="text-2xl font-medium mb-2 text-center">No Images Available</h3>
              <p className="text-foreground/70 text-center max-w-md mb-8">
                We're currently updating our gallery with new images from our recent projects.
                Please check back soon to see our work in action.
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

export default Gallery;
