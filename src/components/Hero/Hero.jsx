import React, { useContext } from 'react';
import { Button, Heading } from '@adobe/react-spectrum';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { eyebrow, title, subtitle, highlights, primaryCta, secondaryCta } = hero;

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <p className="hero-eyebrow">{eyebrow}</p>
        <Heading level={1} UNSAFE_className="hero-title-text">
          {title}
        </Heading>
        <p className="hero-subtitle">{subtitle}</p>
        <ul className="hero-highlights" aria-label="Areas of focus">
          {highlights?.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className="hero-cta">
          <Button variant="cta" onPress={() => scrollToSection('projects')} style="fill">
            {primaryCta || 'Explore my work'}
          </Button>
          <Button variant="primary" onPress={() => scrollToSection('writing')} style="outline">
            {secondaryCta || 'Read my writing'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
