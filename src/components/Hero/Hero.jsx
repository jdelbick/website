import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Heading } from '@adobe/react-spectrum';
import PortfolioContext from '../../context/context';
import Typing from 'react-typing-animation';

const FADE_DELAY = 600;

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { cta } = hero;

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <Typing className="hero-title">
          <Heading level={1} UNSAFE_className="hero-title-text">
            Hello, I am Jamie Delbick,
            <Typing.Delay ms={600} />
            <br/>
            Software Engineer at Adobe.
          </Heading>
        </Typing>
        <Fade bottom duration={1000} delay={FADE_DELAY} distance="30px">
          <div className="hero-cta">
            <Button 
              variant="primary"
              onPress={scrollToAbout}
              style="fill"
            >
              {cta || 'Learn more'}
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Header;
