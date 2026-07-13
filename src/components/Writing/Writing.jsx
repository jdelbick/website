import React, { useContext } from 'react';
import { Button, Heading } from '@adobe/react-spectrum';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Writing = () => {
  const { writing } = useContext(PortfolioContext);

  const openUrl = (url) => {
    if (url && url !== '#!') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="writing" className="writing-section">
      <div className="writing-container">
        <Title title="Published Writing" />
        <div className="writing-grid">
          {writing.map(({ id, title, type, info, url }) => (
            <article key={id} className="writing-card">
              {type && <p className="writing-type">{type}</p>}
              <Heading level={3} UNSAFE_className="writing-title">
                {title}
              </Heading>
              <p className="writing-description">{info}</p>
              <Button variant="primary" style="fill" onPress={() => openUrl(url)}>
                Read article
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
