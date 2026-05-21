export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The Global Concierge transformed our family's vision of India into a breathtaking reality. The private access to Jaipur's City Palace was a highlight we will never forget.",
      name: "Marcus Thorne",
      title: "CEO, Thorne Ventures",
      initials: "MT",
    },
    {
      quote:
        "Seamless, professional, and deeply insightful. Our guide in Varanasi wasn't just knowledgeable; they were a cultural bridge that made our spiritual journey profound.",
      name: "Eleanor Vance",
      title: "Philanthropist",
      initials: "EV",
    },
    {
      quote:
        "The fleet quality is unmatched in India. Traveling from Kochi to the mountains in their luxury coaches felt like flying first class on the road.",
      name: "Julian Rossi",
      title: "Executive Producer",
      initials: "JR",
    },
  ];

  return (
    <section id="testimonials" className="section-pad bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="label-tag mb-3">CLIENT STORIES</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            High-End <span className="text-gold">Perspectives</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-cream rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(10,17,40,0.06)] transition-shadow duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-gold"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text-muted text-sm leading-relaxed mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center font-serif text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-serif font-bold text-navy text-sm">
                    {t.name}
                  </p>
                  <p className="text-text-muted text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Divider */}
        <div className="text-center mt-16">
          <p className="font-serif text-xl sm:text-2xl italic text-navy/60 max-w-lg mx-auto">
            &ldquo;Excellence is not an act, but a habit.&rdquo;
          </p>
          <p className="label-tag mt-3">PRIVATE CONCIERGE DIVISION</p>
        </div>
      </div>
    </section>
  );
}
