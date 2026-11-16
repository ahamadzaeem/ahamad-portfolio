const fs = require('fs');

let html = fs.readFileSync('public/tom.html', 'utf8');

// 1. Re-order the 7 projects in exact specified order:
// 1: Avinyates
// 2: Arema Exports
// 3: Space Node Architects
// 4: AG Vertex
// 5: Merkanto
// 6: Chai Days
// 7: Italian Kitchen Concepts

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

// Replace all 7 carousel items with orderedProjects
const itemRegex = /<div data-glass-carousel-item="" class="glass-carousel__item"[^>]*>([\s\S]*?)<\/div><\/div>/g;

let idx = 0;
html = html.replace(itemRegex, () => {
  const p = orderedProjects[idx % orderedProjects.length];
  idx++;
  return `<div data-glass-carousel-item="" class="glass-carousel__item" style="cursor:pointer;" onclick="window.open('${p.url}','_blank')">
    <div data-player-activated="true" class="bunny-bg" style="background:#0c0c0d;">
      <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:4px;" class="bunny-bg__placeholder"/>
    </div>
    <div data-glass-carousel-content="" class="glass-carousel__item-content">
      <h3 class="glass-carousel__item-p"><a href="${p.url}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;">${p.name} ↗</a></h3>
      <p class="glass-carousel__item-p is--faded">${p.sub}</p>
    </div>
  </div>`;
});

// 2. Ensure the portrait canvas points to the original Tom image sequence CDN or local portrait
// Restore CDN source
html = html.replace(/https:\/\/ahamadzaeem-work\.b-cdn\.net\/scroll-tom\//g, 'https://tomdekoning-work.b-cdn.net/scroll-tom/');

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Successfully re-ordered projects: Avinyates -> Arema -> Space Node -> AG Vertex -> Merkanto -> Chai Days -> Italian Kitchen!');

