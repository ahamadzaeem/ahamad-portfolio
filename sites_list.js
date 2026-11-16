const https = require('https');

const sites = [
  { name: 'Avinyates', url: 'https://www.avinyates.com', cat: 'Corporate / Tech' },
  { name: 'Italian Kitchen Concepts', url: 'https://www.italiankitchenconcepts.com', cat: 'Architecture & Living' },
  { name: 'AG Vertex', url: 'https://www.agvertex.ca', cat: 'Consulting & Enterprise' },
  { name: 'Arema Exports', url: 'https://www.aremaexports.com', cat: 'Global Trade & Export' },
  { name: 'Space Node Architects', url: 'https://www.spacenodearchitects.in', cat: 'Architectural Studio' },
  { name: 'Merkanto', url: 'https://www.merkanto.in', cat: 'Retail & E-commerce' },
  { name: 'Chai Days', url: 'https://chaidays.vercel.app', cat: 'Brand & Hospitality' }
];

console.log(JSON.stringify(sites, null, 2));

