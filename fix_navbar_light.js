const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Strip dark mode from nav styling
  content = content.replace(/dark:bg-slate-950\/80/g, '');
  content = content.replace(/dark:shadow-none/g, '');
  content = content.replace(/dark:text-white/g, '');
  content = content.replace(/dark:text-slate-400/g, '');
  content = content.replace(/dark:hover:text-white/g, '');

  content = content.replace(/bg-white\/80 backdrop-blur-md shadow-sm /g, 'bg-white/90 backdrop-blur-md shadow-sm ');

  // Re-establish clean logo without mix blend
  const logoRegex = /<img src="\/logo\.jpeg" alt="The Global Concierge" className="([^"]*)" \/>/g;
  content = content.replace(logoRegex, (match, classes) => {
    // Remove the blend classes
    let newClasses = classes.replace('mix-blend-multiply dark:invert dark:mix-blend-screen', '').trim();
    return `<img src="/logo.jpeg" alt="The Global Concierge" className="${newClasses}" />`;
  });

  fs.writeFileSync(file, content);
});

console.log('Force Light Navbar applied.');
