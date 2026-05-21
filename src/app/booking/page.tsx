"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const FLEET_VEHICLES = [
  'Innova Hycross',
  'Fortuner',
  'Volvo Luxury Coach',
  'Innova Crysta',
  'Force Traveller',
  'BharatBenz',
  'Scorpio',
  'Open Jeep',
  'Ertiga',
  'Dzire',
  'Bolero',
  'Mini Bus'
];

export default function Booking() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", mobileNumber: "", phoneNumber: "",
    pickup: "", dropoff: "", date: "", travelers: "1 - 2 Guests", vehicle: FLEET_VEHICLES[0], specialRequests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [packageDetails, setPackageDetails] = useState<{name: string, price: string} | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const vehicleParam = params.get("vehicle");
    const pkgParam = params.get("package");
    const priceParam = params.get("price");

    if (vehicleParam) {
      setFormData(prev => ({ ...prev, vehicle: vehicleParam }));
    }
    if (pkgParam) {
      setPackageDetails({ name: pkgParam, price: priceParam || "" });
      setFormData(prev => ({
        ...prev,
        specialRequests: `I would like to book the ${pkgParam} package.`
      }));
    }
  }, []);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobileNumber || !formData.pickup || !formData.dropoff || !formData.date) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    const loadingToast = toast.loading("Encrypting and submitting your passage request...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Booking Request from ${formData.firstName} ${formData.lastName}`,
          from_name: "The Global Concierge App",
          "First Name": formData.firstName,
          "Last Name": formData.lastName,
          "Email": formData.email,
          "Mobile Number": formData.mobileNumber,
          "Phone Number": formData.phoneNumber || "Not provided",
          "Pick-up Location": formData.pickup,
          "Drop-off Destination": formData.dropoff,
          "Date of Journey": formData.date,
          "Number of Travelers": formData.travelers,
          "Selected Vehicle": formData.vehicle,
          "Special Requests": formData.specialRequests || "None"
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        toast.success("Quote request received! Our concierge will contact you within 15 minutes.", { id: loadingToast, duration: 5000 });
        setFormData({
          firstName: "", lastName: "", email: "", mobileNumber: "", phoneNumber: "",
          pickup: "", dropoff: "", date: "", travelers: "1 - 2 Guests", vehicle: FLEET_VEHICLES[0], specialRequests: packageDetails ? `I would like to book the ${packageDetails.name} package.` : ""
        });
      } else {
        toast.error(data.message || "Failed to send request. Please try again.", { id: loadingToast, duration: 7000 });
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background font-body text-on-background antialiased relative min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .tonal-shift-bg {
            background: linear-gradient(180deg, rgba(249,249,249,1) 0%, rgba(243,243,244,1) 100%);
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
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
          <div className="hidden md:flex space-x-8 items-center">
            <a className="text-slate-500  hover:text-black  transition-colors font-['Noto_Serif'] tracking-tight" href="/">Home</a>
            <a className="text-slate-500  hover:text-black  transition-colors font-['Noto_Serif'] tracking-tight" href="/fleet">Fleet</a>
            <a className="text-slate-500  hover:text-black  transition-colors font-['Noto_Serif'] tracking-tight" href="/tours">Packages</a>
            <a className="text-slate-500  hover:text-black  transition-colors font-['Noto_Serif'] tracking-tight" href="/contact">Contact</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/booking" className="bg-yellow-600 text-white px-6 py-2.5 text-[10px] font-label font-bold tracking-widest uppercase hover:bg-yellow-700 transition-colors shadow-md rounded-sm">BOOK NOW</a>
          </div>
          <div className="md:hidden flex items-center">
            <span onClick={() => setIsMobileMenuOpen(true)} className="material-symbols-outlined text-black cursor-pointer text-3xl hover:text-yellow-600">menu</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-5 space-y-12">
            <header className="space-y-6">
              <span className="text-secondary font-label text-sm tracking-[0.2em] uppercase font-semibold">Bespoke Travel Planning</span>
              <h1 className="text-5xl md:text-7xl font-headline leading-[1.1] tracking-tight text-primary">
                Secure Your <br />Private Passage
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                Experience a seamless transition between destinations with our elite fleet and professional chauffeurs. Every journey is tailored to your exacting standards.
              </p>
            </header>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-start space-x-4 p-6 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
                <div>
                  <h3 className="font-headline text-lg font-bold">End-to-End Security</h3>
                  <p className="text-sm text-on-surface-variant mt-1">Encrypted booking protocols and vetted professional staff ensure absolute privacy.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-secondary text-3xl">workspace_premium</span>
                <div>
                  <h3 className="font-headline text-lg font-bold">The Gold Standard</h3>
                  <p className="text-sm text-on-surface-variant mt-1">Unrivaled service quality with 24/7 concierge support for every itinerary.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl h-64 shadow-xl">
              <img alt="Luxury vehicle interior" className="w-full h-full object-cover" data-alt="Interior of a luxury executive sedan with leather seats" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEgMWsQJCwAZ_iVO8oI0-eICJHJ01LARjiIilWVxVtyXWF0hNOMgV5IzKoN9kmE02MerXNlltqWnibtXFyh2K6Z5WturtX9J7LFSNpQhtK1Qrs5lJvjGDP-m3SGOvnx269uVY45h7KHRMQ_JZ3iAUxgUhAD7PiCqbf-rbrSR8UP2B3TrCBcCH5aeYiwg0iY3WeyuWByeOYTTxgNVuZmBRnNI-CKiGVeGJGJnW2Za79qQH_WdRdSNWBjVpMBhjDBnVvcCvgwhAOvBNA" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <p className="text-white font-headline italic">"Luxury is in each detail." — Givenchy</p>
              </div>
            </div>
          </div>
          {/* Right Side: The Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest shadow-2xl overflow-hidden">
              {/* Secure Header */}
              <div className="bg-primary-container text-white px-8 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-secondary-fixed-dim" style={{fontVariationSettings: "'FILL' 1"}}>lock</span>
                  <span className="font-label text-xs tracking-widest uppercase font-bold">Secure Booking Portal</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">shield</span>
                  <span className="text-[10px] font-label font-bold">SSL PROTECTED</span>
                </div>
              </div>
              <form className="p-8 md:p-12 space-y-10" onSubmit={handleBookingSubmit}>
                {packageDetails && (
                  <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-lg mb-8 flex items-center justify-between">
                    <div>
                      <span className="text-secondary font-label text-[10px] uppercase tracking-widest font-bold block mb-1">Selected Package</span>
                      <h3 className="text-xl font-headline text-primary">{packageDetails.name}</h3>
                    </div>
                    {packageDetails.price && (
                      <div className="text-right">
                        <span className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest block mb-1">Starting From</span>
                        <span className="text-xl font-headline text-primary">{packageDetails.price}</span>
                      </div>
                    )}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {/* First Name */}
                  <div className="relative">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">First Name</label>
                    <div className="flex items-center border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl">person</span>
                      <input 
                        required
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium placeholder:text-outline/50 outline-none" 
                        placeholder="Given Name" type="text" 
                      />
                    </div>
                  </div>
                  {/* Last Name */}
                  <div className="relative">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">Last Name</label>
                    <div className="flex items-center border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl">person_outline</span>
                      <input 
                        required
                        value={formData.lastName}
                        onChange={e => setFormData({...formData, lastName: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium placeholder:text-outline/50 outline-none" 
                        placeholder="Surname" type="text" 
                      />
                    </div>
                  </div>
                  {/* Email ID */}
                  <div className="relative md:col-span-2">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">Email Address</label>
                    <div className="flex items-center border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl">mail</span>
                      <input 
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium placeholder:text-outline/50 outline-none" 
                        placeholder="name@example.com" type="email" 
                      />
                    </div>
                  </div>
                  {/* Mobile Number */}
                  <div className="relative">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">Mobile Number</label>
                    <div className="flex items-center border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl">smartphone</span>
                      <input 
                        required
                        value={formData.mobileNumber}
                        onChange={e => setFormData({...formData, mobileNumber: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium placeholder:text-outline/50 outline-none" 
                        placeholder="+1 (555) 000-0000" type="tel" 
                      />
                    </div>
                  </div>
                  {/* Phone Number */}
                  <div className="relative">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">Phone Number (Optional)</label>
                    <div className="flex items-center border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl">call</span>
                      <input 
                        value={formData.phoneNumber}
                        onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium placeholder:text-outline/50 outline-none" 
                        placeholder="Home / Office" type="tel" 
                      />
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="md:col-span-2 py-4">
                    <div className="border-t border-outline-variant/20 w-full"></div>
                  </div>
                  {/* Pick-up Location */}
                  <div className="relative">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">Pick-up Location</label>
                    <div className="flex items-center border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl">location_on</span>
                      <input 
                        required
                        value={formData.pickup}
                        onChange={e => setFormData({...formData, pickup: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium placeholder:text-outline/50 outline-none" 
                        placeholder="Hotel, Airport, or Address" type="text" 
                      />
                    </div>
                  </div>
                  {/* Drop-off Location */}
                  <div className="relative">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">Drop-off Destination</label>
                    <div className="flex items-center border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl">near_me</span>
                      <input 
                        required
                        value={formData.dropoff}
                        onChange={e => setFormData({...formData, dropoff: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium placeholder:text-outline/50 outline-none" 
                        placeholder="Where may we take you?" type="text" 
                      />
                    </div>
                  </div>
                  {/* Dates */}
                  <div className="relative">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">Date of Journey</label>
                    <div className="flex items-center border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl">calendar_today</span>
                      <input 
                        required
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium outline-none" 
                        type="date" 
                      />
                    </div>
                  </div>
                  {/* Travelers */}
                  <div className="relative">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">Number of Travelers</label>
                    <div className="flex items-center border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl">groups</span>
                      <select 
                        value={formData.travelers}
                        onChange={e => setFormData({...formData, travelers: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium appearance-none outline-none"
                      >
                        <option>1 - 2 Guests</option>
                        <option>3 - 5 Guests</option>
                        <option>6 - 12 Guests</option>
                        <option>12+ (Private Coach)</option>
                      </select>
                    </div>
                  </div>
                  {/* Vehicle Selection */}
                  <div className="md:col-span-2 relative">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">Select Preferred Vehicle</label>
                    <div className="flex items-center border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl">directions_car</span>
                      <select 
                        value={formData.vehicle}
                        onChange={e => setFormData({...formData, vehicle: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium appearance-none outline-none"
                      >
                        {FLEET_VEHICLES.map(v => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* Special Requests */}
                  <div className="md:col-span-2 relative">
                    <label className="block text-[10px] font-label font-extrabold uppercase tracking-widest text-on-surface-variant mb-2">Special Requests &amp; Inquiries</label>
                    <div className="flex items-start border-b border-outline-variant/30 focus-within:border-secondary transition-colors pb-2">
                      <span className="material-symbols-outlined text-outline mr-3 text-xl pt-1">edit_note</span>
                      <textarea 
                        value={formData.specialRequests}
                        onChange={e => setFormData({...formData, specialRequests: e.target.value})}
                        className="w-full bg-transparent border-none focus:ring-0 p-0 text-primary font-medium placeholder:text-outline/50 resize-none outline-none" 
                        placeholder="Champagne preferences, specific routes, or additional security needs..." rows={3}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-yellow-600 text-white py-5 font-label font-bold text-sm tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all flex items-center justify-center space-x-3 disabled:opacity-50" 
                    type="submit"
                  >
                    <span>{isSubmitting ? "Processing..." : "Request a Quote"}</span>
                    {!isSubmitting && <span className="material-symbols-outlined text-secondary-fixed-dim">arrow_forward</span>}
                  </button>
                  <p className="text-center mt-6 text-[10px] text-outline font-label tracking-widest uppercase">
                    Our concierge will contact you within 15 minutes to confirm details.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>



      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black w-full pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
          <div className="md:col-span-1 space-y-4">
            <span className="text-xl font-headline text-white">The Global Concierge</span>
            <p className="text-slate-400 text-sm font-body">Exclusive transportation services for the discerning traveler, bridging luxury and security across the globe.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-label font-bold text-xs uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              <li><a className="text-slate-400 hover:text-white font-label text-sm hover:translate-x-1 transition-transform inline-block" href="/fleet">Fleet Gallery</a></li>
              <li><a className="text-slate-400 hover:text-white font-label text-sm hover:translate-x-1 transition-transform inline-block" href="/contact">Member Portal</a></li>
              <li><a className="text-slate-400 hover:text-white font-label text-sm hover:translate-x-1 transition-transform inline-block" href="/contact">Locations</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-label font-bold text-xs uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2">
              <li><a className="text-slate-400 hover:text-white font-label text-sm hover:translate-x-1 transition-transform inline-block" href="/">Privacy Policy</a></li>
              <li><a className="text-slate-400 hover:text-white font-label text-sm hover:translate-x-1 transition-transform inline-block" href="/">Terms of Service</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-label font-bold text-xs uppercase tracking-widest">Connect</h4>
            <div className="flex space-x-4">
              <span className="material-symbols-outlined text-yellow-600 cursor-pointer">public</span>
              <span className="material-symbols-outlined text-yellow-600 cursor-pointer">mail</span>
              <span className="material-symbols-outlined text-yellow-600 cursor-pointer">call</span>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-label">
          <span>© 2024 The Global Concierge. All Rights Reserved.</span>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="material-symbols-outlined text-[12px] text-yellow-500" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
            <span>Certified Luxury Operator</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
