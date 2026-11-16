const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Comprehensive sections HTML matching the dark editorial aesthetic
const resumeSectionsHtml = `
<!-- SECTION: FEATURED AI PROJECTS (Infina & DeplotAI Platform) -->
<section id="ai-projects" style="padding: 100px 0; border-top: 1px solid #232325; background: #0c0c0d;">
  <div class="padding-global">
    <div style="margin-bottom: 60px;">
      <h6 style="color: #8a8a88; font-family: 'Geist', sans-serif; text-transform: uppercase; letter-spacing: 0.15em; font-size: 12px; margin-bottom: 12px;">Engineering & Innovation</h6>
      <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(36px, 5vw, 64px); color: #ededeb; font-weight: 400; line-height: 1.15;">
        Featured AI Projects
      </h2>
      <p style="color: #8a8a88; font-size: 15px; margin-top: 14px; max-width: 600px; line-height: 1.6;">
        Specialized machine learning and LLM agent systems developed with production workflows, dynamic reasoning, and adaptive architectures.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
      
      <!-- Project 1: Infina -->
      <div id="project-infina" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;">
        <div id="infina-image-slot" style="width: 100%; aspect-ratio: 16/9; background: #141416; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative;">
          <div style="text-align: center; color: #8a8a88; font-family: 'Geist', sans-serif; font-size: 13px;">
            <span style="display: block; font-size: 28px; margin-bottom: 6px;">🧠</span>
            <span>Infina UI Image Slot</span>
            <span style="display: block; font-size: 11px; opacity: 0.6; margin-top: 4px;">(Ready for your screenshot)</span>
          </div>
        </div>
        <div style="padding: 32px; display: flex; flex-direction: column; flex-grow: 1;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px;">
            <h3 style="font-family: 'Playfair Display', serif; font-size: 26px; color: #ededeb; font-weight: 500;">Infina</h3>
            <span style="font-family: 'Geist', sans-serif; font-size: 11px; color: #ff5722; border: 1px solid rgba(255,87,34,0.3); padding: 3px 8px; border-radius: 4px;">Socratic AI Assistant</span>
          </div>
          <p style="color: #b0b0ad; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
            An AI-powered learning assistant that guides users to think critically through Socratic questioning rather than offering direct answers. Designed with adaptive conversational workflows using NLP and LLMs to create tailored learning pathways.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0 0 24px 0; display: flex; flex-direction: column; gap: 8px;">
            <li style="color: #8a8a88; font-size: 13px; display: flex; align-items: flex-start; gap: 8px;">
              <span style="color: #ff5722;">•</span> Implemented dynamic dialogue logic that adjusts questioning strategies based on user responses and conceptual depth.
            </li>
            <li style="color: #8a8a88; font-size: 13px; display: flex; align-items: flex-start; gap: 8px;">
              <span style="color: #ff5722;">•</span> Built custom conversational memory pipelines for context retention and personalized cognitive scaffolding.
            </li>
          </ul>
          <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; flex-wrap: gap: 8px; gap: 8px;">
            <span style="font-size: 11px; font-family: 'Geist', monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">Python</span>
            <span style="font-size: 11px; font-family: 'Geist', monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">NLP</span>
            <span style="font-size: 11px; font-family: 'Geist', monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">LLM APIs</span>
            <span style="font-size: 11px; font-family: 'Geist', monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">LangChain</span>
          </div>
        </div>
      </div>

      <!-- Project 2: DeplotAI Platform -->
      <div id="project-deplotai" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column;">
        <div id="deplotai-image-slot" style="width: 100%; aspect-ratio: 16/9; background: #141416; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative;">
          <div style="text-align: center; color: #8a8a88; font-family: 'Geist', sans-serif; font-size: 13px;">
            <span style="display: block; font-size: 28px; margin-bottom: 6px;">⚡</span>
            <span>DeplotAI Platform Image Slot</span>
            <span style="display: block; font-size: 11px; opacity: 0.6; margin-top: 4px;">(Ready for your screenshot)</span>
          </div>
        </div>
        <div style="padding: 32px; display: flex; flex-direction: column; flex-grow: 1;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px;">
            <h3 style="font-family: 'Playfair Display', serif; font-size: 26px; color: #ededeb; font-weight: 500;">DeplotAI Web Platform</h3>
            <span style="font-family: 'Geist', sans-serif; font-size: 11px; color: #ff5722; border: 1px solid rgba(255,87,34,0.3); padding: 3px 8px; border-radius: 4px;">Production Web & AI</span>
          </div>
          <p style="color: #b0b0ad; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
            Delivered 15+ end-to-end client applications, business websites, and intelligent web platforms from architecture and UI planning through production deployment and support.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0 0 24px 0; display: flex; flex-direction: column; gap: 8px;">
            <li style="color: #8a8a88; font-size: 13px; display: flex; align-items: flex-start; gap: 8px;">
              <span style="color: #ff5722;">•</span> Collaborated directly with international stakeholders to implement scalable React/Next.js architectures and automated workflows.
            </li>
            <li style="color: #8a8a88; font-size: 13px; display: flex; align-items: flex-start; gap: 8px;">
              <span style="color: #ff5722;">•</span> Managed infrastructure, domain configurations, CI/CD deployment, and high-availability web administration.
            </li>
          </ul>
          <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; flex-wrap: gap: 8px; gap: 8px;">
            <span style="font-size: 11px; font-family: 'Geist', monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">Next.js</span>
            <span style="font-size: 11px; font-family: 'Geist', monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">React</span>
            <span style="font-size: 11px; font-family: 'Geist', monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">FastAPI</span>
            <span style="font-size: 11px; font-family: 'Geist', monospace; background: rgba(255,255,255,0.05); color: #ededeb; padding: 4px 10px; border-radius: 4px;">Tailwind</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- SECTION: SKILLS, EDUCATION & ACHIEVEMENTS -->
<section id="expertise-education" style="padding: 100px 0; border-top: 1px solid #232325; background: #080809;">
  <div class="padding-global">
    
    <!-- Skills Matrix -->
    <div style="margin-bottom: 80px;">
      <h6 style="color: #8a8a88; font-family: 'Geist', sans-serif; text-transform: uppercase; letter-spacing: 0.15em; font-size: 12px; margin-bottom: 12px;">Technical Stack</h6>
      <h2 style="font-family: 'Playfair Display', serif; font-size: clamp(32px, 4vw, 52px); color: #ededeb; font-weight: 400; line-height: 1.15; margin-bottom: 40px;">
        Skills & Capabilities
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
        
        <div style="padding: 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
          <h4 style="font-family: 'Playfair Display', serif; font-size: 18px; color: #ff5722; margin-bottom: 12px;">AI / Machine Learning</h4>
          <p style="color: #b0b0ad; font-size: 13.5px; line-height: 1.6;">
            Machine Learning, NLP, Large Language Models (LLMs), Autonomous AI Agents, Prompt Engineering, RAG Architectures, Data Analysis
          </p>
        </div>

        <div style="padding: 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
          <h4 style="font-family: 'Playfair Display', serif; font-size: 18px; color: #ff5722; margin-bottom: 12px;">Frameworks & Tools</h4>
          <p style="color: #b0b0ad; font-size: 13.5px; line-height: 1.6;">
            TensorFlow, PyTorch, Scikit-learn, LangChain, Hugging Face, Pandas, NumPy, FastAPI, Git, GitHub
          </p>
        </div>

        <div style="padding: 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
          <h4 style="font-family: 'Playfair Display', serif; font-size: 18px; color: #ff5722; margin-bottom: 12px;">Web Development</h4>
          <p style="color: #b0b0ad; font-size: 13.5px; line-height: 1.6;">
            JavaScript, React.js, Next.js, HTML5/CSS3, Tailwind CSS, REST APIs, Micro-interactions, WebGL
          </p>
        </div>

        <div style="padding: 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
          <h4 style="font-family: 'Playfair Display', serif; font-size: 18px; color: #ff5722; margin-bottom: 12px;">Languages & Core</h4>
          <p style="color: #b0b0ad; font-size: 13.5px; line-height: 1.6;">
            Python, R, C, Julia, SQL · Problem Solving, Analytical Thinking, Team Collaboration, Agile Development
          </p>
        </div>

      </div>
    </div>

    <!-- Education & Achievements Split -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 60px;">
      
      <!-- Education -->
      <div>
        <h6 style="color: #8a8a88; font-family: 'Geist', sans-serif; text-transform: uppercase; letter-spacing: 0.15em; font-size: 12px; margin-bottom: 16px;">Academic Foundation</h6>
        <h3 style="font-family: 'Playfair Display', serif; font-size: 28px; color: #ededeb; margin-bottom: 28px;">Education</h3>
        
        <div style="border-left: 1px solid rgba(255,255,255,0.1); padding-left: 24px; display: flex; flex-direction: column; gap: 28px;">
          <div>
            <div style="color: #ff5722; font-size: 12px; font-family: 'Geist', monospace; margin-bottom: 4px;">2023 — 2026</div>
            <div style="color: #ededeb; font-size: 16px; font-weight: 500;">B.E. in Artificial Intelligence & Machine Learning</div>
            <div style="color: #8a8a88; font-size: 13px; margin-top: 2px;">Yenepoya Institute of Technology, Mangalore (VTU)</div>
            <div style="color: #ededeb; font-size: 12px; margin-top: 4px; font-family: 'Geist', monospace;">CGPA: 8.66</div>
          </div>

          <div>
            <div style="color: #8a8a88; font-size: 12px; font-family: 'Geist', monospace; margin-bottom: 4px;">Completed 2022</div>
            <div style="color: #ededeb; font-size: 16px; font-weight: 500;">Higher Secondary (Class 12)</div>
            <div style="color: #8a8a88; font-size: 13px; margin-top: 2px;">SSMVHSS, Kerala</div>
            <div style="color: #ededeb; font-size: 12px; margin-top: 4px; font-family: 'Geist', monospace;">Score: 92%</div>
          </div>

          <div>
            <div style="color: #8a8a88; font-size: 12px; font-family: 'Geist', monospace; margin-bottom: 4px;">Completed 2020</div>
            <div style="color: #ededeb; font-size: 16px; font-weight: 500;">Secondary School (Class 10)</div>
            <div style="color: #8a8a88; font-size: 13px; margin-top: 2px;">National Huda Central School, Kerala</div>
            <div style="color: #ededeb; font-size: 12px; margin-top: 4px; font-family: 'Geist', monospace;">Score: 86%</div>
          </div>
        </div>
      </div>

      <!-- Certifications & Hackathons -->
      <div>
        <h6 style="color: #8a8a88; font-family: 'Geist', sans-serif; text-transform: uppercase; letter-spacing: 0.15em; font-size: 12px; margin-bottom: 16px;">Credentials & Leadership</h6>
        <h3 style="font-family: 'Playfair Display', serif; font-size: 28px; color: #ededeb; margin-bottom: 28px;">Certifications & Hackathons</h3>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          
          <div style="padding: 16px 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <span style="color: #ededeb; font-size: 14.5px; font-weight: 500;">Data Analytics Job Simulation</span>
              <span style="color: #ff5722; font-size: 11px; font-family: 'Geist', monospace;">Deloitte Australia · Forage</span>
            </div>
          </div>

          <div style="padding: 16px 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <span style="color: #ededeb; font-size: 14.5px; font-weight: 500;">Rapid Development for AI Services</span>
              <span style="color: #ff5722; font-size: 11px; font-family: 'Geist', monospace;">IBM Developer Skills Network</span>
            </div>
          </div>

          <div style="padding: 16px 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <span style="color: #ededeb; font-size: 14.5px; font-weight: 500;">R for Data Science</span>
              <span style="color: #ff5722; font-size: 11px; font-family: 'Geist', monospace;">IBM</span>
            </div>
          </div>

          <div style="padding: 20px; background: rgba(255,87,34,0.04); border: 1px solid rgba(255,87,34,0.2); border-radius: 8px; margin-top: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
              <span style="color: #ededeb; font-size: 15px; font-weight: 600;">Core Organizer · Matrix Fusion 4.0</span>
              <span style="color: #ff5722; font-size: 11px; font-family: 'Geist', monospace;">April 2026</span>
            </div>
            <p style="color: #8a8a88; font-size: 13px; line-height: 1.5; margin: 0;">
              Served as core organizer for a 24-hour National Level AI & Machine Learning Hackathon (Yen Artificia, YIT), managing coordination, logistics, and participants.
            </p>
          </div>

          <div style="padding: 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
              <span style="color: #ededeb; font-size: 15px; font-weight: 600;">Participant · Anveshan 2025 Round 1</span>
              <span style="color: #8a8a88; font-size: 11px; font-family: 'Geist', monospace;">October 2025</span>
            </div>
            <p style="color: #8a8a88; font-size: 13px; line-height: 1.5; margin: 0;">
              IEEE Bangalore Section innovation hackathon, collaborating in a multidisciplinary team solving real-world challenges with AI-driven models.
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>
`;

// Insert right before the contact section
const contactIdx = html.indexOf('<section id="contact"');
if (contactIdx !== -1) {
  html = html.substring(0, contactIdx) + resumeSectionsHtml + html.substring(contactIdx);
}

// Update the full-screen overlay menu to include links to the new sections
html = html.replace(
  /<a data-hover-target="" href="#about" class="menu-link w-inline-block"><h2 class="heading-style-h1">About<\/h2><\/a>/g,
  `<a data-hover-target="" href="#about" class="menu-link w-inline-block"><h2 class="heading-style-h1">About</h2></a>
   <a data-hover-target="" href="#ai-projects" class="menu-link w-inline-block"><h2 class="heading-style-h1">AI Projects</h2></a>
   <a data-hover-target="" href="#expertise-education" class="menu-link w-inline-block"><h2 class="heading-style-h1">Skills & Bio</h2></a>`
);

fs.writeFileSync('public/index.html', html, 'utf8');
fs.writeFileSync('public/tom.html', html, 'utf8');
console.log('Successfully integrated full resume details and dedicated 2 AI project cards with image slots!');

