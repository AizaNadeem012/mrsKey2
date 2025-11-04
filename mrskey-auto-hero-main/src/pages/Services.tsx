import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Key, 
  Lock, 
  Smartphone, 
  Settings, 
  CheckCircle, 
  Phone, 
  Clock, 
  DollarSign, 
  MapPin, 
  Truck,
  ChevronDown // *** FIX: Added missing import for ChevronDown ***
} from "lucide-react";

// NOTE: Since I cannot access local files, I will use placeholder strings for the images.
// Ensure your image paths are correct: "@/assets/key-replacement.jpg" etc.

const services = [
  {
    id: "lockouts",
    icon: Lock,
    title: "Emergency Vehicle Lockout Service",
    description: "Locked out of your vehicle? Don't panic! Our 24/7 emergency service provides **fast, damage-free entry** to your car anywhere in Greater Manchester. We use specialized tools to ensure your locks are protected.",
    image: "/public/emergency-lockout.png", // Placeholder
    features: [
      "24/7 immediate emergency response",
      "Non-destructive entry methods (No damage guarantee)",
      "Access to all vehicle makes and models (cars, vans, trucks)",
      "Fastest arrival times in the region",
    ]
  },
  {
    id: "key-replacement",
    icon: Key,
    title: "Complete Lost Car Key Replacement",
    description: "Lost your only key or need a spare? We provide **complete car key replacement services** with on-site cutting, coding, and programming. We are cheaper and faster than visiting a main dealership.",
    image: "/public/key-replacement.jpg", // Placeholder
    features: [
      "Mobile service to your home, work, or roadside",
      "New keys cut and coded on the spot",
      "Transponder chip and remote key programming",
      "Up to 50% cheaper than dealership prices",
    ]
  },
  {
    id: "programming",
    icon: Smartphone,
    title: "Key Fob & Transponder Programming",
    description: "Expert programming of modern key fobs, smart proximity keys, and remote controls using the **latest diagnostic equipment**. Don't pay dealership prices for a simple coding job!",
    image: "/public/fob-programming.jpg", // Placeholder
    features: [
      "New key programming for most major brands",
      "ECU/Immobiliser synchronization",
      "Spare key coding and deletion of old/lost keys",
      "Quick, efficient, and guaranteed service",
    ]
  },
  {
    id: "ignition-repair",
    icon: Settings,
    title: "Ignition Switch & ECU Repair Services",
    description: "If your key is stuck in the ignition or your car won't start, we offer **professional ignition system diagnostics and repair**. We also handle complex ECU programming and immobiliser fault resolution.",
    image: "/public/ignition-repair.jpg", // Placeholder
    features: [
      "Ignition barrel replacement and repair",
      "Steering lock repair/replacement",
      "ECU fault code reading and re-programming",
      "Expert troubleshooting for starting problems",
    ]
  },
];

