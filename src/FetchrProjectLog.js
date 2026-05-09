import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';

function FetchrProjectLog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-container">
      <Navbar />
        <div className="project-log-container" style={{ maxWidth: '900px', margin: '2.5rem auto', padding: '2rem', lineHeight: '1.9' }}>
          <div className="section-header">
            <h2>Fetchr — An Image Search Tool for My Church's Creative Team </h2>
            <div className="section-underline"></div>
          </div>
          <div className="project-log-content">
            <style>{`
              .project-log-content h3 {
                margin-top: 2.5em;
              }
            `}</style>
            <h3 className ="log-headers">Where It Started</h3>
            <p>For those who don't know, I volunteer on my local church's Creative Team as part of our digital ministry. That means maintaining and updating our church website, and designing posts for our Instagram. Our team is split into roles — photographer, graphic designer, software engineers, and social media managers — and everyone has their lane.</p>

            <p>Mine became very clear on my first week helping with Instagram content.</p>

            <p>Every time I sat down to design a post, I found myself spending more time searching than actually creating — endlessly clicking through nested Google Drive folders hunting for the “right” photo. The designing part, the part I actually love, kept getting pushed back. That friction was the spark.</p>

            <h3 className ="log-headers">The Mission</h3>
              <p>I wanted to build a web app that plugs directly into our team's existing workflow. Since we already store all our photos, videos, and media on Google Drive, the natural move was to leverage the Google Drive API to make that content actually searchable and filterable.</p>
              <p>The goal: bridge the gap between our photographers (who capture and upload the content) and our social media managers and designers (who need to find and use it quickly). Instead of everyone digging through the same folder structure with no system, this tool would let you search for exactly what you need — by subject, theme, or context — and surface relevant images in seconds.</p>

            <h3>The Process</h3>
            <p>The core of the app is a Google Drive API integration that indexes our team's media library and makes it queryable. Rather than manually tagging every photo (not realistic for a volunteer team), I explored using metadata and image content to make search smarter with less overhead. The tech stack is still being finalized, but the focus is on keeping it lightweight and easy for non-technical teammates to actually use.</p>

            <p>The project is still a work in progress, and I'm looking forward to eventually rolling it out to the team.</p>
          
            <h3 className ="log-headers">Lead With Passion</h3>
            <p>This is honestly one of my favorite projects I've worked on — not because it's the most complex, but because it's mine in a real way. I used to stress about coming up with "impressive" project ideas, but this one reminded me that the best ideas come from real problems. I found a pain point on a regular Tuesday night, and I had the skillset to do something about it.</p>
            
            <p>That's the thing about passion projects: the motivation doesn't run out because the problem is real.</p>
            
            <h3 className ="log-headers">Quick Shoutout</h3>
            <p>If you're a Christian living in NYC and looking for a church home, I'd love for you to check out <a href="https://www.qns.church/" target="_blank" rel="noopener noreferrer">Queens Church</a>.</p>
          </div>
        </div>
      </div>
  );
}

export default FetchrProjectLog;
