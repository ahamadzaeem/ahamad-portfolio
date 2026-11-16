const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// The problem: .glass-carousel__collection has z-index: -1 (from webflow CSS),
// which makes the item images (.bunny-bg with project screenshots) show as 
// ghost/glitch images behind the WebGL canvas during animation.
// 
// Fix: Override the existing style block to hide the item images from DOM 
// (they are only needed as texture sources for WebGL, they're sampled via img element)
// Once WebGL initializes (data-glass-carousel="canvas"), the items can be fully invisible.

const carouselFix = `
<style id="fix-carousel-ghost">
  /* 
   * The glass-carousel__collection has z-index:-1 so item images bleed 
   * behind the WebGL canvas as ghost/glitch textures.
   * Fix: Set opacity:0 on the collection so images are hidden but still 
   * available as texture sources for the WebGL renderer.
   * The canvas overlay renders them as 3D curved cards instead.
   */
  .glass-carousel__collection {
    opacity: 0 !important;
    pointer-events: none !important;
    z-index: -1 !important;
  }

  /* But keep the content (captions) accessible via the caption element */
  .glass-carousel__caption {
    opacity: 1 !important;
    pointer-events: auto !important;
    z-index: 20 !important;
  }

  /* Make sure section background covers everything */
  .glass-carousel,
  #work {
    background-color: #0c0c0d !important;
    overflow: hidden !important;
  }

  /* Full-cover dark bg behind the canvas so no images peek through */
  .glass-carousel::before {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    background: #0c0c0d;
    z-index: -2;
  }
</style>
`;

// Remove old fix if present, replace with new
if (html.includes('id="fix-carousel-ghost"')) {
  html = html.replace(/<style id="fix-carousel-ghost">[\s\S]*?<\/style>/, carouselFix);
  console.log('Updated fix-carousel-ghost CSS');
} else {
  html = html.replace('</head>', carouselFix + '\n</head>');
  console.log('Injected fix-carousel-ghost CSS');
}

fs.writeFileSync('public/index.html', html, 'utf8');
console.log('Done!');

