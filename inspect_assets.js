const fs = require('fs');
const html = fs.readFileSync('tom_source.html', 'utf8');

// Find all css files
const cssFiles = html.match(/https:\/\/[^"\s']+\.css/g);
console.log('CSS files:', cssFiles);

// Find custom scripts
const scripts = html.match(/<script[^>]*src="([^"]+)"[^>]*>/g);
console.log('Scripts:', scripts);

