const fs = require('fs');

// Patch App/page.tsx
let homePath = 'src/app/page.tsx';
let homeContent = fs.readFileSync(homePath, 'utf8');
homeContent = homeContent.replace('h-[921px]', 'min-h-[100svh] md:h-[921px]');
homeContent = homeContent.replace('<div className="flex space-x-4">', '<div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 w-full md:w-auto">');
fs.writeFileSync(homePath, homeContent);

// Patch Tours/page.tsx
let toursPath = 'src/app/tours/page.tsx';
let toursContent = fs.readFileSync(toursPath, 'utf8');
toursContent = toursContent.replace('<div className="flex gap-2">', '<div className="flex flex-wrap gap-2">');
toursContent = toursContent.replace('gap-x-8 gap-y-10', 'gap-x-8 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'); // ensure grid wraps cleanly
fs.writeFileSync(toursPath, toursContent);

// Patch Contact/page.tsx
let contactPath = 'src/app/contact/page.tsx';
let contactContent = fs.readFileSync(contactPath, 'utf8');
contactContent = contactContent.replace('bottom-12 right-12 bg-white/90 backdrop-blur-xl p-8 max-w-xs shadow-2xl', 'bottom-4 left-4 right-4 md:bottom-12 md:left-auto md:right-12 bg-white/90 backdrop-blur-xl p-6 md:p-8 max-w-full md:max-w-xs shadow-2xl');
contactContent = contactContent.replace('<div className="flex space-x-12">', '<div className="flex flex-wrap gap-8 md:gap-12 justify-center">');
fs.writeFileSync(contactPath, contactContent);

console.log("Responsive patches applied.");
