
import React from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

interface PaymentFormProps {
  amount: number | '';
  donationType: string;
  currency: string;
  cause: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ 
  amount, 
  donationType, 
  currency = 'USD',
  cause = 'General'
}) => {
  const formatCurrency = (value: number | ''): string => {
    if (value === '') return '0';
    return currency === 'USD' ? `$${value}` : `रू${value}`;
  };
  
  const getCauseDisplay = (causeId: string): string => {
    const causes: Record<string, string> = {
      'lgbtqia': 'LGBTQIA+ Empowerment',
      'disability': 'Disability Rights',
      'women': "Women's Empowerment",
      'animal': 'Animal Welfare',
      'environment': 'Environmental Conservation',
      'human': 'Human Rights',
      'General': 'General Support'
    };
    
    return causes[causeId] || 'General Support';
  };

  return (
    <div className="glass p-8 rounded-2xl">
      <h2 className="text-2xl font-medium mb-6">Payment Information</h2>
      
      <form className="space-y-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-foreground/70 mb-1">
              Full Name
            </label>
            <input 
              type="text" 
              id="name" 
              className="w-full py-2 px-3 border border-border rounded-lg"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm text-foreground/70 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full py-2 px-3 border border-border rounded-lg"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="card" className="block text-sm text-foreground/70 mb-1">
              Card Number
            </label>
            <div className="relative">
              <input 
                type="text" 
                id="card" 
                className="w-full py-2 px-3 border border-border rounded-lg"
                placeholder="1234 5678 9012 3456"
              />
              <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 h-5 w-5" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm text-foreground/70 mb-1">
                Expiry Date
              </label>
              <input 
                type="text" 
                id="expiry" 
                className="w-full py-2 px-3 border border-border rounded-lg"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm text-foreground/70 mb-1">
                CVC
              </label>
              <input 
                type="text" 
                id="cvc" 
                className="w-full py-2 px-3 border border-border rounded-lg"
                placeholder="123"
              />
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border">
          <div className="flex justify-between mb-2">
            <span>Donation Amount:</span>
            <span className="font-medium">{formatCurrency(amount)}</span>
          </div>
          <div className="flex justify-between text-sm text-foreground/70 mb-2">
            <span>Currency:</span>
            <span>{currency}</span>
          </div>
          <div className="flex justify-between text-sm text-foreground/70 mb-4">
            <span>Donation Type:</span>
            <span>{donationType === 'monthly' ? 'Monthly' : 'One-time'}</span>
          </div>
          <div className="flex justify-between text-sm text-foreground/70 mb-6">
            <span>Supporting:</span>
            <span>{getCauseDisplay(cause)}</span>
          </div>
          
          <button type="submit" className="w-full btn btn-primary flex items-center justify-center">
            <DollarSign className="h-4 w-4 mr-2" />
            <span>{donationType === 'monthly' ? 'Start Monthly Donation' : 'Complete Donation'}</span>
          </button>
          
          <p className="text-center mt-4 text-sm text-foreground/60">
            Your donation is secure and encrypted.
          </p>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
