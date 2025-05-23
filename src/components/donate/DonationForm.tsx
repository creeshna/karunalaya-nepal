
import React, { useState, useEffect } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';
import CurrencyConverter from './CurrencyConverter';
import DonationCauses from './DonationCauses';

interface DonationFormProps {
  amount: number | '';
  donationType: string;
  onAmountChange: (amount: number | '') => void;
  onCurrencyChange?: (currency: string) => void;
  onCauseChange?: (cause: string) => void;
  currency?: string;
}

const DonationForm: React.FC<DonationFormProps> = ({ 
  amount, 
  donationType, 
  onAmountChange,
  onCurrencyChange,
  onCauseChange,
  currency = 'USD'
}) => {
  const [localCurrency, setLocalCurrency] = useState<string>(currency);
  const [cause, setCause] = useState<string>('animal');
  
  const predefinedAmountsUSD = [5, 10, 25, 50, 100];
  const predefinedAmountsNPR = [50, 100, 250, 500, 1000];
  
  // Update parent component when currency changes locally
  useEffect(() => {
    if (onCurrencyChange) {
      onCurrencyChange(localCurrency);
    }
  }, [localCurrency, onCurrencyChange]);
  
  // Update parent component when cause changes
  useEffect(() => {
    if (onCauseChange) {
      onCauseChange(cause);
    }
  }, [cause, onCauseChange]);
  
  const handleCurrencyConversion = (newAmount: number, newCurrency: string) => {
    setLocalCurrency(newCurrency);
    // If needed, adjust the amount based on currency here
  };

  const handleCauseChange = (newCause: string) => {
    setCause(newCause);
  };

  const getPredefinedAmounts = () => {
    return localCurrency === 'USD' ? predefinedAmountsUSD : predefinedAmountsNPR;
  };

  return (
    <div className="glass p-8 rounded-2xl mb-8">
      <h2 className="text-2xl font-medium mb-6">Donation Details</h2>
      
      <CurrencyConverter 
        amount={amount} 
        onConvert={handleCurrencyConversion} 
        currency={localCurrency}
      />
      
      <div className="mb-6">
        <h3 className="font-medium mb-3">Select an amount</h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {getPredefinedAmounts().map((value) => (
            <button 
              key={value} 
              className={`py-2 px-4 rounded-lg transition-colors ${
                amount === value 
                  ? 'bg-brand-500 text-white' 
                  : 'border border-border hover:bg-secondary'
              }`}
              onClick={() => onAmountChange(value)}
            >
              {localCurrency === 'USD' ? '$' : 'रू'}{value}
            </button>
          ))}
        </div>
        
        <div className="mb-4">
          <label htmlFor="custom-amount" className="block text-sm text-foreground/70 mb-1">
            Or enter a custom amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">
              {localCurrency === 'USD' ? '$' : 'रू'}
            </span>
            <input 
              type="number" 
              id="custom-amount" 
              className="w-full py-2 px-6 border border-border rounded-lg"
              placeholder="Other amount"
              value={amount === '' ? '' : amount}
              onChange={(e) => {
                const value = e.target.value === '' ? '' : Number(e.target.value);
                onAmountChange(value);
              }}
              min="1"
            />
          </div>
        </div>
      </div>
      
      <DonationCauses
        selectedCause={cause}
        onSelectCause={handleCauseChange}
      />
      
      <button 
        className="w-full btn btn-primary"
        disabled={amount === ''}
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default DonationForm;
