
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale,
  PawPrint,
  Leaf, 
  Accessibility,
  Users, 
  Heart,
  ArrowRight 
} from 'lucide-react';

const WorkingAreasSection = () => {
  const areas = [
    {
      title: 'Human Rights',
      icon: Scale,
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      title: 'Animal Welfare',
      icon: PawPrint,
      color: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      title: 'Environmental Conservation',
      icon: Leaf,
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Disability Rights & Inclusion',
      icon: Accessibility,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: "Women's Empowerment",
      icon: Users,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'LGBTQIA+ Empowerment',
      icon: Heart,
      color: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle">What We Do</div>
          <h2 className="section-title">Our Mission</h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/5cbf3ace-8ae0-4090-9b40-45846d73feb2.png" 
                alt="Karunalaya Nepal Logo" 
                className="h-48 w-auto"
              />
            </div>
            
            <p className="text-lg mb-6 text-foreground">
              We envision a world where humans, animals and nature thrive together in harmony. Through advocacy, education, workshops and action, we work to reduce conflicts, foster compassion and promote sustainable practices for a brighter, more inclusive future.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-4 text-foreground">Our mission extends to:</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden hover-lift"
            >
              <div className={`p-4 h-full flex flex-col items-center text-center ${area.color} border border-${area.color}/50`}>
                <div className={`rounded-full w-12 h-12 flex items-center justify-center ${area.iconColor} bg-white mb-4`}>
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-medium text-foreground">{area.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8 text-foreground">
            Together, we believe in the power of compassion to create a world where every being is valued and every voice is heard. Join us in building a future of "One Health, One Earth" Compassion in Action for All.
          </p>

          <Link to="/working-areas" className="inline-flex items-center group">
            <span className="text-brand-600 font-medium">Learn more about our work</span>
            <ArrowRight className="ml-2 h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkingAreasSection;
