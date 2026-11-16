const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Make "HI THERE" crisp, high contrast, properly spaced and styled with a sleek badge feel
html = html.replace(
  /<h6 class="hide-mobile-landscape">Hi there<\/h6>/g,
  '<h6 class="hide-mobile-landscape" style="color: #ededeb; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; font-size: 13px; opacity: 1;">Hi there</h6>'
);

// 2. Fix the spacing and letter tracking on the headline:
// "<h1 ... style="text-transform:uppercase;">I AM AHAMAD<br/><span class="text-color-orange">ZAEEM</span></h1>"
// We will give proper margin and word spacing so "I AM AHAMAD" has clear separation between "I", "AM", and "AHAMAD"
const headlineTarget = '<h1 data-stagger-char-delay="0.75" data-scroll="" data-scroll-speed="0.1" data-stagger-char="line" class="text-align-right" style="text-transform:uppercase;">I AM AHAMAD<br/><span class="text-color-orange">ZAEEM</span></h1>';

const headlineReplacement = '<h1 data-stagger-char-delay="0.75" data-scroll="" data-scroll-speed="0.1" data-stagger-char="line" class="text-align-right" style="text-transform: uppercase; letter-spacing: 0.04em; word-spacing: 0.28em; line-height: 0.95;">I&nbsp;&nbsp;AM&nbsp;&nbsp;AHAMAD<br/><span class="text-color-orange" style="display:inline-block; margin-top: 8px;">ZAEEM</span></h1>';

html = html.replace(headlineTarget, headlineReplacement);

// Add global CSS tweaks for header contrast and typography
const extraStyles = `
<style>
.header-intro__wrap h6 {
  color: #ededeb !important;
  font-size: 13px !important;
  letter-spacing: 0.18em !important;
  font-weight: 600 !important;
  opacity: 1 !important;
}
.header-bottom h1 {
  word-spacing: 0.25em !important;
}
</style>
`;

if (!html.includes('.header-intro__wrap h6 {')) {
  html = html.replace('</head>', `${extraStyles}\n</head>`);
}

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Fixed HI THERE visibility and spacing between I AM AHAMAD ZAEEM!');

