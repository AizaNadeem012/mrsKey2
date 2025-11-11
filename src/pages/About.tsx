import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import { Helmet } from "react-helmet";
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
  Quote,
  Target,
  Sparkles,
  Handshake,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

// Image URLs
const heroImage = "/hero.png"; 
const storyImage = "/story.jpg"; 
const teamImage1 = "/team1.jpg";
const teamImage2 = "/team2.jpg";
const teamImage3 = "/team3.jpg";

// FAQ data
const faqs = [
  {
    question: "What areas in Manchester do you cover?",
    answer: "We cover all areas within Manchester and the surrounding M postcode areas. Our mobile locksmith service can reach you quickly whether you're in the city center or suburbs."
  },
  {
    question: "Are you available 24/7 for emergency lockouts?",
    answer: "Yes, we provide 24/7 emergency locksmith services throughout Manchester. Our team is always ready to help with urgent lockouts, broken keys, or security issues."
  },
  {
    question: "What types of vehicles do you service?",
    answer: "We service all types of vehicles including cars, vans, motorcycles, and commercial vehicles. Our technicians are trained to work with both traditional and modern locking systems."
  },
  {
    question: "How quickly can you reach me in an emergency?",
    answer: "Our average response time in Manchester is 30-45 minutes for emergency calls. We prioritize urgent situations and dispatch the nearest available technician immediately."
  },
  {
    question: "Are your services insured and guaranteed?",
    answer: "Yes, all our services are fully insured and come with a satisfaction guarantee. We use high-quality parts and provide warranty on all our work."
  }
];

// Team data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Lead Locksmith",
    image: teamImage1,
    bio: "With over 10 years of experience in automotive security, Sarah founded Mrs Key 2 BHP to provide reliable locksmith services with a focus on customer safety and satisfaction."
  },
  {
    name: "Emily Davis",
    role: "Senior Technician",
    image: teamImage2,
    bio: "Emily specializes in modern vehicle security systems and has helped hundreds of Manchester residents with key programming and electronic lock repairs."
  },
  {
    name: "Jessica Wilson",
    role: "Customer Relations",
    image: teamImage3,
    bio: "Jessica ensures every customer receives exceptional service from first contact to job completion, making the locksmith experience stress-free."
  }
];

// Testimonials
const testimonials = [
  {
    name: "Rachel Thompson",
    service: "Emergency Lockout",
    text: "I was locked out of my car in the rain, and Mrs Key 2 BHP arrived within 20 minutes. Professional, friendly, and reasonably priced!",
    rating: 5
  },
  {
    name: "David Miller",
    service: "Key Replacement",
    text: "Lost my car keys and needed a replacement quickly. They programmed a new key on the spot and saved me from towing my car to the dealership.",
    rating: 5
  },
  {
    name: "Amanda Patel",
    service: "Ignition Repair",
    text: "The team diagnosed and fixed my ignition issue when other garages couldn't. Truly knowledgeable and trustworthy service.",
    rating: 5
  }
];

