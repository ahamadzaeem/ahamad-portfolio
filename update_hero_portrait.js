const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

html = html.replace(
  /background:\s*url\('[^']*'\)/g,
  "background: url('/portrait_cropped.jpg')"
);

html = html.replace(/data-static-src="[^"]*"/g, 'data-static-src="/portrait_cropped.jpg"');
html = html.replace(/data-desktop-src="[^"]*"/g, 'data-desktop-src="/portrait_cropped.jpg"');
html = html.replace(/data-mobile-src="[^"]*"/g, 'data-mobile-src="/portrait_cropped.jpg"');

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Updated to use portrait_cropped.jpg in hero!');

