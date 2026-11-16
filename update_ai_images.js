const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// Replace Hirica placeholder slot with actual image
html = html.replace(
  `<div id="hirica-image-slot" style="width: 100%; aspect-ratio: 16/9; background: #141416; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative;">
          <div style="text-align: center; color: #8a8a88; font-size: 13px;">
            <span style="display: block; font-size: 28px; margin-bottom: 6px;">💼</span>
            <span style="font-wei`,
  `<div id="hirica-image-slot" style="width: 100%; aspect-ratio: 16/9; background: #141416; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative; overflow: hidden;">
          <img src="/projects/hirica.jpg" alt="Hirica — AI Talent Acquisition" style="width:100%;height:100%;object-fit:cover;display:block;" />
          <div style="display:none; text-align: center; color: #8a8a88; font-size: 13px;">
            <span style="display: block; font-size: 28px; margin-bottom: 6px;">💼</span>
            <span style="font-wei`
);

// Also try a simpler targeted replace for the entire placeholder div
// Find and replace the hirica image slot content if first attempt didn't work
if (html.includes('💼')) {
  // Find hirica-image-slot and replace its contents more aggressively
  const hiricaStart = html.indexOf('id="hirica-image-slot"');
  const hiricaEnd = html.indexOf('</div>', hiricaStart + 200) + 6; // first closing div
  if (hiricaStart !== -1) {
    const beforeHirica = html.slice(0, hiricaStart);
    const afterHirica = html.slice(hiricaEnd);
    const newHiricaBlock = `id="hirica-image-slot" style="width:100%;aspect-ratio:16/9;background:#141416;border-bottom:1px solid rgba(255,255,255,0.06);overflow:hidden;"><img src="/projects/hirica.jpg" alt="Hirica — AI Recruitment" style="width:100%;height:100%;object-fit:cover;display:block;"/></div`;
    html = beforeHirica + newHiricaBlock + afterHirica;
    console.log('Hirica replaced via index method');
  }
}

fs.writeFileSync('public/index.html', html, 'utf8');
console.log('Saved. Checking hirica img present:', html.includes('/projects/hirica.jpg'));

