const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Logo
  const logoTextRegex = /<div className="text-2xl font-bold tracking-tighter text-black dark:text-white font-headline">[\s\n]*The Global Concierge[\s\n]*<\/div>/;
  const newLogo = `<div className="flex items-center">
            <a href="/"><img src="/logo.jpeg" alt="The Global Concierge" className="h-10 md:h-[45px] w-auto" /></a>
          </div>`;
  content = content.replace(logoTextRegex, newLogo);

  // 2. Remove "About" link
  // Note: we just need to replace the anchor exactly
  const aboutLink = '<a className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors" href="/contact">About</a>';
  content = content.replace(aboutLink + '\n', '');
  content = content.replace(aboutLink, ''); // fail-safe

  // 3. Navbar CTA (Book Now)
  const navIconRegex = /<div className="hidden md:flex items-center space-x-6">[\s\n]*<span className="material-symbols-outlined text-black dark:text-white cursor-pointer scale-95 active:scale-90 duration-200">search<\/span>[\s\n]*<span className="material-symbols-outlined text-black dark:text-white cursor-pointer scale-95 active:scale-90 duration-200">shopping_bag<\/span>[\s\n]*<\/div>/;
  const newNavCta = `<div className="hidden md:flex items-center space-x-6">
            <a href="/booking" className="bg-yellow-600 text-white px-6 py-2.5 text-[10px] font-label font-bold tracking-widest uppercase hover:bg-yellow-700 transition-colors shadow-md rounded-sm">BOOK NOW</a>
          </div>`;
  content = content.replace(navIconRegex, newNavCta);
  
  // Try matching alternative search block if exact match failed
  const navIconFallback = /<div className="hidden md:flex items-center space-x-6 text-black dark:text-white">([\s\S]*?)<\/div>/;
  if(file.includes('contact/page.tsx')) {
    const contactNavBlock = /<div className="flex items-center space-x-6 text-black dark:text-white">[\s\S]*?<\/button>[\s\n]*<\/div>/;
    const newContactBlock = `<div className="hidden md:flex items-center space-x-6">
            <a href="/booking" className="bg-yellow-600 text-white px-6 py-2.5 text-[10px] font-label font-bold tracking-widest uppercase hover:bg-yellow-700 transition-colors shadow-md rounded-sm">BOOK NOW</a>
          </div>
          <div className="md:hidden flex items-center">
            <span className="material-symbols-outlined text-black dark:text-white cursor-pointer text-3xl">menu</span>
          </div>`;
    content = content.replace(contactNavBlock, newContactBlock);
  }

  // 4. Black circle icons text-yellow-600 fixes in page.tsx
  if (file.endsWith('page.tsx')) {
    content = content.replace(/text-secondary-fixed-dim text-3xl/g, 'text-yellow-600 text-3xl');
    content = content.replace(/<span className="material-symbols-outlined text-secondary-fixed-dim" style={{fontVariationSettings: "'FILL' 1"}}>verified_user<\/span>/g, '<span className="material-symbols-outlined text-yellow-600" style={{fontVariationSettings: "\'FILL\' 1"}}>verified_user</span>');
    content = content.replace(/<span className="material-symbols-outlined text-secondary-fixed-dim" style={{fontVariationSettings: "'FILL' 1"}}>concierge<\/span>/g, '<span className="material-symbols-outlined text-yellow-600" style={{fontVariationSettings: "\'FILL\' 1"}}>concierge</span>');

    // 5. Inquire about Package links
    // First one
    content = content.replace(
      '<button className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">INQUIRE ABOUT PACKAGE</button>',
      '<a href="/booking?package=The+Golden+Triangle+Royale" className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors inline-block uppercase text-xs tracking-widest">INQUIRE ABOUT PACKAGE</a>'
    );
    // Second one
    content = content.replace(
      '<button className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">INQUIRE ABOUT PACKAGE</button>',
      '<a href="/booking?package=Venice+of+the+East" className="text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors inline-block uppercase text-xs tracking-widest">INQUIRE ABOUT PACKAGE</a>'
    );
  }

  fs.writeFileSync(file, content);
});

console.log('Applied UI fixes.');
