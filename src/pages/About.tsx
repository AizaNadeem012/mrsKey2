import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import {
  Shield,
  Award,
  Users,
  Heart,
  Wrench,
  Clock,
  ChevronDown,
  KeyRound,
  Car,
  Smile,
  Quote, // Added for Testimonials/Story
  Target, // New icon for Core Values
  Sparkles, // New icon for Core Values
  Handshake, // New icon for Core Values
} from "lucide-react";
import { useState, useEffect } from "react";

// ====================================================================
// UPDATED IMAGE URLs from Unsplash (Placeholders)
// ====================================================================
const heroImage = "/public/hero.png"; 
const storyImage = "/public/story.jpg"; 
// ====================================================================


const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        {/* ============================= HERO SECTION (ENHANCED) ============================= */}
        <section className="relative overflow-hidden py-40 md:py-52 text-center bg-gradient-to-r from-primary via-primary/90 to-accent">
          <div
            className="absolute inset-0 opacity-25 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6 text-primary-foreground drop-shadow-2xl">
              Our Commitment to You
            </h1>
            <p className="text-xl md:text-3xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
              Manchester’s most trusted{" "}
              <span className="text-accent font-semibold border-b-2 border-accent/70 pb-1">
                female-led mobile auto locksmith
              </span>{" "}
              — committed to precision, safety, and reliability.
            </p>
            <div className="mt-12 flex justify-center">
              <a
                href="/contact"
                className="bg-white text-primary text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:bg-primary-foreground hover:text-white transition transform hover:scale-105"
              >
                Get Help Now 24/7
              </a>
            </div>
          </div>

          {/* Decorative Irregular Shape */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-background clip-path-wave"></div>
        </section>

        {/* ============================= COUNTERS SECTION ============================= */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent)]" />
          <div className="container mx-auto px-6 text-center">
            <div className="grid md:grid-cols-4 gap-10 max-w-5xl mx-auto">
              <Counter icon={Award} number={8} text="Years Experience" />
              <Counter icon={Car} number={3500} text="Cars Unlocked" />
              <Counter icon={KeyRound} number={1200} text="Keys Programmed" />
              <Counter icon={Smile} number={5000} text="Happy Clients" />
            </div>
          </div>
        </section>

        {/* ============================= OUR STORY (ENHANCED WITH IMAGE & QUOTE) ============================= */}
        <section className="py-24 relative bg-secondary/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(0,0,0,0.05),_transparent)]" />
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <h2 className="text-4xl font-heading text-foreground mb-12 text-center">
              The Mrs Key 2 BHP Difference
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-1 order-2">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded by a passionate woman, Mrs Key 2 BHP was born out of a
                  desire to replace the industry’s unreliable, often impersonal
                  service with one of **trust, precision, and genuine care**.
                  What began as a one-woman mission has grown into Manchester’s
                  premier **24/7 mobile auto locksmith service**.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We don't just fix keys; we deliver **peace of mind**. Whether
                  it’s 2 PM or 2 AM, we arrive equipped, efficient, and
                  empathetic. Our promise is simple: **honest, high-quality
                  service** with transparent pricing and absolutely no hidden
                  charges or delays.
                </p>
                <blockquote className="border-l-4 border-accent pl-4 italic text-foreground/80">
                  <p className="mb-2">
                    "My goal was to create a service where safety and expertise
                    were a given, but a personal, female touch made the real
                    difference for people in a stressful situation."
                  </p>
                  <footer className="font-semibold text-primary flex items-center">
                    <Quote className="h-4 w-4 mr-2 text-accent" />
                    Mrs. Key, Founder
                  </footer>
                </blockquote>
              </div>
              <div className="md:order-2 order-1 shadow-2xl rounded-xl overflow-hidden">
                <img
                  src={storyImage}
                  alt="Founder, Mrs. Key, with locksmith equipment"
                  className="w-full h-auto object-cover md:h-[400px] transition duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
          {/* Irregular shape accent */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse" />
        </section>

        {/* ============================= CORE VALUES SECTION (NEW) ============================= */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="text-4xl font-heading text-foreground mb-12">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
              These principles guide every service call and interaction, ensuring you receive
              the best care, every time.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((v, i) => (
                <div key={i} className="p-8 border-t-4 border-primary/50 bg-secondary/10 rounded-xl shadow-lg">
                  <v.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================= WHY CHOOSE US ============================= */}
        <section className="py-28 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl font-heading text-center text-foreground mb-16">
              Why Choose Mrs Key 2 BHP?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {features.map((f, i) => (
                <FeatureCard key={i} Icon={f.icon} title={f.title} text={f.text} />
              ))}
            </div>
          </div>
        </section>
        
        {/* ============================= TESTIMONIALS/TRUST SECTION (NEW) ============================= */}
        <section className="py-24 bg-primary/10 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-4xl font-heading text-foreground mb-12">
                    What Our Clients Say 🌟
                </h2>
                <div className="space-y-12">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} quote={t.quote} name={t.name} source={t.source} />
                    ))}
                </div>
            </div>
        </section>

        {/* ============================= TEAM SECTION ============================= */}
        <section className="py-28 bg-secondary/40 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
            <h2 className="text-4xl font-heading text-foreground mb-12">
              Meet Our Expert Team
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-8 hover:shadow-2xl transition border border-border"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-primary">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-24 left-0 w-full h-48 bg-gradient-to-t from-primary/20 to-transparent clip-path-slope" />
        </section>

        {/* ============================= FAQ SECTION ============================= */}
        <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-heading text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ============================= CTA SECTION ============================= */}
        <section className="py-24 text-center bg-gradient-to-r from-primary via-accent to-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white,transparent)]" />
          <div className="relative z-10">
            <h2 className="text-4xl font-heading mb-6 drop-shadow-md">
              Need Immediate Locksmith Assistance?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              We’re available 24/7 — ready to get you back on the road with
              expert car key solutions anywhere in Manchester.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary-foreground hover:text-white transition shadow-lg"
            >
              Contact Us Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default About;

