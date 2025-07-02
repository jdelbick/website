import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from '@adobe/react-spectrum';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const FADE_DELAY = 600;

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree } = about;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <Title title="Who am I?" />
        <div className="about-content-wrapper">
          <div className="about-image-section">
            <Fade bottom duration={1000} delay={FADE_DELAY} distance="30px">
              <div className="about-image-container">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </div>
          <div className="about-text-section">
            <Fade bottom duration={1000} delay={FADE_DELAY} distance="30px">
              <div className="about-text-content">
                <p className="about-paragraph">{paragraphOne}</p>
                <p className="about-paragraph">{paragraphTwo}</p>
                <p className="about-paragraph">{paragraphThree}</p>
                <div className="about-actions">
                  <Button 
                    variant="primary"
                    onPress={scrollToProjects}
                    style="fill"
                  >
                    View My Work
                  </Button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
