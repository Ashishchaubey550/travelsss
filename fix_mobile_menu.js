const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/*.tsx');

const mobileMenuMarkup = `
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
`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Skip if already applied to prevent duplicate state declarations
  if (content.includes('isMobileMenuOpen')) return;

  // Add "use client" if it doesn't exist
  if (!content.includes('"use client"') && !content.includes("'use client'")) {
    content = '"use client";\n' + content;
  }

  // Inject React.useState inside the main export function
  const functionRegex = /export default function [a-zA-Z0-9_]+\([^)]*\) {/;
  content = content.replace(functionRegex, (match) => {
    return `${match}\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);`;
  });

  // Inject the mobile menu markup just before the <nav> element
  content = content.replace(/<nav /g, mobileMenuMarkup + '\n      <nav ');

  // Add onClick to the hamburger menu
  const hamburgerRegex = /<span className="material-symbols-outlined text-black\s+cursor-pointer text-3xl">menu<\/span>/g;
  content = content.replace(hamburgerRegex, `<span onClick={() => setIsMobileMenuOpen(true)} className="material-symbols-outlined text-black cursor-pointer text-3xl hover:text-yellow-600">menu</span>`);

  // Handle case where classname spacing is slightly different (fallback replace)
  content = content.replace(/<span className="material-symbols-outlined text-black  cursor-pointer text-3xl">menu<\/span>/g, `<span onClick={() => setIsMobileMenuOpen(true)} className="material-symbols-outlined text-black cursor-pointer text-3xl hover:text-yellow-600">menu</span>`);

  fs.writeFileSync(file, content);
});

console.log('Mobile menus integrated.');
