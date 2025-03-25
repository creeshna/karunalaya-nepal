
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import ActivitiesHeader from '../components/activities/ActivitiesHeader';
import CategorySection from '../components/activities/CategorySection';
import ActivityCTA from '../components/activities/ActivityCTA';
import { categories } from '../data/activities';

const Activities = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <ActivitiesHeader />
            
            {categories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
            
            <ActivityCTA />
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Activities;
