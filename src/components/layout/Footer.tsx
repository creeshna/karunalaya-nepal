
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Globe,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Karunalaya Nepal</h3>
            <p className="text-muted-foreground">(करुणालय नेपाल)</p>
            <p className="text-muted-foreground">
              Together for lives, rights and nature. We are dedicated to creating a better world for all living beings.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/karunalayanepal/" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-[#C13584] transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/karunalayanepal" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:text-[#0077B5] transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-muted-foreground hover:text-brand-500 transition">About Us</Link>
              <Link to="/working-areas" className="text-muted-foreground hover:text-brand-500 transition">Working Areas</Link>
              <Link to="/activities" className="text-muted-foreground hover:text-brand-500 transition">Activities</Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-brand-500 transition">Gallery</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get Involved</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/team" className="text-muted-foreground hover:text-brand-500 transition">Our Team</Link>
              <Link to="/donate" className="text-muted-foreground hover:text-brand-500 transition">Donate</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-brand-500 transition">Blog</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-brand-500 transition">Contact Us</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-brand-500 transition">Volunteer</Link>
              <Link to="/" className="text-muted-foreground hover:text-brand-500 transition">Newsletter</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#FF4136] mr-3 mt-0.5" />
                <p className="text-muted-foreground">
                  Bharatpur-1, Chitwan, Nepal
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#2ECC40] mr-3" />
                <a href="tel:+9779855078721" className="text-muted-foreground hover:text-brand-500 transition">
                  056-593021, 9855078721
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#0074D9] mr-3" />
                <a href="mailto:Info@karunalayanepal.org" className="text-muted-foreground hover:text-brand-500 transition">
                  Info@karunalayanepal.org
                </a>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-[#39CCCC] mr-3" />
                <a href="https://www.karunalayanepal.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-500 transition">
                  www.karunalayanepal.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Karunalaya Nepal. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <p className="text-muted-foreground text-sm flex items-center">
                Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> for the planet
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
