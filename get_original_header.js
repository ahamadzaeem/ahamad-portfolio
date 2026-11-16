const fs = require('fs');
const src = fs.readFileSync('tom_source.html', 'utf8');

const startTag = '<section id="header">';
const endTag = '</section>';

const startIdx = src.indexOf(startTag);
const endIdx = src.indexOf(endTag, startIdx);

console.log('Original Header HTML:\n', src.substring(startIdx, endIdx + endTag.length));

