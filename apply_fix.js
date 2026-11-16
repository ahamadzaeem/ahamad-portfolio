const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

const fixCss = `
<style id="fix-bg-bleed-and-layout">
  #header {
    position: relative;
    z-index: 1;
  }
  /* Ensure all sections below the header have an opaque background and higher z-index */
  #about,
  .section__about,
  .section__info,
  section:has(.heading-extreme),
  #work,
  .glass-carousel,
  #ai-projects,
  #expertise-education,
  #contact,
  .section-footer {
    position: relative !important;
    z-index: 5 !important;
    background-color: #0c0c0d !important;
  }

  /* Prevent canvas sequence or sticky container from showing underneath work carousel */
  .image-sequence__wrap {
    pointer-events: none;
  }
</style>
`;

if (!html.includes('id="fix-bg-bleed-and-layout"')) {
  html = html.replace('</head>', fixCss + '\n</head>');
  fs.writeFileSync('public/index.html', html, 'utf8');
  console.log('Successfully injected fix-bg-bleed-and-layout CSS!');
} else {
  console.log('Already present');
}

