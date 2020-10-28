module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // Specify the URL of the WordPress source
        baseUrl: `parul.101artwork.com`,
        protocol: `http`,
        // Indicates if a site is hosted on WordPress.com
        hostingWPCOM: false,
        // Specify which URL structures to fetch
        includedRoutes: [
          '**/posts',
          '**/tags',
          '**/categories'
        ]
    },
    },
  ],
};
