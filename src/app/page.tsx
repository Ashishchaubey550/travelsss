"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    const loadingToast = toast.loading("Subscribing to newsletter...");
    setTimeout(() => {
      toast.success("Successfully subscribed to an invitation-only itinerary!", { id: loadingToast });
      setEmail("");
    }, 1200);
  };

  return (
    <div className="bg-background font-body text-on-background antialiased relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .tonal-shift-bg {
          background: linear-gradient(to bottom, rgba(249, 249, 249, 0.8), rgba(243, 243, 244, 0.9));
        }
        .asymmetric-clip {
          border-top-left-radius: 2rem;
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
          <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight">
            <a className="text-black  font-semibold border-b-2 border-secondary pb-1" href="/">Home</a>
            <a className="text-slate-500  hover:text-black  transition-colors" href="/fleet">Fleet</a>
            <a className="text-slate-500  hover:text-black  transition-colors" href="/tours">Packages</a>
                        <a className="text-slate-500  hover:text-black  transition-colors" href="/contact">Contact</a>
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
      <section className="relative min-h-[100svh] md:h-[921px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Luxury Indian Palace" className="w-full h-full object-cover" data-alt="Stunning aerial view of a majestic Indian palace at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsi60490hnZKj1scOKZJp-m1IIM7WPrqbCmkBQ7fjCj3azz9JlLpsk0nUz2Yzd9V9BftRann-e30ZkQ4o6p_bJMu1z7si1Au1Jsm6oHM7JgPF_gTTSwVArLr9sluK5bhF4nO6OegxuT-m1DgrH1n6RDNZ9-MsK4gWzPX6C4w8Q8vtm2M2L8IDjfxOAqzHaIulQXl9KvrGo8sS4co-Om2YE9fS31mdSV1P32vfWIeECGZLaSd_eUf3qfucayVlLbVSCJjZgOjfpisla" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/80 via-primary-container/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-secondary-fixed-dim font-label text-sm tracking-[0.2em] mb-4 block">ROYAL HERITAGE EXPERIENCES</span>
            <h1 className="font-headline text-5xl md:text-7xl text-white mb-8 leading-[1.1] tracking-tight">
              The Art of <br /><span className="italic">Indian Hospitality</span>
            </h1>
            <p className="text-white/80 text-lg mb-10 max-w-lg leading-relaxed font-body">
              From the snow-capped Himalayas to the sun-kissed shores of Goa, experience the grandeur of Bharat through the lens of ultimate luxury.
            </p>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full md:w-auto">
              <a href="/booking" className="bg-yellow-600 text-white px-10 py-5 font-label tracking-widest text-xs rounded-none hover:bg-secondary transition-all text-center">
                START YOUR JOURNEY
              </a>
              <a href="/tours" className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 font-label tracking-widest text-xs rounded-none hover:bg-white/20 transition-all text-center">
                VIEW BROCHURE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel With Us Section */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto text-center mb-20">
          <span className="text-secondary font-label text-xs tracking-[0.3em] block mb-2 uppercase">Why Travel With Us</span>
          <h2 className="font-headline text-5xl text-primary">Unrivaled Expertise. Endless Discovery.</h2>
        </div>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-10 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border-t-4 border-secondary">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-yellow-600 text-3xl">public</span>
            </div>
            <h3 className="font-headline text-xl mb-4 text-primary-container">Expert Local Guides</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Historians and storytellers who bring India's diverse heritage to life with insider access.</p>
          </div>
          <div className="p-10 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border-t-4 border-secondary">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-yellow-600 text-3xl">support_agent</span>
            </div>
            <h3 className="font-headline text-xl mb-4 text-primary-container">24/7 Concierge</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">A dedicated team at your beck and call, ensuring seamless transitions across all time zones.</p>
          </div>
          <div className="p-10 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border-t-4 border-secondary">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-yellow-600 text-3xl">edit_calendar</span>
            </div>
            <h3 className="font-headline text-xl mb-4 text-primary-container">Tailor-Made Itineraries</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">No two journeys are alike. We craft bespoke experiences that reflect your unique passions.</p>
          </div>
          <div className="p-10 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border-t-4 border-secondary">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-yellow-600 text-3xl">directions_car</span>
            </div>
            <h3 className="font-headline text-xl mb-4 text-primary-container">Luxury Fleet</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">From elite SUVs to private coaches, travel the subcontinent in unrivaled comfort and style.</p>
          </div>
        </div>
      </section>

      {/* Diverse Landscapes Visual Showcase */}
      <section className="py-32 px-8 bg-primary-container overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 group relative overflow-hidden h-[600px]">
            <img alt="Himalayas" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOPiedIbmEeO3LGQBxhlbdYn9vbB7_XV6Gd-4T0DUEiDoAMZw3Y10EdiFb966CC711UEfdeJpozzjoEir04LdlutIn94c5q7UmG8s8cWweZnZlnH7o6_psvzc0XclbPVlW5xxifqpqF28wqUJeBQwZonyUFv24M7tLKxKk_fwpd1CoO1L2Oryjh4qjdVTegWA-AR3lR91c04jM999yNBCqq39gSOFRmwiXzZd01s5aLXqvtZN98tpCWnFU53oChMkA232d_aFKk5_b" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <span className="text-secondary-fixed-dim font-label text-xs tracking-widest mb-2">NORTHERN MAJESTY</span>
              <h3 className="text-white font-headline text-3xl">The Himalayas</h3>
            </div>
          </div>
          <div className="md:w-1/3 group relative overflow-hidden h-[600px] md:mt-20">
            <img alt="Goa Beaches" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0ivXq5y2zQpATRwgVxBEzeQj6d6Ks9pydPrHWEgqjbprUm9egX7Xe9yCAzOWL2t_E0MdhMIJuWej5x6uuhHnWRy-sKHsyeNwngP9HQXXfu4gHWCwkxq7M5GTLbOfMszWCCbTQvm41Jf_d439aLYFLQn4GncdfnntVDCk70ih141U8kMcGw21zuFF0WhQ3Uld3qnAVN2nRcLnvEAK1q1qeBuKBZjSnAnwtBry1aXeZaYPx0xeJlwQ5Lizz71nD7qlXDRP9C5puwFd2" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <span className="text-secondary-fixed-dim font-label text-xs tracking-widest mb-2">TROPICAL LUXURY</span>
              <h3 className="text-white font-headline text-3xl">Coastal Goa</h3>
            </div>
          </div>
          <div className="md:w-1/3 group relative overflow-hidden h-[600px]">
            <img alt="Rajasthan Heritage" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC29RHtpPo0yXWHNg8ViSjjfKdRh83zQDFm7PzJHCPTDfnmY4qJGGKJE1F_dggREPAVISKipWXixsFCBoFM9xp9IYx530Iey0pFy4Leuyd3lG2JzxtLCgQpQVzOQX6iqSGgCrif62NISP_OZIAk13_gjspZRclCnmmoX38jCjiOaS54t4eq4KUTkuQuNbJGz82SiVySgCsZOhIiJTtw9bkyo0FMIGsXooft0K7fGiynRMLiLR-Jcrjj0n3xQvPJcknrXI2Lgujx1jQo" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <span className="text-secondary-fixed-dim font-label text-xs tracking-widest mb-2">ROYAL HERITAGE</span>
              <h3 className="text-white font-headline text-3xl">Desert Forts</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Asymmetric Layout (Legacy/Security focus) */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <h2 className="font-headline text-4xl text-primary mb-8 leading-tight">Beyond Transportation: <br />A Secure Legacy</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-yellow-600" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl mb-2">Uncompromising Safety</h4>
                  <p className="text-on-surface-variant leading-relaxed">Rigorous background checks and advanced vehicle tracking ensure peace of mind for every mile.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-yellow-600" style={{fontVariationSettings: "'FILL' 1"}}>concierge</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl mb-2">Elite Protocol</h4>
                  <p className="text-on-surface-variant leading-relaxed">Our chauffeurs are trained in international etiquette and local nuances of royal hospitality.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 relative">
            <div className="aspect-[4/3] bg-surface-container-high asymmetric-clip overflow-hidden shadow-2xl">
              <img alt="Luxury Chauffeur" className="w-full h-full object-cover" data-alt="Professional chauffeur standing next to a luxury black car" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOVCAP_f0NeGxCU9XG1iaMrpk5STqDBOngrlQShFJV9Worlv2jeT2-45zBZIlb2ADnQT6yrO8_2boUhRsZaa-pf4J4VTiIk-kloPnAxwj6q2uASRGLiwt7-lr8AulioHIRhTKMvrOTIVinjxAGIREKPmX7_M1xfs4gX_2KreIxjhsbObIPj0CCix5nyLQNkyA8MLGT-F34PxQ7wiUts2-w4Ksj9PMM5sFtWwW3alfITsuryqXxBlZly5_UvMt97EXzWnI8Xn3ECPV1" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary-container p-10 hidden lg:block">
              <p className="text-white font-headline text-2xl italic">"Excellence is not an act, but a habit."</p>
              <p className="text-secondary-fixed-dim font-label text-xs tracking-widest mt-4">PRIVATE CONCIERGE DIVISION</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-secondary font-label text-xs tracking-[0.3em] block mb-2 uppercase">Client Voices</span>
            <h2 className="font-headline text-5xl text-primary">High-End Perspectives</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-white p-12 shadow-sm relative">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-6xl absolute top-8 right-8 opacity-20">format_quote</span>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed font-body">"The Global Concierge transformed our family's vision of India into a breathtaking reality. The private access to Jaipur's City Palace was a highlight we will never forget."</p>
              <div className="flex items-center gap-4">
                <img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1svifhlhOSgr8e-VoFWNLi9ZNB2V1WDp3AnG331TBJtgAQ6-YygsritVfrPURQdn0_lb5Eq-5N2XXMBXeFtZwcCGXnv8t4Z_edDxtv1385t-RC5BVOJvfpj8kqEjp45yoRs8u8NEXdTBxTyXJEw6B2sKncipB3i79D5n9lSVweUXWNsD7Q3c5sgg7NRQVh8jJtw6oWByNfJAaqOvlUYkpHoWJrrsb_DZC62OfMRt-5gmM6OGIroHQu-WNWSCOeHPF4NCn5u5y_9mr" />
                <div>
                  <h5 className="font-headline text-primary font-bold">Marcus Thorne</h5>
                  <p className="text-xs text-secondary tracking-widest uppercase">CEO, Thorne Ventures</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 shadow-sm relative">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-6xl absolute top-8 right-8 opacity-20">format_quote</span>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed font-body">"Seamless, professional, and deeply insightful. Our guide in Varanasi wasn't just knowledgeable; they were a cultural bridge that made our spiritual journey profound."</p>
              <div className="flex items-center gap-4">
                <img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcJ7LXczeJY8kmerbnPz73Nc7Fp5hdi8tQ5y8vFB7mfCD1pzFEfh22XNA3d5SZ8aRWMasITaF_syTBbkJsI9crdsPsFs1wmHUHaYRNj5rY7BRyD_QopKNQzx2decqueknhiQUNetPTMWXPBSbu0KKczthWe2zmx-VLrX0h48OYWVG8QNiP8dd6GpkbARovwaljFdL67SteStyxpyDBq4F0ktjP2ffPhlXmWx4yzCr1-VmOaHrsPoibOF2KUdtDHX5ajqbqW3Rgseo2" />
                <div>
                  <h5 className="font-headline text-primary font-bold">Eleanor Vance</h5>
                  <p className="text-xs text-secondary tracking-widest uppercase">Philanthropist</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 shadow-sm relative">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-6xl absolute top-8 right-8 opacity-20">format_quote</span>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed font-body">"The fleet quality is unmatched in India. Traveling from Kochi to the mountains in their luxury coaches felt like flying first class on the road."</p>
              <div className="flex items-center gap-4">
                <img alt="Client" className="w-12 h-12 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfdh2IWsE215H6FkXwixaQwNwEXwKGs0pl37z_Vu5hkDM53F3qIVScv6QkiqE_yIpjE60z9S3iEsKniJhVBjJ1KCUU03NlhIcQItsa4qm7ePLWUzwDsizrm3V9jrNdZNFxahZ-Oi3iD1aC5fSC_gcmHzcqtsllmuXPjrtD3xMTvjNpqtjsTGNQSKLW_LrbExUNBr10ARvAAcIUKCGzscmSWEYEoP1nV2kDnBHlUiTgbi7-tTC5xNW-sam3vH-0mLSXuLDLzi2VdRlz" />
                <div>
                  <h5 className="font-headline text-primary font-bold">Julian Rossi</h5>
                  <p className="text-xs text-secondary tracking-widest uppercase">Executive Producer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Elite Fleet - Bento Grid */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-secondary font-label text-xs tracking-[0.3em] block mb-2 uppercase">The Collection</span>
              <h2 className="font-headline text-5xl text-primary">Our Elite Fleet</h2>
            </div>
            <a className="font-label text-xs tracking-widest text-primary border-b border-primary pb-2 hover:text-secondary hover:border-secondary transition-all" href="/fleet">EXPLORE FULL FLEET →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vehicle Card 1 */}
            <div className="bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="h-64 overflow-hidden">
                <img alt="Innova Crysta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Modern white Toyota Innova Crysta parked on a clean road" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwOpaMepiSeAnEjfjQ2JB8JUHTIm8FU5gX31QWfVNkYHWsb7FNRrt_PBlQxpb3z2C0rUl1GvhSVjwFLHizu3WBnIojxs1v23T5gfFSUc9GWQcX9BpylbpxWvFYR07d_MAcO7QQjTRxEwP2vl0M1rVBc9dyr6K_XIZogcw9VNE7Hu0timDOKav_hjHUHv_BnD3m71CN6VzXWojfASkH_HkhtREXvOchMvtdGHh_0rSUVmW1CRoQ5nNfcizQdGQ5qHVWZrl1xGeayHOf" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline text-2xl">Innova Crysta</h3>
                  <span className="text-secondary-fixed-dim"><span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span></span>
                </div>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">The gold standard of Indian luxury MPVs. Perfect for family excursions and corporate delegates.</p>
                <div className="flex justify-between items-center pt-6 border-t border-surface-container">
                  <a href="/booking?vehicle=Innova+Crysta" className="text-xs font-label tracking-widest text-secondary group-hover:translate-x-2 transition-transform">BOOK NOW</a>
                </div>
              </div>
            </div>
            {/* Vehicle Card 2 */}
            <div className="bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="h-64 overflow-hidden">
                <img alt="Toyota Fortuner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Black Toyota Fortuner SUV on a scenic mountain road" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmfejINwmQDDz_QwE-vodi3JMU2VKihHuZXSFslbuJBy2v8oYtrDcm9yIIgeofeF6UeRwTCLQ3lYGT3tdjrJ23etFCSlZsIRWWZ4qZdodpO8I9HBWXgtqAKgwliGEOWtw2i4L3kIpqzAnD3I4-XGgu-B2x9D_DwlBehcULZYW3l2CfGLkb2mn3cgeZAJa3hhqH__8-7Q_GMiP3u5pENXkwLBgvSunT5O84z1Yx1bBqknMVrVE3hEl_hW8Y9BC_lirLaDJM32a1q7gW" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline text-2xl">Toyota Fortuner</h3>
                  <span className="text-secondary-fixed-dim"><span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span></span>
                </div>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">Unrivaled presence and power. Navigate any terrain in absolute comfort and command.</p>
                <div className="flex justify-between items-center pt-6 border-t border-surface-container">
                  <a href="/booking?vehicle=Fortuner" className="text-xs font-label tracking-widest text-secondary group-hover:translate-x-2 transition-transform">BOOK NOW</a>
                </div>
              </div>
            </div>
            {/* Vehicle Card 3 */}
            <div className="bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="h-64 overflow-hidden">
                <img alt="Volvo Luxury Coach" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Large silver Volvo luxury coach for travel groups" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLvy753vvvZRT9iTitpbaLk2Nd9dSx0a-ecfZ-vBsKvHvdLienJvgkTaDdQm4_QicXXWZaL5uhHlzDdXUOJxkRaxuNiH8SI5UidaBuxPTUG_yEGAfKbS7ISdP_ykdYQeitjcPwBpaKTRBLurJe1VW74GoRegAzk75Re-qRQMDtpzoSjq5QaodIBVraxuvjF6SzlhvZu7y2A7x8olSZFqHPADuKp6USEJs2efrUgE3hpxTWusKGb_U-bIxw_VUQCS_J0pOViDc7qXFi" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline text-2xl">Volvo Multi-Axle</h3>
                  <span className="text-secondary-fixed-dim"><span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span></span>
                </div>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">First-class seating for group journeys. Reclining suites, climate control, and onboard service.</p>
                <div className="flex justify-between items-center pt-6 border-t border-surface-container">
                  <a href="/booking?vehicle=Volvo+Luxury+Coach" className="text-xs font-label tracking-widest text-secondary group-hover:translate-x-2 transition-transform">BOOK NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages - Layered Content */}
      <section className="py-32 px-8 overflow-hidden bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-headline text-5xl text-primary text-center mb-24">Curated Experiences</h2>
          <div className="relative flex flex-col space-y-32">
            {/* Package 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 relative">
                <div className="bg-primary-container absolute -inset-4 z-0"></div>
                <img alt="Taj Mahal" className="relative z-10 w-full aspect-video object-cover shadow-2xl" data-alt="Taj Mahal at sunrise with reflection in the water" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkVTX5JcBQk6lo__1KN-CP6Js9kp8u2G5pi1u29m6B6WbhOSLNALAW6Vbe9dl6qyz_nAE8Tr-fQaBIHc3aQ1SB-WGRlSw5gRhSblkk9qiWfh4dVZSKaVTdbbykybrdpXAGuwT0DZAXynDIkR4OgjpXC5SeiABqSnryd2qTQ4PE5u9RP6wywG1aKvbOMZwWP3IX8HL3SjGiqlkFuwB6Yadn-nd7ERUQAH1b4ZeYdkMjGCqMtQ2y0IExAxQr3QXyo9ORX3bzr9MX748b" />
              </div>
              <div className="md:w-1/2">
                <span className="text-secondary font-label text-xs tracking-widest mb-4 block">7 DAYS • NORTH INDIA</span>
                <h3 className="font-headline text-4xl mb-6">The Golden Triangle Royale</h3>
                <p className="text-on-surface-variant leading-loose mb-8">Traverse Delhi, Agra, and Jaipur in a private luxury limousine. Stay at authentic heritage palaces and enjoy sunrise at the Taj Mahal with a private guide.</p>
                <a href="/booking?package=The+Golden+Triangle+Royale" className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors inline-block uppercase text-xs tracking-widest">INQUIRE ABOUT PACKAGE</a>
              </div>
            </div>
            {/* Package 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="md:w-1/2 relative">
                <div className="bg-secondary-fixed-dim absolute -inset-4 z-0 opacity-20"></div>
                <img alt="Kerala Backwaters" className="relative z-10 w-full aspect-video object-cover shadow-2xl" data-alt="Traditional luxury houseboat on the backwaters of Kerala" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwkUhHdOMZBl7J_E7Q254knYLf-UhAQJIzPkg4ntK0a74rqDOosSIPwhS5KDQ1HuNDCTQbjKpIavEfctRaugtxHWNeeHpewDhqf95b4rk5tQB_x7jYJ_ozd3iauOTKE38GeWJuljEY1J33OP8kzUhlS5xVc57z71iS8h2xUojzQrVepT0idtOHqjEA_rDk60WNmqHzo48X5v16l4H9HVoxrnWJ6h6zATjlgV3Trt3tUsDRFqciMzRVJVH5dZ1UbIwFNHv_Nsc1mx6x" />
              </div>
              <div className="md:w-1/2 text-right">
                <span className="text-secondary font-label text-xs tracking-widest mb-4 block">5 DAYS • SOUTH INDIA</span>
                <h3 className="font-headline text-4xl mb-6">Venice of the East</h3>
                <p className="text-on-surface-variant leading-loose mb-8">A tranquil escape through Kerala's backwaters on a private luxury houseboat. Experience traditional Ayurvedic spa treatments and organic gourmet dining.</p>
                <a href="/booking?package=Venice+of+the+East" className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors inline-block uppercase text-xs tracking-widest">INQUIRE ABOUT PACKAGE</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-container w-full pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
          <div className="space-y-6">
            <div className="text-xl font-headline text-white">The Global Concierge</div>
            <p className="text-slate-400 font-body text-sm leading-relaxed">Providing world-class luxury travel and concierge services across the Indian subcontinent since 2012.</p>
          </div>
          <div className="space-y-6">
            <h5 className="text-secondary-fixed-dim font-label text-xs tracking-widest">DISCOVER</h5>
            <ul className="space-y-4">
              <li><a className="text-slate-400 hover:text-white font-body text-sm hover:translate-x-1 transition-transform inline-block" href="/fleet">Fleet Gallery</a></li>
              <li><a className="text-slate-400 hover:text-white font-body text-sm hover:translate-x-1 transition-transform inline-block" href="/tours">Bespoke Tours</a></li>
              <li><a className="text-slate-400 hover:text-white font-body text-sm hover:translate-x-1 transition-transform inline-block" href="/contact">Member Portal</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-secondary-fixed-dim font-label text-xs tracking-widest">SUPPORT</h5>
            <ul className="space-y-4">
              <li><a className="text-slate-400 hover:text-white font-body text-sm hover:translate-x-1 transition-transform inline-block" href="/">Privacy Policy</a></li>
              <li><a className="text-slate-400 hover:text-white font-body text-sm hover:translate-x-1 transition-transform inline-block" href="/">Terms of Service</a></li>
              <li><a className="text-slate-400 hover:text-white font-body text-sm hover:translate-x-1 transition-transform inline-block" href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="text-secondary-fixed-dim font-label text-xs tracking-widest">NEWSLETTER</h5>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <input 
                className="bg-white/5 border-none text-white text-sm px-4 py-3 w-full focus:ring-1 focus:ring-secondary outline-none" 
                placeholder="Email Address" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-secondary px-4 text-white"><span className="material-symbols-outlined text-sm">arrow_forward</span></button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center max-w-screen-2xl mx-auto px-12">
          <p className="text-slate-400 font-body text-sm tracking-wide">© 2024 The Global Concierge. All Rights Reserved.</p>
        </div>
      </footer>


    </div>
  );
}
