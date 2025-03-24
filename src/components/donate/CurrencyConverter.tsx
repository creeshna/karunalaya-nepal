
import React, { useState, useEffect } from 'react';
import { useToast } from "../../hooks/use-toast";

interface CurrencyConverterProps {
  amount: number | '';
  onConvert: (amount: number, currency: string) => void;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ amount, onConvert }) => {
  const [currency, setCurrency] = useState<string>('USD');
  const [exchangeRate, setExchangeRate] = useState<number>(130); // Default approximate rate
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    // This would normally fetch the latest exchange rate
    // For simplicity and reliability, we'll use a fixed rate with a simulated fetch
    const fetchExchangeRate = async () => {
      setIsLoading(true);
      try {
        // Simulate API call - in production, you would use a real forex API
        await new Promise(resolve => setTimeout(resolve, 500));
        setExchangeRate(132.5); // Simulated current rate
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "Failed to fetch exchange rate",
          description: "Using default exchange rate.",
          variant: "destructive",
        });
      }
    };

    fetchExchangeRate();
  }, [toast]);

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    if (amount !== '') {
      onConvert(Number(amount), newCurrency);
    }
  };

  // Convert between currencies
  const getConvertedAmount = (): string => {
    if (amount === '') return '';
    
    if (currency === 'USD') {
      return `NPR ${(Number(amount) * exchangeRate).toFixed(2)}`;
    } else {
      return `USD ${(Number(amount) / exchangeRate).toFixed(2)}`;
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm text-foreground/70">
          Currency
        </label>
        <span className="text-xs text-foreground/60">
          {isLoading ? 'Updating rate...' : `1 USD ≈ ${exchangeRate.toFixed(2)} NPR`}
        </span>
      </div>
      
      <div className="flex gap-3 mb-2">
        <button
          className={`flex-1 py-2 rounded-lg transition-colors ${
            currency === 'USD' 
              ? 'bg-brand-500 text-white' 
              : 'border border-border hover:bg-secondary'
          }`}
          onClick={() => handleCurrencyChange('USD')}
        >
          USD ($)
        </button>
        <button
          className={`flex-1 py-2 rounded-lg transition-colors ${
            currency === 'NPR' 
              ? 'bg-brand-500 text-white' 
              : 'border border-border hover:bg-secondary'
          }`}
          onClick={() => handleCurrencyChange('NPR')}
        >
          NPR (रू)
        </button>
      </div>
      
      {amount !== '' && (
        <div className="text-sm text-foreground/70 mt-1">
          Equivalent: {getConvertedAmount()}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
