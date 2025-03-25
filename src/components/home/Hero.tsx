
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-brand-200/30 to-transparent z-0"></div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-200/20 blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-300/10 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="bg-brand-50 text-brand-600 px-4 py-1.5 rounded-full text-sm font-medium inline-block animate-fade-in mb-6">
            Together for lives, rights and nature
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-10 animate-fade-in-up">
            Protecting Our Planet and All Its Inhabitants
          </h1>
          
          <p className="text-xl text-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
            Join us in our mission to create a sustainable future where wildlife thrives, human rights are respected, and our planet is protected.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
            <Link to="/donate" className="btn btn-primary">
              <span>Support Our Cause</span>
            </Link>
            <Link to="/about" className="btn btn-outline group">
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="glass p-6 animate-fade-in-up animate-delay-300">
              <h3 className="text-4xl font-bold text-brand-600 mb-2">1+</h3>
              <p className="text-foreground/70">Year of Impact</p>
            </div>
            <Link to="/activities" className="glass p-6 animate-fade-in-up animate-delay-400 hover:bg-brand-50/50 transition-colors">
              <h3 className="text-4xl font-bold text-brand-600 mb-2">10+</h3>
              <p className="text-foreground/70">Projects / Activities</p>
            </Link>
            <div className="glass p-6 animate-fade-in-up animate-delay-500">
              <h3 className="text-4xl font-bold text-brand-600 mb-2">2k+</h3>
              <p className="text-foreground/70">Lives Improved</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-foreground/40 mb-2">Scroll</span>
        <div className="w-0.5 h-6 bg-foreground/20"></div>
      </div>
    </section>
  );
};

export default Hero;
