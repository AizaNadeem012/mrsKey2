import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import Marquee from "@/components/Marquee";
import ServicesAndGallery from "@/components/ServicesAndGallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Marquee />
      <ServicesAndGallery />
      <WhyChooseUs />
      <Testimonials />
      <Marquee />
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Index;
