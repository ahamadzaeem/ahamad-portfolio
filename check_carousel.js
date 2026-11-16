const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');

const regex = /<div data-glass-carousel-item=""[\s\S]*?<\/div><\/div>/g;
const items = html.match(regex);
console.log('Found carousel items:', items ? items.length : 0);

