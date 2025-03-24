
import React, { useState } from 'react';
import { CreditCard, DollarSign, CreditCard as CardIcon, Building, Smartphone } from 'lucide-react';

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
  const [paymentMethod, setPaymentMethod] = useState<string>('card');

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
      
      <div className="mb-6">
        <h3 className="font-medium mb-3">Select Payment Method</h3>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button 
            className={`py-3 px-4 rounded-lg transition-colors flex flex-col items-center ${
              paymentMethod === 'card' 
                ? 'bg-brand-500 text-white' 
                : 'border border-border hover:bg-secondary'
            }`}
            onClick={() => setPaymentMethod('card')}
          >
            <CardIcon className="h-5 w-5 mb-1" />
            <span className="text-sm">Card</span>
          </button>
          <button 
            className={`py-3 px-4 rounded-lg transition-colors flex flex-col items-center ${
              paymentMethod === 'esewa' 
                ? 'bg-brand-500 text-white' 
                : 'border border-border hover:bg-secondary'
            }`}
            onClick={() => setPaymentMethod('esewa')}
          >
            <Smartphone className="h-5 w-5 mb-1" />
            <span className="text-sm">eSewa</span>
          </button>
          <button 
            className={`py-3 px-4 rounded-lg transition-colors flex flex-col items-center ${
              paymentMethod === 'bank' 
                ? 'bg-brand-500 text-white' 
                : 'border border-border hover:bg-secondary'
            }`}
            onClick={() => setPaymentMethod('bank')}
          >
            <Building className="h-5 w-5 mb-1" />
            <span className="text-sm">Bank Transfer</span>
          </button>
        </div>
      </div>
      
      {paymentMethod === 'card' && (
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
          
          <button type="submit" className="w-full btn btn-primary flex items-center justify-center mt-6">
            <DollarSign className="h-4 w-4 mr-2" />
            <span>{donationType === 'monthly' ? 'Start Monthly Donation' : 'Complete Donation'}</span>
          </button>
        </form>
      )}
      
      {paymentMethod === 'esewa' && (
        <div className="space-y-4">
          <p className="text-foreground/80 mb-4">
            To donate using eSewa, please fill your information below. You'll be redirected to eSewa to complete your payment.
          </p>
          
          <div>
            <label htmlFor="esewa-name" className="block text-sm text-foreground/70 mb-1">
              Full Name
            </label>
            <input 
              type="text" 
              id="esewa-name" 
              className="w-full py-2 px-3 border border-border rounded-lg"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="esewa-email" className="block text-sm text-foreground/70 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="esewa-email" 
              className="w-full py-2 px-3 border border-border rounded-lg"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="esewa-phone" className="block text-sm text-foreground/70 mb-1">
              Phone Number
            </label>
            <input 
              type="tel" 
              id="esewa-phone" 
              className="w-full py-2 px-3 border border-border rounded-lg"
              placeholder="98XXXXXXXX"
            />
          </div>
          
          <button className="w-full btn btn-primary flex items-center justify-center mt-6 bg-[#60BB46] hover:bg-[#4d9939]">
            <span>Proceed to eSewa</span>
          </button>
        </div>
      )}
      
      {paymentMethod === 'bank' && (
        <div className="space-y-4">
          <div className="bg-secondary p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Bank Transfer Details</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-foreground/70">Bank Name:</span>
                <span className="font-medium">ABC Bank Ltd</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Account Number:</span>
                <span className="font-medium">12345677980</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Account Name:</span>
                <span className="font-medium">Karunalaya Nepal</span>
              </div>
            </div>
          </div>
          
          <p className="text-foreground/80 text-sm">
            Please transfer the amount to the account details above. Once you've completed the transfer, fill out the form below so we can track your donation.
          </p>
          
          <div>
            <label htmlFor="bank-name" className="block text-sm text-foreground/70 mb-1">
              Full Name
            </label>
            <input 
              type="text" 
              id="bank-name" 
              className="w-full py-2 px-3 border border-border rounded-lg"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="bank-email" className="block text-sm text-foreground/70 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="bank-email" 
              className="w-full py-2 px-3 border border-border rounded-lg"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="transaction-id" className="block text-sm text-foreground/70 mb-1">
              Transaction Reference (Optional)
            </label>
            <input 
              type="text" 
              id="transaction-id" 
              className="w-full py-2 px-3 border border-border rounded-lg"
              placeholder="Enter transaction ID or reference"
            />
          </div>
          
          <button className="w-full btn btn-primary flex items-center justify-center mt-6">
            <span>Confirm Bank Transfer</span>
          </button>
        </div>
      )}
      
      <div className="pt-6 mt-6 border-t border-border">
        <div className="flex justify-between mb-2">
          <span>Donation Amount:</span>
          <span className="font-medium">{formatCurrency(amount)}</span>
        </div>
        <div className="flex justify-between text-sm text-foreground/70 mb-2">
          <span>Currency:</span>
          <span>{currency}</span>
        </div>
        <div className="flex justify-between text-sm text-foreground/70 mb-2">
          <span>Donation Type:</span>
          <span>{donationType === 'monthly' ? 'Monthly' : 'One-time'}</span>
        </div>
        <div className="flex justify-between text-sm text-foreground/70 mb-2">
          <span>Supporting:</span>
          <span>{getCauseDisplay(cause)}</span>
        </div>
        
        <p className="text-center mt-4 text-sm text-foreground/60">
          Your donation is secure and encrypted.
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
