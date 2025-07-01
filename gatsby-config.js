module.exports = {
  siteMetadata: {
    title: `Jamie Delbick | Software Engineer`,
    description: `Personal website showcasing my work as a Software Engineer at Adobe`,
    author: `@jamiedelbick`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
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
        name: `Jamie Delbick Personal Website`,
        short_name: `Jamie Delbick`,
        start_url: `/`,
        background_color: `#1E1E1E`,
        theme_color: `#378EF0`,
        display: `standalone`,
        icon: 'src/images/favicon-jamie.png',
        cache_busting_mode: 'none',
      },
    },
  ],
  pathPrefix: "/website",
  trailingSlash: `always`,
};
