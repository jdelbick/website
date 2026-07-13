import React, { useContext } from 'react';
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
            const { title, type, info, info2, url, repo, img, id, buttonName } = project;
            const isEven = index % 2 === 0;

            return (
              <article
                key={id}
                className={`project-item ${isEven ? 'project-item--reverse' : ''} ${
                  !img ? 'project-item--text-only' : ''
                }`}
              >
                <div className="project-content">
                  <div className="project-card">
                    <div className="project-text">
                      {type && <p className="project-type">{type}</p>}
                      <Heading level={3} UNSAFE_className="project-title">
                        {title}
                      </Heading>
                      <div className="project-description">
                        <p>{info}</p>
                        {info2 && <p className="project-description-secondary">{info2}</p>}
                      </div>
                      <Flex gap="size-150" wrap justifyContent="start" marginTop="size-300">
                        <Button variant="primary" style="fill" onPress={() => openUrl(url)}>
                          {buttonName || 'Learn More'}
                        </Button>
                        {repo && (
                          <Button variant="primary" style="outline" onPress={() => openUrl(repo)}>
                            Source Code
                          </Button>
                        )}
                      </Flex>
                    </div>
                  </div>
                </div>

                {img && (
                  <div className="project-image">
                    <div className="project-image-wrapper">
                      <button
                        type="button"
                        className={`project-thumbnail ${
                          title.includes('Adobe Summit') ? 'project-thumbnail--centered' : ''
                        }`}
                        onClick={() => openUrl(url)}
                      >
                        <ProjectImg alt={title} filename={img} />
                      </button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
