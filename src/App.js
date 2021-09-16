import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import pic from './images/jamie.jpeg';

const App = () => (
  <Container className="p-3" fluid>
      <h1 className="header">Jamie Delbick</h1>
      <h2 className="header">Software Engineer</h2>

      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          rounded
          src={pic}
        />
        <Figure.Caption>
          Jamie currently works at Adobe.
        </Figure.Caption>
      </Figure>
      <hr />
      <p>
        You can check further in information on the official Bootstrap docs{' '}
        <a
          href="https://getbootstrap.com/docs/4.3/getting-started/theming/#importing"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
  </Container>
);

export default App;