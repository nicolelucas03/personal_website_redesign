
import React from 'react';

const experiences = [
  {
    title: 'Full Stack Developer & UX Designer',
    company: 'Pocket Triage',
    date: 'Dec 2025 - Present',
    description: 'As a volunteer full-stack developer at Pocket Triage, I help build an open-source platform providing real-time, low-bandwidth first aid and mental health guidance to people in conflict zones and underserved regions.'
  },
  {
    title: 'Applied Data Institute Scholar',
    company: 'Equitech Futures',
    date: 'Aug 2025 - Dec 2025',
    description: 'Selected for a competitive data science fellowship, where I built a Python/Streamlit dashboard to clean, analyze, and visualize incomplete utility data for improved decision-making in infrastructure-constrained environments.'
  },
  {
    title: 'Coding/Robotics Instructor',
    company: 'Classover Inc.',
    date: 'Aug 2025 - Present',
    description: 'As a Coding and Robotics Instructor at Classover Inc., I teach Python and robotics through hands-on projects, helping students build autonomous systems and apply coding to real-world problem-solving.'
  },
  {
    title: 'Data Analyst',
    company: 'InvestSTL',
    date: 'Aug 2025 - Dec 2025',
    description: 'At InvestSTL, I developed a data platform and led UX research to make neighborhood insights more accessible, driving increased adoption among organizations supporting equitable community investment.'
  },
  {
    title: 'Arm Team Member',
    company: 'Washington University Robotics Team',
    date: 'Dec 2022 - May 2023',
    description: 'As part of the Washington University Robotics Team, I built and improved an autonomous robotic arm using computer vision and machine learning to enhance precision and performance.'
  },
  {
    title: 'Calculus 3 Tutor',
    company: 'Engineering Undergraduate Student Services',
    date: 'Aug 2022 - May 2025',
    description: 'As a Calculus III tutor, I supported engineering students through weekly sessions and personalized guidance, helping them build confidence and improve performance in core math concepts.'
  },
  {
    title: 'Digital Ministry Volunteer',
    company: 'Queens Church',
    date: 'Jan 2026 - Present',
    description: 'Maintain and update the church website and edit Instagram content to improve clarity and community engagement.'
  },
  {
    title: 'President ',
    company: 'Society of Hispanic Professional Engineers - WashU Chapter',
    date: 'Jan 2026 - Present',
    description: 'SHPE President responsible for rebuilding the chapter, managing a $17K+ budget, and coordinating national conference participation to support member growth and development.'
  },
  {
    title: 'Student Programming Lead',
    company: 'Center for Diversity & Inclusion',
    date: 'May 2023 - Dec 2024',
    description: 'As Student Programming Lead, I organized WashU’s first LatinX Summit and represented the university at major events to elevate student voices and expand support for underrepresented communities.'
  },
  {
    title: 'Professional Chair Head',
    company: 'Alpha Omega Epsilon Beta Xi',
    date: 'Oct 2022 - May 2023',
    description: 'Led professional development and DEI initiatives for Alpha Omega Epsilon, organizing events and advocating for structural changes to build a more inclusive engineering community.'
  },
  {
    title: 'Member',
    company: 'George and Carol Bauer Leaders Academy',
    date: 'Oct 2022 - May 2023',
    description: 'Member of a selective leadership development cohort, participating in workshops and one-on-one coaching to strengthen self-awareness, goal-setting, and interpersonal effectiveness.'
  },
];

function ExperienceCard({ title, company, date, description }) {
  return (
    <div className="experience-card">
      <div className="experience-content">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <span className="experience-date">{date}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}


const featuredCards = [
  {
    image: 'images/linkedin_nicole_feature.png',
    alt: 'LinkedIn Post Screenshot',
    caption: 'Faces of WashU: Nicole Lucas featured by Washington University in St. Louis',
    link: 'https://www.linkedin.com/posts/washington-university-in-st-louis_facesofwashu-washu25-activity-7154208902417399808-6Xu0?utm_source=share&utm_medium=member_desktop&rcm=ACoAADchC1YBaXCQAgzsespVqKlfuPt5WdFLgJw',
    linkText: 'View on LinkedIn',
  },
  {
    image: 'images/shpe_comeback_screenshot.png',
    alt: 'Washu Screenshot',
    caption: 'SHPE revitalized after pandemic',
    link: 'https://engineering.washu.edu/news/2023/After-tough-pandemic-years-SHPE-makes-a-comeback.html',
    linkText: 'Read More',
  },
];

function FeaturedCard({ image, alt, caption, link, linkText }) {
  return (
    <div className="featured-image-card">
      <img src={image} alt={alt} />
      <div className="featured-caption">{caption}</div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="featured-link-btn"
      >
        {linkText}
      </a>
    </div>
  );
}

function MyStory() {
  return (
    <div className="my-story-container">
      <h1>My Story</h1>
      <div className="my-story-intro">
        <img
          src="/images/Nicole_Lucas.jpg"
          alt="Nicole Lucas"
          className="my-story-profile"
        />
        <div>
          <p>
            Hi! I’m Nicole Lucas, a passionate developer and lifelong learner. I love building impactful projects, collaborating with diverse teams, and exploring new technologies. <br />
          </p>
        </div>
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2 className="section-header">Featured</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {featuredCards.map((card, idx) => (
            <FeaturedCard key={idx} {...card} />
          ))}
        </div>
      </div>

      <h2 className="section-header">Experience Highlights</h2>
      <div className="experience-grid">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
}

export default MyStory;
