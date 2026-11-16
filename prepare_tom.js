const fs = require('fs');

let html = fs.readFileSync('tom_source.html', 'utf8');

// Ensure Spline runtime is loaded for the 3D 't' shape
if (!html.includes('@splinetool/runtime')) {
  html = html.replace('</head>', '<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js"></script>\n</head>');
}

// Make sure videos have webm/mp4 fallbacks or HLS works seamlessly
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Successfully written public/tom.html');

