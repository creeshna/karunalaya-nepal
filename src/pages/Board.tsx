
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { Mail, Linkedin } from 'lucide-react';

const Board = () => {
  const directors = [
    {
      name: 'Jane Thompson',
      role: 'Founder & Chair',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Jane has over 20 years of experience in environmental conservation and human rights advocacy. She founded EcoAlliance after witnessing the devastating effects of deforestation on local communities and wildlife in Southeast Asia.',
      linkedin: '#',
      email: 'jane@ecoalliance.org'
    },
    {
      name: 'Michael Chen',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Michael is a former UN advisor specializing in sustainable development and human rights law. He brings extensive experience in international policy and has led major conservation initiatives across three continents.',
      linkedin: '#',
      email: 'michael@ecoalliance.org'
    },
    {
      name: 'Sarah Johnson',
      role: 'Director of Research',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      bio: 'Sarah holds a Ph.D. in Environmental Science with expertise in biodiversity conservation. Her research on endangered species has been published in leading scientific journals and has informed conservation policies worldwide.',
      linkedin: '#',
      email: 'sarah@ecoalliance.org'
    },
    {
      name: 'David Rodriguez',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'David oversees the operational aspects of EcoAlliance, ensuring that our programs are effectively implemented and resources are utilized efficiently. He has a background in non-profit management and international development.',
      linkedin: '#',
      email: 'david@ecoalliance.org'
    },
    {
      name: 'Aisha Patel',
      role: 'Director of Advocacy',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80',
      bio: 'Aisha leads our advocacy efforts, working with governments, international organizations, and other stakeholders to promote policies that protect animals, people, and the environment. She has a background in international law.',
      linkedin: '#',
      email: 'aisha@ecoalliance.org'
    },
    {
      name: 'Robert Kim',
      role: 'Director of Development',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Robert manages our fundraising and partnership development efforts, building relationships with donors, foundations, and corporate partners to support our mission. He has over 15 years of experience in non-profit fundraising.',
      linkedin: '#',
      email: 'robert@ecoalliance.org'
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="section-subtitle">Our Leadership</div>
              <h1 className="section-title text-4xl md:text-5xl">Board of Directors</h1>
              <p className="section-description mx-auto">
                Meet the dedicated individuals who guide our organization with their expertise, passion, and vision for a better world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {directors.map((director, index) => (
                <div 
                  key={index} 
                  className="glass overflow-hidden hover-lift"
                >
                  <div className="aspect-w-3 aspect-h-2">
                    <img 
                      src={director.image} 
                      alt={director.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium">{director.name}</h3>
                    <p className="text-brand-600 mb-3">{director.role}</p>
                    <p className="text-foreground/80 mb-4">{director.bio}</p>
                    <div className="flex space-x-3">
                      <a 
                        href={`mailto:${director.email}`} 
                        className="p-2 rounded-full bg-secondary hover:bg-brand-100 transition-colors"
                        aria-label={`Email ${director.name}`}
                      >
                        <Mail className="h-5 w-5 text-brand-600" />
                      </a>
                      <a 
                        href={director.linkedin} 
                        className="p-2 rounded-full bg-secondary hover:bg-brand-100 transition-colors"
                        aria-label={`${director.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5 text-brand-600" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Board;
