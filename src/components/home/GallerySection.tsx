
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ImageOff } from 'lucide-react';

const GallerySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle">Our Impact</div>
          <h2 className="section-title">Gallery</h2>
          <p className="section-description mx-auto">
            A visual journey through our projects, events, and achievements around the world.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-16">
          <div className="bg-secondary/50 p-8 rounded-full mb-6">
            <ImageOff className="h-16 w-16 text-foreground/40" />
          </div>
          <h3 className="text-xl font-medium mb-2 text-center">Gallery Coming Soon</h3>
          <p className="text-foreground/70 text-center max-w-md mb-6">
            We're preparing to showcase our conservation and animal welfare work in Nepal.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" className="inline-flex items-center group">
            <span className="text-brand-600 font-medium">See our full gallery</span>
            <ArrowRight className="ml-2 h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
