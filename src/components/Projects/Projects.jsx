import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Button, Heading, Flex } from '@adobe/react-spectrum';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const openUrl = (url) => {
    if (url && url !== '#!') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <Title title="Recent Projects and Speaking Engagements" />
        <div className="projects-grid">
          {projects.map((project, index) => {
            const { title, info, info2, url, repo, img, id, buttonName } = project;
            const isEven = index % 2 === 0;

            return (
              <div key={id} className={`project-item ${isEven ? 'project-item--reverse' : ''}`}>
                <div className="project-content">
                  <Fade bottom duration={1000} delay={300} distance="30px">
                    <div className="project-card">
                      <div className="project-text">
                        <Heading level={3} UNSAFE_className="project-title">{title}</Heading>
                        <div className="project-description">
                          <p>{info}</p>
                          {info2 && <p className="project-description-secondary">{info2}</p>}
                        </div>
                        <Flex gap="size-150" wrap justifyContent="center" marginTop="size-300">
                          <Button 
                            variant="accent"
                            onPress={() => openUrl(url)}
                          >
                            {buttonName || 'Learn More'}
                          </Button>
                          {repo && (
                            <Button 
                              variant="secondary"
                              onPress={() => openUrl(repo)}
                            >
                              Source Code
                            </Button>
                          )}
                        </Flex>
                      </div>
                    </div>
                  </Fade>
                </div>
                
                {img && (
                  <div className="project-image">
                    <Fade bottom duration={1000} delay={600} distance="30px">
                      <div className="project-image-wrapper">
                        <div 
                          className={`project-thumbnail ${title.includes('Adobe Summit') ? 'project-thumbnail--centered' : ''}`}
                          onClick={() => openUrl(url)}
                          role="button"
                          tabIndex={0}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              openUrl(url);
                            }
                          }}
                        >
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </div>
                    </Fade>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
