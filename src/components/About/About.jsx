import React, { useContext } from 'react';
import { Button } from '@adobe/react-spectrum';
import { withPrefix } from 'gatsby';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume, coverLetter } = about;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openStaticFile = (path) => {
    if (path) {
      window.open(withPrefix(`/${path}`), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <Title title="Who am I?" />
        <div className="about-content-wrapper">
          <div className="about-image-section">
            <div className="about-image-container">
              <AboutImg alt="Jamie Delbick" filename={img} />
            </div>
          </div>
          <div className="about-text-section">
            <div className="about-text-content">
              <p className="about-paragraph">{paragraphOne}</p>
              <p className="about-paragraph">{paragraphTwo}</p>
              <p className="about-paragraph">{paragraphThree}</p>
              <div className="about-actions">
                <Button variant="primary" onPress={scrollToProjects} style="fill">
                  View My Work
                </Button>
                <Button variant="primary" onPress={() => openStaticFile(resume)} style="outline">
                  Download Resume
                </Button>
                <Button variant="primary" onPress={() => openStaticFile(coverLetter)} style="outline">
                  Cover Letter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
