const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Update Arema image path from /projects/avinyates.jpg to /projects/arema.png
html = html.replace(
  /<img src="\/projects\/avinyates\.jpg" alt="Arema Exports"/g,
  '<img src="/projects/arema.png" alt="Arema Exports"'
);

// 2. Set the hero canvas image to your portrait (/portrait.jpg)
// In the hero canvas section:
// data-static-src="https://tomdekoning-work.b-cdn.net/scroll-tom/ezgif-frame-001.jpg"
html = html.replace(/data-static-src="[^"]*"/g, 'data-static-src="/portrait.jpg"');
html = html.replace(/data-desktop-src="[^"]*"/g, 'data-desktop-src="/portrait.jpg"');
html = html.replace(/data-mobile-src="[^"]*"/g, 'data-mobile-src="/portrait.jpg"');

// Ensure image-sequence canvas draws /portrait.jpg cleanly as the hero background
const canvasStyleFix = `
<style>
.image-sequence__canvas {
  background: url('/portrait.jpg') center/cover no-repeat !important;
}
</style>
`;

if (!html.includes('.image-sequence__canvas {')) {
  html = html.replace('</head>', `${canvasStyleFix}\n</head>`);
}

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');

console.log('Successfully applied arema.png and your photo (/portrait.jpg) as the hero image!');

