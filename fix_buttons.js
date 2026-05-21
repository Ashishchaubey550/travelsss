const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/*.tsx');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace black buttons with gold ones
  content = content.replace(/bg-primary text-on-primary/g, 'bg-yellow-600 text-white');
  fs.writeFileSync(file, content);
});

console.log('Fixed buttons.');
