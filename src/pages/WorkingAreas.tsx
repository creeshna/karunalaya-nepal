import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { 
  Scale,
  PawPrint,
  Leaf, 
  Accessibility, 
  Users, 
  Heart
} from 'lucide-react';

const WorkingAreas = () => {
  const areas = [
    {
      title: 'Human Rights',
      description: 'Advocating for the fundamental rights, dignity, and equal treatment of all people regardless of their background, identity, or circumstances.',
      icon: Scale,
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      title: 'Animal Welfare',
      description: 'Protecting animals from suffering and promoting their wellbeing through rescue, rehabilitation, education, and advocacy for compassionate treatment.',
      icon: PawPrint,
      color: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      title: 'Environmental Conservation',
      description: 'Protecting natural ecosystems and promoting sustainable practices to mitigate climate change and preserve biodiversity for future generations.',
      icon: Leaf,
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Disability Rights & Inclusion',
      description: 'Working to create accessible environments and inclusive communities where people with disabilities can fully participate and thrive.',
      icon: Accessibility,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: "Women's Empowerment",
      description: 'Supporting women through education, economic opportunities, and advocacy to challenge gender inequalities and promote women\'s leadership.',
      icon: Users,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'LGBTQIA+ Empowerment',
      description: 'Supporting and advocating for the rights, dignity, and inclusion of LGBTQIA+ individuals through education, community building, and policy advocacy.',
      icon: Heart,
      color: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="section-subtitle">What We Do</div>
              <h1 className="section-title text-4xl md:text-5xl">Our Mission</h1>
              
              <div className="max-w-3xl mx-auto mt-8">
                <div className="flex justify-center mb-8">
                  <img 
                    src="/lovable-uploads/5cbf3ace-8ae0-4090-9b40-45846d73feb2.png" 
                    alt="Karunalaya Nepal Logo" 
                    className="h-48 w-auto"
                  />
                </div>
                
                <p className="text-lg mb-8">
                  We envision a world where humans, animals and nature thrive together in harmony. Through advocacy, education, workshops and action, we work to reduce conflicts, foster compassion and promote sustainable practices for a brighter, more inclusive future.
                </p>
              </div>
            </div>
            
            <div className="space-y-8 mb-12">
              <h2 className="text-2xl font-medium text-center mb-8">Our mission extends to:</h2>
              
              {areas.map((area, index) => (
                <div key={index} className="glass p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className={`rounded-full ${area.color} p-6 flex-shrink-0`}>
                      <area.icon className={`h-8 w-8 ${area.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 text-center md:text-left">{area.title}</h3>
                      <p className="text-foreground/80">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto text-center p-8 glass rounded-xl">
              <p className="text-lg mb-4">
                Together, we believe in the power of compassion to create a world where every being is valued and every voice is heard.
              </p>
              <p className="text-xl font-medium">
                Join us in building a future of "One Health, One Earth" Compassion in Action for All.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default WorkingAreas;
