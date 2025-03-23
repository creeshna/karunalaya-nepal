
import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Check, ChevronRight } from 'lucide-react';

const DonateSection = () => {
  const highlights = [
    'Support wildlife conservation initiatives',
    'Fund clean water projects in vulnerable communities',
    'Enable reforestation efforts in damaged ecosystems',
    'Promote human rights education and advocacy',
    'Assist in animal rescue and rehabilitation',
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-50 opacity-50 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-100 to-transparent opacity-60 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass p-8 md:p-12 rounded-3xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <HeartHandshake className="h-8 w-8 text-brand-500" />
              </div>
              <h2 className="text-3xl font-medium mb-4">Make a Difference Today</h2>
              <p className="text-foreground/80 mb-6">
                Your donation helps us continue our vital work protecting wildlife, securing human rights, and preserving our natural environment for future generations.
              </p>
              
              <ul className="space-y-3 mb-8">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/donate" className="btn btn-primary">
                <span>Donate Now</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Make a One-Time Donation</h3>
                
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[5, 10, 25].map((amount) => (
                    <button 
                      key={amount} 
                      className="py-2 px-4 border border-border rounded-lg hover:bg-brand-50 transition-colors"
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="custom-amount" className="block text-sm text-foreground/70 mb-1">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">$</span>
                    <input 
                      type="text" 
                      id="custom-amount" 
                      className="w-full py-2 px-6 border border-border rounded-lg"
                      placeholder="Other amount"
                    />
                  </div>
                </div>
                
                <Link to="/donate" className="w-full btn btn-primary">
                  Continue
                </Link>
                
                <div className="text-center mt-4 text-sm text-foreground/60">
                  <p>100% of your donation goes to our cause</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-brand-100 rounded-2xl p-4 shadow-sm border border-brand-200 hidden md:block">
                <p className="text-sm italic text-foreground/80">
                  "Every dollar counts in our mission to protect our planet's most vulnerable."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
