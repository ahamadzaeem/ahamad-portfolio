const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');

const matches = html.match(/data-glass-carousel-item=""/g);
console.log('Matches for data-glass-carousel-item="":', matches ? matches.length : 0);

