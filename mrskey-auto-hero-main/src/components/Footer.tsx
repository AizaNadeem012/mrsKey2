import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading mb-4">Mrs Key 2 BHP</h3>
            <p className="text-primary-foreground/80 mb-4">
              Manchester's trusted female-led mobile auto locksmith service.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Clock className="h-5 w-5 text-accent" />
              <span className="font-semibold">24/7 Service</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Emergency Lock-Outs</li>
              <li>Key Replacement</li>
              <li>Fob Programming</li>
              <li>Ignition Repair</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:07309903243" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  07309 903243
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Manchester & Greater Manchester
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@mrskey2bhp.co.uk" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@mrskey2bhp.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Mrs Key 2 BHP Auto Locksmith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
