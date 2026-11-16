const fs = require('fs');

let html = fs.readFileSync('public/tom.html', 'utf8');

// Title & Metadata
html = html.replace(/<title>.*?<\/title>/gi, '<title>Ahamad Zaeem — AI & Machine Learning Engineer</title>');
html = html.replace(/tomdekoning\.work/gi, 'ahamadzaeem.work');
html = html.replace(/tomdekoning/gi, 'ahamadzaeem');
html = html.replace(/Tomdekoning/gi, 'Ahamad Zaeem');
html = html.replace(/Tom de Koning/gi, 'Ahamad Zaeem');

// Phone & Email & Social
html = html.replace(/\+316 41 80 41 77/g, '+91 8848593923');
html = html.replace(/\+31641804177/g, '+918848593923');
html = html.replace(/Hello@tomdekoning\.work/gi, 'zaeemahamad111@gmail.com');
html = html.replace(/mailto:Hello@tomdekoning\.work/gi, 'mailto:zaeemahamad111@gmail.com');
html = html.replace(/https:\/\/www\.linkedin\.com\/in\/tom-de-koning\//g, 'https://linkedin.com/in/ahamadzaeem');
html = html.replace(/@Tomdekoning/g, '@AhamadZaeem');
html = html.replace(/https:\/\/www\.instagram\.com\/tomdekoning\.work/g, 'https://github.com/zaeemahamad111-ops');
html = html.replace(/Instagram/g, 'GitHub');
html = html.replace(/@Tomdekoning\.work/g, '@zaeemahamad111-ops');

// Tagline
html = html.replace(/I kill average brands and rebuild them, <br\/>stronger, sharper, unforgettable\./g, 
  'Building scalable AI systems and intelligent agents, <br/>sharp, adaptive, engineered for the real world.');

// Hero Bio text
html = html.replace(/I build brands that turn heads — online and beyond/g,
  'I build intelligent AI systems and agents — from models to production');

html = html.replace(/I’m a freelance creative director based in the Netherlands[\s\S]*?A brand that works as one\./g,
  'I am an Artificial Intelligence and Machine Learning engineer based in Kerala, India. Specializing in LLMs, Autonomous AI Agents, NLP, and modern full-stack web applications. I bridge cutting-edge research models with production-grade engineering to deliver impactful, scalable software.');

// Services & Stats
html = html.replace(/Strategy, \(digital\) design &amp; <br\/>creative development/g,
  'AI Agents, LLM Orchestration, <br/>Machine Learning & Full Stack Web');

html = html.replace(/8\+ years/g, 'AIML @ YIT (CGPA 8.66)');
html = html.replace(/Europe\/Amsterdam/g, 'Asia/Kolkata');
html = html.replace(/>AMS</g, '>IST (+5:30)<');
html = html.replace(/Taking on projects from Q4/g, 'Open for AI / ML Roles & Projects');
html = html.replace(/craft beers discovered/g, 'Projects Delivered');
html = html.replace(/1,938\+/g, '15+ Shipped');

// Save modified html
fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Successfully personalized portfolio with Ahamad Zaeem data!');

