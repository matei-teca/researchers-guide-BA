import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Researcher's Guide</p>
      <p>
        <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="footer-link">Google Scholar</a> | 
        <a href="https://www.nature.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Nature</a> | 
        <a href="https://www.apa.org/pubs/journals/resources/impact-factors" target="_blank" rel="noopener noreferrer" className="footer-link">APA Journals</a>
      </p>
    </footer>
  );
};

export default Footer;
