import { Phone, Zap } from "lucide-react";

// ============================================================================================
//                                   I. CUSTOM CSS NOTE (for Marquee)
// ============================================================================================
/* *** CRITICAL: ADD THIS CSS TO YOUR GLOBAL STYLESHEET (e.g., globals.css) ***

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); } 
}

.animate-marquee {
    animation: marquee 25s linear infinite; 
}
*/


// ============================================================================================
//                                 II. MARQUEE COMPONENT
// ============================================================================================

const Marquee = () => {
    // Data for the scrolling content
    const marqueeContent = [
        { icon: Phone, text: "24/7 EMERGENCY LINE: 07309903243" },
        { icon: Zap, text: "FASTEST RESPONSE IN GREATER MANCHESTER" },
        { icon: Phone, text: "LOST KEYS? CALL NOW FOR INSTANT QUOTE" },
    ];

    // Duplicating content for the seamless loop effect
    const scrollingItems = [...marqueeContent, ...marqueeContent];

    return (
        <div className="overflow-hidden bg-accent py-3 text-primary-foreground border-y-4 border-primary/20">
            {/* The scrolling effect relies on the 'animate-marquee' class */}
            <div className="flex w-[200%] animate-marquee whitespace-nowrap"> 
                {scrollingItems.map((item, index) => (
                    <div key={index} className="flex items-center mx-10">
                        <item.icon className="h-5 w-5 text-primary-foreground mr-3 shrink-0" />
                        <span className="text-lg font-extrabold uppercase tracking-wide">
                            {item.text}
                        </span>
                        <span className="text-xl mx-8 text-primary-foreground/50">|</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;