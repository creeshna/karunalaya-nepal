
import React from 'react';
import { Check, Leaf } from 'lucide-react';

const DonationInfo: React.FC = () => {
  return (
    <div className="glass p-8 rounded-2xl">
      <div className="flex items-center justify-center mb-6">
        <Leaf className="h-12 w-12 text-brand-500" />
      </div>
      <h2 className="text-2xl font-medium text-center mb-4">Why Your Support Matters</h2>
      <p className="text-foreground/80 mb-6">
        Every contribution helps us continue our critical work for animal welfare, human rights, and environmental protection. Your generosity enables us to:
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <Check className="h-5 w-5 text-brand-500 mr-2 mt-0.5" />
          <p>Protect endangered species and their habitats</p>
        </div>
        <div className="flex items-start">
          <Check className="h-5 w-5 text-brand-500 mr-2 mt-0.5" />
          <p>Provide clean water to vulnerable communities</p>
        </div>
        <div className="flex items-start">
          <Check className="h-5 w-5 text-brand-500 mr-2 mt-0.5" />
          <p>Advocate for the rights of marginalized groups</p>
        </div>
        <div className="flex items-start">
          <Check className="h-5 w-5 text-brand-500 mr-2 mt-0.5" />
          <p>Restore damaged ecosystems through reforestation</p>
        </div>
        <div className="flex items-start">
          <Check className="h-5 w-5 text-brand-500 mr-2 mt-0.5" />
          <p>Educate communities about sustainable practices</p>
        </div>
      </div>
      
      <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 mt-6">
        <p className="text-sm italic text-foreground/80">
          "We make a living by what we get, but we make a life by what we give." - Winston Churchill
        </p>
      </div>
    </div>
  );
};

export default DonationInfo;
