
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { Mail, Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ishwari Prasad Neure',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Ishwari Prasad Neure is a dedicated human rights activist, environmental advocate, and social change leader with a background in Social Work, Business Science, and Rural Development. Actively involved with Amnesty International since 2021, Ishwari has been at the forefront of human rights education, youth empowerment, and grassroots advocacy. As the Lead of Project CAP, Bharatpur, under the Plastic-Free Rivers and Seas for South Asia (PLEASE) initiative, Ishwari is committed to reducing plastic pollution through policy advocacy, community engagement and strategic waste management solutions. Passionate about animal welfare and ethical living, Ishwari actively promotes plant-based lifestyles and has contributed to policies against live animal transport.',
      linkedin: '#',
      email: 'ishwari@karunalayanepal.org'
    },
    {
      name: 'Sudha Timalshena',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      bio: 'Sudha Timlshena is a dedicated environmentalist and animal rights activist committed to sustainability and social justice. She holds a BSc. Bachelor\'s degree in Environmental Science and is currently pursuing an MSc. in Environmental Science. Actively engaged with multiple non-profit organizations, including Better Chitwan, Chitwan Animal Save, and Animal Rights Club, Sudha has led impactful initiatives such as a scholarship program supporting 100 marginalized community students. As the owner of Central Nepal, the first vegan café in Chitwan, Sudha integrates environmental sustainability into daily life by promoting plant-based living and eco-friendly practices.',
      linkedin: 'https://linkedin.com/in/sudha-timalshena-525149266',
      email: 'sudha@karunalayanepal.org'
    },
    {
      name: 'Aasna Sapkota',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Aasna Sapkota is a passionate advocate for inclusive education and the empowerment of children with disabilities. Holding a Bachelor\'s degree in Social Work and a Master\'s in Rural Development, she has developed a deep understanding of the challenges faced by marginalized populations. Since January 15, 2023, Aasna has been working with the National Federation of the Deaf, Nepal, on an inclusive education project for children with disabilities aged 4 to 17. Her role focuses on home-based education services and the development of Individual Education Plans (IEPs) tailored to each child\'s unique needs.',
      linkedin: 'https://linkedin.com/in/aasna-sapkota-236a56325',
      email: 'aasna@karunalayanepal.org'
    },
    {
      name: 'Sajita Poudel',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Sajita Poudel is a passionate advocate for social change and the empowerment of individuals with disabilities. Born with a disability herself, she has firsthand experience of the challenges faced by marginalized communities and has dedicated her life to creating a more inclusive society. She holds a Bachelor\'s degree in Humanities and Social Sciences (2068 B.S.) and is currently pursuing her Master\'s degree in Bharatpur, Nepal. From 2020 to 2021, she served as the Coordinator of Better Chitwan, playing a pivotal role in initiatives supporting marginalized communities.',
      linkedin: 'https://linkedin.com/in/sajita-poudel-1b88bb335',
      email: 'sajita@karunalayanepal.org'
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
              <h1 className="section-title text-4xl md:text-5xl">Our Team</h1>
              <p className="section-description mx-auto">
                Meet the dedicated individuals who guide our organization with their expertise, passion, and vision for a better world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="glass overflow-hidden hover-lift"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-medium">{member.name}</h3>
                      <p className="text-brand-600 mb-3">{member.role}</p>
                      <p className="text-foreground/80 mb-4 text-sm">{member.bio}</p>
                      <div className="flex space-x-3">
                        <a 
                          href={`mailto:${member.email}`} 
                          className="p-2 rounded-full bg-secondary hover:bg-brand-100 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-5 w-5 text-brand-600" />
                        </a>
                        <a 
                          href={member.linkedin} 
                          className="p-2 rounded-full bg-secondary hover:bg-brand-100 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="h-5 w-5 text-brand-600" />
                        </a>
                      </div>
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

export default Team;
