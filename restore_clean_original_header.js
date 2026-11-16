const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Remove all manual styles we added that broke the header structure:
html = html.replace(/<style>[\s\S]*?\.header-bottom[\s\S]*?<\/style>/g, '');
html = html.replace(/<style>[\s\S]*?\.header-top[\s\S]*?<\/style>/g, '');
html = html.replace(/<style>[\s\S]*?\.image-sequence__canvas[\s\S]*?<\/style>/g, '');

// 2. Put back the clean, 100% original Webflow header HTML:
const originalHeader = `<section id="header"><div class="padding-global"><div data-scroll-end="bottom top" data-sequence-wrap="" data-scroll-start="top top" class="image-sequence__wrap"><div class="image-sequence__sticky"><div class="scroll-col"><div data-sequence-element="" id="w-node-_1d7edd9a-c0a2-fdac-6869-db989cef2c6d-63c7f6b9" class="image-sequence__element"><canvas data-sequence-canvas="" data-desktop-src="/zaeem_portrait.jpg" data-mobile-src="/zaeem_portrait.jpg" data-filetype="jpg" data-frames="1" data-digits="3" data-index-start="1" data-static-src="/zaeem_portrait.jpg" class="image-sequence__canvas" style="background: url('/zaeem_portrait.jpg') center/cover no-repeat !important;"></canvas></div></div></div></div><div class="section__header"><div data-reveal-group="" class="header-top"><h6>ahamadzaeem.work</h6><h6>portfolio 2026</h6></div><div class="header-bottom"><div data-reveal-group="" class="header-intro__wrap"><h6 class="hide-mobile-landscape">Hi there</h6><div class="header-text-wrapper"><div class="star-icon w-embed"><svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 0L22.1089 20.2315C22.1536 21.0354 23.0188 21.5299 23.7418 21.1641L42 11.999L24.8507 23.0654C24.1683 23.5036 24.1683 24.4924 24.8507 24.9346L42 36.001L23.7418 26.8359C23.0147 26.4701 22.1536 26.9646 22.1089 27.7685L21 48L19.8911 27.7685C19.8464 26.9646 18.9812 26.4701 18.2582 26.8359L0 35.997L17.1493 24.9306C17.8317 24.4924 17.8317 23.5036 17.1493 23.0614L0 11.999L18.2582 21.1641C18.9853 21.5299 19.8464 21.0354 19.8911 20.2315L21 0Z" fill="#F34213"/>
</svg></div><p>I build intelligent AI systems & high-performance web apps, <br/>sharp, adaptive, unforgettable.</p></div></div><div class="line"></div><h1 data-stagger-char-delay="0.75" data-scroll="" data-scroll-speed="0.1" data-stagger-char="line" class="text-align-right">ahamadzaeem<br/><span class="text-color-orange">.work</span></h1></div></div><div id="info" class="section__info"><div class="_2-col is-intro"><h6>About</h6><div class="flex-vertical space-between is-stretch"><div data-reveal-group="" class="flex-vertical"><div class="stats-wrapper"><h6>Services</h6><h6 class="text-align-right">AI Agents, LLM Orchestration, <br/>Machine Learning & Full Stack Web</h6><div class="line is-top"></div></div><div class="stats-wrapper"><h6>Experience</h6><h6>AIML @ YIT (2023–2027)</h6><div class="line is-top"></div></div><div class="stats-wrapper"><h6>Timezone</h6><h6 data-timezone="Asia/Kolkata">IST (+5:30)</h6><div class="line is-top"></div></div><div class="stats-wrapper"><h6>availability</h6><h6>Open for AI / ML Roles & Projects</h6><div class="line is-top"></div></div><div class="stats-wrapper"><h6>Projects Delivered</h6><h6 data-untappd-checkins="">15+ Shipped</h6><div class="line is-top"></div></div></div><a data-button-097="" href="#work" class="button-097 w-inline-block"><span class="button-097__hover"><span class="button-097__bg is--hover"></span><span class="button-097__inner"><span class="button-097__text">Click here</span></span></span><span aria-hidden="true" class="button-097__default"><span class="button-097__bg is--default"></span><span class="button-097__inner"><span class="button-097__text">View work</span></span></span></a></div></div></div></div></section>`;

// Replace current <section id="header">...</section>
const curStart = html.indexOf('<section id="header">');
const curEnd = html.indexOf('</section>', curStart) + '</section>'.length;

html = html.substring(0, curStart) + originalHeader + html.substring(curEnd);

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Restored 100% exact original template header structure with new orange portrait!');

