module.exports = {
  siteMetadata: {
    siteUrl: "https://crypton.com.ua",
    title: `Криптон оборудование для телевизионного вещания`,
    description: `Криптон разрабатывает и производит оборудование для кабельного, эфирного и IPTV телевизионного вещания`,
    url: 'http://crypton.com.ua',
    author: 'ООО Криптон Лтд.',
    intro: 'Company Crypton founder',
    menuLinks:[
      {
        name:'Главная',
        slug:'/'
      },
      {
        name:'Оборудоваание',
        slug:'/products'
      },
      {
        name:'IPTV',
        slug:'/iptv'
      },
      {
        name:'Решения',
        slug:'/solutions'
      },
      {
        name:'Сервис',
        slug:'/services'
      },
      {
        name:'Контакты',
        slug:'/contacts'
      },
    ],

    productLinks: [
        {
      slug: '/p_receivers',
      name: 'Профессиональные ресиверы',
        },
        {
        slug: '/multiplexors',
        name: 'Мультиплексоры DVB',
        },
        {
        slug: '/modulators',
        name: 'Модуляторы',
        },
        {
        slug: '/cod882asi',
        name: 'Энкодеры MPEG-2',
        },
        {
        slug: '/cas_crypton',
        name: 'Система условного доступа Crypton',
        },
        {
        slug: '/scramblers',
        name: 'Скремблеры',
        },
        {
        slug: '/biss',
        name: 'BISS CA-модуль',
        },
        {
        slug: '/power-combiners',
        name: 'Сумматоры мощности',
        },
    ],
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `source`,
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Оборудование для телевидения Crypton`,
        short_name: `Crypton`,
        description: `Оборудование для организации кабельного, эфирного, спутникового телевидения и IPTV вещания производства фирмы Криптон`,
        start_url: `/`,
        icon: 'src/images/crypton_logo.png',
        lang: 'ru',
       },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://crypton.com.ua',
        policy: [
          { userAgent: '*', allow: ['/'] }
        ]
      },
        sitemap: 'https://crypton.com.ua/sitemap.xml',
        // policy: [{ userAgent: '*', allow: '/' }]
    },
    {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      output: `/sitemap.xml`,
      // Exclude specific pages or groups of pages using glob parameters
      // See: https://github.com/isaacs/minimatch
      // The example below will exclude the single `path/to/page` and all routes beginning with `category`
      exclude: [`/news/*`],
      query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage(filter: {pluginCreator: {name: {eq: "gatsby-plugin-page-creator"}}}) {
            nodes {
              path
            }
          }

      }`,
      resolveSiteUrl: ({site, allSitePage}) => {
        //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
        return site.siteMetadata.siteUrl
      },
      serialize: ({ site, allSitePage }) =>
        allSitePage.nodes.map(node => {
          return {
            url: `${site.siteMetadata.siteUrl}${node.path}`,
            changefreq: `daily`,
            priority: 0.7,
          }
        })
    },
  },
  {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163462100-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,

      },
    },
    // `gatsby-plugin-remove-trailing-slashes`,
  //   {
  //   resolve: `gatsby-plugin-sitemap`,
  //   options: {
  //     output: `/some-other-sitemap.xml`,
  //     // Exclude specific pages or groups of pages using glob parameters
  //     // See: https://github.com/isaacs/minimatch
  //     // The example below will exclude the single `path/to/page` and all routes beginning with `category`
  //     exclude: [`/category/*`, `/path/to/page`],
  //     query: `
  //       {
  //         wp {
  //           generalSettings {
  //             siteUrl
  //           }
  //         }
  //
  //         allSitePage {
  //           nodes {
  //             path
  //           }
  //         }
  //     }`,
  //     resolveSiteUrl: ({site, allSitePage}) => {
  //       //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
  //       return site.wp.generalSettings.siteUrl
  //     },
  //     serialize: ({ site, allSitePage }) =>
  //       allSitePage.nodes.map(node => {
  //         return {
  //           url: `${site.wp.generalSettings.siteUrl}${node.path}`,
  //           changefreq: `daily`,
  //           priority: 0.7,
  //         }
  //       })
  //   }
  // }

    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-remove-fingerprints`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
 }
