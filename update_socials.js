const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Fix LinkedIn link (already correct, but ensure full URL)
html = html.replace(
  'href="https://linkedin.com/in/ahamadzaeem"',
  'href="https://www.linkedin.com/in/ahamadzaeem"'
);

// 2. Fix GitHub link - currently wrongly pointing to instagram URL
// GitHub label has wrong href pointing to instagram
html = html.replace(
  '<h6 class="text-align-right">GitHub</h6><a data-link-stagger="" href="https://www.instagram.com/ahamadzaeem.work" target="_blank" class="heading-style-h6 text-align-right">@ahamadzaeem.work</a>',
  '<h6 class="text-align-right">GitHub</h6><a data-link-stagger="" href="https://github.com/zaeemahamad111-ops" target="_blank" class="heading-style-h6 text-align-right">@zaeemahamad111-ops</a>'
);

// 3. Add Instagram after GitHub in footer social block
html = html.replace(
  '<h6 class="text-align-right">GitHub</h6><a data-link-stagger="" href="https://github.com/zaeemahamad111-ops" target="_blank" class="heading-style-h6 text-align-right">@zaeemahamad111-ops</a></div>',
  '<h6 class="text-align-right">GitHub</h6><a data-link-stagger="" href="https://github.com/zaeemahamad111-ops" target="_blank" class="heading-style-h6 text-align-right">@zaeemahamad111-ops</a></div><div class="flex-vertical"><h6 class="text-align-right">Instagram</h6><a data-link-stagger="" href="https://www.instagram.com/zaeem_ahamad" target="_blank" class="heading-style-h6 text-align-right">@zaeem_ahamad</a></div>'
);

// 4. Fix JSON-LD schema sameAs social links
html = html.replace(
  '"JOUW_LINKEDIN_URL"',
  '"https://www.linkedin.com/in/ahamadzaeem"'
);
html = html.replace(
  '"JOUW_INSTAGRAM_URL"',
  '"https://www.instagram.com/zaeem_ahamad"'
);

fs.writeFileSync('public/index.html', html, 'utf8');
console.log('Social links updated!');

// Verify
console.log('GitHub link ok:', html.includes('github.com/zaeemahamad111-ops'));
console.log('Instagram ok:', html.includes('instagram.com/zaeem_ahamad'));
console.log('LinkedIn ok:', html.includes('linkedin.com/in/ahamadzaeem'));

