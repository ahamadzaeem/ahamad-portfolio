const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Update hero portrait to the new orange studio portrait:
html = html.replace(/portrait_cropped\.jpg/g, 'zaeem_portrait.jpg');
html = html.replace(/portrait\.jpg/g, 'zaeem_portrait.jpg');

// 2. Center the headline typography:
// Make "AHAMADZAEEM" on top, ".WORK" below it, both perfectly centered,
// exactly with the large Playfair/Grotesk sizing spanning across the image
const oldH1Regex = /<h1 data-stagger-char-delay="0.75"[\s\S]*?<\/h1>/;

const centeredH1 = `<h1 data-stagger-char-delay="0.75" data-scroll="" data-scroll-speed="0.1" data-stagger-char="line" class="text-align-center" style="text-align: center !important; width: 100% !important; margin: 0 auto !important; text-transform: uppercase;">AHAMADZAEEM<br/><span class="text-color-orange" style="display: block; margin-top: -0.1em;">.WORK</span></h1>`;

html = html.replace(oldH1Regex, centeredH1);

// Style tweaks to center the header bottom block and position text right over your portrait
const centerStyle = `
<style>
.header-bottom {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: flex-end !important;
}
.header-bottom h1 {
  text-align: center !important;
  width: 100% !important;
  margin: 0 auto !important;
}
.image-sequence__canvas {
  background: url('/zaeem_portrait.jpg') center top/cover no-repeat !important;
}
</style>
`;

if (!html.includes('.header-bottom h1 {')) {
  html = html.replace('</head>', `${centerStyle}\n</head>`);
} else {
  html = html.replace(/<style>[\s\S]*?\.header-bottom h1\s*\{[\s\S]*?<\/style>/, centerStyle);
}

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');

console.log('Successfully set your new orange studio photo and centered the headline!');

