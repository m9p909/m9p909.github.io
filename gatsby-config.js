require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Jack Clarke",
  },
  plugins: [`gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `l98ia8ymdt3s`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }, `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,],
};
