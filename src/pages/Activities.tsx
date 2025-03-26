
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import ActivitiesHeader from '../components/activities/ActivitiesHeader';
import CategorySection from '../components/activities/CategorySection';
import ActivityCTA from '../components/activities/ActivityCTA';
import { categories } from '../data/activities';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <ActivitiesHeader />
            
            <div className="mb-12">
              <Tabs defaultValue={categories[0].id} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="w-full flex justify-center mb-8 bg-secondary">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="flex items-center gap-2 px-4 py-2 data-[state=active]:bg-white"
                    >
                      <category.icon className={`h-5 w-5 ${category.iconColor}`} />
                      <span>{category.title}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {categories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="animate-fade-in">
                    <CategorySection category={category} />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            
            <ActivityCTA />
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Activities;
