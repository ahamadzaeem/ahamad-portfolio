const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

const listStartTag = '<div data-glass-carousel-list="" class="glass-carousel__list">';
const captionTag = '<div aria-live="polite" data-glass-carousel-caption=""';

const startIdx = html.indexOf(listStartTag);
const endIdx = html.indexOf(captionTag);

console.log('Index.html startIdx:', startIdx, 'endIdx:', endIdx);

const orderedProjects = [
  {
    name: 'Avinyates',
    sub: 'Corporate & Engineering Platform',
    img: '/projects/avinyates.jpg',
    url: 'https://www.avinyates.com'
  },
  {
    name: 'Arema Exports',
    sub: 'International Trade & Export Gateway',
    img: '/projects/avinyates.jpg',
    url: 'https://www.aremaexports.com'
  },
  {
    name: 'Space Node Architects',
    sub: 'Contemporary Architectural Studio',
    img: '/projects/spacenode.jpg',
    url: 'https://www.spacenodearchitects.in'
  },
  {
    name: 'AG Vertex',
    sub: 'Mechanical Engineering & Manufacturing',
    img: '/projects/ag_vertex.jpg',
    url: 'https://www.agvertex.ca'
  },
  {
    name: 'Merkanto',
    sub: 'Global Logistics & Trade Leaders',
    img: '/projects/merkanto.jpg',
    url: 'https://www.merkanto.in'
  },
  {
    name: 'Chai Days',
    sub: 'Artisan Chai & Hospitality Experience',
    img: '/projects/chaidays.jpg',
    url: 'https://chaidays.vercel.app'
  },
  {
    name: 'Italian Kitchen Concepts',
    sub: 'Luxury Architecture & Commercial Kitchens',
    img: '/projects/italian_kitchen.jpg',
    url: 'https://www.italiankitchenconcepts.com'
  }
];

// Generate exactly 7 separate carousel items
const itemsHtml = orderedProjects.map((p, i) => `
<div data-glass-carousel-item="" class="glass-carousel__item">
  <div data-player-activated="true" class="bunny-bg" style="background:#0c0c0d;">
    <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:4px;" class="bunny-bg__placeholder"/>
  </div>
  <div data-glass-carousel-content="" class="glass-carousel__item-content">
    <h3 class="glass-carousel__item-p"><a href="${p.url}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;">${p.name} ↗</a></h3>
    <p class="glass-carousel__item-p is--faded">${p.sub}</p>
  </div>
</div>
`).join('\n');

// Replace the inside of the carousel list with all 7 items
const newContent = `${listStartTag}\n${itemsHtml}\n</div></div>`;

const prefix = html.substring(0, startIdx);
const suffix = html.substring(endIdx);

const updatedHtml = `${prefix}${newContent}${suffix}`;

fs.writeFileSync('public/index.html', updatedHtml, 'utf8');
fs.writeFileSync('public/tom.html', updatedHtml, 'utf8');

console.log('Successfully wrote 7 separate items to public/index.html and public/tom.html');