const About = () => {
  // JSON-LD for LocalBusiness
  const localBusinessJSON = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mrs Key 2 BHP",
    "image": heroImage,
    "telephone": "+07309 903243",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Manchester, UK",
      "addressLocality": "Manchester",
      "postalCode": "M1 XXX",
      "addressCountry": "UK"
    },
    "url": "https://www.mrskey2bhp.co.uk",
    "sameAs": [
      "https://www.facebook.com/mrskey2bhp",
      "https://www.instagram.com/mrskey2bhp",
      "https://www.linkedin.com/company/mrskey2bhp"
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "servesCuisine": "Automotive Locksmith Services",
    "description": "Manchester's trusted female-led mobile auto locksmith service. 24/7 service, precision, and peace of mind guaranteed."
  };

  // Organization JSON-LD
  const organizationJSON = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mrs Key 2 BHP",
    "url": "https://www.mrskey2bhp.co.uk",
    "logo": "https://www.mrskey2bhp.co.uk/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+07309 903243",
      "contactType": "emergency",
      "areaServed": "Manchester",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.facebook.com/mrskey2bhp",
      "https://www.instagram.com/mrskey2bhp",
      "https://www.linkedin.com/company/mrskey2bhp"
    ]
  };

  // FAQ JSON-LD
  const faqJSON = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Breadcrumb JSON-LD
  const breadcrumbJSON = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mrskey2bhp.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://www.mrskey2bhp.co.uk/about"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Us | Mrs Key 2 BHP - Female-Led Mobile Auto Locksmith in Manchester</title>
        <meta
          name="description"
          content="Mrs Key 2 BHP is Manchester’s trusted female-led mobile auto locksmith service. 24/7 service, precision, and peace of mind guaranteed. Learn about our team, values, and commitment to customer safety."
        />
        <meta name="keywords" content="auto locksmith Manchester, female locksmith Manchester, emergency locksmith, car key replacement, 24/7 locksmith, Manchester automotive security" />
        <meta name="author" content="Mrs Key 2 BHP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mrskey2bhp.co.uk/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mrskey2bhp.co.uk/about" />
        <meta property="og:title" content="About Us | Mrs Key 2 BHP - Female-Led Mobile Auto Locksmith" />
        <meta
          property="og:description"
          content="Trusted female-led mobile auto locksmith service in Manchester. Learn about our mission, team, and values."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Mrs Key 2 BHP" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mrskey2bhp.co.uk/about" />
        <meta property="twitter:title" content="About Us | Mrs Key 2 BHP - Female-Led Mobile Auto Locksmith" />
        <meta
          property="twitter:description"
          content="Trusted female-led mobile auto locksmith service in Manchester. Learn about our mission, team, and values."
        />
        <meta property="twitter:image" content={heroImage} />
        <meta property="twitter:creator" content="@mrskey2bhp" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessJSON)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationJSON)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqJSON)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJSON)}
        </script>
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="application-name" content="Mrs Key 2 BHP" />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-40 md:py-52 text-center bg-gradient-to-r from-primary via-primary/90 to-accent">
          <div
            className="absolute inset-0 opacity-25 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden="true"
          />
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6 text-primary-foreground drop-shadow-2xl">
              Our Commitment to You
            </h1>
            <p className="text-xl md:text-3xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
              Manchester's most trusted{" "}
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
          <div className="absolute bottom-0 left-0 w-full h-24 bg-background clip-path-wave"></div>
        </section>
        
        {/* COUNTERS SECTION */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-lg bg-card shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="p-6 rounded-lg bg-card shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Satisfied Customers</div>
              </div>
              <div className="p-6 rounded-lg bg-card shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Emergency Service</div>
              </div>
              <div className="p-6 rounded-lg bg-card shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">30min</div>
                <div className="text-muted-foreground">Average Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6 leading-relaxed">
                    Mrs Key 2 BHP was founded with a simple mission: to provide Manchester residents with a reliable, trustworthy auto locksmith service that prioritizes customer safety and satisfaction.
                  </p>
                  <p className="text-lg mb-6 leading-relaxed">
                    As a female-led company in a traditionally male-dominated industry, we bring a unique perspective to automotive security. We understand the importance of feeling safe and secure, especially during emergency situations like lockouts.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Over the past decade, we've built our reputation on reliability, technical expertise, and exceptional customer service. Our team is committed to staying updated with the latest automotive security technologies to serve you better.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src={storyImage} 
                    alt="Mrs Key 2 BHP team providing locksmith services in Manchester" 
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                    <p className="font-bold">10+ Years of Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES SECTION */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-card shadow-md text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Safety First</h3>
                <p className="text-muted-foreground">Your safety is our top priority. We use non-destructive methods whenever possible and ensure your vehicle remains secure.</p>
              </div>
              <div className="p-6 rounded-lg bg-card shadow-md text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Customer Care</h3>
                <p className="text-muted-foreground">We treat every customer with respect and empathy, especially during stressful emergency situations.</p>
              </div>
              <div className="p-6 rounded-lg bg-card shadow-md text-center">
                <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Technical Excellence</h3>
                <p className="text-muted-foreground">Our technicians are continuously trained on the latest automotive security technologies to provide expert service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Mrs Key 2 BHP?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                  <p className="text-muted-foreground">We're available round the clock, including weekends and holidays, for all your emergency locksmith needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Female-Led Team</h3>
                  <p className="text-muted-foreground">Our female-led team provides a comfortable and trustworthy service, especially important for vulnerable customers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <KeyRound className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
                  <p className="text-muted-foreground">We use state-of-the-art equipment for key cutting, programming, and lock repairs to ensure precision and efficiency.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Car className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Mobile Service</h3>
                  <p className="text-muted-foreground">Our fully equipped mobile units come to your location anywhere in Manchester, saving you time and towing costs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="p-6 rounded-lg bg-card shadow-md text-center">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role} at Mrs Key 2 BHP`} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 rounded-lg bg-card shadow-md">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <details key={index} className="mb-6 p-6 rounded-lg bg-card shadow-md">
                  <summary className="font-bold text-lg cursor-pointer flex items-center justify-between">
                    {faq.question}
                    <ChevronDown className="w-5 h-5" />
                  </summary>
                  <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Need Emergency Locksmith Services?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Contact Mrs Key 2 BHP now for fast, reliable, and professional locksmith services across Manchester.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+07309 903243"
                className="bg-white text-primary text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary-foreground hover:text-white transition transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-primary-foreground text-lg font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition transform hover:scale-105 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default About;
