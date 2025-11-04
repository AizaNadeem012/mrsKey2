import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Wrench,
  KeyRound,
  Car,
  Facebook, // Added Facebook icon for social link
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Car Key Replacement", path: "/services#key-replacement", icon: KeyRound },
    { name: "Vehicle Lockout", path: "/services#lockout", icon: Car },
    { name: "Key Programming", path: "/services#programming", icon: Wrench },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg shadow-xl border-b border-primary/10 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* ======================= LOGO & BRANDING ======================= */}
          <Link to="/" className="flex items-center space-x-3" onClick={handleLinkClick}>
            {/* Logo: Increased size for prominence */}
            <img 
              src="/logo.png" 
              alt="Mrs Key 2 BHP Logo" 
              className="h-12 w-auto animate-pulse-slow" // Added subtle animation
            />
            <div className="text-2xl md:text-3xl font-extrabold text-primary font-heading tracking-tight">
              MRS KEY 2 BHP
            </div>
          </Link>

          {/* ======================= DESKTOP NAVIGATION ======================= */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                // Enhanced styling: underline on hover
                className="text-foreground hover:text-accent font-semibold py-2 relative group transition-colors"
                onClick={handleLinkClick}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Services Dropdown (Desktop) - Improved design */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center text-foreground hover:text-accent font-semibold py-2 transition-colors group"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 text-primary transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
                 <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
              {isServicesOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-64 bg-white border border-border rounded-xl shadow-2xl overflow-hidden z-20">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      <service.icon className="mr-3 h-5 w-5 text-accent flex-shrink-0" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Social Link (Facebook) */}
            <a 
              href="https://www.facebook.com/vikki.heaton.5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors ml-4"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-6 w-6" />
            </a>

            {/* CTA Button */}
            <a href="tel:07309903243">
              <Button 
                variant="default" 
                className="bg-accent hover:bg-primary transition-all duration-300 font-bold text-base px-6 py-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone className="mr-2 h-4 w-4" />
                07309 903243
              </Button>
            </a>
          </div>

          {/* ======================= MOBILE MENU BUTTON ======================= */}
          <button
            className="md:hidden text-primary hover:text-accent transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* ======================= MOBILE NAVIGATION ======================= */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-3 px-4 text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-semibold text-lg"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Services Sub-menu */}
            <div className="py-2 px-4">
              <button
                className="flex items-center justify-between w-full py-3 text-foreground hover:text-primary transition-colors font-semibold text-lg"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="pl-4 border-l-4 border-accent mt-2 space-y-1">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center py-2 text-muted-foreground hover:text-primary transition-colors"
                      onClick={handleLinkClick}
                    >
                      <service.icon className="mr-3 h-4 w-4 text-accent" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA and Social */}
            <div className="mt-6 px-4 space-y-4">
                <a href="tel:07309903243" className="block">
                  <Button 
                    variant="default" 
                    className="w-full bg-primary hover:bg-primary/90 transition-colors font-bold text-lg py-3"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: 07309 903243
                  </Button>
                </a>
                <a 
                  href="https://www.facebook.com/vikki.heaton.5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                    <Facebook className="mr-2 h-5 w-5" />
                    Find us on Facebook
                </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;