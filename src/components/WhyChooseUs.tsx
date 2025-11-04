import { Shield, Users, Clock, DollarSign, Award, Wrench } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Female-Led Team",
    description: "Professional, friendly service you can trust from our experienced female-led team",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency service - we're here when you need us most",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Licensed, insured, and certified for your peace of mind",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description: "Transparent, competitive rates with no hidden fees or surprises",
  },
  {
    icon: Wrench,
    title: "All Makes & Models",
    description: "Expertise across all vehicle brands with latest equipment and technology",
  },
  {
    icon: Award,
    title: "Trusted Service",
    description: "Highly rated by Manchester customers for reliability and quality",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            Why Choose Mrs Key 2 BHP?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manchester's most trusted mobile auto locksmith service with a commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
