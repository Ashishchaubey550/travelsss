const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Find the logo img tag and inject the blending classes
  const logoImgRegex = /<img src="\/logo\.jpeg" alt="The Global Concierge" className="([^"]*)" \/>/g;
  
  content = content.replace(logoImgRegex, (match, classes) => {
    // If it already has mix-blend-multiply, skip
    if (classes.includes('mix-blend-multiply')) return match;
    
    // Add the magic transparency classes
    const newClasses = classes + ' mix-blend-multiply dark:invert dark:mix-blend-screen';
    return `<img src="/logo.jpeg" alt="The Global Concierge" className="${newClasses}" />`;
  });

  fs.writeFileSync(file, content);
});

console.log('Logo transparency classes applied.');
