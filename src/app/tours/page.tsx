"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const TOURS_DATA = [
  {
    id: 1,
    category: "Heritage",
    title: "Golden Triangle",
    durationDays: 7,
    durationLabel: "7 Days",
    description: "A royal traverse through Delhi, Agra, and Jaipur. Experience the Mughal grandeur and Rajputana elegance in ultimate privacy.",
    price: "₹3,50,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDGsdn78_Cb1seD6H3UI89umbt2CXrd3u-kygGIJx89UWVAzGj4Elgnto24lcu3kCJ4WAEsLKXjQWTXv6LIYIdgsvb__ZO4FlNS8VnMfYiqxUQQVZbAr_8ewZ1KNhNGJTC4v67T0FN0MCg8tVpEa1RdjZxVP1RO3X_R6a0Nd9KW9cYhnQXUgwKKM6pp1jymuZVEXuAS11tQs54Jyq_njPUzLRXpHS35fzUhIjhctqM1xOfl3BbeM8eNr7L7YH9TQBM0sz0-eUCcaGR",
    imageAlt: "Majestic Taj Mahal at sunrise"
  },
  {
    id: 2,
    category: "Relaxation",
    title: "Kerala Backwaters",
    durationDays: 5,
    durationLabel: "5 Days",
    description: "Unwind on a bespoke private houseboat journey through the palm-fringed canals and tranquil lagoons of God's Own Country.",
    price: "₹3,20,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwpCHVBQVIyflOLeKoFKMLUXqiWhOmMZP5Y-VUVfZrFvaLjlzsQc_Nlz8h3iZGqculmo4UDERMGQfr0r9G7rDGHBi7brUhet-HX8ThXqDaigeT6_t1Y15qo1HwOnQOPeCR7OngMM4GF2uoiRMzwvMOpYQA6vVqJvinudZg9PCNItUvQSbA0LiZLd0tXFrfRQnNYhrz5B8clIwT5oQ4xRrsZsooCRzJLMXQ9E2x2rDTpXfKFrPf6X_mdJu2NCNd3RNwQPINC3kwA6_3",
    imageAlt: "Traditional houseboat on emerald green Kerala backwaters"
  },
  {
    id: 3,
    category: "Adventure",
    title: "Himalayan Escape",
    durationDays: 10,
    durationLabel: "10 Days",
    description: "Journey to the roof of the world. Private glamping in Ladakh and guided spiritual retreats in the shadows of giants.",
    price: "₹4,65,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9laMuuIuCGMxxnCBICk-aDB0iIB-rNDF688TtcqM2k2TFHTM8FcBODwbfTj7tYBpD2zJbXnZxVL49wd8pqGCSww6Yqf68CQeGn8QKJ_ymiUumIGQrJLFimbylBCKSVMek1adAyvFrjvHZOaWJVEDvirJXVglaDt4DU5KRbKbbKEwFReoLYcwdXjJ65bxUImAffKRTI1qnXrHhKex6JPU6rx3o2rxir7i8ugyVYLvrrlWqCQQveK8Np8grp5Nqr51Tafqq7uOmGqHa",
    imageAlt: "Snow capped Himalayan mountains in Ladakh"
  },
  {
    id: 4,
    category: "Heritage",
    title: "Royal Rajasthan",
    durationDays: 12,
    durationLabel: "12 Days",
    description: "Desert luxury and palace living. Explore the Blue City of Jodhpur and the shimmering lakes of Udaipur like royalty.",
    price: "₹6,00,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTiJJ20Xs44QafCEhxtrw_AD5yYNcJwEuTP9xQJCox0u_aiOQvEYFwFUR_hg7xn3T2We93YIzYDZjK_lVm1bkoG4QVvoM4NdsPtzlO5aiqPAogMzGo0ecA0Xv4BgFYW0p0KclteJWmSdjYB753HXFQlk_tNItPbJGXhKdwtsWmNwOy5BOsNlFe3Q5SgAnS3c8gxweezsQrhgFBeGco7WqBys2MNFXbq0IL3vpTO-4HUL6afOxxE4BYVZrXgUiRgpejDutkxX01mtlh",
    imageAlt: "Golden sand dunes and camel safari in Jaisalmer"
  },
  {
    id: 5,
    category: "Heritage",
    title: "Varanasi Soul",
    durationDays: 4,
    durationLabel: "4 Days",
    description: "A profound exploration of the world's oldest living city. Private sunrise boat rides and intimate Aarti ceremonies.",
    price: "₹2,40,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5zrTJp5xYhuv8kNrHKXsbmx-3hU7JdZ5onwfww5LXfmTw4r_2Rye_WvVjc4PBtgAWPomlgIyOYGDJBA3PrNi72MnHynYzHJo1UjhtXWpix72Qtc5t2DnxLzmRmb0R-qpxTI-2ao43JAYyr7i5UtTJi0QDaQ8GeCk7KA7JgZEk0CkmWFVyPFcaFYMTFkQSuZAZMf_9KMlbGoMeg2rJfgJQDJXuytvUjOZDwjRnxGIcMDjJ51PidctxoFi-nzF56ZBQdfWiuSvgZmmo",
    imageAlt: "Evening Ganga Aarti ceremony at Varanasi ghats"
  },
  {
    id: 6,
    category: "Adventure",
    title: "Tiger Trails",
    durationDays: 8,
    durationLabel: "8 Days",
    description: "Luxury wildlife safaris in Bandhavgarh and Kanha. Witness the majesty of the Bengal Tiger in its natural kingdom.",
    price: "₹4,25,000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-VlaVQmm4rByLugu1KyHNuTSHZbccYI5PsWVlbfPA3VC5C5ZGFHgZRWTB3nF_Wk4pc8EsoTqaWTMfNKyMB0o5K8T5cd1xMlsKyiJstJe9QQa0SPDmkWGMpfUUFijkVrukXfHyygNhon5FLwH2zz1RN8a2hbTBhERlfwnE0AzSRHTlMsiMAUESZH-mPrjFivAvlfUex0zelLsiwXYsMF_zCeMIPNcsVH2EWdQekCfPYoRbePPAdnZlk0UKvovjmeHEIyFGDdIAq59M",
    imageAlt: "Bengal tiger in the tall grass of Kanha National Park"
  }
];

