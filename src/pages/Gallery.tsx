
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
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
      id: 1,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Two brown deer beside trees and mountain",
      categories: ["Wildlife", "Conservation"]
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      alt: "Brown antelope and zebra on field at daytime",
      categories: ["Wildlife"]
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      alt: "Brown ox on mountain",
      categories: ["Wildlife", "Conservation"]
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
      alt: "Humpback whale jumping on sea",
      categories: ["Wildlife", "Conservation"]
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170",
      alt: "Two brown deers in woods",
      categories: ["Wildlife"]
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      alt: "Brown cattle in the middle of forest",
      categories: ["Wildlife", "Conservation"]
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1441057206919-63d19fac2369",
      alt: "Two penguins standing on rock",
      categories: ["Wildlife", "Conservation"]
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      alt: "Brown deer on brown land near trees",
      categories: ["Wildlife"]
    }
  ];

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.categories.includes(activeCategory));

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
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                      category === activeCategory
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-xl shadow-sm hover-lift group"
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img 
                      src={`${image.src}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`} 
                      alt={image.alt} 
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Gallery;
