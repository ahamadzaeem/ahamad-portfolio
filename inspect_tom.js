const fs = require('fs');
const html = fs.readFileSync('tom_source.html', 'utf8');

const splineUrls = html.match(/https:\/\/prod\.spline\.design\/[^"\s']+/g);
console.log('Spline URLs:', splineUrls);

const videos = html.match(/https:\/\/[^"\s']+\.(mp4|m3u8|webm)/g);
console.log('Video sources:', Array.from(new Set(videos)));

const headings = html.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi);
console.log('Headings:', headings?.slice(0, 10));

