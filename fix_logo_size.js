const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace the old logo size (h-10 md:h-[45px]) with a much larger one (h-16 md:h-[72px] or larger)
  // Our previous injection was: <a href="/"><img src="/logo.jpeg" alt="The Global Concierge" className="h-10 md:h-[45px] w-auto" /></a>
  // But some might have h-[40px] from Regex trials. Let's just catch anything inside the img tag
  
  const logoImgRegex = /<img src="\/logo\.jpeg" alt="The Global Concierge" className="[^"]*" \/>/g;
  const enlargedLogo = `<img src="/logo.jpeg" alt="The Global Concierge" className="h-16 md:h-20 w-auto object-contain" />`;
  
  content = content.replace(logoImgRegex, enlargedLogo);

  fs.writeFileSync(file, content);
});

console.log('Logo sizes increased successfully. Restarting NextJS to clear Hydration cache...');
