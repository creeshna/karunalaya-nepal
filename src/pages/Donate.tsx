
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { Check, CreditCard, Heart, DollarSign, Leaf, CalendarClock } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [donationType, setDonationType] = useState('one-time');
  const [showForm, setShowForm] = useState(false);
  
  const predefinedAmounts = [5, 10, 25, 50, 100];
  
  const impactExamples = [
    {
      amount: 5,
      description: 'Provide food for a rescued animal for a week'
    },
    {
      amount: 10,
      description: 'Support educational materials on animal rights'
    },
    {
      amount: 25,
      description: 'Fund community awareness programs'
    },
    {
      amount: 50,
      description: 'Support wildlife rehabilitation efforts'
    },
    {
      amount: 100,
      description: 'Fund advocacy campaigns to change policies'
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="section-subtitle">Support Our Cause</div>
              <h1 className="section-title text-4xl md:text-5xl">Donate</h1>
              <p className="section-description mx-auto">
                Your contribution helps us continue our vital work protecting wildlife, securing human rights, and preserving our natural environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <div className="glass p-8 rounded-2xl mb-8">
                  <h2 className="text-2xl font-medium mb-6">Choose Your Donation</h2>
                  
                  <div className="mb-6">
                    <div className="flex gap-4 mb-4">
                      <button
                        className={`flex-1 py-3 rounded-lg ${
                          donationType === 'one-time' 
                            ? 'bg-brand-500 text-white' 
                            : 'bg-secondary text-foreground'
                        }`}
                        onClick={() => setDonationType('one-time')}
                      >
                        <Heart className="h-5 w-5 mx-auto mb-1" />
                        <span>One-time</span>
                      </button>
                      <button
                        className={`flex-1 py-3 rounded-lg ${
                          donationType === 'monthly' 
                            ? 'bg-brand-500 text-white' 
                            : 'bg-secondary text-foreground'
                        }`}
                        onClick={() => setDonationType('monthly')}
                      >
                        <CalendarClock className="h-5 w-5 mx-auto mb-1" />
                        <span>Monthly</span>
                      </button>
                    </div>
                    <p className="text-sm text-foreground/70">
                      {donationType === 'monthly' 
                        ? 'Your monthly donation provides consistent support for our ongoing projects.'
                        : 'Your one-time gift makes an immediate impact on our work.'}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Select an amount</h3>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {predefinedAmounts.map((value) => (
                        <button 
                          key={value} 
                          className={`py-2 px-4 rounded-lg transition-colors ${
                            amount === value 
                              ? 'bg-brand-500 text-white' 
                              : 'border border-border hover:bg-secondary'
                          }`}
                          onClick={() => setAmount(value)}
                        >
                          ${value}
                        </button>
                      ))}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="custom-amount" className="block text-sm text-foreground/70 mb-1">
                        Or enter a custom amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">$</span>
                        <input 
                          type="number" 
                          id="custom-amount" 
                          className="w-full py-2 px-6 border border-border rounded-lg"
                          placeholder="Other amount"
                          value={amount}
                          onChange={(e) => {
                            const value = e.target.value === '' ? '' : Number(e.target.value);
                            setAmount(value);
                          }}
                          min="1"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    className="w-full btn btn-primary"
                    onClick={() => setShowForm(true)}
                    disabled={amount === ''}
                  >
                    Continue to Payment
                  </button>
                </div>
                
                <div className="glass p-8 rounded-2xl">
                  <h2 className="text-xl font-medium mb-4">Your Impact</h2>
                  <ul className="space-y-4">
                    {impactExamples.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-brand-500 mr-2 mt-0.5" />
                        <span><strong>${impact.amount}:</strong> {impact.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {showForm ? (
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
                      <div className="flex justify-between mb-4">
                        <span>Donation Amount:</span>
                        <span className="font-medium">${amount}</span>
                      </div>
                      <div className="flex justify-between text-sm text-foreground/70 mb-6">
                        <span>Donation Type:</span>
                        <span>{donationType === 'monthly' ? 'Monthly' : 'One-time'}</span>
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
              ) : (
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
              )}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Donate;
