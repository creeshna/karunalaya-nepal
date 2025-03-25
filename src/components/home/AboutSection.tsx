
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="section-title text-green-600">Karunalaya Nepal</h2>
              <p className="text-lg mb-6 text-foreground leading-relaxed">
                Karunalaya Nepal is a non-profit organization based in Bharatpur-1, Chitwan, Nepal, dedicated to creating a compassionate and sustainable future through harmony between humans, animals and nature.
              </p>
              <p className="text-lg mb-6 text-foreground leading-relaxed">
                Our vision is a world where kindness, empathy and sustainable practices lead to a balanced coexistence between all living beings. We promote ethical living, environmental conservation and social justice.
              </p>
              
              <div className="flex justify-center lg:justify-start mt-6">
                <img 
                  src="/lovable-uploads/5cbf3ace-8ae0-4090-9b40-45846d73feb2.png" 
                  alt="Karunalaya Nepal Logo" 
                  className="h-36 w-auto"
                />
              </div>
              
              <Link to="/about" className="inline-flex items-center group">
                <span className="text-brand-600 font-medium">Learn more about our mission</span>
                <ArrowRight className="ml-2 h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-brand-500/20 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative z-10 p-1">
                <div className="aspect-w-16 aspect-h-9 w-full relative rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/5cbf3ace-8ae0-4090-9b40-45846d73feb2.png" 
                    alt="Karunalaya Nepal Logo" 
                    className="object-contain w-full h-full rounded-xl bg-white p-4"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-6 glass-dark rounded-2xl max-w-xs hidden md:block">
              <p className="text-foreground/80 text-sm italic">
                "Together for lives, rights and nature. We envision a world where kindness and sustainable practices lead to balanced coexistence."
              </p>
              <p className="text-right mt-2 text-sm font-medium">- Karunalaya Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
