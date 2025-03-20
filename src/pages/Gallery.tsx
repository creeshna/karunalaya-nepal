
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    "All",
    "Wildlife",
    "Conservation",
    "Community",
    "Education",
    "Events"
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1574&q=80',
      caption: 'Mountain forest conservation area',
      category: 'Conservation'
    },
    {
      src: 'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
      caption: 'Wildlife protection program',
      category: 'Wildlife'
    },
    {
      src: 'https://images.unsplash.com/photo-1507536258153-e55098f68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      caption: 'Clean water initiative in rural community',
      category: 'Community'
    },
    {
      src: 'https://images.unsplash.com/photo-1531898754992-503edaa27655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      caption: 'Community education workshop',
      category: 'Education'
    },
    {
      src: 'https://images.unsplash.com/photo-1591634616938-22a6417f0bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      caption: 'Animal rehabilitation center',
      category: 'Wildlife'
    },
    {
      src: 'https://images.unsplash.com/photo-1536859976797-129ca3d4cdcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      caption: 'Environmental activism rally',
      category: 'Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      caption: 'Conservation team in the field',
      category: 'Conservation'
    },
    {
      src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1613&q=80',
      caption: 'Protecting endangered elephants',
      category: 'Wildlife'
    },
    {
      src: 'https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      caption: 'Mountain range habitat preservation',
      category: 'Conservation'
    },
    {
      src: 'https://images.unsplash.com/photo-1523867495095-f7a4c61a5ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      caption: 'Community outreach program',
      category: 'Community'
    },
    {
      src: 'https://images.unsplash.com/photo-1588714477688-cf28a50e8a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      caption: 'Environmental education for children',
      category: 'Education'
    },
    {
      src: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      caption: 'Annual fundraising gala',
      category: 'Events'
    },
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
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-w-3 aspect-h-2 relative rounded-2xl overflow-hidden group cursor-pointer hover-lift"
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.caption} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <div className="p-4">
                      <p className="text-white font-medium">{image.caption}</p>
                      <p className="text-white/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
        
        {/* Image Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-brand-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            
            <div 
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].caption} 
                className="max-w-full max-h-[80vh] object-contain mx-auto"
              />
              
              <div className="text-center mt-4">
                <p className="text-white text-lg font-medium">{galleryImages[selectedImage].caption}</p>
                <p className="text-white/70">{galleryImages[selectedImage].category}</p>
              </div>
              
              <div className="flex justify-between mt-6">
                <button 
                  className="p-2 text-white hover:text-brand-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(prevState => 
                      prevState === 0 ? galleryImages.length - 1 : prevState - 1
                    );
                  }}
                >
                  Previous
                </button>
                <button 
                  className="p-2 text-white hover:text-brand-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(prevState => 
                      prevState === galleryImages.length - 1 ? 0 : prevState + 1
                    );
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Gallery;
