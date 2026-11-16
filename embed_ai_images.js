const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// Replace Hirica slot
const hiricaTarget = `<div id="hirica-image-slot" style="width: 100%; aspect-ratio: 16/9; background: #141416; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative;">
          <div style="text-align: center; color: #8a8a88; font-size: 13px;">
            <span style="display: block; font-size: 28px; margin-bottom: 6px;">💼</span>
            <span style="font-weight: 500; color: #ededeb;">Hirica UI Image Slot</span>
            <span style="display: block; font-size: 11px; opacity: 0.6; margin-top: 4px;">(Ready for your screenshot)</span>
          </div>
        </div>`;

const hiricaReplacement = `<div id="hirica-image-slot" style="width: 100%; aspect-ratio: 16/9; background: #141416; overflow: hidden; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative;">
          <img src="/projects/hirica.jpg" alt="Hirica Platform Preview" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
        </div>`;

// Replace Infina slot
const infinaTarget = `<div id="infina-image-slot" style="width: 100%; aspect-ratio: 16/9; background: #141416; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative;">
          <div style="text-align: center; color: #8a8a88; font-size: 13px;">
            <span style="display: block; font-size: 28px; margin-bottom: 6px;">🧠</span>
            <span style="font-weight: 500; color: #ededeb;">Infina UI Image Slot</span>
            <span style="display: block; font-size: 11px; opacity: 0.6; margin-top: 4px;">(Ready for your screenshot)</span>
          </div>
        </div>`;

const infinaReplacement = `<div id="infina-image-slot" style="width: 100%; aspect-ratio: 16/9; background: #141416; overflow: hidden; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative;">
          <img src="/projects/infina.jpg" alt="Infina Platform Preview" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
        </div>`;

if (html.includes(hiricaTarget)) {
  html = html.replace(hiricaTarget, hiricaReplacement);
  console.log('Replaced Hirica slot');
} else {
  console.log('Hirica target not found verbatim, using regex');
  html = html.replace(/<div id="hirica-image-slot"[\s\S]*?<\/div>\s*<\/div>/, hiricaReplacement);
}

if (html.includes(infinaTarget)) {
  html = html.replace(infinaTarget, infinaReplacement);
  console.log('Replaced Infina slot');
} else {
  console.log('Infina target not found verbatim, using regex');
  html = html.replace(/<div id="infina-image-slot"[\s\S]*?<\/div>\s*<\/div>/, infinaReplacement);
}

fs.writeFileSync('public/index.html', html, 'utf8');
console.log('Updated public/index.html with Hirica and Infina images!');
