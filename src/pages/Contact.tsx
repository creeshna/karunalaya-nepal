
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { MapPin, Phone, Mail, Send, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

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
                          123 Nature Street<br />
                          Green City, EC012345<br />
                          Earth
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-brand-500 mr-3" />
                        <a href="tel:+1234567890" className="text-foreground/80 hover:text-brand-600 transition-colors">
                          +123 456 7890
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-brand-500 mr-3" />
                        <a href="mailto:info@ecoalliance.org" className="text-foreground/80 hover:text-brand-600 transition-colors">
                          info@ecoalliance.org
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
                          <p className="text-foreground/80">Monday - Friday:</p>
                          <p className="text-foreground/60">9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-brand-500 mr-3 mt-0.5" />
                        <div>
                          <p className="text-foreground/80">Saturday:</p>
                          <p className="text-foreground/60">10:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-brand-500 mr-3 mt-0.5" />
                        <div>
                          <p className="text-foreground/80">Sunday:</p>
                          <p className="text-foreground/60">Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl">
                    <h2 className="text-xl font-medium mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                      <a href="#" className="p-2 bg-secondary rounded-full text-foreground hover:text-brand-500 transition">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2 bg-secondary rounded-full text-foreground hover:text-brand-500 transition">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2 bg-secondary rounded-full text-foreground hover:text-brand-500 transition">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="p-2 bg-secondary rounded-full text-foreground hover:text-brand-500 transition">
                        <Youtube className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 glass p-8 rounded-2xl">
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
            </div>
            
            <div className="mt-12 max-w-6xl mx-auto">
              <div className="glass p-4 rounded-2xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1619726436174!5m2!1sen!2sus" 
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
