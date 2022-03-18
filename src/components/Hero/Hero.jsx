import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Typing from 'react-typing-animation';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
      <Typing className="hero-title">
      <h1 className="hero-title">
      Hello, I am Jamie Delbick,
      <Typing.Delay ms={1000} />
      <br/>
      Software Engineer.
       </h1>
    </Typing>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Find out more'}
              </Link>
            </span>
          </p>
        </Fade>
        {/* TODO: make this link in bottom right corner but only in header */}
        {/* <div className='background-cta' >
          <a href="https://unsplash.com/@vardhan20?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ayyappa Vardhan</a>
           on <a href="https://unsplash.com/s/photos/snow-mountain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div> */}
      </Container>
    </section>
  );
};

export default Header;
