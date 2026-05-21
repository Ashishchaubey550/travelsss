const fs = require('fs');

const file = 'src/app/fleet/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const vehicles = [
  'Innova Hycross',
  'Fortuner',
  'Volvo Luxury Coach',
  'Innova Crysta',
  'Force Traveller',
  'BharatBenz',
  'Scorpio',
  'Open Jeep',
  'Ertiga',
  'Dzire',
  'Bolero',
  'Mini Bus'
];

vehicles.forEach(vehicle => {
  // Find the block for this vehicle and replace its <button> with an <a>
  const h3Match = `<h3 className="text-2xl font-headline font-bold mb-2">${vehicle}</h3>`;
  const btnMatch = `<button className="w-full bg-primary text-on-primary py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">View Details</button>`;
  const replacement = `<a href="/booking?vehicle=${encodeURIComponent(vehicle)}" className="block text-center w-full bg-primary text-on-primary py-4 font-label text-sm tracking-widest hover:bg-secondary transition-colors uppercase">Book Securely</a>`;
  
  // This is a bit tricky with simple string replace. Let's find the index of h3Match, then replace the next btnMatch.
  let idx = content.indexOf(h3Match);
  if (idx !== -1) {
    let btnIdx = content.indexOf(btnMatch, idx);
    if (btnIdx !== -1) {
      content = content.substring(0, btnIdx) + replacement + content.substring(btnIdx + btnMatch.length);
    }
  }
});

fs.writeFileSync(file, content);
console.log('Fixed fleet buttons.');
