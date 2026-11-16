const fs = require('fs');
const src = fs.readFileSync('tom_source.html', 'utf8');

// Find the carousel list container
const listStartTag = '<div data-glass-carousel-list="" class="glass-carousel__list">';
const listEndTag = '</div></div><div aria-live="polite" data-glass-carousel-caption=""';

const startIdx = src.indexOf(listStartTag);
const endIdx = src.indexOf(listEndTag);

console.log('startIdx:', startIdx, 'endIdx:', endIdx);

if (startIdx !== -1 && endIdx !== -1) {
  const innerList = src.substring(startIdx + listStartTag.length, endIdx);
  const items = innerList.split('data-glass-carousel-item=""');
  console.log('Original items count:', items.length - 1);
}

