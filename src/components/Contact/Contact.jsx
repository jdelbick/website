import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Flex, Text } from '@adobe/react-spectrum';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, networks } = contact;

  const getButtonText = (name) => {
    const labels = {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      envelope: 'Email'
    };
    return labels[name] || name;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <Title title="Get in Touch" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-card">
            <Text UNSAFE_className="contact-text">{cta}</Text>
            <Flex gap="size-150" wrap justifyContent="center" marginTop="size-300">
              {networks?.map(({ id, name, url }) => (
                <Button
                  key={id}
                  variant="accent"
                  onPress={() => url && window.open(url, '_blank', 'noopener,noreferrer')}
                  UNSAFE_className="contact-button"
                >
                  <i className={`fa fa-${name || 'refresh'}`} />
                  <Text>{getButtonText(name)}</Text>
                </Button>
              ))}
            </Flex>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