export default function Tours() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = useState("All Packages");
  const [activeDuration, setActiveDuration] = useState("Any Duration");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast.error("Please enter your email address.");
      return;
    }
    const loadingToast = toast.loading("Subscribing to newsletter...");
    setTimeout(() => {
      toast.success("Successfully subscribed to our exclusive tours updates!", { id: loadingToast });
      setNewsletterEmail("");
    }, 1200);
  };

  const filteredTours = TOURS_DATA.filter((tour) => {
    // 1. Filter by category
    if (activeCategory !== "All Packages" && tour.category !== activeCategory) {
      return false;
    }
    // 2. Filter by duration
    if (activeDuration !== "Any Duration") {
      if (activeDuration === "1-5 Days" && tour.durationDays > 5) return false;
      if (activeDuration === "6-10 Days" && (tour.durationDays < 6 || tour.durationDays > 10)) return false;
      if (activeDuration === "11+ Days" && tour.durationDays <= 10) return false;
    }
    return true;
  });

  return (
    <div className="bg-surface font-body text-on-surface relative min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .tonal-shift-bg {
            background: linear-gradient(to bottom, rgba(249, 249, 249, 1), rgba(243, 243, 244, 1));
        }
        .animate-bounce-subtle {
            animation: bounce-subtle 3s infinite;
        }
        @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
      ` }} />
      {/* TopNavBar */}
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center space-y-8 font-headline animate-in slide-in-from-top-4 fade-in duration-300">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-8 text-black material-symbols-outlined text-4xl">close</button>
          <a onClick={() => setIsMobileMenuOpen(false)} href="/" className="text-3xl text-black hover:text-yellow-600 transition-colors">Home</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="/fleet" className="text-3xl text-black hover:text-yellow-600 transition-colors">Fleet</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="/tours" className="text-3xl text-black hover:text-yellow-600 transition-colors">Packages</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="text-3xl text-black hover:text-yellow-600 transition-colors">Contact</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="/booking" className="bg-yellow-600 text-white px-8 py-4 text-sm font-label tracking-widest uppercase hover:bg-yellow-700 transition-colors shadow-md rounded-sm mt-8">BOOK NOW</a>
        </div>
      )}

      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center">
            <a href="/"><img src="/logo.jpeg" alt="The Global Concierge" className="h-16 md:h-20 w-auto object-contain" /></a>
          </div>
          <div className="hidden md:flex space-x-8 items-center font-headline tracking-tight">
            <a className="text-slate-500 hover:text-black transition-colors" href="/">Home</a>
            <a className="text-slate-500 hover:text-black transition-colors" href="/fleet">Fleet</a>
            <a className="text-black font-semibold border-b-2 border-yellow-700 pb-1" href="/tours">Packages</a>
            <a className="text-slate-500 hover:text-black transition-colors" href="/contact">Contact</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/booking" className="bg-yellow-600 text-white px-6 py-2.5 text-[10px] font-label font-bold tracking-widest uppercase hover:bg-yellow-700 transition-colors shadow-md rounded-sm">BOOK NOW</a>
          </div>
          <div className="md:hidden flex items-center">
            <span onClick={() => setIsMobileMenuOpen(true)} className="material-symbols-outlined text-black cursor-pointer text-3xl hover:text-yellow-600">menu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-4 block">Curated Experiences</span>
            <h1 className="font-headline text-5xl md:text-7xl leading-tight mb-6">India: A Tapestry of <br /><span className="italic text-secondary">Timeless Elegance</span></h1>
            <p className="font-body text-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed">From the snow-capped Himalayan peaks to the serene emerald backwaters of the south, discover a subcontinent of profound beauty and private luxury.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-low rounded-tl-full overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" data-alt="The Taj Mahal in morning mist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB36EgAWowpiMpC8brQyesTNMAIBdROYwLgLJ39D123SqU5T47ySez03SfWNuDyM6SgyGSQsk-F4LYhEvoLXCJF9dELxwoYb7txdHldSHV7WullVoPh9P9mn98izSojSxa3lVwYH2nF_hu7uCXHOLGKAzkls6nNkGpAw5E7tiTo1l5ToJZWoxXORiYMoUaJ0zdhgjq1l44mKZk5LGM87Gdr7XTq06L4sZ_ZwBHcwFVNNQIe82nuoqeY3VgVF5b_uf1WIz82eRiZX8pv" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 aspect-square bg-white p-4 shadow-xl hidden lg:block">
              <img className="w-full h-full object-cover" data-alt="Traditional Rajasthani palace architecture details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAWctYx-pMQYvD8yxhsmOjCRFJtkaASCwm6CMzfgqQEPQH1m_euZy2caxzs57YPYD-fknjVLiZuAX3vcL_Px8NCy52bbdlLOE0WTuQp1Nh-pW-_eatSfBvQ3LJfeRQSDrTX0hu6luu8EwpXZBG2L8htCPmo7f0B9ClRCMOebAP10moLVp1e5b_5s50WNq2R7Cuz7ojniWyLU8inKU6ls-oixIBZKkOzUyMvR5KN7NmdxygYqhc53EQ0dRztmwbjd6I3A7LlGRv7XkB" />
            </div>
          </div>
        </div>
      </header>

      {/* Filters Section */}
      <section className="px-8 py-12 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-wrap gap-8">
            <div className="space-y-3">
              <label className="font-label text-[11px] uppercase tracking-widest text-outline">Type of Journey</label>
              <div className="flex flex-wrap gap-2">
                {["All Packages", "Adventure", "Relaxation", "Heritage"].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-yellow-600 text-white' : 'bg-white text-on-surface hover:bg-surface-container'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="font-label text-[11px] uppercase tracking-widest text-outline">Duration</label>
              <div className="relative">
                <select 
                  value={activeDuration}
                  onChange={(e) => setActiveDuration(e.target.value)}
                  className="appearance-none bg-white border-none py-2 pl-6 pr-12 text-sm font-medium focus:ring-1 focus:ring-secondary w-full md:w-48 outline-none"
                >
                  <option>Any Duration</option>
                  <option>1-5 Days</option>
                  <option>6-10 Days</option>
                  <option>11+ Days</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-lg">expand_more</span>
              </div>
            </div>
          </div>
          <div className="text-sm font-body text-on-surface-variant italic">
            Showing {filteredTours.length} exclusive itineraries
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <main className="max-w-screen-2xl mx-auto px-8 py-24">
        {filteredTours.length === 0 ? (
          <div className="text-center text-on-surface-variant py-12">
            No tours found matching your criteria. Please adjust your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredTours.map((tour, idx) => (
              <article key={tour.id} className={`group ${idx % 3 === 1 ? 'mt-12 md:mt-0 lg:mt-12' : ''}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-tl-full bg-surface-container mb-6 shadow-sm">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt={tour.imageAlt} src={tour.image} />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1 text-[10px] font-label uppercase tracking-widest">{tour.category}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline text-2xl group-hover:text-secondary transition-colors">{tour.title}</h3>
                    <span className="font-body text-sm font-semibold tracking-tighter">{tour.durationLabel}</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">{tour.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-col">
                      <span className="font-label text-[10px] uppercase text-outline tracking-wider">Starting From</span>
                      <span className="font-headline text-xl text-primary">{tour.price}</span>
                    </div>
                    <a href={`/booking?package=${encodeURIComponent(tour.title)}&price=${encodeURIComponent(tour.price)}`} className="bg-yellow-600 text-white px-8 py-3 text-sm font-medium hover:bg-secondary transition-all">Book Now</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>



      {/* Footer */}
      <footer className="w-full pt-16 pb-8 bg-slate-900 dark:bg-black font-body text-sm tracking-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-headline text-white mb-6">The Global Concierge</h2>
            <p className="text-slate-400 mb-6">Curating extraordinary journeys for the discerning traveler since 2008.</p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-yellow-600 cursor-pointer">social_leaderboard</span>
              <span className="material-symbols-outlined text-yellow-600 cursor-pointer">potted_plant</span>
              <span className="material-symbols-outlined text-yellow-600 cursor-pointer">star</span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase text-xs tracking-[0.2em] mb-6">Experience</h4>
            <ul className="space-y-3">
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/fleet">Fleet Gallery</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/contact">Member Portal</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/fleet">Private Jet Charters</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/tours">Luxury Villas</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase text-xs tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/contact">About Us</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/">Privacy Policy</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/">Terms of Service</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/contact">Press Kit</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-semibold uppercase text-xs tracking-[0.2em] mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe for invitation-only itineraries.</p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <input 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="bg-slate-800 border-none text-white text-xs px-4 py-3 w-full focus:ring-1 focus:ring-yellow-600 outline-none" 
                placeholder="Email Address" 
                type="email" 
              />
              <button type="submit" className="bg-yellow-600 text-slate-900 px-4 py-3">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-12 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">© 2024 The Global Concierge. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a className="text-slate-500 hover:text-white" href="/">Cookie Policy</a>
            <a className="text-slate-500 hover:text-white" href="/">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
