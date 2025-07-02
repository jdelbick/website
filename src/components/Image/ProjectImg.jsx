import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const ProjectImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(
                width: 1600
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                quality: 95
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) {
    return <div>Image not found</div>;
  }

  const imageData = getImage(image.node.childImageSharp);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <GatsbyImage 
        image={imageData} 
        alt={alt} 
        style={{ maxWidth: '100%', width: '100%' }}
      />
    </div>
  );
};

ProjectImg.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProjectImg;
