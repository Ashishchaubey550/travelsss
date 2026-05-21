const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace variable search/shopping block
  const searchBlockRegex = /<div className="[^"]*space-x-6[^"]*">[\s\S]*?>search<[\s\S]*?<\/div>/;
  const newCta = `<div className="hidden md:flex items-center space-x-6">
            <a href="/booking" className="bg-yellow-600 text-white px-6 py-2.5 text-[10px] font-label font-bold tracking-widest uppercase hover:bg-yellow-700 transition-colors shadow-md rounded-sm">BOOK NOW</a>
          </div>`;
  
  if (searchBlockRegex.test(content)) {
    content = content.replace(searchBlockRegex, newCta);
  } else {
    // If it was already replaced but maybe we missed something, let's just make sure.
    // wait, booking/page.tsx has it? booking/page.tsx might not have >search< anymore.
  }

  // Also remove `<a ...>About</a>` if any still exist
  const aboutRegex = /<a[^>]*href="\/contact"[^>]*>About<\/a>\s*/g;
  content = content.replace(aboutRegex, '');

  fs.writeFileSync(file, content);
});

console.log('Fixed navbars uniformly.');
