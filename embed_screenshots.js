const fs = require('fs');

let html = fs.readFileSync('public/tom.html', 'utf8');

const projects = [
  {
    name: 'Avinyates',
    sub: 'Corporate & Engineering Platform',
    img: '/projects/avinyates.jpg',
    url: 'https://www.avinyates.com'
  },
  {
    name: 'Italian Kitchen Concepts',
    sub: 'Luxury Architecture & Interiors',
    img: '/projects/italian_kitchen.jpg',
    url: 'https://www.italiankitchenconcepts.com'
  },
  {
    name: 'AG Vertex',
    sub: 'Mechanical Engineering & Manufacturing',
    img: '/projects/ag_vertex.jpg',
    url: 'https://www.agvertex.ca'
  },
  {
    name: 'Space Node Architects',
    sub: 'Contemporary Architectural Studio',
    img: '/projects/spacenode.jpg',
    url: 'https://www.spacenodearchitects.in'
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
    name: 'Arema Exports',
    sub: 'International Trade & Export Gateway',
    img: '/projects/avinyates.jpg',
    url: 'https://www.aremaexports.com'
  }
];

// In the HTML carousel, replace the image placeholders and videos with high-res real screenshots
// Each carousel item contains:
// <div data-glass-carousel-item="" class="glass-carousel__item">
//   <div ... class="bunny-bg"> ... <img ... class="bunny-bg__placeholder"/></div>
//   <div data-glass-carousel-content="" class="glass-carousel__item-content">...</div>
// </div>

const itemRegex = /<div data-glass-carousel-item="" class="glass-carousel__item">([\s\S]*?)<\/div><\/div>/g;

let idx = 0;
html = html.replace(itemRegex, (match) => {
  const p = projects[idx % projects.length];
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

// Write to both public files
fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Successfully injected real screenshots into the WebGL curved slider!');

