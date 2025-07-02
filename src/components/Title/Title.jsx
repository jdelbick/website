import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { Heading } from '@adobe/react-spectrum';

const FADE_DELAY = 300;

const Title = ({ title }) => (
  <Fade bottom duration={1000} delay={FADE_DELAY} distance="0px">
    <Heading level={2} UNSAFE_className="section-title">{title}</Heading>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
