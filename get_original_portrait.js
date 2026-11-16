const fs = require('fs');
const html = fs.readFileSync('tom_source.html', 'utf8');

const m1 = html.match(/data-desktop-src="([^"]+)"/);
console.log('Original desktop image sequence:', m1 ? m1[1] : null);

const m2 = html.match(/data-static-src="([^"]+)"/);
console.log('Original static src:', m2 ? m2[1] : null);

