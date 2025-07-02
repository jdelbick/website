import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Heading } from '@adobe/react-spectrum';
import PortfolioContext from '../../context/context';
import Typing from 'react-typing-animation';

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
            <Typing.Delay ms={1000} />
            <br/>
            Software Engineer at Adobe.
          </Heading>
        </Typing>
        <Fade bottom duration={1000} delay={1000} distance="30px">
          <div className="hero-cta">
            <Button 
              variant="accent"
              onPress={scrollToAbout}
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