/* ============================= FEATURE CARD ============================= */
const FeatureCard = ({ Icon, title, text }) => (
  <div className="flex items-start space-x-4 p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition border border-border">
    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
      <Icon className="h-6 w-6 text-accent" />
    </div>
    <div>
      <h3 className="text-xl font-heading text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{text}</p>
    </div>
  </div>
);

/* ============================= COUNTER COMPONENT ============================= */
const Counter = ({ icon: Icon, number, text }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < number ? prev + Math.ceil(number / 80) : number));
    }, 30);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="text-center">
      <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
        <Icon className="h-8 w-8 text-accent" />
      </div>
      <p className="text-5xl font-bold text-primary mb-2">{count}+</p>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
};

/* ============================= FAQ ITEM ============================= */
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer p-6 border border-border rounded-xl hover:shadow-lg transition bg-white"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-foreground">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-accent transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && <p className="mt-3 text-muted-foreground">{answer}</p>}
    </div>
  );
};

/* ============================= TESTIMONIAL CARD ============================= */
const TestimonialCard = ({ quote, name, source }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-border text-left relative">
        <Quote className="h-8 w-8 text-accent absolute top-4 left-4 opacity-30" />
        <p className="text-lg italic text-foreground/90 mb-4 pt-4">"{quote}"</p>
        <p className="font-semibold text-primary">{name}</p>
        <p className="text-sm text-muted-foreground">{source}</p>
    </div>
);


/* ============================= DATA ============================= */

const coreValues = [
    { icon: Handshake, title: "Trust & Transparency", text: "We provide upfront, honest pricing with no hidden fees, building lasting trust with every client." },
    { icon: Target, title: "Precision & Quality", text: "Using state-of-the-art diagnostic tools for exact cuts and reliable key programming." },
    { icon: Sparkles, title: "Empathy & Service", text: "A caring, professional approach, especially during stressful emergency lockout situations." },
];

const testimonials = [
    { quote: "Quick, professional, and so helpful when I was locked out late at night. The service from Mrs Key was excellent!", name: "Sarah J.", source: "Google Review" },
    { quote: "They replaced my complex BMW key fob in under an hour for half the price of the dealership. Highly recommend the technical specialist!", name: "Mark A.", source: "Trustpilot" },
    { quote: "Great communication and arrived exactly when they said they would. The female-led team made me feel completely comfortable.", name: "Emily D.", source: "Local Client" },
];

const features = [
  { icon: Users, title: "Female-Led Expertise", text: "Breaking norms with compassion and technical mastery." },
  { icon: Shield, title: "Certified & Trusted", text: "Licensed, insured, and trained to handle complex systems safely." },
  { icon: Award, title: "Years of Experience", text: "We handle all brands — from Ford to BMW and beyond." },
  { icon: Heart, title: "Customer Focused", text: "Transparent pricing, honest service, no hidden surprises." },
  { icon: Wrench, title: "Modern Tools", text: "Equipped with the latest car key programming technologies." },
  { icon: Clock, title: "24/7 Availability", text: "Anytime, anywhere — we’re just one call away." },
];

const team = [
  {
    name: "Mrs. Key",
    role: "Founder & Lead Locksmith — Passionate about trust and precision in every service call.",
  },
  {
    name: "Ben H.",
    role: "Technical Specialist — Skilled in key programming and ECU diagnostics.",
  },
  {
    name: "Leah P.",
    role: "Customer Support Lead — Ensuring exceptional communication and client care.",
  },
];

const faqs = [
  {
    question: "Do you provide emergency services at night?",
    answer:
      "Yes, we’re available 24/7 for emergency lockouts anywhere in Manchester.",
  },
  {
    question: "Can you make a new car key on-site?",
    answer:
      "Absolutely. Our mobile vans can cut and program new keys on the spot.",
  },
  {
    question: "Are your technicians insured and certified?",
    answer:
      "Yes, our team is fully certified, insured, and experienced with all vehicle brands.",
  },
  {
    question: "Do you handle smart key programming?",
    answer:
      "We specialize in programming smart and push-start keys for modern vehicles.",
  },
  {
    question: "How long does an average service take?",
    answer:
      "Most services are completed within 20–40 minutes, depending on the issue and location.",
  },
];