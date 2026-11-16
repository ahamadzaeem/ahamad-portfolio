const fs = require('fs');

let html = fs.readFileSync('public/tom.html', 'utf8');

// 1. Optimize Text: punchy, balanced, elegant
html = html.replace(
  /I build intelligent AI systems and agents — from models to production/g,
  'I build high-impact web apps and intelligent AI systems'
);

html = html.replace(
  /Building scalable AI systems and intelligent agents, <br\/>sharp, adaptive, engineered for the real world\./g,
  'Engineering modern digital experiences and scalable AI solutions.'
);

html = html.replace(
  /I am an Artificial Intelligence and Machine Learning engineer based in Kerala[\s\S]*?impactful, scalable software\./g,
  'Freelance web developer and AI engineer based in Kerala, India. From concept to deployment, I build high-performance web applications and production-ready AI workflows with clean architecture and sharp aesthetics.'
);

// 2. Replace the 7 Carousel Items with your exact 7 websites
const yourProjects = [
  { name: 'Avinyates', sub: 'Corporate & Engineering Platform', url: 'https://www.avinyates.com', color: '#16222f' },
  { name: 'Italian Kitchen Concepts', sub: 'Luxury Architecture & Interiors', url: 'https://www.italiankitchenconcepts.com', color: '#2b231d' },
  { name: 'AG Vertex', sub: 'Enterprise Consulting & Cloud', url: 'https://www.agvertex.ca', color: '#1b2234' },
  { name: 'Arema Exports', sub: 'Global Trade & Export Gateway', url: 'https://www.aremaexports.com', color: '#1f2824' },
  { name: 'Space Node Architects', sub: 'Contemporary Architectural Studio', url: 'https://www.spacenodearchitects.in', color: '#231e28' },
  { name: 'Merkanto', sub: 'Modern Retail & E-Commerce', url: 'https://www.merkanto.in', color: '#252119' },
  { name: 'Chai Days', sub: 'Brand & Hospitality Experience', url: 'https://chaidays.vercel.app', color: '#311f18' }
];

// In the HTML carousel, update titles and links
const itemNames = ['Mejuma', 'Studio Dott', 'Vebri Work', 'Dromen van goud', 'Marcellinus', 'Duron', 'Brave'];
itemNames.forEach((oldName, idx) => {
  if (yourProjects[idx]) {
    const proj = yourProjects[idx];
    const regexH3 = new RegExp(`<h3 class="glass-carousel__item-p">${oldName}</h3>`, 'g');
    html = html.replace(regexH3, `<h3 class="glass-carousel__item-p"><a href="${proj.url}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;">${proj.name} ↗</a></h3>`);
  }
});

// 3. Performance Boost: remove the heavy 3D Spline model iframe/canvas that causes GPU lag
// and replace with an ultra-smooth GPU CSS glowing geometric letterform
html = html.replace(
  /<div data-w-id="9dc21bb8-cf48-1c4a-6ea6-ce6478d6cb3d" class="t-shape" data-animation-type="spline"[\s\S]*?<\/div>/g,
  `<div class="t-shape" style="display:flex;align-items:center;justify-content:center;pointer-events:none;">
    <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:240px;font-weight:700;color:#ededeb;opacity:0.9;text-shadow:0 0 60px rgba(255,87,34,0.35);transform:translateY(-20px);">Z</div>
  </div>`
);

// Optimize video preloading to avoid bandwidth contention
html = html.replace(/preload="auto"/g, 'preload="none"');

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Optimized performance, updated texts, and embedded your 7 websites!');

