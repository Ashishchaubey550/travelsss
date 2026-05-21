export default function Fleet() {
  const vehicles = [
    {
      name: "Innova Crysta",
      description:
        "The gold standard of Indian luxury MPVs. Perfect for family excursions and corporate delegates.",
      capacity: "6 Passengers",
      type: "Premium MPV",
      emoji: "🚐",
    },
    {
      name: "Toyota Fortuner",
      description:
        "Unrivaled presence and power. Navigate any terrain in absolute comfort and command.",
      capacity: "7 Passengers",
      type: "Elite SUV",
      emoji: "🚙",
    },
    {
      name: "Volvo Multi-Axle",
      description:
        "First-class seating for group journeys. Reclining suites, climate control, and onboard service.",
      capacity: "30+ Passengers",
      type: "Luxury Coach",
      emoji: "🚌",
    },
  ];

  return (
    <section id="fleet" className="section-pad bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-tag text-gold-light mb-3 tracking-[0.2em]">
            TRANSPORTATION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Elite <span className="text-gold">Fleet</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Travel the subcontinent in vehicles curated for luxury, safety, and
            reliability.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group bg-white/5 rounded-sm overflow-hidden hover:bg-white/10 transition-all duration-500"
            >
              {/* Vehicle Visual */}
              <div className="h-48 bg-gradient-to-br from-navy-light to-navy flex items-center justify-center text-7xl">
                {vehicle.emoji}
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase tracking-widest text-gold-muted font-semibold">
                    {vehicle.type}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3">
                  {vehicle.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {vehicle.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-wider">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  {vehicle.capacity}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm uppercase tracking-widest font-semibold group"
          >
            Explore Full Fleet
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
