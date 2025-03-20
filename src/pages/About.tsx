
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
                  EcoAlliance is dedicated to protecting animal welfare, human rights, and the environment through collaborative action, education, and advocacy.
                </p>
                
                <h2>Our Story</h2>
                <p>
                  Founded in 2008, EcoAlliance began as a small group of passionate individuals committed to making a difference in their local community. What started as a grassroots movement has grown into a global organization with projects in over 15 countries.
                </p>
                
                <p>
                  Our journey has been guided by the belief that the wellbeing of animals, humans, and the environment are deeply interconnected. We recognize that sustainable solutions must address all three aspects to create lasting positive change.
                </p>
                
                <h2>Our Mission</h2>
                <p>
                  To protect and enhance the lives of animals, uphold human rights, and preserve the natural environment through innovative programs, community partnerships, and global advocacy.
                </p>
                
                <h2>Our Vision</h2>
                <p>
                  A world where all living beings thrive in healthy ecosystems, with their rights and dignity respected and protected.
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
                  EcoAlliance takes a holistic approach to addressing the interconnected challenges facing our planet:
                </p>
                
                <ol>
                  <li>
                    <strong>Direct Action:</strong> We implement hands-on projects that make an immediate difference.
                  </li>
                  <li>
                    <strong>Education:</strong> We raise awareness and provide resources to empower individuals and communities.
                  </li>
                  <li>
                    <strong>Advocacy:</strong> We work with policymakers to promote legal protections for animals, people, and the environment.
                  </li>
                  <li>
                    <strong>Research:</strong> We support scientific studies that advance understanding and inform best practices.
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
