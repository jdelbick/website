import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const AboutImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(
                width: 720
                height: 960
                placeholder: NONE
                formats: [AUTO, WEBP]
                quality: 95
                transformOptions: { fit: COVER, cropFocus: CENTER }
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

  return <GatsbyImage image={imageData} alt={alt} loading="eager" />;
};

AboutImg.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default AboutImg;
