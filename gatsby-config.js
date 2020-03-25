module.exports = {
  siteMetadata: {
    title: `Platzi Master`,
    author: {
      name: `Platzi Master`,
      summary: `Conocimiento colectivo.`,
    },
    description: `Conocimiento colectivo.`,
    siteUrl: `https://platzimaster.github.io/`,
    social: {
      twitter: `platzi`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Platzi Master Blog`,
        short_name: `Blog`,
        description: 'Blog posts by Platzi Master students',
        start_url: `/`,
        background_color: `#f1f1f1`,
        theme_color: `#8DA54C`,
        display: `standalone`,
        orientation: 'any',
        icon: `assets/platzimaster-icon.png`,
        cache_busting_mode: 'none'
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [`/content/*`],
        workboxConfig: {
          globPatterns: ['**/*']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
