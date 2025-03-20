
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">EcoAlliance</h3>
            <p className="text-muted-foreground">
              Together for lives, rights and nature. We are dedicated to creating a better world for all living beings.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-brand-500 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-500 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-brand-500 transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-muted-foreground hover:text-brand-500 transition">About Us</Link>
              <Link to="/board" className="text-muted-foreground hover:text-brand-500 transition">Board of Directors</Link>
              <Link to="/working-areas" className="text-muted-foreground hover:text-brand-500 transition">Working Areas</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-brand-500 transition">Blog</Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-brand-500 transition">Gallery</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get Involved</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/donate" className="text-muted-foreground hover:text-brand-500 transition">Donate</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-brand-500 transition">Contact Us</Link>
              <a href="#" className="text-muted-foreground hover:text-brand-500 transition">Volunteer</a>
              <a href="#" className="text-muted-foreground hover:text-brand-500 transition">Campaigns</a>
              <a href="#" className="text-muted-foreground hover:text-brand-500 transition">Newsletter</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-500 mr-3 mt-0.5" />
                <p className="text-muted-foreground">
                  123 Nature Street, Green City, EC012345, Earth
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-500 mr-3" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-brand-500 transition">
                  +123 456 7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-500 mr-3" />
                <a href="mailto:info@ecoalliance.org" className="text-muted-foreground hover:text-brand-500 transition">
                  info@ecoalliance.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} EcoAlliance. All rights reserved.
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
