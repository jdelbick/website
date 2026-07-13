import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

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
          <h1 className="hero-title-text">
            Sorry, this path does not exist{' '}
            <span role="img" aria-label="emoji">
              😞
            </span>
          </h1>
          <div className="hero-cta">
            <Link className="cta-btn cta-btn--hero" to="/">
              Go back
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
