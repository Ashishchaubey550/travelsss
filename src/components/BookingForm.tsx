"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function BookingForm() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.service = selectedService || "Not specified";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New Website Inquiry",
          from_name: "The Global Concierge Form",
          ...data
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Request sent successfully! Our concierge will contact you soon.");
        e.currentTarget.reset();
        setSelectedService(null);
      } else {
        toast.error(result.message || "Failed to send request. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="section-pad bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="label-tag mb-3">RESERVATION</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Secure Your <span className="text-gold">Private Passage</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Experience a seamless transition between destinations. Every journey
            is tailored to your exacting standards.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-surface rounded-sm overflow-hidden shadow-[0_20px_40px_rgba(10,17,40,0.06)]">
          {/* Navy Header */}
          <div className="bg-gradient-to-r from-navy to-navy-light px-8 py-6">
            <h3 className="font-serif text-xl text-white font-bold">
              Secure Inquiry
            </h3>
            <p className="text-white/60 text-sm mt-1">
              Our concierge will contact you within 15 minutes to confirm
              details.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10">
            {/* Service Selection */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-gold-muted font-semibold mb-4">
                Select Service
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: "fleet",
                    title: "Corporate Fleet",
                    desc: "Luxury sedans and SUVs for seamless business travel.",
                  },
                  {
                    id: "tours",
                    title: "Guided Tours",
                    desc: "Bespoke itineraries curated by local travel experts.",
                  },
                ].map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service.id)}
                    className={`text-left p-5 rounded-sm border-2 transition-all duration-300 ${
                      selectedService === service.id
                        ? "border-gold bg-gold/5"
                        : "border-surface-dim bg-cream hover:border-outline/30"
                    }`}
                  >
                    <p className="font-serif font-bold text-navy text-base mb-1">
                      {service.title}
                    </p>
                    <p className="text-text-muted text-sm">{service.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Information */}
            <p className="text-xs uppercase tracking-widest text-gold-muted font-semibold mb-4">
              Guest Information
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs text-text-muted mb-2 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Your name"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-surface-dim focus:border-gold focus:outline-none text-navy placeholder:text-outline/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-surface-dim focus:border-gold focus:outline-none text-navy placeholder:text-outline/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-2 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-surface-dim focus:border-gold focus:outline-none text-navy placeholder:text-outline/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-2 uppercase tracking-wider">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-surface-dim focus:border-gold focus:outline-none text-navy transition-colors"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs text-text-muted mb-2 uppercase tracking-wider">
                Special Requests
              </label>
              <textarea
                rows={3}
                name="specialRequests"
                placeholder="Any special requirements or preferences..."
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-surface-dim focus:border-gold focus:outline-none text-navy placeholder:text-outline/50 transition-colors resize-none"
              />
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 mb-8 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                End-to-End Security
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                The Gold Standard
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                15-min Response Guarantee
              </div>
            </div>

            {/* Submit */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-gold w-full py-4 text-sm rounded-sm tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending Request..." : "Request Private Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
