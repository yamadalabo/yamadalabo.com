module.exports = {
  siteMetadata: {
    title: `yamadalabo.com`,
    description: `時の洗礼に耐える　知的誠実さを探す　経営をめぐる言葉の道場`,
    author: `Yamada JIN-ICHIRO`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/js/pages`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
