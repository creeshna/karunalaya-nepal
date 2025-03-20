
import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import BoardSection from '../components/home/BoardSection';
import WorkingAreasSection from '../components/home/WorkingAreasSection';
import BlogSection from '../components/home/BlogSection';
import GallerySection from '../components/home/GallerySection';
import DonateSection from '../components/home/DonateSection';
import ContactSection from '../components/home/ContactSection';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <AboutSection />
        <WorkingAreasSection />
        <BoardSection />
        <BlogSection />
        <GallerySection />
        <DonateSection />
        <ContactSection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
