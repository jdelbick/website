import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@adobe/react-spectrum';

const Title = ({ title }) => (
  <Heading level={2} UNSAFE_className="section-title">
    {title}
  </Heading>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
