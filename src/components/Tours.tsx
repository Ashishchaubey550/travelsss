export default function Tours() {
  const tours = [
    {
      name: "Golden Triangle",
      tagline: "Delhi · Agra · Jaipur",
      description:
        "A royal traverse through the Mughal grandeur and Rajputana elegance in ultimate privacy.",
      duration: "5 Days",
      gradient: "from-amber-700 to-orange-900",
    },
    {
      name: "Kerala Backwaters",
      tagline: "God's Own Country",
      description:
        "Unwind on a bespoke private houseboat journey through the palm-fringed canals and tranquil lagoons.",
      duration: "4 Days",
      gradient: "from-emerald-700 to-teal-900",
    },
    {
      name: "Himalayan Escape",
      tagline: "Ladakh · Manali",
      description:
        "Journey to the roof of the world. Private glamping and guided spiritual retreats in the shadows of giants.",
      duration: "7 Days",
      gradient: "from-sky-700 to-indigo-900",
    },
    {
      name: "Royal Rajasthan",
      tagline: "Jodhpur · Udaipur",
      description:
        "Desert luxury and palace living. Explore the Blue City and shimmering lakes like royalty.",
      duration: "6 Days",
      gradient: "from-rose-700 to-pink-900",
    },
    {
      name: "Varanasi Soul",
      tagline: "The Eternal City",
      description:
        "A profound exploration of the world's oldest living city. Private sunrise boat rides and Aarti ceremonies.",
      duration: "3 Days",
      gradient: "from-orange-600 to-red-900",
    },
    {
      name: "Tiger Trails",
      tagline: "Bandhavgarh · Kanha",
      description:
        "Luxury wildlife safaris. Witness the majesty of the Bengal Tiger in its natural kingdom.",
      duration: "5 Days",
      gradient: "from-lime-700 to-green-900",
    },
  ];

  return (
    <section id="tours" className="section-pad bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-tag mb-3">DESTINATIONS</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Curated <span className="text-gold">Experiences</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            India: A Tapestry of Timeless Elegance. Discover the subcontinent of
            profound beauty and private luxury.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div
              key={tour.name}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              {/* Gradient Background */}
              <div
                className={`h-72 sm:h-80 bg-gradient-to-br ${tour.gradient} transition-all duration-700 group-hover:scale-105`}
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <span className="text-xs uppercase tracking-[0.15em] text-gold-light font-semibold mb-2">
                  {tour.duration}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                  {tour.name}
                </h3>
                <p className="text-white/50 text-xs tracking-wider mb-3">
                  {tour.tagline}
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
                  {tour.description}
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-xs uppercase tracking-widest font-semibold group-hover:gap-2 transition-all">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
