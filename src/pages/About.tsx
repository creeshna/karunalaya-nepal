
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
                <div className="section-subtitle">About Us</div>
                <h1 className="section-title text-4xl md:text-5xl">Karunalaya Nepal</h1>
                <p className="text-xl text-foreground/80 mt-4">Fostering Compassion and Sustainability</p>
              </div>
              
              <div className="prose prose-lg mx-auto">
                <p className="lead text-xl text-foreground/80">
                  Karunalaya Nepal is a non-profit organization based in Bharatpur-1, Chitwan, Nepal, dedicated to creating a compassionate and sustainable future. Our mission is to foster harmony between humans, animals and nature by promoting ethical living, environmental conservation and social justice.
                </p>
                
                <h2 className="font-bold">Our Vision</h2>
                <p>
                  We envision a world where kindness, empathy and sustainable practices lead to a balanced coexistence between all living beings.
                </p>
                
                <h2 className="font-bold">Our Mission</h2>
                <ul>
                  <li>To promote the ethical treatment of animals and advocate for animal welfare.</li>
                  <li>To raise awareness about environmental conservation and sustainability.</li>
                  <li>To empower marginalized communities through education and social initiatives.</li>
                  <li>To encourage plant-based lifestyles for ethical, environmental and health benefits.</li>
                </ul>
                
                <h2 className="font-bold">Our Programs & Initiatives</h2>
                
                <h3 className="font-bold">1. Animal Welfare & Advocacy</h3>
                <p>
                  We work towards ending animal cruelty and promoting responsible pet ownership. Our initiatives include:
                </p>
                <ul>
                  <li>Rescuing and rehabilitating injured and abandoned animals.</li>
                  <li>Conducting awareness campaigns on animal rights and humane treatment.</li>
                  <li>Advocating for policies to protect animals from exploitation.</li>
                </ul>
                
                <h3 className="font-bold">2. Environmental Conservation</h3>
                <p>
                  Karunalaya Nepal actively participates in environmental protection programs, including:
                </p>
                <ul>
                  <li>Organizing clean-up drives to reduce pollution, particularly plastic waste.</li>
                  <li>Conducting tree-planting campaigns to restore green spaces.</li>
                  <li>Promoting sustainable agricultural practices and eco-friendly solutions.</li>
                </ul>
                
                <h3 className="font-bold">3. Human Rights & Social Justice</h3>
                <p>
                  We believe that compassion extends beyond animals and nature—it also includes human rights. Our focus areas include:
                </p>
                <ul>
                  <li>Advocating for gender equality and empowering women and non-binary individuals.</li>
                  <li>Conducting human rights education workshops in schools and communities.</li>
                  <li>Supporting marginalized communities through skill development programs.</li>
                </ul>
                
                <h3 className="font-bold">4. Plant-Based Lifestyle Promotion</h3>
                <p>
                  As part of our commitment to sustainability and ethical living, we encourage plant-based diets by:
                </p>
                <ul>
                  <li>Organizing food festivals and cooking workshops featuring plant-based meals.</li>
                  <li>Educating people on the benefits of plant-based eating for health, the environment and animals.</li>
                  <li>Partnering with local restaurants and businesses to increase plant-based food options.</li>
                </ul>
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
