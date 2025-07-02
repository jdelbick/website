import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

import { headData } from '../mock/data';
import '../style/main.scss';

const NotFoundPage = () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title-text">
              Sorry, this path does not exist{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <div className="hero-cta">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
