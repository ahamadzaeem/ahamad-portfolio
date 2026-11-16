const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Remove the unintended styles that hid .header-top and changed the navbar/header layout:
html = html.replace(/\.header-top\s*\{\s*display:\s*none\s*!important;\s*\}/g, '');
html = html.replace(/\.header-intro__wrap h6[\s\S]*?word-spacing:\s*0\.25em\s*!important;\s*\}/g, '');

// 2. Put the headline back to its exact natural height and placement, with just a clean normal space between words
// The exact original structure was:
// <h1 data-stagger-char-delay="0.75" data-scroll="" data-scroll-speed="0.1" data-stagger-char="line" class="text-align-right">...</h1>

const h1Regex = /<h1 data-stagger-char-delay="0.75"[\s\S]*?<\/h1>/;

const correctH1 = `<h1 data-stagger-char-delay="0.75" data-scroll="" data-scroll-speed="0.1" data-stagger-char="line" class="text-align-right" style="text-transform:uppercase;">I AM AHAMAD<br/><span class="text-color-orange">ZAEEM</span></h1>`;

html = html.replace(h1Regex, correctH1);

// 3. Make "HI THERE" bigger, crisp, and beautifully placed in its original spot
html = html.replace(
  /<h6 class="hide-mobile-landscape"[^>]*>[\s\S]*?<\/h6>/g,
  '<h6 class="hide-mobile-landscape" style="font-size: 16px !important; color: #ededeb !important; font-weight: 600 !important; letter-spacing: 0.12em !important; text-transform: uppercase !important; opacity: 1 !important; display: block !important;">HI THERE</h6>'
);

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');

console.log('Restored natural vertical position, gave proper word spacing, and made HI THERE bigger!');

