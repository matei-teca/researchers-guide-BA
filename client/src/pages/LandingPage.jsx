import React from 'react';
import './styles/LandingPage.css';

const LandingPage = () => {
  return (
    <main className="landing-page">
      <h2>Welcome to the Researcher's Guide</h2>
      <p>Your one-stop resource for finding top journals, free research papers, and tips for credible studies.</p>
      <section className="featured-resources">
        <h3>Featured Resources</h3>
        <ul>
          <li>
            <a href="https://wos-journal.info/blog/the-top-20-highest-impact-factor-journals-according-to-the-journal-citation-reports-jcr-2022-published-by-clarivate-analytics-in-2023/" target="_blank" rel="noopener noreferrer">
              Top Journals by Impact Factor
            </a>
          </li>
          <li>
            <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
              Google Scholar: Free Access
            </a>
          </li>
          <li>
            <a href="https://www.apa.org/pubs/journals/resources/impact-factors" target="_blank" rel="noopener noreferrer">
              Psychology Journals (APA)
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default LandingPage;
