module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jamie Delbick`,
        short_name: `Jamie`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#67B26F`,
        display: `standalone`,
        icon: 'src/images/favicon-jamie.png',
      },
    },
    `gatsby-plugin-offline`,
  ],
  pathPrefix: "/website",
};
