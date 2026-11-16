const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// Find the hero h1:
// <h1 data-stagger-char-delay="0.75" data-scroll="" data-scroll-speed="0.1" data-stagger-char="line" class="text-align-right">ahamadzaeem<br/><span class="text-color-orange">.work</span></h1>

const oldH1 = '<h1 data-stagger-char-delay="0.75" data-scroll="" data-scroll-speed="0.1" data-stagger-char="line" class="text-align-right">ahamadzaeem<br/><span class="text-color-orange">.work</span></h1>';

const newH1 = '<h1 data-stagger-char-delay="0.75" data-scroll="" data-scroll-speed="0.1" data-stagger-char="line" class="text-align-right" style="text-transform:uppercase;">I AM AHAMAD<br/><span class="text-color-orange">ZAEEM</span></h1>';

html = html.replace(oldH1, newH1);

// Also in footer marquee if any
html = html.replace(/tomdekoning<span class="text-color-orange">\.work<\/span>/g, 'ahamad<span class="text-color-orange">zaeem</span>');
html = html.replace(/ahamadzaeem<span class="text-color-orange">\.work<\/span>/g, 'ahamad<span class="text-color-orange">zaeem</span>');

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Successfully changed hero title to I AM AHAMAD / ZAEEM!');

