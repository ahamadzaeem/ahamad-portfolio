const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Revert H1 to the exact original layout and typography:
// Single line top name + bottom .WORK in orange
// Just like "TOMDEKONING / .WORK", we do "AHAMADZAEEM / .WORK"
// With italic 'O' styling or letterforms matching the original font exactly

const currentH1Regex = /<h1 data-stagger-char-delay="0.75"[\s\S]*?<\/h1>/;

const originalStyleH1 = `<h1 data-stagger-char-delay="0.75" data-scroll="" data-scroll-speed="0.1" data-stagger-char="line" class="text-align-right">ahamadzaeem<br/><span class="text-color-orange">.work</span></h1>`;

html = html.replace(currentH1Regex, originalStyleH1);

// 2. Set "HI THERE" back to its exact original class & placement:
html = html.replace(
  /<h6 class="hide-mobile-landscape"[^>]*>[\s\S]*?<\/h6>/g,
  '<h6 class="hide-mobile-landscape">Hi there</h6>'
);

// 3. Right side sub-tagline:
html = html.replace(
  /<p>Engineering modern digital experiences and scalable AI solutions\.<\/p>/g,
  '<p>I build intelligent AI systems & high-performance web apps, <br/>sharp, adaptive, unforgettable.</p>'
);

// Remove custom overrides that affected positioning
html = html.replace(/\.header-intro__wrap h6\s*\{[\s\S]*?\}/g, '');
html = html.replace(/\.header-bottom h1\s*\{[\s\S]*?\}/g, '');

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');

console.log('Restored exact original layout: ahamadzaeem on top, .work on bottom, exact original positioning!');

