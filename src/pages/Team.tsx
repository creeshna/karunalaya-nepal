import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { Mail, Linkedin } from 'lucide-react';

const Team = () => {
  const boardMembers = [
    {
      name: 'Mr. Ishwari Prasad Neure',
      role: 'Founder',
      bio: 'Ishwari Prasad Neure is a dedicated human rights activist, environmental advocate, and social change leader with a background in Social Work, Business Science, and Rural Development. Actively involved with Amnesty International since 2021, Ishwari has been at the forefront of human rights education, youth empowerment, and grassroots advocacy. As the Lead of Project CAP, Bharatpur, under the Plastic-Free Rivers and Seas for South Asia (PLEASE) initiative, Ishwari is committed to reducing plastic pollution through policy advocacy, community engagement and strategic waste management solutions. Passionate about animal welfare and ethical living, Ishwari actively promotes plant-based lifestyles and has contributed to policies against live animal transport.',
      linkedin: '#',
      email: 'ishwari@karunalayanepal.org'
    },
    {
      name: 'Ms. Sudha Timalshena',
      role: 'Co-Founder',
      bio: 'Sudha Timlshena is a dedicated environmentalist and animal rights activist committed to sustainability and social justice. She holds a BSc. Bachelor\'s degree in Environmental Science and is currently pursuing an MSc. in Environmental Science. Actively engaged with multiple non-profit organizations, including Better Chitwan, Chitwan Animal Save, and Animal Rights Club, Sudha has led impactful initiatives such as a scholarship program supporting 100 marginalized community students. As the owner of Central Nepal, the first vegan café in Chitwan, Sudha integrates environmental sustainability into daily life by promoting plant-based living and eco-friendly practices.',
      linkedin: 'https://linkedin.com/in/sudha-timalshena-525149266',
      email: 'sudha@karunalayanepal.org'
    },
    {
      name: 'Ms. Aasna Sapkota',
      role: 'Co-Founder',
      bio: 'Aasna Sapkota is a passionate advocate for inclusive education and the empowerment of children with disabilities. Holding a Bachelor\'s degree in Social Work and a Master\'s in Rural Development, she has developed a deep understanding of the challenges faced by marginalized populations. Since January 15, 2023, Aasna has been working with the National Federation of the Deaf, Nepal, on an inclusive education project for children with disabilities aged 4 to 17. Her role focuses on home-based education services and the development of Individual Education Plans (IEPs) tailored to each child\'s unique needs.',
      linkedin: 'https://linkedin.com/in/aasna-sapkota-236a56325',
      email: 'aasna@karunalayanepal.org'
    },
    {
      name: 'Ms. Sajita Poudel',
      role: 'Co-Founder',
      bio: 'Sajita Poudel is a passionate advocate for social change and the empowerment of individuals with disabilities. Born with a disability herself, she has firsthand experience of the challenges faced by marginalized communities and has dedicated her life to creating a more inclusive society. She holds a Bachelor\'s degree in Humanities and Social Sciences (2068 B.S.) and is currently pursuing her Master\'s degree in Bharatpur, Nepal. From 2020 to 2021, she served as the Coordinator of Better Chitwan, playing a pivotal role in initiatives supporting marginalized communities.',
      linkedin: 'https://linkedin.com/in/sajita-poudel-1b88bb335',
      email: 'sajita@karunalayanepal.org'
    },
    {
      name: 'Anushka Shah',
      role: 'Co-Founder',
      bio: 'Anushka Shah is a dedicated advocate for community health, animal welfare and social justice blending expertise in dental care with a passion for grassroots activism. Holding a diploma in Dental Science and currently pursuing a Bachelor\'s degree in Social Work, Anushka integrates clinical knowledge with community service, focusing on oral health awareness programs for underserved communities. A strong proponent of animal welfare, Anushka leads a rescue and rehabilitation program for stray animals that also promotes cruelty-free policies. At Karunalaya Nepal, Anushka plays a vital role in driving inclusive empowerment, ensuring that health, social justice, and animal rights remain at the core of the organization\'s mission.',
      linkedin: '#',
      email: 'anushka@karunalayanepal.org'
    },
    {
      name: 'Mr. Suvarna Ghimire',
      role: 'Board Member',
      bio: 'Suvarna Ghimire is a passionate environmental activist, researcher, and youth leader dedicated to sustainability, climate advocacy, and community empowerment. Holding a Bachelor\'s degree in Environmental Science, Suvarna has worked extensively on waste management, pollution control, and environmental policy development. As a River Campaigner for a WWF Nepal-funded program, he actively advocates for clean rivers and water conservation. His experience includes leading waste management training programs, conducting environmental impact assessments, and engaging in research on solid waste management and disaster risk reduction. Suvarna has been actively involved in various organizations, including Better Chitwan, Creasion Nepal, and the Leo Club of Chitwan Mount Everest, where he has coordinated youth empowerment programs, advocacy campaigns, and policy discussions on climate resilience. He was also part of the Save Narayani movement, which successfully won a Supreme Court case for better waste management in Bharatpur. Committed to scientific research and policy reform, Suvarna continues to bridge environmental science and community action, striving for a cleaner and more sustainable future.',
      linkedin: '#',
      email: 'suvarna@karunalayanepal.org'
    },
    {
      name: 'Mr. Kalyan Shrestha',
      role: 'Board Member',
      bio: 'Kalyan Shrestha is a dedicated animal rights advocate and community organizer, committed to raising awareness about animal cruelty and promoting veganism. As an Organizer at Chitwan Animal Save, a chapter of The Save Movement, Kalyan leads initiatives focused on educating the public about the ethical treatment of animals and encouraging compassionate lifestyle choices. His work involves organizing vigils, outreach programs, and community events to highlight the realities of animal agriculture and advocate for a more humane world.',
      linkedin: 'https://www.linkedin.com/in/kalyan-shrestha-319b9318a/',
      email: 'kalyan@karunalayanepal.org'
    },
    {
      name: 'Mr. Surajan Shrestha',
      role: 'Board Member',
      bio: 'Surajan Shrestha is a passionate animal rights advocate and community leader dedicated to creating awareness about animal welfare issues. As the founder of Animal Rights Club, he has organized numerous campaigns and educational initiatives to promote the ethical treatment of animals and plant-based lifestyle choices. Through his work, Surajan has built strong partnerships with local and international organizations, creating a powerful network for animal advocacy in Nepal.',
      linkedin: 'https://www.linkedin.com/in/surajan-shrestha-bb65b2110/',
      email: 'surajan@karunalayanepal.org'
    },
  ];
  
  const members = [];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="section-title text-4xl md:text-5xl">Our Team</h1>
              <p className="section-description mx-auto">
                Meet the dedicated individuals who guide our organization with their expertise, passion, and vision for a better world.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">Board Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {boardMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="glass overflow-hidden hover-lift p-6"
                  >
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-brand-600 mb-3">{member.role}</p>
                    <p className="text-foreground/80 mb-4 text-sm">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a 
                        href={`mailto:${member.email}`} 
                        className="p-2 rounded-full bg-secondary hover:bg-brand-100 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-5 w-5 text-blue-500" />
                      </a>
                      <a 
                        href={member.linkedin} 
                        className="p-2 rounded-full bg-secondary hover:bg-brand-100 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {members.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-8 text-center">Members</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {members.map((member, index) => (
                    <div 
                      key={index} 
                      className="glass overflow-hidden hover-lift p-6"
                    >
                      <h3 className="text-xl font-medium">{member.name}</h3>
                      <p className="text-brand-600 mb-3">{member.role}</p>
                      <p className="text-foreground/80 mb-4 text-sm">{member.bio}</p>
                      <div className="flex space-x-3">
                        <a 
                          href={`mailto:${member.email}`} 
                          className="p-2 rounded-full bg-secondary hover:bg-brand-100 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-5 w-5 text-blue-500" />
                        </a>
                        <a 
                          href={member.linkedin} 
                          className="p-2 rounded-full bg-secondary hover:bg-brand-100 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Team;
