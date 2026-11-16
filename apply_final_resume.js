const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// Replace the two sections (ai-projects and expertise-education) with the exact content from "Final resume .pdf"
// using the matching typography: headings use "Playfair Display", labels/body use Webflow native system / Geist sans-serif

const startMarker = '<!-- SECTION: FEATURED AI PROJECTS (Infina & DeplotAI Platform) -->';
const endMarker = '</section>\n\n<section id="contact"';

const startPos = html.indexOf(startMarker);
const endPos = html.indexOf('<section id="contact"');

console.log('Replacing from', startPos, 'to', endPos);

const updatedSectionsHtml = `
<!-- SECTION: FEATURED AI PROJECTS (Hirica & Infina) -->
<section id="ai-projects" style="padding: 100px 0; border-top: 1px solid #232325; background: #0c0c0d;">
  <div class="padding-global">
    <div style="margin-bottom: 60px;">
      <h6 style="color: #8a8a88; text-transform: uppercase; letter-spacing: 0.15em; font-size: 12px; margin-bottom: 12px;">Engineering & Innovation</h6>
      <h2 class="heading-2" style="font-family: 'Playfair Display', serif; font-size: clamp(36px, 5vw, 64px); color: #ededeb; font-weight: 400; line-height: 1.15; margin: 0;">
        Featured AI Projects
      </h2>
      <p style="color: #8a8a88; font-size: 15px; margin-top: 14px; max-width: 600px; line-height: 1.6;">
        Autonomous recruitment workflows, dynamic assessment engines, and critical-thinking dialogue assistants.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
      
      <!-- Project 1: Hirica -->
      <div id="project-hirica" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;">
        <div id="hirica-image-slot" style="width: 100%; aspect-ratio: 16/9; background: #141416; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative;">
          <div style="text-align: center; color: #8a8a88; font-size: 13px;">
            <span style="display: block; font-size: 28px; margin-bottom: 6px;">💼</span>
            <span style="font-weight: 500; color: #ededeb;">Hirica UI Image Slot</span>
            <span style="display: block; font-size: 11px; opacity: 0.6; margin-top: 4px;">(Ready for your screenshot)</span>
          </div>
        </div>
        <div style="padding: 32px; display: flex; flex-direction: column; flex-grow: 1;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px;">
            <h3 style="font-family: 'Playfair Display', serif; font-size: 26px; color: #ededeb; font-weight: 500; margin: 0;">Hirica</h3>
            <span style="font-size: 11px; color: #ff5722; border: 1px solid rgba(255,87,34,0.3); padding: 3px 8px; border-radius: 4px; font-family: monospace;">2026 (Ongoing)</span>
          </div>
          <div style="font-size: 13px; color: #ff5722; margin-bottom: 14px; font-weight: 500;">AI-Powered Hiring & Recruitment Platform</div>
          <p style="color: #b0b0ad; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
            Developed a Phase-I end-to-end AI recruitment platform integrating recruiter and candidate workflows, dynamic assessments, evaluation, behavioural monitoring, and interview architecture.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0 0 24px 0; display: flex; flex-direction: column; gap: 10px;">
            <li style="color: #8a8a88; font-size: 13px; line-height: 1.5; display: flex; align-items: flex-start; gap: 8px;">
              <span style="color: #ff5722;">•</span> Designed a dynamic LLM assessment engine using role-specific prompts, structured JSON output, unique generation seeds, recruiter review, and retry-safe question regeneration.
            </li>
            <li style="color: #8a8a88; font-size: 13px; line-height: 1.5; display: flex; align-items: flex-start; gap: 8px;">
              <span style="color: #ff5722;">•</span> Implemented technical architecture with Next.js, Supabase PostgreSQL/RLS, LLM APIs, MediaPipe client-side monitoring, real-time state persistence, and structured AI evaluation reports.
            </li>
          </ul>
          <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; flex-wrap: wrap; gap: 8px;">
            <span style="font-size: 11px; font-family: monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">Next.js</span>
            <span style="font-size: 11px; font-family: monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">Supabase</span>
            <span style="font-size: 11px; font-family: monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">LLM APIs</span>
            <span style="font-size: 11px; font-family: monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">MediaPipe</span>
          </div>
        </div>
      </div>

      <!-- Project 2: Infina -->
      <div id="project-infina" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;">
        <div id="infina-image-slot" style="width: 100%; aspect-ratio: 16/9; background: #141416; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative;">
          <div style="text-align: center; color: #8a8a88; font-size: 13px;">
            <span style="display: block; font-size: 28px; margin-bottom: 6px;">🧠</span>
            <span style="font-weight: 500; color: #ededeb;">Infina UI Image Slot</span>
            <span style="display: block; font-size: 11px; opacity: 0.6; margin-top: 4px;">(Ready for your screenshot)</span>
          </div>
        </div>
        <div style="padding: 32px; display: flex; flex-direction: column; flex-grow: 1;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px;">
            <h3 style="font-family: 'Playfair Display', serif; font-size: 26px; color: #ededeb; font-weight: 500; margin: 0;">Infina</h3>
            <span style="font-size: 11px; color: #ff5722; border: 1px solid rgba(255,87,34,0.3); padding: 3px 8px; border-radius: 4px; font-family: monospace;">Python · NLP · LLMs</span>
          </div>
          <div style="font-size: 13px; color: #ff5722; margin-bottom: 14px; font-weight: 500;">Socratic AI Assistant</div>
          <p style="color: #b0b0ad; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
            Developed an AI-powered learning assistant that helps users to think critically through Socratic questioning instead of direct answers.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0 0 24px 0; display: flex; flex-direction: column; gap: 10px;">
            <li style="color: #8a8a88; font-size: 13px; line-height: 1.5; display: flex; align-items: flex-start; gap: 8px;">
              <span style="color: #ff5722;">•</span> Designed adaptive conversational workflows using NLP and LLM technologies to create personalized learning experiences.
            </li>
            <li style="color: #8a8a88; font-size: 13px; line-height: 1.5; display: flex; align-items: flex-start; gap: 8px;">
              <span style="color: #ff5722;">•</span> Implemented dynamic dialogue logic that adjusts questioning strategies based on user responses and understanding.
            </li>
          </ul>
          <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; flex-wrap: wrap; gap: 8px;">
            <span style="font-size: 11px; font-family: monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">Python</span>
            <span style="font-size: 11px; font-family: monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">NLP</span>
            <span style="font-size: 11px; font-family: monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">LLM APIs</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- SECTION: SKILLS, EDUCATION & ACHIEVEMENTS (Same Typography & Playfair Display) -->
<section id="expertise-education" style="padding: 100px 0; border-top: 1px solid #232325; background: #080809;">
  <div class="padding-global">
    
    <!-- Skills Matrix -->
    <div style="margin-bottom: 80px;">
      <h6 style="color: #8a8a88; text-transform: uppercase; letter-spacing: 0.15em; font-size: 12px; margin-bottom: 12px;">Technical Stack</h6>
      <h2 class="heading-2" style="font-family: 'Playfair Display', serif; font-size: clamp(32px, 4vw, 52px); color: #ededeb; font-weight: 400; line-height: 1.15; margin: 0 0 40px 0;">
        Skills & Capabilities
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
        
        <div style="padding: 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
          <h4 style="font-family: 'Playfair Display', serif; font-size: 18px; color: #ff5722; margin: 0 0 12px 0;">Programming Languages</h4>
          <p style="color: #b0b0ad; font-size: 13.5px; line-height: 1.6; margin: 0;">
            Python, C, R, Julia
          </p>
        </div>

        <div style="padding: 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
          <h4 style="font-family: 'Playfair Display', serif; font-size: 18px; color: #ff5722; margin: 0 0 12px 0;">AI / Machine Learning</h4>
          <p style="color: #b0b0ad; font-size: 13.5px; line-height: 1.6; margin: 0;">
            Machine Learning, Deep Learning, Generative AI, RAG, Hugging Face, Scikit-learn, Gensim
          </p>
        </div>

        <div style="padding: 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
          <h4 style="font-family: 'Playfair Display', serif; font-size: 18px; color: #ff5722; margin: 0 0 12px 0;">Web Development</h4>
          <p style="color: #b0b0ad; font-size: 13.5px; line-height: 1.6; margin: 0;">
            React.js, Next.js (Beginner Level)
          </p>
        </div>

        <div style="padding: 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
          <h4 style="font-family: 'Playfair Display', serif; font-size: 18px; color: #ff5722; margin: 0 0 12px 0;">Database & Backend</h4>
          <p style="color: #b0b0ad; font-size: 13.5px; line-height: 1.6; margin: 0;">
            SQL, Supabase
          </p>
        </div>

      </div>
    </div>

    <!-- Education & Achievements Split -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 60px;">
      
      <!-- Education -->
      <div>
        <h6 style="color: #8a8a88; text-transform: uppercase; letter-spacing: 0.15em; font-size: 12px; margin-bottom: 16px;">Academic Foundation</h6>
        <h3 style="font-family: 'Playfair Display', serif; font-size: 28px; color: #ededeb; margin: 0 0 28px 0;">Education</h3>
        
        <div style="border-left: 1px solid rgba(255,255,255,0.1); padding-left: 24px; display: flex; flex-direction: column; gap: 28px;">
          <div>
            <div style="color: #ff5722; font-size: 12px; font-family: monospace; margin-bottom: 4px;">2023 – 2027 (ongoing)</div>
            <div style="color: #ededeb; font-size: 16px; font-weight: 500;">B.E. in Artificial Intelligence and Machine Learning</div>
            <div style="color: #8a8a88; font-size: 13px; margin-top: 2px;">Yenepoya Institute of Technology, Mangalore (VTU)</div>
            <div style="color: #ededeb; font-size: 12px; margin-top: 4px; font-family: monospace;">CGPA: 8.66</div>
          </div>

          <div>
            <div style="color: #8a8a88; font-size: 12px; font-family: monospace; margin-bottom: 4px;">Completed 2022</div>
            <div style="color: #ededeb; font-size: 16px; font-weight: 500;">Class 12</div>
            <div style="color: #8a8a88; font-size: 13px; margin-top: 2px;">SSMVHSS, Kerala</div>
            <div style="color: #ededeb; font-size: 12px; margin-top: 4px; font-family: monospace;">Percentage: 92%</div>
          </div>

          <div>
            <div style="color: #8a8a88; font-size: 12px; font-family: monospace; margin-bottom: 4px;">Completed 2020</div>
            <div style="color: #ededeb; font-size: 16px; font-weight: 500;">Class 10</div>
            <div style="color: #8a8a88; font-size: 13px; margin-top: 2px;">National Huda Central School, Kerala</div>
            <div style="color: #ededeb; font-size: 12px; margin-top: 4px; font-family: monospace;">Percentage: 86%</div>
          </div>
        </div>
      </div>

      <!-- Certifications & Hackathons -->
      <div>
        <h6 style="color: #8a8a88; text-transform: uppercase; letter-spacing: 0.15em; font-size: 12px; margin-bottom: 16px;">Credentials & Leadership</h6>
        <h3 style="font-family: 'Playfair Display', serif; font-size: 28px; color: #ededeb; margin: 0 0 28px 0;">Certifications & Hackathons</h3>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          
          <div style="padding: 16px 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <span style="color: #ededeb; font-size: 14.5px; font-weight: 500;">Data Analytics Job Simulation</span>
              <span style="color: #ff5722; font-size: 11px; font-family: monospace;">Deloitte Australia · Forage</span>
            </div>
          </div>

          <div style="padding: 16px 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <span style="color: #ededeb; font-size: 14.5px; font-weight: 500;">Rapid Development for AI Services</span>
              <span style="color: #ff5722; font-size: 11px; font-family: monospace;">IBM Developer Skills Network</span>
            </div>
          </div>

          <div style="padding: 16px 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <span style="color: #ededeb; font-size: 14.5px; font-weight: 500;">R for Data Science</span>
              <span style="color: #ff5722; font-size: 11px; font-family: monospace;">IBM</span>
            </div>
          </div>

          <div style="padding: 20px; background: rgba(255,87,34,0.04); border: 1px solid rgba(255,87,34,0.2); border-radius: 8px; margin-top: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
              <span style="color: #ededeb; font-size: 15px; font-weight: 600;">Core Organizer · Matrix Fusion 4.0</span>
              <span style="color: #ff5722; font-size: 11px; font-family: monospace;">April 2026</span>
            </div>
            <p style="color: #8a8a88; font-size: 13px; line-height: 1.5; margin: 0;">
              Served as a core organizer for a 24-hour National Level AI and Machine Learning Hackathon (Yen Artificia, YIT), managing event coordination, logistics, finance, and participant engagement.
            </p>
          </div>

          <div style="padding: 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
              <span style="color: #ededeb; font-size: 15px; font-weight: 600;">Participant · Anveshan 2025 Round 1</span>
              <span style="color: #8a8a88; font-size: 11px; font-family: monospace;">October 2025</span>
            </div>
            <p style="color: #8a8a88; font-size: 13px; line-height: 1.5; margin: 0;">
              Participated in the IEEE innovation hackathon (IEEE Bangalore Section), collaborating with a multidisciplinary team to solve real-world challenges using AI-driven solutions.
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>
`;

if (startPos !== -1 && endPos !== -1) {
  html = html.substring(0, startPos) + updatedSectionsHtml + '\n' + html.substring(endPos);
}

// Update Education year in header stats from 2023-2026 to 2023-2027 (ongoing)
html = html.replace(/AIML @ YIT \(CGPA 8\.66\)/g, 'AIML @ YIT (2023–2027)');

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Updated with Final resume .pdf content, matching Playfair Display & editorial font styles!');

