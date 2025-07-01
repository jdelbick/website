import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const AboutImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                quality: 85
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

  return <GatsbyImage image={imageData} alt={alt} />;
};

AboutImg.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AboutImg;
