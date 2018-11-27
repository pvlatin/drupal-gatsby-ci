module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: 'http://35.202.112.195',
  },
  plugins: [
    // in gatsby-config.js
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://35.202.126.177/drupal/',
        apiBase: 'jsonapi',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // SEO config
    // TODO definir con mall plaza y su agencia de medios si sera GA o GTAG
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-129891114-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    // robots.txt
    'gatsby-plugin-robots-txt',
    // Sitemap
    'gatsby-plugin-sitemap',
    // fin SEO

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
