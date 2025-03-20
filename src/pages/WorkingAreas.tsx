
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { 
  Leaf, 
  Shield, 
  Users, 
  TreePine, 
  Droplets, 
  PawPrint, 
  Building2, 
  HeartHandshake
} from 'lucide-react';

const WorkingAreas = () => {
  const areas = [
    {
      title: 'Wildlife Conservation',
      description: 'We work to protect endangered species and their habitats, combat wildlife trafficking, and promote coexistence between humans and wildlife.',
      icon: PawPrint,
      color: 'bg-amber-100',
      iconColor: 'text-amber-600',
      projects: [
        'Tiger conservation in Southeast Asia',
        'Marine wildlife protection in coastal regions',
        'Anti-poaching initiatives in protected areas'
      ]
    },
    {
      title: 'Human Rights',
      description: 'We advocate for the dignity, equality, and justice for all people, with a focus on communities affected by environmental degradation and resource exploitation.',
      icon: Users,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      projects: [
        'Indigenous land rights protection',
        'Environmental justice for vulnerable communities',
        'Access to clean water as a human right'
      ]
    },
    {
      title: 'Reforestation',
      description: 'We restore forests to combat climate change, prevent soil erosion, protect biodiversity, and support local livelihoods dependent on forest ecosystems.',
      icon: TreePine,
      color: 'bg-green-100',
      iconColor: 'text-green-600',
      projects: [
        'Amazon rainforest restoration',
        'Community-based agroforestry initiatives',
        'Urban reforestation programs'
      ]
    },
    {
      title: 'Clean Water',
      description: 'We work to ensure access to clean water for communities and ecosystems, addressing pollution, scarcity, and the sustainable management of water resources.',
      icon: Droplets,
      color: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      projects: [
        'Watershed protection and restoration',
        'Community water purification systems',
        'River cleanup and monitoring programs'
      ]
    },
    {
      title: 'Animal Welfare',
      description: 'We improve the lives of domesticated and wild animals through rescue and rehabilitation, policy advocacy, and educational programs promoting compassionate treatment.',
      icon: Shield,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
      projects: [
        'Animal rescue and rehabilitation centers',
        'Humane education programs',
        'Alternatives to animal testing advocacy'
      ]
    },
    {
      title: 'Sustainable Development',
      description: 'We promote ecological solutions for urban and rural communities, integrating environmental protection with economic development and social equity.',
      icon: Building2,
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      projects: [
        'Sustainable agriculture and food systems',
        'Eco-friendly urban planning',
        'Green energy initiatives for remote communities'
      ]
    },
    {
      title: 'Environmental Education',
      description: 'We spread awareness and knowledge about ecological issues, empowering individuals and communities to take action through informed decision-making.',
      icon: Leaf,
      color: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      projects: [
        'School-based environmental curriculum',
        'Public awareness campaigns',
        'Training for environmental leaders'
      ]
    },
    {
      title: 'Community Support',
      description: 'We empower local communities to protect their environment and improve their well-being through participatory approaches and capacity building.',
      icon: HeartHandshake,
      color: 'bg-red-100',
      iconColor: 'text-red-600',
      projects: [
        'Community-based conservation initiatives',
        'Sustainable livelihood programs',
        'Local environmental stewardship training'
      ]
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="section-subtitle">What We Do</div>
              <h1 className="section-title text-4xl md:text-5xl">Our Working Areas</h1>
              <p className="section-description mx-auto">
                We focus on critical issues affecting our planet and its inhabitants, taking a holistic approach to create lasting positive change.
              </p>
            </div>
            
            <div className="space-y-16">
              {areas.map((area, index) => (
                <div key={index} className="glass p-8 rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                      <div className={`rounded-xl ${area.color} p-6 inline-flex`}>
                        <area.icon className={`h-12 w-12 ${area.iconColor}`} />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <h2 className="text-2xl font-medium mb-4">{area.title}</h2>
                      <p className="text-foreground/80 mb-6">{area.description}</p>
                      
                      <div className="mb-4">
                        <h3 className="font-medium mb-2">Current Projects</h3>
                        <ul className="list-disc pl-5 space-y-1 text-foreground/70">
                          {area.projects.map((project, idx) => (
                            <li key={idx}>{project}</li>
                          ))}
                        </ul>
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

export default WorkingAreas;
