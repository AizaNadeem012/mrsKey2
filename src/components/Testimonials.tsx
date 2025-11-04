import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Star, Wrench, Clock, Car, Phone } from "lucide-react"; // Added new icons

// --- Testimonial Data (Existing) ---
const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Manchester City Centre",
    rating: 5,
    text: "Absolutely brilliant service! Lost my car keys on a night out and they arrived within 30 minutes. Professional, friendly, and got me back on the road quickly. Highly recommend!",
  },
  {
    name: "David Thompson",
    location: "Salford",
    rating: 5,
    text: "Called them for an emergency lockout at 2am. They were professional, quick, and reasonably priced. The female locksmith was fantastic - very knowledgeable and reassuring.",
  },
  {
    name: "Emma Roberts",
    location: "Stockport",
    rating: 5,
    text: "Needed a replacement key fob for my BMW. They came to my workplace, programmed it on-site, and charged less than the dealership quoted. Excellent service!",
  },
];

// --- New Data for Key Services ---
const services = [
  {
    icon: Wrench,
    title: "Key Replacement & Programming",
    description: "New car keys and transponder programming for all makes and models, cheaper than main dealers.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Lockout",
    description: "Rapid response across Greater Manchester, day or night, for lost or locked-in car keys.",
  },
  {
    icon: Car,
    title: "Vehicle Entry Specialists",
    description: "Non-destructive entry techniques to safely unlock your vehicle without causing damage.",
  },
];

// ------------------------------------------------------------------------------------------------
// 1. Testimonials Section (Existing Content)
// ------------------------------------------------------------------------------------------------
const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Greater Manchester
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            // Changed key from index to a more unique identifier if possible, but keeping for this example
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// ------------------------------------------------------------------------------------------------
// 2. Key Services Section (New)
// ------------------------------------------------------------------------------------------------
const KeyServices = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-12">
        Our Core Auto Locksmith Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="p-8 text-center border-accent/20">
            <service.icon className="h-10 w-10 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// ------------------------------------------------------------------------------------------------
// 3. Call to Action Banner (New)
// ------------------------------------------------------------------------------------------------
const CtaBanner = () => (
  <section className="py-16 bg-accent text-accent-foreground">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-heading mb-4">
        Locked Out? Need a New Key?
      </h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">
        Don't panic. Our mobile auto locksmiths are ready to assist you now. Fast, reliable, and professional service guaranteed.
      </p>
      <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 transition-colors">
        <Phone className="h-5 w-5 mr-2" />
        Call Us For An Instant Quote
      </Button>
    </div>
  </section>
);

// ------------------------------------------------------------------------------------------------
// Main Export Component (Combining all sections)
// ------------------------------------------------------------------------------------------------
const CombinedPage = () => {
  return (
    <>
      <KeyServices />
      <Testimonials />
      <CtaBanner />
    </>
  );
};

export default CombinedPage;