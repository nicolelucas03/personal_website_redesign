import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="main-container">
      <Navbar />

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Nicole</span> — an engineer driven by impact, not just output.
            </h1>
            <div className="buttons">
              <a className="contact-btn" href="#contact">
                <span>Contact Me</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <a 
                href="/LucasN_CV.pdf" 
                download="Nicole_Lucas_Resume.pdf"
                className="resume-btn"
                style={{ textDecoration: 'none' }}
              >
                <span>Resume</span>
                <i className="bi bi-download"></i>
              </a>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/nicolecindylucas" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/nicolelucas03" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://twitter.com/nicoleclucas03" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
          <div className="hero-right">
            {/* Add hero image or illustration here if needed */}
          </div>
        </div>
        <a className="down-arrow" href="#about">
          <i className="bi bi-chevron-down"></i>
        </a>
      </section>

      <section className="about-section" id="about">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-underline"></div>
        </div>
        <p className="fade-in-up" style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
          I’m Nicole, a software engineer who builds with purpose.</p><br></br>
        <p className="fade-in-up" style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
        I believe the best technology doesn't just work; it <i>matters</i>. My work spans full-stack development and data, but the thread running through everything I build is impact: making systems more accessible, communities more connected, and people's lives a little easier.</p><br></br>
        <p className="fade-in-up" style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto" }}>
        I build in civic spaces because that's where technology can do its most meaningful work, and I am just as hungry to bring that same drive to product teams solving problems at scale. I'm not looking for just another engineering role — I'm looking for work that's worth doing.</p>
      
        <div style={{ marginTop: '1.5rem' }}>
          <Link
            to="/my-story"
            className="read-more-btn"
            style={{ textDecoration: 'none' }}
            onClick={() => {
              // Ensure scroll to top on navigation
              setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
            }}
          >
          </Link>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="section-underline"></div>
        </div>

        {/* Software Projects */}
        {/* <h3 className="projects-subheader">Software</h3> */}
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>WaySafe</h3>
              <div className="project-icon">
                <i className="bi bi-shield-check"></i>
              </div>
            </div>
          
            <p>Safety-first navigation app that analyzes crime data to recommend safer routes with time estimates.</p>
            <div className="tech-tags">
              <span>React</span>
              <span>Vite</span>
              <span>Django</span>
              <span>SQLite</span>
              <span>PostgreSQL</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/nicolelucas03/MLH-DigitalOcean-Hackathon" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
              <a href="https://devpost.com/software/waysafe-b7sxwg?ref_content=my-projects-tab&ref_feature=my_projects" className="project-link">
                <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>Spot That Tune</h3>
              <div className="project-icon">
                <i className="bi bi-music-note-beamed"></i>
              </div>
            </div>
            <p>Mobile music trivia app with audio-based challenges, game modes, and competitive leaderboards.</p>
            <div className="tech-tags">
              <span>Swift</span>
              <span>SQLite</span>
              <span>SpotifyAPI</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/nicolelucas03/spot_that_tune" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
              <a href="https://drive.google.com/file/d/18ax8Rok6CtPjgeCkBPcfCT_A-kZkuZrn/view?usp=sharing" className="project-link">
                <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>SmartCart</h3>
              <div className="project-icon">
                <i className="bi bi-basket"></i>
              </div>
            </div>
            <p>AI-powered web app that generates healthier, budget-friendly grocery lists with pricing, health scores, and swap recommendations.</p>
            <div className="tech-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS3</span>
              <span>Python</span>
              <span>Anthropic Claude API</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/nicolelucas03/nutrition_on_a_budget" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
              <a href="https://github.com/nicolelucas03/nutrition_on_a_budget" className="project-link">
                <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Fetchr</h3>
              <div className="project-icon">
                <i className="bi bi-image"></i>
              </div>
            </div>
            <p>A Google Drive-powered image search tool built to help creative teams find the right photo faster.</p>
            <div className="tech-tags">
              <span>Next.js</span>
              <span>Supabase</span>
              <span>Google Drive API</span>
              <span>Claude Vision API</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/nicolelucas03/fetchr" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
              <Link to="/project-log/fetchr" className="project-link">
                <i className="bi bi-journal-text"></i>Project Log
              </Link>
            </div>
          </div>


          <div className="project-card">
            <div className="project-header">
              <h3>Water Utilities Dashboard</h3>
              <div className="project-icon">
                <i className="bi bi-droplet"></i>
              </div>
            </div>
            <p>Data-driven dashboard for analyzing financial, operational, and service performance of African water utilities.</p>
            <div className="tech-tags">
              <span>Python</span>
              <span>Streamlit</span>
              <span>Plotly</span>
              <span>CSS</span>
              <span>GroqAPI</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/nicolelucas03/water_utilities_project_streamlit" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
              <Link to="/project-log/water-utilities-dashboard" className="project-link">
                <i className="bi bi-journal-text"></i>Project Log
              </Link>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Predictive Modeling: Melbourne House</h3>
              <div className="project-icon">
                <i className="bi bi-bar-chart-line"></i>
              </div>
            </div>
            <p>Predicting housing prices using feature engineering, ML models, and rigorous model evaluation.</p>
            <div className="tech-tags">
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Seaborn</span>
              <span>Matplotlib</span>
              <span>Scikit-learn</span>
              <span>Jupyter</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/nicolelucas03/predictive-modeling" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
            </div>
          </div>
          
        </div>

        {/* Data Projects
        <h3 className="projects-subheader">Data</h3>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>Water Utilities Dashboard</h3>
              <div className="project-icon">
                <i className="bi bi-droplet"></i>
              </div>
            </div>
            <p>Data-driven dashboard for analyzing financial, operational, and service performance of African water utilities.</p>
            <div className="tech-tags">
              <span>Python</span>
              <span>Streamlit</span>
              <span>Plotly</span>
              <span>CSS</span>
              <span>GroqAPI</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/nicolelucas03/water_utilities_project_streamlit" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
              <Link to="/project-log/water-utilities-dashboard" className="project-link">
                <i className="bi bi-journal-text"></i>Project Log
              </Link>
            </div>
            
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>Predictive Modeling: Melbourne House</h3>
              <div className="project-icon">
                <i className="bi bi-bar-chart-line"></i>
              </div>
            </div>
            <p>Predicting housing prices using feature engineering, ML models, and rigorous model evaluation.</p>
            <div className="tech-tags">
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Seaborn</span>
              <span>Matplotlib</span>
              <span>Scikit-learn</span>
              <span>Jupyter</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/nicolelucas03/predictive-modeling" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
            </div>
          </div>
          
        </div> */}
{/* 
        <h3 className="projects-subheader">UX Design</h3>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>Soul Sync</h3>
              <div className="project-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
            </div>
          
            <p>Mindfulness app linking users to wellness events with organizer tools and engagement analytics.</p>
            <div className="tech-tags">
              <span>Figma</span>
              <span>Wireframes</span>
              <span>Storyboarding</span>
            </div>
            <div className="project-links">
              <a href="https://drive.google.com/file/d/1ylh747wMu4oN4QoJHhPqF5psW8pKk8DE/view?usp=sharing" className="project-link">
                <i className="bi bi-box-arrow-up-right"></i> Process
              </a>
            </div>
          </div>
        </div> */}
      </section>


      <section className="skills-section" id="skills">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <div className="section-underline"></div>
        </div>
        <p className="skills-desc">A comprehensive overview of my technical skills and the technologies I work with regularly.</p>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-card-header"><i className="bi bi-window"></i> Frontend Development</div>
            <div className="skill-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
              <span>HTML/CSS</span>
              <span>JavaScript</span>
              <span>Swift</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-header"><i className="bi bi-hdd-network"></i> Backend Development</div>
            <div className="skill-tags">
              <span>Java</span>
              <span>Python</span>
              <span>REST APIs</span>
              <span>C++</span>
              <span>AVR Assembly</span>
              <span>Arduino C</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-header"><i className="bi bi-database"></i> Data Tools</div>
            <div className="skill-tags">
              <span>SQL</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Mathplotlib</span>
              <span>Seaborn</span>
              <span>Scikit-learn</span>
              <span>Plotly</span>
              <span>Streamlit</span>
              <span>Tableau</span>
              <span>JASP</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-header"><i className="bi bi-phone"></i> Mobile Development</div>
            <div className="skill-tags">
              <span>Swift</span>
              <span>iOS</span>
              <span>Android</span>
              <span>Expo</span>
              <span>Responsive Design</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-header"><i className="bi bi-git"></i> Version Control</div>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>GitLab</span>
              <span>CI/CD</span>
              <span>Agile</span>
              <span>Scrum</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-header"><i className="bi bi-tools"></i> Tools & Others</div>
            <div className="skill-tags">
              <span>VS Code</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Azure</span>
              <span>Figma</span>
              <span>Unity</span>
              <span>MATLAB</span>
              <span>SolidWorks</span>
            </div>
          </div>
        </div>
      </section>


      <section className="certifications-section" id="certifications">
        <div className="section-header">
          <h2>Certifications</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="certifications-grid">
          <div className="cert-card">
            <div className="cert-badge">
              <i className="bi bi-award"></i>
            </div>
            <div className="cert-title">Applied Data Institute</div>
            <div className="cert-org"><i className="bi bi-link-45deg"></i> EquitechFutures.org</div>
            <div className="cert-year">2025</div>
            <div className="cert-desc">Demonstrated expertise in data science project applications.</div>
            
            <a className="cert-link" href="https://drive.google.com/file/d/1mLSWKVV5PIor9gf_5QN16LHIQ2A36o9c/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <span>View Credential</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="cert-card">
            <div className="cert-badge">
              <i className="bi bi-award"></i>
            </div>
            <div className="cert-title">CodePath Technical Interview Prep</div>
            <div className="cert-org"><i className="bi bi-link-45deg"></i> CodePath.org</div>
            <div className="cert-year">2025</div>
            <div className="cert-desc">Demonstrated expertise in the technical interview process.</div>
            <div className="cert-id">ID: <span>364736</span></div>
            <a className="cert-link" href="https://drive.google.com/file/d/14edQDi7jFvZn3eXODtPcBlS2mBx_VQW6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <span>View Credential</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="cert-card">
            <div className="cert-badge">
              <i className="bi bi-award"></i>
            </div>
            <div className="cert-title">PyLadiesCon</div>
            <div className="cert-org"><i className="bi bi-link-45deg"></i> PyLadiesCon</div>
            <div className="cert-year">2025</div>
            <div className="cert-desc">Attended a virtual conference to explore Python technologies and workshops.</div>
            <a className="cert-link" href="https://drive.google.com/file/d/1cMWfyG51z6xPmFg_M22NOE9I0uq23SDc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <span>View Credential</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="section-underline"></div>
        </div>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        <div className="contact-methods">
          <a href="mailto:nicoleclucas003@gmail.com" className="contact-card">
            <i className="bi bi-envelope"></i>
            <span>Email Me</span>
          </a>
          <a href="https://www.linkedin.com/in/nicolecindylucas" target="_blank" rel="noopener noreferrer" className="contact-card">
            <i className="bi bi-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/nicolelucas03" target="_blank" rel="noopener noreferrer" className="contact-card">
            <i className="bi bi-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Nicole Lucas. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;