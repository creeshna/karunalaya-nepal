
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { MapPin, Phone, Mail, Send, Clock, Globe, Instagram, Linkedin, UserPlus } from 'lucide-react';

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="section-subtitle">Get In Touch</div>
              <h1 className="section-title text-4xl md:text-5xl">Contact Us</h1>
              <p className="section-description mx-auto">
                Have questions or want to get involved? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div className="glass p-6 rounded-2xl">
                    <h2 className="text-xl font-medium mb-4">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-brand-500 mr-3 mt-0.5" />
                        <p className="text-foreground/80">
                          Bharatpur-1, Chitwan, Nepal
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-brand-500 mr-3" />
                        <a href="tel:+9779855078721" className="text-foreground/80 hover:text-brand-600 transition-colors">
                          056-593021, 9855078721
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-brand-500 mr-3" />
                        <a href="mailto:Info@karunalayanepal.org" className="text-foreground/80 hover:text-brand-600 transition-colors">
                          Info@karunalayanepal.org
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-brand-500 mr-3" />
                        <a href="https://www.karunalayanepal.org" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-brand-600 transition-colors">
                          www.karunalayanepal.org
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl">
                    <h2 className="text-xl font-medium mb-4">Office Hours</h2>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-brand-500 mr-3 mt-0.5" />
                        <div>
                          <p className="text-foreground/80">Sunday - Friday:</p>
                          <p className="text-foreground/60">10:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-brand-500 mr-3 mt-0.5" />
                        <div>
                          <p className="text-foreground/80">Saturday:</p>
                          <p className="text-foreground/60">Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl">
                    <h2 className="text-xl font-medium mb-4">Follow Us</h2>
                    <div className="space-y-3">
                      <a href="https://www.instagram.com/karunalayanepal/" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-brand-500 transition p-2 rounded-md hover:bg-background/50">
                        <Instagram className="h-5 w-5 mr-3" />
                        <span>Instagram</span>
                      </a>
                      <a href="https://www.linkedin.com/in/karunalayanepal" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-brand-500 transition p-2 rounded-md hover:bg-background/50">
                        <Linkedin className="h-5 w-5 mr-3" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="glass p-8 rounded-2xl mb-8">
                  <h2 className="text-2xl font-medium mb-6">Send us a message</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm text-foreground/70 mb-1">
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full py-2 px-3 border border-border rounded-lg bg-white/80"
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
                          className="w-full py-2 px-3 border border-border rounded-lg bg-white/80"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm text-foreground/70 mb-1">
                        Subject
                      </label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full py-2 px-3 border border-border rounded-lg bg-white/80"
                        placeholder="How can we help?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm text-foreground/70 mb-1">
                        Message
                      </label>
                      <textarea 
                        id="message" 
                        rows={6} 
                        className="w-full py-2 px-3 border border-border rounded-lg bg-white/80"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button type="submit" className="btn btn-primary flex items-center">
                        <Send className="h-4 w-4 mr-2" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="glass p-8 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <UserPlus className="h-6 w-6 text-brand-500 mr-3" />
                    <h2 className="text-2xl font-medium">Volunteer With Us</h2>
                  </div>
                  <p className="text-foreground/80 mb-6">
                    Want to get involved in our upcoming activities? We're always looking for passionate volunteers 
                    to help with our campaigns, events, and ongoing initiatives. Whether you have a few hours to 
                    spare or want to commit to regular volunteering, we'd love to have you join our team.
                  </p>
                  <div className="bg-secondary p-6 rounded-xl">
                    <h3 className="font-medium mb-3">Current Volunteer Opportunities:</h3>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <span className="text-brand-500 mr-2">•</span>
                        <span>Animal welfare and rescue assistance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-500 mr-2">•</span>
                        <span>Environmental conservation projects</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-500 mr-2">•</span>
                        <span>Community outreach and education</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-500 mr-2">•</span>
                        <span>Event organization and coordination</span>
                      </li>
                    </ul>
                    <p className="text-sm text-foreground/70 mb-4">
                      Please fill out our contact form above, mentioning your areas of interest and availability. 
                      Our volunteer coordinator will get back to you with more information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 max-w-6xl mx-auto">
              <div className="glass p-4 rounded-2xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d84.3914621609757!3d27.678676296871337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea845ac!2sBharatpur%2C%20Nepal!5e0!3m2!1sen!2sus!4v1620636142272!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
