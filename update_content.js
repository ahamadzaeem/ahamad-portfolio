const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Fix Web Development skills - remove "(Beginner Level)", add more frameworks
html = html.replace(
  'React.js, Next.js (Beginner Level)',
  'Next.js, React.js, Gatsby, HTML/CSS, JavaScript, TypeScript, GSAP, Framer Motion, Webflow — 15+ shipped animated websites'
);

// 2. Remove Timezone stats-wrapper entirely
html = html.replace(
  '<div class="stats-wrapper"><h6>Timezone</h6><h6 data-timezone="Asia/Kolkata">IST (+5:30)</h6><div class="line is-top"></div></div>',
  ''
);

// 3. Update Availability/Currently row → Freelance + Diplot AI
html = html.replace(
  '<h6>availability</h6><h6>Open for AI / ML Roles &amp; Projects</h6>',
  '<h6>Currently</h6><h6>Freelance Web Developer at Diplot AI</h6>'
);

// 4. Update Experience row → B.E. 4th Year, graduating 2027
html = html.replace(
  '<h6>Experience</h6><h6>AIML @ YIT (2023\u20132027)</h6>',
  '<h6>Education</h6><h6>B.E. (Eng.) · Yenepoya Institute of Technology · 4th Year, 2027</h6>'
);

// 5. Update education section - fix university name to Yenpoya (consistent)
html = html.replace(
  'Yenepoya Institute of Technology, Mangalore (VTU)',
  'Yenepoya Institute of Technology · 4th Year (2023–2027)'
);

// 6. Update about paragraph to reflect current role
html = html.replace(
  'Freelance web developer and AI engineer based in Kerala, India. From concept to deployment, I build high-performance web applications and production-ready AI workflows with clean architecture and sharp aesthetics.',
  'Freelance web developer and AI engineer based in Kerala, India. Currently working at Diplot AI as a web developer, building high-impact web experiences with Next.js, React, Gatsby and modern animation stacks — 15+ shipped animated websites — alongside production-ready AI workflows with clean architecture and sharp aesthetics.'
);

fs.writeFileSync('public/index.html', html, 'utf8');
console.log('All content updates applied!');

