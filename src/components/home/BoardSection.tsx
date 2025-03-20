
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BoardSection = () => {
  const directors = [
    {
      name: 'Jane Thompson',
      role: 'Founder & Chair',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Dedicated conservationist with over 20 years of experience in environmental advocacy.'
    },
    {
      name: 'Michael Chen',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Former UN advisor specializing in sustainable development and human rights law.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Director of Research',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      bio: 'Ph.D. in Environmental Science with expertise in biodiversity conservation.'
    },
  ];

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle">Our Leadership</div>
          <h2 className="section-title">Board of Directors</h2>
          <p className="section-description mx-auto">
            Meet the dedicated individuals who guide our organization with their expertise, passion, and vision for a better world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift"
            >
              <div className="relative">
                <img 
                  src={director.image} 
                  alt={director.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-xl font-medium">{director.name}</h3>
                  <p className="text-white/90 text-sm">{director.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/80">{director.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/board" className="inline-flex items-center group">
            <span className="text-brand-600 font-medium">View all board members</span>
            <ArrowRight className="ml-2 h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BoardSection;