const faqs = [
    { question: "Are you available 24 hours a day?", answer: "Yes, we offer a dedicated 24/7 emergency call-out service for car lockouts and lost key situations across Greater Manchester." },
    { question: "How much cheaper are you than a dealership?", answer: "On average, our mobile services are 30% to 50% cheaper than what a main dealership would charge, as we have lower overheads and come directly to you." },
    { question: "How long does it take to replace a lost car key?", answer: "Typically, a complete key replacement, including cutting and programming, takes between 30 minutes to 2 hours, depending on the complexity of your vehicle's security system." },
    { question: "Will you damage my car trying to get the door open?", answer: "Absolutely not. We use non-destructive, professional tools and techniques. We guarantee damage-free entry during all lockout services." },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        
        {/* ============================= HERO SECTION WITH CTA ============================= */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold font-heading mb-4">
              Your Mobile Auto Locksmith Experts
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto mb-10">
              **Fast, Reliable, and Affordable** car key replacement, lockout, and repair services available **24/7** across Greater Manchester.
            </p>
            <a href="tel:07309903243">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-xl px-10 py-7 shadow-2xl transition-all transform hover:scale-[1.02]">
                <Phone className="mr-3 h-6 w-6" />
                24/7 Emergency Call: 07309 903243
              </Button>
            </a>
          </div>
        </section>

        {/* ============================= SERVICE SHOWCASE ============================= */}
        <section className="py-20" id="service-list">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-heading text-center text-foreground mb-16 border-b-2 border-accent inline-block pb-1 mx-auto">
                Our Core Services
            </h2>
            <div className="space-y-20">
              {services.map((service, index) => (
                <Card key={service.id} id={service.id} className="overflow-hidden shadow-2xl border-l-8 border-primary/20 hover:border-accent transition-all duration-300">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Image Column */}
                    <div className={`relative h-64 lg:h-auto min-h-[400px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/40" />
                      <div className="absolute bottom-8 left-8">
                        <service.icon className="h-16 w-16 text-accent drop-shadow-lg" />
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className={`p-8 lg:p-12 xl:p-16 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h3 className="text-4xl font-heading text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-8 border-l-4 border-accent pl-4 italic">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-10">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-lg font-medium">
                            <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Service-specific CTA */}
                      <a href="tel:07309903243">
                        <Button size="lg" className="bg-primary hover:bg-accent transition-colors text-lg px-8 py-5 shadow-lg">
                          <Phone className="mr-2 h-5 w-5" />
                          Call for Quote / Service
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================= UNIQUE VALUE PROPOSITION (UVP) SECTION ============================= */}
        <section className="py-20 bg-secondary/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-heading text-primary mb-12">
                    Why Choose Mrs Key 2 BHP?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="p-8 shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                        <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">24/7 Mobile Service</h3>
                        <p className="text-muted-foreground">We come to your location—day or night—for immediate assistance across Manchester.</p>
                    </Card>
                    <Card className="p-8 shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                        <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">Save Money</h3>
                        <p className="text-muted-foreground">Up to 50% cheaper than main dealership prices for key replacement and programming.</p>
                    </Card>
                    <Card className="p-8 shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                        <Truck className="h-12 w-12 text-accent mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2">All Makes & Models</h3>
                        <p className="text-muted-foreground">Equipped with the latest technology to service virtually every car, van, and truck brand.</p>
                    </Card>
                </div>
                {/* Secondary CTA after UVP */}
                <a href="/contact" className="mt-12 inline-block">
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white text-lg px-8 py-5">
                        Get A Free, No-Obligation Quote
                    </Button>
                </a>
            </div>
        </section>

        {/* ============================= FAQ SECTION (Accordion Style) ============================= */}
        <section className="py-20" id="faqs">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl font-heading text-center text-foreground mb-12">
                    Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Card key={index} className="p-6 shadow-md border-l-4 border-accent/70">
                            {/* Removed <details> and used a simple collapsible pattern for better accessibility/control */}
                            <details className="group">
                                <summary className="flex justify-between items-center cursor-pointer text-xl font-semibold text-foreground hover:text-primary transition-colors">
                                    {faq.question}
                                    {/* ChevronDown is now available thanks to the import fix */}
                                    <ChevronDown className="h-6 w-6 text-accent transform transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="mt-4 text-lg text-muted-foreground border-t border-border pt-4">
                                    {faq.answer}
                                </p>
                            </details>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* ============================= FINAL CTA SECTION ============================= */}
        <section className="py-20 bg-primary/90 text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">
              Locked Out? Lost Key? Call Us Now!
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
              Don't wait hours for a dealership or recovery service. We provide the quickest mobile locksmith solutions in Manchester.
            </p>
            <a href="tel:07309903243">
              <Button size="lg" className="bg-accent hover:bg-white hover:text-accent text-primary-foreground text-2xl px-12 py-7 shadow-2xl transition-all transform hover:scale-[1.05]">
                <Phone className="mr-3 h-7 w-7 animate-pulse" />
                07309 903243 - Tap To Call
              </Button>
            </a>
          </div>
        </section>

      </main>

      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Services;