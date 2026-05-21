import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Luxury palace at sunset"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={85}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Label */}
        <p className="label-tag text-gold-light mb-6 tracking-[0.2em]">
          LUXURY TRAVEL &middot; INDIA
        </p>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          The Art of Indian
          <br />
          <span className="text-gold">Hospitality</span>
        </h1>

        {/* Sub-copy */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          From the snow-capped Himalayas to the sun-kissed shores of Goa,
          experience the grandeur of Bharat through the lens of ultimate luxury.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#booking"
            className="btn-gold px-10 py-4 text-sm rounded-sm tracking-widest uppercase w-full sm:w-auto"
          >
            Begin Your Journey
          </a>
          <a
            href="#tours"
            className="border border-white/30 text-white px-10 py-4 text-sm rounded-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
          >
            Explore Destinations
          </a>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
          {[
            { number: "12+", label: "Years of Excellence" },
            { number: "5,000+", label: "Journeys Curated" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Concierge Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-gold">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-white/60 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
