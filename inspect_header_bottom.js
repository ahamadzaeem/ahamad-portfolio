const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');

const pos = html.indexOf('header-bottom');
console.log(html.substring(pos, pos + 800));

