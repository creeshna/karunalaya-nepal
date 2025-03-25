
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Mr. Ishwari Prasad Neure',
      role: 'Founder',
      bio: 'Dedicated human rights activist, environmental advocate, and social change leader with a background in Social Work.'
    },
    {
      name: 'Ms. Sudha Timalshena',
      role: 'Co-Founder',
      bio: 'Dedicated environmentalist and animal rights activist committed to sustainability and social justice.'
    },
    {
      name: 'Ms. Aasna Sapkota',
      role: 'Co-Founder',
      bio: 'Passionate advocate for inclusive education and the empowerment of children with disabilities.'
    },
    {
      name: 'Ms. Sajita Poudel',
      role: 'Co-Founder',
      bio: 'Passionate advocate for social change and the empowerment of individuals with disabilities.'
    },
    {
      name: 'Anushka Shah',
      role: 'Co-Founder',
      bio: 'Dedicated advocate for community health, animal welfare and social justice with expertise in dental care.'
    },
    {
      name: 'Ms. Sabina Kandel',
      role: 'Member',
      bio: 'Registered Lab Technician with 10 years of healthcare experience and 8 years of active community service.'
    },
    {
      name: 'Mr. Suvarna Ghimire',
      role: 'Member',
      bio: 'Environmental activist, researcher, and youth leader dedicated to sustainability and climate advocacy.'
    },
  ];

  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Team</h2>
          <p className="section-description mx-auto">
            Meet the dedicated individuals who guide our organization with their expertise, passion, and vision for a better world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift p-6"
            >
              <h3 className="text-xl font-medium mb-2 text-foreground">{member.name}</h3>
              <p className="text-brand-600 text-sm mb-4">{member.role}</p>
              <p className="text-foreground/80">{member.bio}</p>
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
