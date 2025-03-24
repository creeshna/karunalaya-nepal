
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { Heart, CalendarClock } from 'lucide-react';
import DonationForm from '../components/donate/DonationForm';
import PaymentForm from '../components/donate/PaymentForm';
import DonationInfo from '../components/donate/DonationInfo';

const Donate = () => {
  const [amount, setAmount] = useState<number | ''>('');
  const [donationType, setDonationType] = useState('one-time');
  const [showForm, setShowForm] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [cause, setCause] = useState('general');

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
                  
                  <DonationForm 
                    amount={amount} 
                    donationType={donationType}
                    onAmountChange={setAmount}
                  />
                </div>
              </div>
              
              {amount !== '' ? (
                <PaymentForm 
                  amount={amount}
                  donationType={donationType}
                  currency={currency}
                  cause={cause}
                />
              ) : (
                <DonationInfo />
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
