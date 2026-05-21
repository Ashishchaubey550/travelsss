const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/app/**/*.tsx');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/https:\/\/wa\.me\/[a-zA-Z0-9#]*/g, 'https://wa.me/916269048092');
  fs.writeFileSync(file, content);
});

console.log('Fixed WA links.');
