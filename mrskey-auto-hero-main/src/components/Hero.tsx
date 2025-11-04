import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-locksmith.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Clock className="h-5 w-5 text-accent" />
            <span className="text-primary-foreground font-semibold">24/7 Emergency Service</span>
          </div>

          <h1 className="text-5xl md:text-7xl text-primary-foreground mb-6 leading-tight">
            Manchester's Trusted Female-Led Auto Locksmith
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Fast, reliable mobile locksmith service across Greater Manchester. 
            Emergency lock-outs, key replacement, and fob programming for all vehicle makes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:07309903243">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 07309 903243
              </Button>
            </a>
            <a href="#services">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30"
              >
                View Services
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">24/7 Available</h3>
                <p className="text-sm text-primary-foreground/80">Day or night emergency response</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">Mobile Service</h3>
                <p className="text-sm text-primary-foreground/80">We come to you anywhere in Manchester</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">Fast Response</h3>
                <p className="text-sm text-primary-foreground/80">Quick arrival time guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
