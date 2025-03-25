
import React from 'react';
import { 
  Scale, 
  PawPrint, 
  Leaf, 
  Accessibility, 
  Users, 
  Heart
} from 'lucide-react';

interface DonationCausesProps {
  selectedCause: string;
  onSelectCause: (cause: string) => void;
}

const DonationCauses: React.FC<DonationCausesProps> = ({ selectedCause, onSelectCause }) => {
  const causes = [
    {
      id: 'human',
      title: 'Human Rights',
      icon: Scale,
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      id: 'animal',
      title: 'Animal Welfare',
      icon: PawPrint,
      color: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      id: 'environment',
      title: 'Environmental Conservation',
      icon: Leaf,
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 'disability',
      title: 'Disability Rights',
      icon: Accessibility,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'women',
      title: "Women's Empowerment",
      icon: Users,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 'lgbtqia',
      title: 'LGBTQIA+ Empowerment',
      icon: Heart,
      color: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
  ];

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-3">Select a cause to support</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {causes.map((cause) => (
          <button 
            key={cause.id}
            className={`p-3 rounded-lg flex flex-col items-center text-center transition-colors ${
              selectedCause === cause.id 
                ? 'bg-brand-100 border-2 border-brand-500' 
                : `${cause.color} border border-${cause.color}`
            }`}
            onClick={() => onSelectCause(cause.id)}
          >
            <cause.icon className={`h-5 w-5 ${cause.iconColor} mb-1`} />
            <span className="text-sm">{cause.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DonationCauses;
