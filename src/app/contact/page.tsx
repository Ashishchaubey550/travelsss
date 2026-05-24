"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", service: "Private Jet Charter", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields.");
      return;
    }
    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your inquiry securely...");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Inquiry from ${formData.fullName}`,
          from_name: "The Global Concierge App",
          "Full Name": formData.fullName,
          "Email": formData.email,
          "Service Interest": formData.service,
          "Message": formData.message
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        toast.success("Inquiry received! Our concierge will contact you shortly.", { id: loadingToast, duration: 5000 });
        setFormData({ fullName: "", email: "", service: "Private Jet Charter", message: "" });
      } else {
        toast.error(data.message || "Failed to send inquiry. Please try again.", { id: loadingToast, duration: 7000 });
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast.error("Please enter your email address.");
      return;
    }
    const loadingToast = toast.loading("Subscribing to newsletter...");
    setTimeout(() => {
      toast.success("Successfully subscribed to our exclusive updates!", { id: loadingToast });
      setNewsletterEmail("");
    }, 1200);
  };

  return (
    <div className="bg-background text-on-background font-body antialiased relative min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .tonal-shift-bg {
          background: linear-gradient(to bottom, #ffffff, #f3f3f4);
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

      <nav className="fixed top-0 w-full z-50 bg-white/80  backdrop-blur-md shadow-sm ">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center">
            <a href="/"><img src="/logo.jpeg" alt="The Global Concierge" className="h-16 md:h-20 w-auto object-contain" /></a>
          </div>
          <div className="hidden md:flex space-x-10 items-center font-['Noto_Serif'] tracking-tight">
            <a className="text-slate-500  hover:text-black  transition-colors" href="/">Home</a>
            <a className="text-slate-500  hover:text-black  transition-colors" href="/fleet">Fleet</a>
            <a className="text-slate-500  hover:text-black  transition-colors" href="/tours">Packages</a>
                        <a className="text-black  font-semibold border-b-2 border-yellow-700 pb-1" href="/contact">Contact</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/booking" className="bg-yellow-600 text-white px-6 py-2.5 text-[10px] font-label font-bold tracking-widest uppercase hover:bg-yellow-700 transition-colors shadow-md rounded-sm">BOOK NOW</a>
          </div>
          <div className="md:hidden flex items-center">
            <span onClick={() => setIsMobileMenuOpen(true)} className="material-symbols-outlined text-black cursor-pointer text-3xl hover:text-yellow-600">menu</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <header className="max-w-screen-2xl mx-auto px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="font-label text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Get In Touch</span>
              <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight tracking-tight">
                Crafting your <br /><span className="italic text-secondary">extraordinary</span> journey.
              </h1>
            </div>
            <div className="lg:col-span-4 text-on-surface-variant font-body text-lg leading-relaxed">
              Our private advisors are available 24/7 to curate your global itinerary. Visit our flagship atelier or reach out via our secure channels.
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <section className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-2xl shadow-primary/5 rounded-none">
            {/* Contact Form Section */}
            <div className="lg:col-span-5 bg-primary-container p-12 md:p-16 flex flex-col justify-between">
              <div>
                <h2 className="font-headline text-white text-3xl mb-8">Secure Inquiry</h2>
                <form className="space-y-8" onSubmit={handleInquirySubmit}>
                  <div className="relative group">
                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-primary-container mb-2">Full Name</label>
                    <input 
                      required
                      value={formData.fullName}
                      onChange={e => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-surface-container-low/10 border-none border-b border-outline-variant/20 py-4 px-0 text-white focus:ring-0 focus:border-secondary transition-all placeholder:text-white/20" 
                      placeholder="Johnathan Doe" type="text" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-primary-container mb-2">Private Email</label>
                    <input 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-surface-container-low/10 border-none border-b border-outline-variant/20 py-4 px-0 text-white focus:ring-0 focus:border-secondary transition-all placeholder:text-white/20" 
                      placeholder="j.doe@example.com" type="email" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-primary-container mb-2">Vehicle Preferred</label>
                    <div className="relative">
                      <select 
                        required
                        value={formData.service}
                        onChange={e => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-transparent border-none border-b border-outline-variant/20 py-4 px-0 text-white focus:ring-0 focus:border-secondary transition-all appearance-none pr-8 cursor-pointer"
                      >
                        <option value="" disabled className="bg-primary-container text-white">Select a vehicle...</option>
                        <option value="Innova Crysta" className="bg-primary-container text-white">Innova Crysta</option>
                        <option value="Toyota Fortuner" className="bg-primary-container text-white">Toyota Fortuner</option>
                        <option value="Volvo Luxury Coach" className="bg-primary-container text-white">Volvo Luxury Coach</option>
                        <option value="Force Traveller" className="bg-primary-container text-white">Force Traveller</option>
                        <option value="BharatBenz" className="bg-primary-container text-white">BharatBenz</option>
                        <option value="Scorpio" className="bg-primary-container text-white">Scorpio</option>
                        <option value="Open Jeep" className="bg-primary-container text-white">Open Jeep</option>
                        <option value="Ertiga" className="bg-primary-container text-white">Ertiga</option>
                        <option value="Dzire" className="bg-primary-container text-white">Dzire</option>
                        <option value="Bolero" className="bg-primary-container text-white">Bolero</option>
                        <option value="Mini Bus" className="bg-primary-container text-white">Mini Bus</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">expand_more</span>
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="block font-label text-[10px] uppercase tracking-widest text-on-primary-container mb-2">Message</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-surface-container-low/10 border-none border-b border-outline-variant/20 py-4 px-0 text-white focus:ring-0 focus:border-secondary transition-all placeholder:text-white/20 resize-none" 
                      placeholder="How may we elevate your next experience?" rows={4}
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-label font-bold py-5 tracking-widest uppercase transition-all flex items-center justify-center gap-3 group disabled:opacity-50" 
                    type="submit"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    {!isSubmitting && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>}
                  </button>
                </form>
              </div>
            </div>
            {/* Map Section */}
            <div className="lg:col-span-7 relative min-h-[500px] bg-surface-container">
              <div className="absolute inset-0 grayscale contrast-125 opacity-80 bg-surface-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118946.9926838386!2d81.56581985954714!3d21.261971701385412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee1204ff9e240!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1700685651543!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" style={{ border: 0 }}></iframe>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 to-transparent"></div>
              {/* Floating Map Card */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-12 md:left-auto md:right-12 bg-white/90 backdrop-blur-xl p-6 md:p-8 max-w-full md:max-w-xs shadow-2xl">
                <h3 className="font-headline text-xl mb-4 text-primary">Raipur Flagship</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                  Level 4, Signature Tower,<br />
                  VIP Road, Vishal Nagar, Raipur 492001
                </p>
                <a className="text-secondary font-bold text-xs tracking-widest uppercase border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=Signature+Tower,+VIP+Road,+Vishal+Nagar,+Raipur,+Chhattisgarh+492001">Get Directions</a>
              </div>
            </div>
          </div>
        </section>

        {/* Headquarters Details */}
        <section className="max-w-screen-2xl mx-auto px-8 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
              <h4 className="font-headline text-2xl text-primary">Our Headquarters</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Level 4, Signature Tower,<br />
                VIP Road, Vishal Nagar,<br />
                Raipur, Chhattisgarh 492001
              </p>
            </div>
            <div className="space-y-4">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>call</span>
              <h4 className="font-headline text-2xl text-primary">Direct Lines</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">
                International: +91 7400503816<br />
                Alternative: +91 9685968551
                Whatsapp: 6269048092
              </p>
            </div>
            <div className="space-y-4">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>mail</span>
              <h4 className="font-headline text-2xl text-primary">Digital Correspondence</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Inquiries: Shuklatravel00@gmail.com<br />
              </p>
            </div>
          </div>
        </section>

        {/* Social Presence */}
        <section className="max-w-screen-2xl mx-auto px-8 mt-32 border-t border-outline-variant/20 pt-16 flex flex-col md:flex-row justify-between items-center">
          <h5 className="font-headline text-xl text-primary mb-8 md:mb-0">Connect via our social channels</h5>
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center">
            <a className="text-on-surface-variant hover:text-secondary transition-all font-label text-xs uppercase tracking-[0.3em]" href="https://instagram.com">Instagram</a>
            <a className="text-on-surface-variant hover:text-secondary transition-all font-label text-xs uppercase tracking-[0.3em]" href="https://linkedin.com">LinkedIn</a>
            <a className="text-on-surface-variant hover:text-secondary transition-all font-label text-xs uppercase tracking-[0.3em]" href="https://twitter.com">Twitter / X</a>
            <a className="text-on-surface-variant hover:text-secondary transition-all font-label text-xs uppercase tracking-[0.3em]" href="https://facebook.com">Facebook</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black w-full pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
          <div className="space-y-6">
            <div className="text-xl font-serif text-white">The Global Concierge</div>
            <p className="text-slate-400 font-body text-sm leading-relaxed">Defining the pinnacle of luxury travel and lifestyle management since 2008.</p>
          </div>
          <div>
            <h6 className="text-yellow-600 font-label font-bold uppercase tracking-widest text-xs mb-6">Explore</h6>
            <ul className="space-y-4 font-['Manrope'] text-sm tracking-wide">
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/fleet">Fleet Gallery</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/contact">Member Portal</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/tours">Destinations</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-yellow-600 font-label font-bold uppercase tracking-widest text-xs mb-6">Legal</h6>
            <ul className="space-y-4 font-['Manrope'] text-sm tracking-wide">
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/">Privacy Policy</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-yellow-600 font-label font-bold uppercase tracking-widest text-xs mb-6">Newsletter</h6>
            <form className="flex items-center border-b border-slate-700 pb-2" onSubmit={handleNewsletterSubmit}>
              <input 
                required
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                className="bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-slate-600 w-full outline-none" 
                placeholder="Email Address" type="email" 
              />
              <button type="submit" className="text-white hover:text-yellow-500 transition-colors">
                <span className="material-symbols-outlined">north_east</span>
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 font-body text-[10px] uppercase tracking-widest">
          <p>© 2024 The Global Concierge. All Rights Reserved.</p>
          <p>Crafted for the discerning traveler</p>
        </div>
      </footer>


    </div>
  );
}
