import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Car, Wrench, Shield, Star, CheckCircle, ArrowRight, AlertCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    make: "",
    model: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Service areas in Manchester
  const serviceAreas = [
    "Manchester City Centre", "Salford", "Oldham", "Rochdale", "Bury",
    "Bolton", "Wigan", "Altrincham", "Sale", "Stretford",
    "Didsbury", "Chorlton", "Withington", "Fallowfield", "Hulme"
  ];

  // Services offered
  const services = [
    { name: "Emergency Lockouts", icon: Shield, description: "Fast response when you're locked out of your vehicle" },
    { name: "Key Replacement", icon: Car, description: "Complete key cutting and programming for all vehicle types" },
    { name: "Ignition Repair", icon: Wrench, description: "Expert ignition system diagnosis and repair" },
    { name: "Mobile Service", icon: MapPin, description: "We come to you anywhere in Greater Manchester" }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Emma Thompson",
      service: "Emergency Lockout",
      text: "Locked out of my car in the rain, Mrs Key 2 BHP arrived within 20 minutes. Professional, friendly, and reasonably priced!",
      rating: 5
    },
    {
      name: "Michael Davies",
      service: "Key Replacement",
      text: "Lost my car keys and needed a replacement quickly. They programmed a new key on the spot and saved me from towing my car to the dealership.",
      rating: 5
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can you reach me in an emergency?",
      answer: "Our average response time in Manchester is 30-45 minutes for emergency calls. We prioritize urgent situations and dispatch the nearest available technician immediately."
    },
    {
      question: "What areas in Manchester do you cover?",
      answer: "We cover all areas within Manchester and surrounding M postcode districts, including the city centre, Salford, Oldham, Rochdale, Bolton, and all suburbs."
    },
    {
      question: "Do you work with all vehicle makes and models?",
      answer: "Yes, we service all types of vehicles including cars, vans, motorcycles, and commercial vehicles. Our technicians are trained to work with both traditional and modern locking systems."
    },
    {
      question: "Are your services available 24/7?",
      answer: "Yes, we provide 24/7 emergency locksmith services throughout Manchester. Our team is always ready to help with urgent lockouts, broken keys, or security issues."
    }
  ];

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.make.trim()) errors.make = "Car make is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "❌ Form Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "✅ Quote Request Sent!",
        description: "Thank you! We'll review your vehicle details and get back to you with an accurate quote ASAP.",
      });
      setFormData({ name: "", email: "", phone: "", make: "", model: "", message: "" });
      setFormErrors({});
    } catch (error) {
      toast({
        title: "❌ Submission Error",
        description: "There was an error sending your request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // JSON-LD structured data
  const localBusinessJSON = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mrs Key 2 BHP",
    "image": "https://www.mrskey2bhp.co.uk/logo.png",
    "telephone": "+447309903243",
    "email": "info@mrskey2bhp.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressRegion": "Greater Manchester",
      "postalCode": "M1",
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
    "areaServed": "Greater Manchester",
    "description": "Manchester's trusted female-led mobile auto locksmith service. 24/7 emergency service, precision, and peace of mind guaranteed."
  };

  const contactPageJSON = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Mrs Key 2 BHP",
    "url": "https://www.mrskey2bhp.co.uk/contact",
    "description": "Contact Mrs Key 2 BHP for 24/7 emergency locksmith services in Manchester. Call us or fill out our form for a free quote.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Mrs Key 2 BHP",
      "telephone": "+447309903243",
      "email": "info@mrskey2bhp.co.uk"
    }
  };

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
        "name": "Contact",
        "item": "https://www.mrskey2bhp.co.uk/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Mrs Key 2 BHP | 24/7 Emergency Auto Locksmith Manchester</title>
        <meta
          name="description"
          content="Contact Mrs Key 2 BHP for 24/7 emergency auto locksmith services in Manchester. Call 07309 903243 or fill out our form for a free quote on key replacement, lockouts, and ignition repairs."
        />
        <meta name="keywords" content="auto locksmith Manchester, emergency locksmith Manchester, car key replacement, 24/7 locksmith, Manchester automotive security, Mrs Key 2 BHP contact" />
        <meta name="author" content="Mrs Key 2 BHP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mrskey2bhp.co.uk/contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mrskey2bhp.co.uk/contact" />
        <meta property="og:title" content="Contact Mrs Key 2 BHP | 24/7 Emergency Auto Locksmith Manchester" />
        <meta
          property="og:description"
          content="Contact Mrs Key 2 BHP for 24/7 emergency auto locksmith services in Manchester. Call 07309 903243 or fill out our form for a free quote."
        />
        <meta property="og:image" content="https://www.mrskey2bhp.co.uk/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Mrs Key 2 BHP" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mrskey2bhp.co.uk/contact" />
        <meta property="twitter:title" content="Contact Mrs Key 2 BHP | 24/7 Emergency Auto Locksmith Manchester" />
        <meta
          property="twitter:description"
          content="Contact Mrs Key 2 BHP for 24/7 emergency auto locksmith services in Manchester. Call 07309 903243 or fill out our form for a free quote."
        />
        <meta property="twitter:image" content="https://www.mrskey2bhp.co.uk/og-image.jpg" />
        <meta property="twitter:creator" content="@mrskey2bhp" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessJSON)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactPageJSON)}
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
        
        {/* ============================= UNIQUE HERO SECTION (Map View) ============================= */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152526.49479383634!2d-2.3486121852601784!3d53.47230495810574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4c7760eb8095%3A0x6b490483ff108b98!2sGreater%20Manchester!5e0!3m2!1sen!2suk!4v1698717600000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map - Greater Manchester"
                aria-label="Interactive map showing Mrs Key 2 BHP service area in Greater Manchester"
            ></iframe>
          </div>
          
          <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
            <div className="text-center text-white p-6 rounded-lg backdrop-blur-sm bg-black/30">
              <h1 className="text-5xl md:text-6xl font-extrabold font-heading mb-4 drop-shadow-lg">
                We've Got Manchester Covered
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                24/7 Mobile Locksmith Service right across Greater Manchester
              </p>
            </div>
          </div>
        </section>

        {/* ============================= BREADCRUMB NAVIGATION ============================= */}
        <nav className="py-4 bg-background border-b" aria-label="Breadcrumb">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-primary hover:text-accent transition-colors">Home</a>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="text-foreground font-medium">Contact</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* ============================= EMERGENCY BANNER ============================= */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <AlertCircle className="h-8 w-8 mr-3" />
                <div>
                  <h2 className="text-xl font-bold">Emergency Locksmith Service</h2>
                  <p className="text-red-100">Locked out? Need immediate assistance? We're here 24/7</p>
                </div>
              </div>
              <a
                href="tel:07309903243"
                className="bg-white text-red-600 font-bold px-6 py-3 rounded-full hover:bg-red-50 transition-colors flex items-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 07309 903243
              </a>
            </div>
          </div>
        </section>

        {/* ============================= CONTACT FORM & INFO (Two-Column Layout) ============================= */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
              {/* --- 1. Contact Info Block --- */}
              <div className="lg:col-span-1 space-y-8">
                <h2 className="text-4xl font-heading text-primary mb-2 border-b-2 border-accent inline-block pb-1">
                    Direct Contact
                </h2>
                <p className="text-lg text-muted-foreground">
                    For immediate assistance, call us anytime. For general inquiries or pre-booking, use the details below.
                </p>

                <div className="space-y-6">
                    <Card className="p-6 border-l-4 border-accent hover:shadow-xl transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                <Phone className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-foreground mb-1">Emergency Line</h3>
                                <a href="tel:07309903243" className="text-primary text-lg hover:text-accent font-mono">
                                    07309 903243
                                </a>
                                <p className="text-sm text-muted-foreground mt-1">Available 24 hours a day, 7 days a week</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 border-l-4 border-primary/50 hover:shadow-xl transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-foreground mb-1">General Email</h3>
                                <a href="mailto:info@mrskey2bhp.co.uk" className="text-muted-foreground text-lg hover:text-primary">
                                    info@mrskey2bhp.co.uk
                                </a>
                                <p className="text-sm text-muted-foreground mt-1">We respond to quotes/bookings within 24 hours</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 border-l-4 border-primary/50 hover:shadow-xl transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-foreground mb-1">Service Area</h3>
                                <p className="text-muted-foreground text-lg font-semibold">
                                    Greater Manchester
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">We come to your location—home, work, or roadside</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Service Areas */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Areas We Cover</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- 2. Request A Quote Form (Enhanced) --- */}
              <div className="lg:col-span-2">
                <Card className="p-8 shadow-2xl bg-secondary/20">
                  <h2 className="text-4xl font-heading text-primary mb-2 flex items-center">
                    <Wrench className="h-8 w-8 mr-3 text-accent" />
                    Detailed Quote Request
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Please provide your vehicle details for the most accurate quote. Our team will respond promptly with a competitive price.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                            <Input 
                              id="name" 
                              name="name" 
                              type="text" 
                              required 
                              value={formData.name} 
                              onChange={handleChange} 
                              placeholder="John Smith"
                              className={formErrors.name ? "border-red-500" : ""}
                            />
                            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              required 
                              value={formData.email} 
                              onChange={handleChange} 
                              placeholder="john@example.com"
                              className={formErrors.email ? "border-red-500" : ""}
                            />
                            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                        </div>
                    </div>

                    {/* Row 2: Phone & Car Make/Model (Unique Fields) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              type="tel" 
                              required 
                              value={formData.phone} 
                              onChange={handleChange} 
                              placeholder="07309 903243"
                              className={formErrors.phone ? "border-red-500" : ""}
                            />
                            {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                        </div>
                        <div>
                            <label htmlFor="make" className="block text-sm font-medium text-foreground mb-2 flex items-center">
                              <Car className="h-4 w-4 mr-1"/> Car Make *
                            </label>
                            <Input 
                              id="make" 
                              name="make" 
                              type="text" 
                              required 
                              value={formData.make} 
                              onChange={handleChange} 
                              placeholder="Ford, BMW, Nissan..."
                              className={formErrors.make ? "border-red-500" : ""}
                            />
                            {formErrors.make && <p className="text-red-500 text-sm mt-1">{formErrors.make}</p>}
                        </div>
                        <div>
                            <label htmlFor="model" className="block text-sm font-medium text-foreground mb-2">Car Model/Year</label>
                            <Input 
                              id="model" 
                              name="model" 
                              type="text" 
                              value={formData.model} 
                              onChange={handleChange} 
                              placeholder="Fiesta 2018" 
                            />
                        </div>
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Describe Your Issue (e.g., lost key, broken ignition, etc.) *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g., I lost all keys to my 2019 VW Golf and need a full replacement..."
                        rows={5}
                        className={formErrors.message ? "border-red-500" : ""}
                      />
                      {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-primary transition-colors font-bold text-lg py-3 shadow-lg" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Wrench className="h-5 w-5 mr-2" />
                          Request FREE Quote
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ============================= SERVICES SECTION ============================= */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Locksmith Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================= TESTIMONIALS SECTION ============================= */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.service}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ============================= FAQ SECTION ============================= */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <details key={index} className="mb-6 p-6 rounded-lg bg-card shadow-md">
                  <summary className="font-bold text-lg cursor-pointer flex items-center justify-between">
                    {faq.question}
                    <ArrowRight className="w-5 h-5" />
                  </summary>
                  <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================= CTA SECTION ============================= */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Need Emergency Locksmith Services?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Contact Mrs Key 2 BHP now for fast, reliable, and professional locksmith services across Manchester.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07309903243"
                className="bg-white text-primary text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary-foreground hover:text-white transition transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 07309 903243
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-primary-foreground text-lg font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition transform hover:scale-105 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
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

export default Contact;
