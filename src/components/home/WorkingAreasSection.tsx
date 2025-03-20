
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Shield, 
  Users, 
  TreePine, 
  Droplets, 
  PawPrint, 
  Building2, 
  HeartHandshake,
  ArrowRight 
} from 'lucide-react';

const WorkingAreasSection = () => {
  const areas = [
    {
      title: 'Wildlife Conservation',
      description: 'Protecting endangered species and their habitats worldwide.',
      icon: PawPrint,
      color: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      title: 'Human Rights',
      description: 'Advocating for dignity, equality, and justice for all people.',
      icon: Users,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Reforestation',
      description: 'Restoring forests to combat climate change and protect biodiversity.',
      icon: TreePine,
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Clean Water',
      description: 'Ensuring access to clean water for communities and ecosystems.',
      icon: Droplets,
      color: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      title: 'Animal Welfare',
      description: 'Improving the lives of domesticated and wild animals.',
      icon: Shield,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Sustainable Development',
      description: 'Creating ecological solutions for urban and rural communities.',
      icon: Building2,
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      title: 'Environmental Education',
      description: 'Spreading awareness and knowledge about ecological issues.',
      icon: Leaf,
      color: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      title: 'Community Support',
      description: 'Empowering local communities to protect their environment.',
      icon: HeartHandshake,
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="section-subtitle">What We Do</div>
          <h2 className="section-title">Our Working Areas</h2>
          <p className="section-description mx-auto">
            We focus on critical issues affecting our planet and its inhabitants, taking a holistic approach to create lasting positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden hover-lift"
            >
              <div className={`p-6 h-full flex flex-col ${area.color} border border-${area.color}/50`}>
                <div className={`rounded-full w-12 h-12 flex items-center justify-center ${area.iconColor} bg-white mb-4`}>
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">{area.title}</h3>
                <p className="text-foreground/80 mb-4 flex-grow">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/working-areas" className="inline-flex items-center group">
            <span className="text-brand-600 font-medium">Learn more about our work</span>
            <ArrowRight className="ml-2 h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkingAreasSection;
