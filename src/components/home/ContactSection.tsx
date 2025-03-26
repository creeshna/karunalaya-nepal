import React from 'react';
import { MapPin, Phone, Mail, Send, Globe, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Contact Information</h2>
                <img 
                  src="/lovable-uploads/5cbf3ace-8ae0-4090-9b40-45846d73feb2.png" 
                  alt="Karunalaya Nepal Logo" 
                  className="h-20 w-auto"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <p className="text-foreground/80">
                    Bharatpur, Chitwan, Nepal
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-500 mr-3" />
                  <a href="tel:+9779855078721" className="text-foreground/80 hover:text-brand-600 transition-colors">
                    056-593021, 9855078721
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <a href="mailto:Info@karunalayanepal.org" className="text-foreground/80 hover:text-brand-600 transition-colors">
                    Info@karunalayanepal.org
                  </a>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-cyan-500 mr-3" />
                  <a href="https://www.karunalayanepal.org" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-brand-600 transition-colors">
                    www.karunalayanepal.org
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Office Hours</h3>
              <table className="w-full text-foreground/80">
                <tbody>
                  <tr>
                    <td className="py-2">Sunday - Friday:</td>
                    <td className="py-2">10:00 AM - 5:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2">Saturday:</td>
                    <td className="py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/karunalayanepal/" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-[#E1306C] transition-colors">
                  <div className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-1 rounded-md mr-2">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/karunalayanepal" target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground/80 hover:text-[#0A66C2] transition-colors">
                  <div className="bg-[#0A66C2] p-1 rounded-md mr-2">
                    <Linkedin className="h-5 w-5 text-white" />
                  </div>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 glass p-6 rounded-2xl">
            <h3 className="text-xl font-medium mb-4">Send us a message</h3>
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
                  rows={5} 
                  className="w-full py-2 px-3 border border-border rounded-lg bg-white/80"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary flex items-center">
                <Send className="h-4 w-4 mr-2" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
