import React, { useRef, useEffect } from 'react';
import './App.css';

function Navbar() {
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

  // For project log pages, scrollToSection may not work, so use navigation if needed
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // fallback: navigate to home and scroll
      window.location.href = '/#' + sectionId;
    }
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="logo" onClick={() => (window.location.href = '/')}>Nicole Lucas</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('certifications')}>Certifications</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;