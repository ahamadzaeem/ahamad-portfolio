const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// === Z LOGO SVG (clean geometric Z matching the dark aesthetic) ===
// ViewBox 0 0 32 32, bold geometric Z shape
const zLogoSVG = `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H28V9.5L10.5 22.5H28V28H4V22.5L21.5 9.5H4V4Z" fill="currentColor"/>
</svg>`;

// === Replace the 't' SVG in the nav-button (bottom-left logo) ===
const oldTSVG = `<svg width="100%" height="100%" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M14.8584 9.14355C14.2273 9.14371 13.7158 9.65504 13.7158 10.2861V22.8564H22.8584V32H13.7158C8.6667 32 4.57359 27.9065 4.57324 22.8574V18.2861H0.000976562V9.14355H14.8584ZM22.8584 9.14258H12.5732C13.2043 9.14239 13.7158 8.63107 13.7158 8V0H22.8584V9.14258Z" fill="CurrentColor"/>\n</svg>`;

html = html.replace(oldTSVG, zLogoSVG);
console.log('Nav Z logo replaced:', !html.includes('M14.8584'));

// === Replace all favicons with inline SVG data URI Z logo ===
const zFaviconSVG = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23232323'/><path d='M6 6H26V10.5L12 21.5H26V26H6V21.5L20 10.5H6V6Z' fill='%23ededeb'/></svg>`;

// Replace all the webflow favicon links with our custom Z
html = html.replace(
  `<link href="https://cdn.prod.website-files.com/6947d4a42871d2972031e9ab/6ab4170956715185cb65d693_fav-light.png" rel="icon" type="image/png" sizes="32x32" media="(prefers-color-scheme: light)"/>`,
  `<link href="${zFaviconSVG}" rel="icon" type="image/svg+xml" sizes="32x32"/>`
);
html = html.replace(
  `<link href="https://cdn.prod.website-files.com/6947d4a42871d2972031e9ab/6ab41700ab71586e1ed1efdf_fav-dark.png" rel="icon" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)"/>`,
  ``
);
html = html.replace(
  `<link href="https://cdn.prod.website-files.com/6947d4a42871d2972031e9ab/6ab41709acb358c8a90826c8_fav-light.png" rel="icon" type="image/png" sizes="48x48"/>`,
  ``
);
html = html.replace(
  `<link href="https://cdn.prod.website-files.com/6947d4a42871d2972031e9ab/6ab416aef2518a0d15d2fb28_fav.jpg" rel="apple-touch-icon" sizes="180x180"/>`,
  `<link href="${zFaviconSVG}" rel="apple-touch-icon" sizes="180x180"/>`
);
html = html.replace(
  `<link href="https://cdn.prod.website-files.com/6947d4a42871d2972031e9ab/6ab416aed46acdc84663819b_fav.jpg" rel="icon" type="image/png" sizes="192x192"/>`,
  ``
);
html = html.replace(
  `<link href="https://cdn.prod.website-files.com/6947d4a42871d2972031e9ab/6ab416ae6d143d06def7d8bb_fav.jpg" rel="icon" type="image/png" sizes="512x512"/>`,
  ``
);

fs.writeFileSync('public/index.html', html, 'utf8');
console.log('Favicon Z logo replaced!');
console.log('Favicons updated:', html.includes('ededeb'));

