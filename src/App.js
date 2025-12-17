import React, { useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        navbarRef.current.classList.add('visible');
      } else {
        navbarRef.current.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-container">
      <nav className="navbar" ref={navbarRef}>
        <div className="logo">Nicole Lucas</div>
        <ul className="nav-links">
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('certifications')}>Certifications</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Nicole</span>, a Software Developer based in New York City.
            </h1>
            <div className="buttons">
              <button className="contact-btn" onClick={() => scrollToSection('contact')}>
                <span>Contact Me</span>
                <i className="bi bi-arrow-right"></i>
              </button>
              <a 
                href="/resume.pdf" 
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
            <div className="image-overlay"></div>
          </div>
        </div>
        <div className="down-arrow" onClick={() => scrollToSection('about')}>
          <i className="bi bi-chevron-down"></i>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-underline"></div>
        </div>
        <p className="fade-in-up">
          I'm a passionate software developer based in New York City with a love for creating innovative solutions and beautiful user experiences. My journey in tech has been driven by curiosity and a desire to solve real-world problems through code.
        </p>
        <p className="fade-in-up">
          With expertise in full-stack development, I specialize in building scalable web applications using modern technologies. I'm constantly learning and adapting to new frameworks and tools to stay at the forefront of the industry.
        </p>
        <p className="fade-in-up">
          When I'm not coding, you can find me exploring NYC's vibrant tech scene, contributing to open-source projects, or sharing knowledge with fellow developers.
        </p>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="section-underline"></div>
        </div>
        <p>
          Here are some of my recent projects showcasing my skills in full-stack development, UI/UX design, and problem-solving.
        </p>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>WaySafe</h3>
              <div className="project-icon">
                <i className="bi bi-shield-check"></i>
              </div>
            </div>
            <p>A navigation tool that provides safety alongside travel time. It analyzes historical crime data and user preferences to rank the top route options, providing safety scores, estimated travel times, and clear explanations for each recommendation.</p>
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
            <p>Mobile app that challenges users to test their music knowledge by identifying songs or artists from short audio clips. It features multiple game modes, genre selection, user authentication, and a competitive leaderboard.</p>
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
              <h3>Water Utilities Dashboard</h3>
              <div className="project-icon">
                <i className="bi bi-droplet"></i>
              </div>
            </div>
            <p>An interactive analytics platform that visualizes financial, operational, and service performance of water utilities across multiple African countries, enabling data-driven decision-making.</p>
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
              <a href="https://water-utilities-dashboard.streamlit.app/" className="project-link">
                <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>Game Boards and Pieces</h3>
              <div className="project-icon">
                <i className="bi bi-grid-3x3"></i>
              </div>
            </div>
            <p>A modular C++ board game parser and console renderer that reads formatted text files to dynamically generate game boards. The project emphasizes robust file parsing, stuctured data representation using structs and vectors, and clean error-resistant code architecture.</p>
            <div className="tech-tags">
              <span>C++</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/nicolelucas03/gameboards-and-pieces" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
              <a href="/" className="project-link">
                <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>Soul Sync</h3>
              <div className="project-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
            </div>
            <p>A dual-interface mindfulness app designed in Figma that connects users with personalized wellness events while providing organizers tools to manage events, track engagement, and improve retention through analytics.</p>
            <div className="tech-tags">
              <span>Figma</span>
              <span>Wireframes</span>
              <span>Storyboarding</span>
            </div>
            <div className="project-links">
              <a href="/" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
              <a href="/" className="project-link">
                <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-header">
              <h3>Pocket Triage</h3>
              <div className="project-icon">
                <i className="bi bi-heart"></i>
              </div>
            </div>
            <p>A mobile app providing fast, evidence-based first aid and mental wellness guidance for people in conflict zones and remote areas, with multilingual support and text, voice, and image input.</p>
            <div className="tech-tags">
              <span>Figma</span>
            </div>
            <div className="project-links">
              <a href="/" className="project-link">
                <i className="bi bi-github"></i> Code
              </a>
              <a href="/" className="project-link">
                <i className="bi bi-box-arrow-up-right"></i> Live Demo
              </a>
            </div>
          </div>
        </div>
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
              <span>Cross-platform</span>
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
              <span>Figma</span>
              <span>VSCode</span>
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
        <p className="certifications-desc">Professional certifications demonstrating my commitment to continuous learning and expertise in various technologies.</p>
        <div className="certifications-grid">
          <div className="cert-card">
            <div className="cert-badge">
              <i className="bi bi-award"></i>
            </div>
            <div className="cert-title">Applied Data Institute</div>
            <div className="cert-org"><i className="bi bi-link-45deg"></i> EquitechFutures.org</div>
            <div className="cert-year">2025</div>
            <div className="cert-desc">Certified in Scrum framework and agile project management methodologies.</div>
            <div className="cert-id">ID: <span>PSM-2023</span></div>
            <a className="cert-link" href="/">
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