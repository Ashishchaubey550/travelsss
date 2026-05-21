const fs = require('fs');
const glob = require('glob');

const mapping = {
  '>About<': 'href="/contact">About<',
  '>Member Portal<': 'href="/contact">Member Portal<',
  '>Locations<': 'href="/contact">Locations<',
  '>Private Jet Charters<': 'href="/fleet">Private Jet Charters<',
  '>Luxury Villas<': 'href="/tours">Luxury Villas<',
  '>Privacy Policy<': 'href="/">Privacy Policy<',
  '>Terms of Service<': 'href="/">Terms of Service<',
  '>Press Kit<': 'href="/contact">Press Kit<',
  '>Cookie Policy<': 'href="/">Cookie Policy<',
  '>Sitemap<': 'href="/">Sitemap<',
  '>Instagram<': 'href="https://instagram.com">Instagram<',
  '>LinkedIn<': 'href="https://linkedin.com">LinkedIn<',
  '>Twitter / X<': 'href="https://twitter.com">Twitter / X<',
  '>Facebook<': 'href="https://facebook.com">Facebook<',
  '>Fleet Gallery<': 'href="/fleet">Fleet Gallery<',
  'href="#"\n          >': 'href="https://wa.me/919876543210"\n          >'
};

// Also replace href="#" for the booking whatsapp button
function fixContent(content) {
  let newContent = content;
  
  // Custom manual replace for booking page WhatsApp button href="#" -> href="https://wa.me/919876543210"
  newContent = newContent.replace('group" href="#"', 'group" target="_blank" href="https://wa.me/919876543210"');

  for (const [key, value] of Object.entries(mapping)) {
    const regex = new RegExp(`href="#"(.*)${key}`, 'g');
    newContent = newContent.replace(regex, `${value.replace('href=', 'href=').split('>')[0]}$1${key}`);
  }
  
  // Any leftover href="#" becomes href="/"
  newContent = newContent.replace(/href="#"/g, 'href="/"');
  
  return newContent;
}

const files = [
  'src/app/page.tsx',
  'src/app/fleet/page.tsx',
  'src/app/tours/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/booking/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, fixContent(content));
});

console.log('Fixed links in all files.');
