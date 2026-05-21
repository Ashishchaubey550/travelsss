"use client";
import React from "react";

export default function Fleet() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <div className="bg-background text-on-surface font-body relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-nav {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
        .asymmetric-card-img {
            border-top-left-radius: 0.75rem;
            border-top-right-radius: 0.125rem;
            border-bottom-right-radius: 0.125rem;
            border-bottom-left-radius: 0.125rem;
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
          <div className="hidden md:flex space-x-8 items-center font-['Noto_Serif'] tracking-tight">
            <a className="text-slate-500  hover:text-black  transition-colors" href="/">Home</a>
            <a className="text-black  font-semibold border-b-2 border-yellow-700 pb-1" href="/fleet">Fleet</a>
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

      {/* Hero Header */}
      <header className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-secondary font-label text-sm uppercase tracking-widest mb-4 block">Curated Excellence</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight mb-6">Our Distinguish Fleet</h1>
          <p className="text-lg text-on-surface-variant font-light max-w-xl leading-relaxed">
            Experience the pinnacle of luxury travel. From executive sedans to premium coaches, our fleet is meticulously maintained to provide unparalleled comfort and safety for your journey.
          </p>
        </div>
      </header>

      {/* Fleet Grid Section */}
      <main className="px-8 pb-32 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Innova Hycross (Featured) */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="Luxury white Toyota Innova Hycross exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2miw9TlpyOrK5gVnv2ChrPQbyUKLDbnvH8MMyTkGfsnFWrtcFlAdQLIubJJ_y_RC8iFlfPnA6RzC4ENh-_adwbvs6BtSnun79s4xxGoVmPaqCISBxPsTm7oIzmBkstwWvZMZ3K3O5d1HP5ME5LSJ2q6FtVA1Dn2Ife12mYHcgI6X5MmqkAFW1zfSgesQlp7oLqS1b5tRhe7toHEvqAAgxeRkuOvoww06-fofpHk5Jw6z8JkysfrliApsGr5beX8h4-G7pgUOjgFoz" />
              <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 text-xs font-label uppercase tracking-tighter">Premium Choice</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Innova Hycross</h3>
              <p className="text-on-surface-variant text-sm mb-6">Hybrid performance meets ultimate executive luxury.</p>
              <a href="/booking?vehicle=Innova%20Hycross" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* Fortuner */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="Black luxury Toyota Fortuner SUV" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC9uMuY64lIt8UQslFgsNsba8rnPeBVMp-rmzPNF4xvihCwoqw1SuuZl8ROzIDzpVH30eIwrpUeGUEygl6KtNj_Fpz_TyDQYALfAFBGGzMoqENDY7x9vxwQ2xJd2vC1DjdEqvg1Kk73F2_pKQxPigXB8-g0q5M4JTVPZpczk9A-Z_Hocbcy2G-7I5ossiMYtYhtBXcPxejKcS0ECushOGXHEWZQTYaJyS5ubBr_fWshWvxfofF2bhl4jDACLyG_AJcpN9jhiMKzYlL" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Fortuner</h3>
              <p className="text-on-surface-variant text-sm mb-6">Commanding presence for rugged yet refined travel.</p>
              <a href="/booking?vehicle=Fortuner" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* Volvo */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="Sleek modern Volvo luxury coach bus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbSmrIKa1GmkMBACI6SgnBk5NI_pr6DndaWY344BDKXZSd2Y9RY_CaVVRg0Pie_jFYJT6XQG1hI4sMRwW-n99GqstsxhmWCu6XfierN1gC3jYqxywmllCR7yX3GpMXPlXZufkSv7r2J3rNPxPift0O-44Mutj_Wq_My31IQQlOA5_e7ivZD3jajP7YZEIleL4O4slHHgt14AHeBAWPLhKjBrZ5PTbvYiRh43kubw_cvHSUyyZblD8knKfSX1nvTFeV2NPWvkLH1zMK" />
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 text-xs font-label uppercase tracking-tighter">Large Groups</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Volvo Luxury Coach</h3>
              <p className="text-on-surface-variant text-sm mb-6">The gold standard for inter-city group travel.</p>
              <a href="/booking?vehicle=Volvo%20Luxury%20Coach" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* Innova Crysta */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="Silver Toyota Innova Crysta minivan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXuYtBstJNQmAxo1P4niI7h352fGhy3dPR-AA4UoR6Wm1hgb3O8i3_anXH62GmSHFZfd3wkxRq1qn4SjShdFWYHG5txeBxeAku0GjpbdYHH-Ob-yuxlkekO3mOQBLjzX0jTceJIje5gGMp8R3mQKr_SL-lBHQYG9scuCITDYYcbjMAxVPN6vwomSaREE1HY9xbA9FHRwafcACw6QcpBqBIhp6VX1C_0ToyDmwnOy8ySVuvrg5szWZsvAAUhVzaJX_C5GkIOBaXhS8W" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Innova Crysta</h3>
              <p className="text-on-surface-variant text-sm mb-6">Dependable comfort for family and corporate trips.</p>
              <a href="/booking?vehicle=Innova%20Crysta" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* Force Traveller */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="Force Traveller luxury van 13 seater" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeGsOwZB5AiEp1UI9buAsxH-Aqt1A_3phU3dkjisJvkuwOelu69kn4OGurZllGtkbt7QYI2hGLCJPBp-4tj_tyOVycZS9Eo51bfkpWA5QSk5rQE81htH0IOLXLndEYZfhFQXI54b9tn5vFz32ZGw4GtODRG_tYMTguKs4hXlTBryry69Y4oy_jl0CRX_jAjOY-v0xyqmppvnOBLash9STfgd2Cg_eSjaKgDx2AEK4cOultZyVWdcOdbo4_-HtE1o0xk1Ajv3o5wj2m" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Force Traveller</h3>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] bg-surface-container px-2 py-0.5 rounded-full">13 Seater</span>
                <span className="text-[10px] bg-surface-container px-2 py-0.5 rounded-full">17 Seater</span>
                <span className="text-[10px] bg-surface-container px-2 py-0.5 rounded-full">23 Seater</span>
              </div>
              <a href="/booking?vehicle=Force%20Traveller" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* BharatBenz */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="Modern BharatBenz luxury commercial bus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa3piYsgCpOw3jwxDdhoE0bkG7IgoVpGPuwLlwbrxusYXdYX1hJfk88KS3qLsEZw-2gWTYZVfuxkoxlxK2DCK5D8qoh8P41NYvz7YBmVtA6Gy6J_goNg7o_EHkqqiz8XWDRDWMdShBtDbEnz-fqTpZYRfWrileIuE4ZAK_zz278DNdAxDwcNc9itHPaTheGNCjV8UCvsjQxVXtBSk1py3l1UGaVVLdV5akaN45_M4Vqmlov9TO0rHUdch_BTsIUOZu0mcmUOe2FW4C" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">BharatBenz</h3>
              <p className="text-on-surface-variant text-sm mb-6">German engineering for sophisticated large group journeys.</p>
              <a href="/booking?vehicle=BharatBenz" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* Scorpio */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="Mahindra Scorpio white rugged SUV" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK1fMICxnealhPf9BzwsC8AXT18cZSkZLoSvxEX7eDBUdro2ka3aXSCwLM1aiwVn2lc_Y2cbVH36yupoJkC9MiNBMlzcWjs6KYyENGZDY-wrCKtKiF5ChCooEGoqGHpHGPhj_HcT6sK4pVkflRKmM9yo9jp0IefgyPQPWDcOHsh6aN_kr7-YGsxZZiNatSczXGHNo30E77b9x0b1lC-mkQP6Pf0Ww3kxn5iqK3cOUQ8MTYUTZcMJb0ZAWZoocnEHeqzuW3Y58SmaI9" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Scorpio</h3>
              <p className="text-on-surface-variant text-sm mb-6">The ultimate blend of power and presence.</p>
              <a href="/booking?vehicle=Scorpio" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* Open Jeep */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="Classic open-top safari jeep vehicle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDstJnwNhULvMQjlfI3RjSUJXJUBNueVPGEYU39fp78HhS9HytcYgsTR9uzrHxo410JrTM6yxs4HXo_uNtLA0F3PVTiA87Ns0uqYleUN7r3RtgkR820e2OlUpjQRP6BcrQWsZEZFVESdWkN66LPp91Am9xXsSU6oP-UGeyp3vEOBFG1-njSBKMpx9QnLgoTjjtNdYEynL5Na_7HwmlcQlJiZ9XELAtgo1IIEoYFHBTkIhtZHizOUuBGwyp1NXY44x9AWRK7QTLNWjxT" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Open Jeep</h3>
              <p className="text-on-surface-variant text-sm mb-6">For those who seek the wind and adventure.</p>
              <a href="/booking?vehicle=Open%20Jeep" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* Ertiga */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="White Suzuki Ertiga compact MPV" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM67QhRIToXNbalvdcZfc-NHCMkfoQ-ww77of73cX9dLx3mzfeQbwundWe2b2CwqC7MWjJ2ohMuJWm4nW02OAVhCyYTguayRYz8GUG92DB0T7Ief7fzPBokfcvfo7orGYssLAmshYymjggtWX0SHIxFnetwYJfry3Ctfwx-Mr5BO8FMjMyaYS9_WJNwR7Z7hRT3_vSxtRqINpin7rgWJDOPmZkQzRivga0lZyp4qoq6jRbYTzVKvNazxdaQ3oytOGWjU881S_alVfM" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Ertiga</h3>
              <p className="text-on-surface-variant text-sm mb-6">Compact flexibility for city tours and small groups.</p>
              <a href="/booking?vehicle=Ertiga" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* Dzire */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="White Suzuki Dzire sedan car" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnHlGMa2WawmWAigq_RQbh_3kEpqPPT7XD40VOxQ6WwTotMTJhMK6T--dhzxUjPNVpZKw14zTc-oyR6nWddALiSTQlGSE5jM8MCMOYyAn6AxfqIwSCTJZxlZGg2jmwiVYeKzqA6PAweycn98To7rI0enljujjIxAQK96T3MOpKk1HBgihYXTbi54dcUkdQjnWSPzCzRhMJ9ALygRikrZDx3gXOvgL0Ba886_Mrf-Uu5Tm6peevWuH3ta25SCR3QTUdUsF4b9WW44n3" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Dzire</h3>
              <p className="text-on-surface-variant text-sm mb-6">Efficient and comfortable sedan for personal travel.</p>
              <a href="/booking?vehicle=Dzire" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* Bolero */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="Mahindra Bolero white utility vehicle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1NyTiJnD8NfK-o9H108nK7kJ7OPjb61RnNscbGasBj4KToiCld_q4-J7arp4XKQwPdZ3B-1niRASQw8G54Fl-YturcNUwkrdKJVe4A-e77TeCO9ylEO109ST-3qI4KdGqRqX_NTPwUortSHXm500u6L6_WIuXzHAB4QF_MrnpM6SoEf8spyAGBFpDPUWhnEPEHrMvl3Os5mbIMw8PkwPHJ0B5kMaeJVJtLRQuXp3Y0hngwZzy7W8OHxpgsjwfmWUWWM_5IIT0sA6e" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Bolero</h3>
              <p className="text-on-surface-variant text-sm mb-6">Robust reliability for diverse terrains.</p>
              <a href="/booking?vehicle=Bolero" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
          {/* Mini Bus */}
          <div className="group bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative h-72 overflow-hidden">
              <img className="w-full h-full object-cover asymmetric-card-img group-hover:scale-105 transition-transform duration-700" data-alt="White executive mini bus transport" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Ju_xl4z6Nz-IKMZ_dvsQid7KeiLnfyTYvxIkXhCgfwQcjouujJVqOic90v1SB_2dCAe2yoE2YaXRZmNNN74xg3cXbvJ6yZlPgQ4WjvMnBZxyvRAULaJqVu9PC5l37eeNC_DohzV95I61Zrg_aYUG8u6NPK20c3ez6yZ86CUOYNxxTYZknzihl83webAAAKnPK8n1Ubl0LSGfmzqYJlff4vXxt_mLxNjhPj15tJ-eBcrDmFFE6qf8qF940RiA0zxvqV18_xPvdiL0" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold mb-2">Mini Bus</h3>
              <p className="text-on-surface-variant text-sm mb-6">Spacious and versatile for medium-sized gatherings.</p>
              <a href="/booking?vehicle=Mini%20Bus" className="block text-center w-full bg-yellow-600 text-white py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black w-full pt-16 pb-8 font-['Manrope'] text-sm tracking-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
          <div className="col-span-1">
            <div className="text-xl font-serif text-white mb-6">The Global Concierge</div>
            <p className="text-slate-400 mb-6">Bespoke travel experiences curated with precision and care for the global elite.</p>
          </div>
          <div>
            <h4 className="text-yellow-600 dark:text-yellow-500 font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/">Privacy Policy</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-600 dark:text-yellow-500 font-bold mb-6">Experience</h4>
            <ul className="space-y-4">
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/fleet">Fleet Gallery</a></li>
              <li><a className="text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/contact">Member Portal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-yellow-600 dark:text-yellow-500 font-bold mb-6">Newsletter</h4>
            <div className="flex">
              <input className="bg-white/5 border-none text-white focus:ring-1 focus:ring-yellow-600 w-full p-3 outline-none" placeholder="Email Address" type="email" />
              <button className="bg-yellow-600 text-white px-4 hover:bg-yellow-700 transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 max-w-screen-2xl mx-auto px-12">
          © 2024 The Global Concierge. All Rights Reserved.
        </div>
      </footer>
      

    </div>
  );
}
