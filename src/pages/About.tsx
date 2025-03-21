
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="section-title text-4xl md:text-5xl">Karunalaya Nepal</h1>
                <p className="text-xl text-foreground/80 mt-4">(Compassionate Nepal): Fostering Compassion and Sustainability</p>
              </div>
              
              <div className="flex justify-center mb-12">
                <img 
                  src="/lovable-uploads/5cbf3ace-8ae0-4090-9b40-45846d73feb2.png" 
                  alt="Karunalaya Nepal Logo" 
                  className="h-48 w-auto"
                />
              </div>
              
              <div className="prose prose-lg mx-auto">
                <p className="lead text-xl text-foreground/80">
                  Karunalaya Nepal is a non-profit organization based in Bharatpur-1, Chitwan, Nepal, dedicated to creating a compassionate and sustainable future. Our mission is to foster harmony between humans, animals and nature by promoting ethical living, environmental conservation and social justice.
                </p>
                
                <h2 className="font-bold">Our Vision</h2>
                <p>
                  We envision a world where humans, animals and nature thrive together in harmony. Through advocacy, education, workshops and action, we work to reduce conflicts, foster compassion and promote sustainable practices for a brighter, more inclusive future.
                </p>
                
                <h2 className="font-bold">Our Mission</h2>
                <p>
                  Our mission extends to:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>LGBTQIA+ Empowerment:</strong> Supporting and advocating for the rights, dignity, and inclusion of LGBTQIA+ individuals.</li>
                  <li><strong>Disability Rights & Inclusion:</strong> Working to create accessible environments and inclusive communities.</li>
                  <li><strong>Women's Empowerment:</strong> Supporting women through education, economic opportunities, and advocacy.</li>
                  <li><strong>Animal Welfare:</strong> Protecting animals from suffering and promoting their wellbeing.</li>
                  <li><strong>Environmental Conservation:</strong> Protecting natural ecosystems and promoting sustainable practices.</li>
                  <li><strong>Human Rights:</strong> Advocating for the fundamental rights, dignity, and equal treatment of all people.</li>
                </ul>
                
                <p className="text-lg mt-8">
                  Together, we believe in the power of compassion to create a world where every being is valued and every voice is heard. Join us in building a future of "One Health, One Earth" Compassion in Action for All.
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
