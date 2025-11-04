import { Card } from "@/components/ui/card";
import { Key, Lock, Smartphone, Settings } from "lucide-react";
import keyReplacementImg from "@/assets/key-replacement.jpg";
import emergencyLockoutImg from "@/assets/emergency-lockout.jpg";
import fobProgrammingImg from "@/assets/fob-programming.jpg";

const services = [
  {
    icon: Lock,
    title: "Emergency Lock-Outs",
    description: "Locked out of your car? We provide fast emergency access without damage to your vehicle.",
    image: emergencyLockoutImg,
  },
  {
    icon: Key,
    title: "Lost Key Replacement",
    description: "Complete car key replacement service for all makes and models with on-site cutting and programming.",
    image: keyReplacementImg,
  },
  {
    icon: Smartphone,
    title: "Fob & Remote Programming",
    description: "Expert programming of key fobs, remotes, and transponder keys with latest diagnostic equipment.",
    image: fobProgrammingImg,
  },
  {
    icon: Settings,
    title: "Ignition Repair & ECU",
    description: "Professional ignition system diagnostics and repair. ECU programming and immobilizer solutions.",
    image: keyReplacementImg,
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional auto locksmith services for all vehicle makes and models across Greater Manchester
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-accent group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-10 w-10 text-accent" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
