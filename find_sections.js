const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');

const ids = html.match(/id="[^"]+"/g);
console.log('Section IDs:', ids);

