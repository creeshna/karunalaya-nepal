
import React from 'react';
import { ArrowRight, Shield, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="section-subtitle">About Us</div>
              </div>
              <h2 className="section-title">Working Towards a Better Tomorrow</h2>
              <p className="text-foreground/80 text-lg">
                EcoAlliance is a non-profit organization dedicated to the protection of animal welfare, human rights, and environmental conservation. We believe that these three elements are interconnected and essential for a sustainable future.
              </p>
              <p className="text-foreground/80">
                Founded in 2008, we have grown from a small group of passionate individuals to a global network of activists, scientists, and volunteers committed to making a positive impact on our planet. Our approach is holistic, recognizing that the well-being of animals, people, and the environment are intrinsically linked.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center text-center p-4 glass hover-lift">
                  <Shield className="h-8 w-8 text-brand-500 mb-3" />
                  <h3 className="font-medium mb-1">Animal Welfare</h3>
                  <p className="text-sm text-foreground/70">Protecting and advocating for animals worldwide</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 glass hover-lift">
                  <Users className="h-8 w-8 text-brand-500 mb-3" />
                  <h3 className="font-medium mb-1">Human Rights</h3>
                  <p className="text-sm text-foreground/70">Ensuring dignity and equality for all people</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 glass hover-lift">
                  <Globe className="h-8 w-8 text-brand-500 mb-3" />
                  <h3 className="font-medium mb-1">Environmental</h3>
                  <p className="text-sm text-foreground/70">Preserving and restoring natural ecosystems</p>
                </div>
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
                    src="https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Our mission in action" 
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-6 glass-dark rounded-2xl max-w-xs hidden md:block">
              <p className="text-foreground/80 text-sm italic">
                "The future of our planet depends on the harmony between humans, animals, and nature. We are committed to fostering this harmony."
              </p>
              <p className="text-right mt-2 text-sm font-medium">- Jane Thompson, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
