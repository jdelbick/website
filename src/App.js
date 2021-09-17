import React, { useState } from 'react';

import { Row, Col, Figure, Container } from 'react-bootstrap';

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import Nav from 'react-bootstrap/Figure';

import pic from './images/jamie.jpeg';

const App = () => (
  <Container id="outer">
  <Row>
    <Col id="sidebar">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem >Dashboard</MenuItem>
          <SubMenu title="Components" >
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      </Col>
    <Col id="content">
      <h1 className="header">Jamie Delbick</h1>
      <h2 className="header">Software Engineer</h2>

      <Figure id="jamie-image">
        <Figure.Image
          width={700}
          height={700}
          alt="jamie.jpeg"
          rounded
          src={pic}
        />
        <Figure.Caption>
          Jamie currently works at Adobe.
        </Figure.Caption>
      </Figure>
    </Col>
    </Row>
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