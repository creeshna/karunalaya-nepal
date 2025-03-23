
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Ishwari Prasad Neure',
      role: 'Founder',
      image: '/lovable-uploads/bce5f043-1654-4c65-bfd6-96b05193f177.png',
      bio: 'Dedicated human rights activist, environmental advocate, and social change leader with a background in Social Work.'
    },
    {
      name: 'Sudha Timalshena',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      bio: 'Dedicated environmentalist and animal rights activist committed to sustainability and social justice.'
    },
    {
      name: 'Aasna Sapkota',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Passionate advocate for inclusive education and the empowerment of children with disabilities.'
    },
  ];

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle">Our Leadership</div>
          <h2 className="section-title">Our Team</h2>
          <p className="section-description mx-auto">
            Meet the dedicated individuals who guide our organization with their expertise, passion, and vision for a better world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift"
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-xl font-medium">{member.name}</h3>
                  <p className="text-white/90 text-sm">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/80">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/team" className="inline-flex items-center group">
            <span className="text-brand-600 font-medium">View all team members</span>
            <ArrowRight className="ml-2 h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
