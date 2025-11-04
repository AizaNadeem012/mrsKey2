import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card"; // CardContent added
import { Phone, Mail, MapPin, Clock, Car, Wrench } from "lucide-react"; // Car, Wrench added
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    make: "", // New field
    model: "", // New field
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send formData to a server here.
    toast({
      title: "✅ Quote Request Sent!",
      description: "Thank you! We'll review your vehicle details and get back to you with an accurate quote ASAP.",
    });
    setFormData({ name: "", email: "", phone: "", make: "", model: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        
        {/* ============================= UNIQUE HERO SECTION (Map View) ============================= */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          {/* Placeholder for an embedded Map (e.g., Google Maps iframe or dedicated map component) */}
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
            {/* Replace this div with your actual map component/iframe targeting Manchester */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152526.49479383634!2d-2.3486121852601784!3d53.47230495810574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4c7760eb8095%3A0x6b490483ff108b98!2sGreater%20Manchester!5e0!3m2!1sen!2suk!4v1698717600000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map - Greater Manchester"
            ></iframe>
          </div>
          
          <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
            <div className="text-center text-white p-6 rounded-lg backdrop-blur-sm bg-black/30">
              <h1 className="text-5xl md:text-6xl font-extrabold font-heading mb-4 drop-shadow-lg">
                We've Got Manchester Covered
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                **24/7 Mobile Locksmith Service** right across Greater Manchester.
              </p>
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
                    For **immediate assistance**, call us anytime. For general inquiries or pre-booking, use the details below.
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
                                <p className="text-sm text-muted-foreground mt-1">Available **24 hours a day**, 7 days a week.</p>
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
                                <p className="text-sm text-muted-foreground mt-1">We respond to quotes/bookings within 24 hours.</p>
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
                                <p className="text-sm text-muted-foreground mt-1">We come to your location—home, work, or roadside.</p>
                            </div>
                        </div>
                    </Card>
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
                    Please provide your vehicle details for the most accurate quote.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                            <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Smith" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                            <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                        </div>
                    </div>

                    {/* Row 2: Phone & Car Make/Model (Unique Fields) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                            <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="07309 903243" />
                        </div>
                        <div>
                            <label htmlFor="make" className="block text-sm font-medium text-foreground mb-2 flex items-center"><Car className="h-4 w-4 mr-1"/> Car Make *</label>
                            <Input id="make" name="make" type="text" required value={formData.make} onChange={handleChange} placeholder="Ford, BMW, Nissan..." />
                        </div>
                        <div>
                            <label htmlFor="model" className="block text-sm font-medium text-foreground mb-2">Car Model/Year</label>
                            <Input id="model" name="model" type="text" value={formData.model} onChange={handleChange} placeholder="Fiesta 2018" />
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
                      />
                    </div>

                    <Button type="submit" className="w-full bg-accent hover:bg-primary transition-colors font-bold text-lg py-3 shadow-lg" size="lg">
                      <Wrench className="h-5 w-5 mr-2" />
                      Request FREE Quote
                    </Button>
                  </form>
                </Card>
              </div>
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