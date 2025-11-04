import React from "react";

const ServicesAndGallery = () => {
  const services = [
    {
      title: "Car Key Replacement",
      desc: "Lost your car keys? We provide fast and affordable key replacement for all vehicle models across the UK.",
      icon: "🚗",
    },
    {
      title: "Emergency Lockout",
      desc: "Locked out of your car or home? Our 24/7 mobile locksmith team arrives quickly to get you back in safely.",
      icon: "🔑",
    },
    {
      title: "Key Programming",
      desc: "We specialize in advanced transponder and remote key programming using state-of-the-art diagnostic tools.",
      icon: "💻",
    },
    {
      title: "Broken Key Extraction",
      desc: "Our experts carefully remove broken keys without damaging your locks or ignition systems.",
      icon: "🛠️",
    },
  ];

  const gallery = [
    "https://media.istockphoto.com/id/1333332393/photo/girl-opens-the-car-with-a-key-close-up.jpg?s=612x612&w=0&k=20&c=XQQxamubF8FVab792q7--nFfATmzGZCSV8zzaVb3bzI=",
    "https://markhamlockandsafe.ca/wp-content/uploads/2014/09/AUTOMOTIVE-LOCKSMITH-777.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0D9xmTqIr8CT5u3H6SPsmrr5tczhPucOmA&s",
    "https://www.carkeyssolutions.co.uk/wp-content/uploads/2024/11/sdsf.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rKTgZc25-SHe2p_dWhwJ9s-5Z1Q6hL6MaQ&s",
    "https://carkeyking.com/wp-content/uploads/2021/12/Auto-Locksmith-Bronx8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYAe2uMsZ0vinBMCPtETPGYWmaHa14wB9Aw&s",
    "https://img.freepik.com/premium-photo/young-woman-holding-hand-car-keys_264197-19979.jpg",
  ];

  return (
    <section className="bg-background text-foreground py-24 px-6 md:px-12 lg:px-20">
      {/* --- SERVICES SECTION --- */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-6 tracking-tight">
          Our Locksmith Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          From car key replacements to emergency lockouts — we offer fast,
          reliable, and affordable locksmith services designed for your peace of mind.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-card border border-border rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-orange-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-6xl mb-5 transform group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* --- CLEAN DIVIDER --- */}
      <div className="max-w-5xl mx-auto mb-10 h-[1px] bg-gradient-to-r from-transparent via-orange-300/40 to-transparent"></div>

      {/* --- GALLERY SECTION --- */}
      <div className="max-w-6xl mx-auto text-center mt-20 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-6 tracking-tight">
          Gallery of Our Work
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Take a look at some of our recent locksmith projects — real customers,
          real results, and real satisfaction.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gallery.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-border shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesAndGallery;
