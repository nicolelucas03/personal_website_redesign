import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';

function WaterUtilitiesProjectLog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container">
      <Navbar />
      <div className="project-log-container" style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '2rem', lineHeight: '1.9' }}>
      <div className="section-header">
        <h2>Building a Water Services Analytics Platform for Sub-Saharan Africa</h2>
        <div className="section-underline"></div>
      </div>
      <div className="project-log-content">
        <style>{`
          .project-log-content h3 {
            margin-top: 2.5em;
          }
        `}</style>
        <h3 className ="log-headers">Where It Started</h3>
        <p>
          This project was my Capstone for <a href="https://www.equitechfutures.com/" target="_blank" rel="noopener noreferrer">Equitech Futures' Applied Data Institute</a>, a fellowship for recent grads looking to break into data science and engineering for civic tech. From day one, I was excited about working with an interdisciplinary team.  It meant we could actually leverage each other's strengths instead of everyone doing the same thing. My teammates came from public policy, math, and computer science backgrounds, and that diversity pushed us to think bigger and move smarter.
        </p>
        <h3 className ="log-headers">Our Goal</h3>
          <p>
            Over ten weeks, I worked alongside my team, <a href="https://www.athenainfonomics.com/" target="_blank" rel="noopener noreferrer">Athena Infonomics</a>, and water utilities in Malawi, Cameroon, Uganda, and Lesotho. The mission: help these utilities use their own operational data to manage water services more effectively.
            </p>
            <p>
            In practice, that meant taking messy, unstandardized utility data and turning it into a usable analytics foundation. Next, building prototype dashboards that could surface real issues like non-revenue water loss, billing gaps, and service quality degradation in a way that decision-makers could actually act on. Think of it as going from raw, scattered spreadsheets to a structured data pipeline with stakeholder-ready insights on the other end.
            </p>

        <h3 className ="log-headers">Weeks 1–3: The Nitty Gritty</h3>
        <p>
          The first three weeks ended up being the most foundational part of the entire project — even if that wasn't obvious at the time.
        </p>
        <p>
            Week 1 was almost entirely exploratory. We did a deep dive into the data, read through the <a href="https://wasreb.go.ke/" target="_blank" rel="noopener noreferrer">WASREB Impact Report</a> (Water Services Regulatory Board) to understand the real-world stakes, and started asking: what do these numbers actually mean? For me, this was genuinely new territory. I had never worked with public sector data before, and water services has its own vocabulary that takes time to absorb.
        </p>
        <p> 
            This phase was a lot of identifying knowledge gaps, building domain context, and doing that less glamorous but absolutely critical work: stakeholder alignment. We mapped out preliminary KPIs, synced with our partners at Athena Infonomics for feedback, and collaboratively refined our data dictionary — essentially the shared vocabulary that would anchor every decision downstream. Good data work starts with everyone agreeing on what the data means, and we learned that early.
        </p>

        <h3 className ="log-headers">Weeks 4–6: Cooking It Up</h3>
        <p>
          Honestly, these were my favorite three weeks of the fellowship.
        </p>
        <p>
            We kicked things off with user research – building user personas, storyboarding workflows, and sketching dashboard mockups. It's easy to skip this step and jump straight to building, but starting from the user's perspective completely changed how we thought about what to surface and how.
        </p>
        <p> 
            From there, we moved into schema design. We took all the variables from our data dictionary and organized them into four logical data domains: production, billing/finance, service, and access. This wasn't just categorization for its own sake. Grouping data by domain helps enforce consistency, makes documentation cleaner, and sets you up for more meaningful joins later. We built out schema decision trees to guide which metrics belonged where, ran consistency checks, standardized formats across sources, and finally landed on a clean, well-documented dataset that was ready to query.
        </p>
        <p>
            One mindset shift that stuck with me from this phase:
            <p><center><strong>A dashboard is not a chart gallery. Insights = questions + evidence.</strong></center></p>
        </p>
        <p>
            Instead of jumping straight into code, we started by writing down the questions our stakeholders actually needed answered. The visualizations came after — built to serve those questions, not the other way around.
        </p>
        
        <h3 className ="log-headers">Weeks 7–10: Bringing It to Life</h3>
        <p>
          The final stretch was a lot of moving parts happening simultaneously. We were iterating on the dashboard, hunting down data outliers, incorporating an updated dataset from Athena, and translating our technical analysis into operational language tailored to what each stakeholder actually cared about.
        </p>
        <p>
          A big part of this phase was also data quality work – identifying failures in the data-generating process at the source and proposing practical, low-disruption improvements. When you're working with utilities that have limited technical capacity, recommendations have to be realistic.  
        </p>
        <p>
          On the build side, we divided responsibilities by skillset. As the CS grad with an HCI specialization on the team, I took on the foundational UI layer: setting up Streamlit, establishing the overall project structure, and designing the dashboard layout with user journey in mind. I also implemented role-based authentication, setting up separate permission levels for admin users and utility managers, and built out the billing data visualizations. My teammate Rustom tackled the AI chat component, which lets users query insights and ask questions about the data in natural language — a genuinely cool feature. We split the domain/tab visualizations evenly and kept close feedback loops to make sure the UI felt cohesive across the board.
        </p>
        <img 
          src="/images/water_utilities.png" 
          alt="water-utilities-dashboard" 
          style={{ display: "block", maxWidth: "900px", width: "100%", margin: "0 auto" }} 
        />
        <h3 className ="log-headers">What I Learned</h3>
        <p>Data has the power to tell real stories and drive real decisions — but only if it's built for the people using it. As data practitioners, we're not just writing pipelines and making charts. We're acting as translators, facilitators, designers, and stewards of information.</p>
        <p>Grounding our work in user stories, speaking in plain language with stakeholders, and keeping the "so what?" question front and center helped me bridge the gap between technical analysis and practical decision-making for non-technical users. The most elegant ETL pipeline in the world doesn't matter if nobody can interpret the output.
          <p><center><strong>Good visualization is not decoration. It is communication.</strong></center></p>
        </p>

        <h3 className ="log-headers">What's Next</h3>
        <p>This fellowship solidified something I'd been moving toward for a while: I want to work at the intersection of civic tech, policy, and data. I come in with a software development foundation and now a real project under my belt in data engineering and analytics. I'm looking to channel both into roles where the work actually moves the needle for communities and organizations.</p>

        <p>If you're a recent grad interested in civic tech or policy innovation, I genuinely can't recommend Equitech Futures enough — <a href="https://www.equitechfutures.com/" target="_blank" rel="noopener noreferrer">check them out and consider applying</a>.</p>

        <p>Special thanks to my team - Nyasha, Rustom, and Adriana. And a huge thank you to our Capstone leader and mentor Linda Kinning for her guidance throughout. This project wouldn't have been the same without her.</p>

      </div>
      </div>
    </div>
  );
}

export default WaterUtilitiesProjectLog;
