export default function Footer() {
  return (
    <footer className="bg-primary-container w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-xl font-serif text-white">
            The Global Concierge
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Providing world-class luxury travel and concierge services across
            the Indian subcontinent since 2012.
          </p>
        </div>

        {/* Discover */}
        <div className="space-y-6">
          <h5 className="text-secondary-dim font-sans text-xs tracking-widest">
            DISCOVER
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                href="/fleet"
                className="text-slate-400 hover:text-white text-sm hover:translate-x-1 transition-transform inline-block"
              >
                Fleet Gallery
              </a>
            </li>
            <li>
              <a
                href="/tours"
                className="text-slate-400 hover:text-white text-sm hover:translate-x-1 transition-transform inline-block"
              >
                Bespoke Tours
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm hover:translate-x-1 transition-transform inline-block"
              >
                Member Portal
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-6">
          <h5 className="text-secondary-dim font-sans text-xs tracking-widest">
            SUPPORT
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm hover:translate-x-1 transition-transform inline-block"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm hover:translate-x-1 transition-transform inline-block"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm hover:translate-x-1 transition-transform inline-block"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h5 className="text-secondary-dim font-sans text-xs tracking-widest">
            NEWSLETTER
          </h5>
          <div className="flex">
            <input
              className="bg-white/5 border-none text-white text-sm px-4 py-3 w-full focus:ring-1 focus:ring-secondary placeholder:text-slate-500"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-secondary px-4 text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center max-w-screen-2xl mx-auto px-12">
        <p className="text-slate-400 text-sm tracking-wide">
          © 2024 The Global Concierge. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
