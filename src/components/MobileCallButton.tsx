import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCallButton = () => {
  return (
    <a 
      href="tel:07309903243"
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <Button 
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl bg-accent hover:bg-accent/90 animate-pulse"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default MobileCallButton;
