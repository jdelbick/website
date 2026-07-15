const isDevelop = process.argv.some((arg) => arg.includes('develop'));

module.exports = {
  siteMetadata: {
    title: `Jamie Delbick | Staff Software Engineer`,
    description: `Personal website showcasing my work leading teams and building AI-first enterprise products at Adobe`,
    author: `@jamiedelbick`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
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
  pathPrefix: isDevelop ? '' : '/website',
  trailingSlash: `always`,
};
