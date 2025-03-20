
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
                <h1 className="section-title text-4xl md:text-5xl">Our Mission & Vision</h1>
              </div>
              
              <div className="prose prose-lg mx-auto">
                <p className="lead text-xl text-foreground/80">
                  EcoAlliance unites passionate advocates to create lasting solutions for animal welfare, human rights, and environmental sustainability through collaborative action.
                </p>
                
                <h2>Our Story</h2>
                <p>
                  EcoAlliance emerged in 2008 when a diverse group of environmental scientists, human rights advocates, and animal welfare experts recognized the need for an integrated approach to global challenges. What began as community-based initiatives has evolved into an international organization with operations spanning five continents and over 20 countries.
                </p>
                
                <p>
                  Throughout our journey, we've remained committed to the fundamental principle that the wellbeing of our planet requires harmony between all its inhabitants—human and non-human alike. Our holistic approach addresses the interconnected nature of social justice, conservation, and ethical treatment of animals.
                </p>
                
                <h2>Our Mission</h2>
                <p>
                  To champion the interconnected causes of animal welfare, human rights, and environmental protection through evidence-based programs, local partnerships, and policy advocacy that create sustainable, positive change for all living beings.
                </p>
                
                <h2>Our Vision</h2>
                <p>
                  A world where ecosystems flourish, animals are treated with compassion, and human communities thrive in balance with nature, supported by just systems and sustainable practices.
                </p>
                
                <h2>Our Values</h2>
                <ul>
                  <li>
                    <strong>Compassion:</strong> We act with empathy and kindness toward all living beings.
                  </li>
                  <li>
                    <strong>Integrity:</strong> We uphold the highest ethical standards in all our work.
                  </li>
                  <li>
                    <strong>Collaboration:</strong> We believe in the power of partnership to create meaningful change.
                  </li>
                  <li>
                    <strong>Innovation:</strong> We seek creative solutions to complex problems.
                  </li>
                  <li>
                    <strong>Respect:</strong> We honor the dignity and rights of all people and animals.
                  </li>
                </ul>
                
                <h2>Our Approach</h2>
                <p>
                  EcoAlliance employs a multifaceted strategy to address complex global challenges:
                </p>
                
                <ol>
                  <li>
                    <strong>Community Empowerment:</strong> We work alongside local communities to develop sustainable solutions that respect cultural contexts while advancing universal rights.
                  </li>
                  <li>
                    <strong>Education & Awareness:</strong> We create accessible resources that inspire action and foster a deeper understanding of the connections between human, animal, and environmental wellbeing.
                  </li>
                  <li>
                    <strong>Policy Advocacy:</strong> We collaborate with governments and international bodies to strengthen legal frameworks that protect vulnerable species, ecosystems, and communities.
                  </li>
                  <li>
                    <strong>Innovative Research:</strong> We support pioneering studies that bridge traditional disciplinary boundaries and develop integrated solutions for our most pressing challenges.
                  </li>
                </ol>
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
